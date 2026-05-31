import { useEffect, useState } from "react";
import "./UsersPage.css";
import { fetchAllUsersApi } from "./apis/usersApi";
import { useNavigate, redirect } from "react-router-dom";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Guest User");
  const [userEmail, setUserEmail] = useState("guest@example.com");
  const [role, setRole] = useState("user");
  const [userPicture, setUserPicture] = useState("");

  const logoutUser = (userId) => {
    alert(`Logging out user with ID: ${userId}`);
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isLoggedIn: false } : user,
      ),
    );
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      const users = await fetchAllUsersApi();
      if (users.error) {
        navigate("/");

        return;
      }
      setUsers(users);
      console.log(users);
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`${BASE_URL}/user`, {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          // Set user info if logged in
          setUserName(data.name);
          setUserEmail(data.email);
          setUserPicture(data.picture);
          setLoggedIn(true);
          setRole(data.role)
        } else if (response.status === 401) {
          // User not logged in
          setUserName("Guest User");
          setUserEmail("guest@example.com");
          setLoggedIn(false);
        } else {
          // Handle other error statuses if needed
          console.error("Error fetching user info:", response.status);
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className="users-container">
      <h1 className="title">All Users</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th></th> {/* Logout button column */}
            <th></th> {/* Delete button column */}
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isLoggedIn ? "Logged In" : "Logged Out"}</td>
              <td>
                <button
                  className="logout-button"
                  onClick={() => logoutUser(user._id)}
                  disabled={!user.isLoggedIn}
                >
                  Logout
                </button>
              </td>
              {role === "admin" && (
                <td>
                  <button
                    className="delete-button"
                    onClick={() => {
                      console.log(user._id);
                    }}
                    disabled={!user.isLoggedIn}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
