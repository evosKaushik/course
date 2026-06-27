import { useEffect, useState } from "react";
import "./UsersPage.css";
import { fetchAllUsersApi } from "./apis/usersApi";
import { useNavigate, redirect } from "react-router-dom";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Guest User");
  const [role, setRole] = useState("user");

  const softDeleteUser = async (userId) => {
    alert(`Logging out user with ID: ${userId}`);
    const BASE_URL = "http://localhost:4000";
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: "DELETE",
        credentials: "include",
      });
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      console.log(users);
    } catch (err) {
      console.log(error);
    }
  };

  const hardDeleteUser = async (userId) => {
    alert(`Logging out user with ID: ${userId}`);
    const BASE_URL = "http://localhost:4000";
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}/hard`, {
        method: "DELETE",
        credentials: "include",
      });
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      console.log(users);
    } catch (err) {
      console.log(error);
    }
  };
  const logoutUser = async (userId) => {
    alert(`Logging out user with ID: ${userId}`);
    const BASE_URL = "http://localhost:4000";
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: "POST",
        credentials: "include",
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, isLoggedIn: false } : user,
        ),
      );
      console.log(users);
    } catch (err) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      const users = await fetchAllUsersApi();
      if (users.error) {
        navigate("/");

        return;
      }
      setUsers(users);
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    async function fetchUser() {
      const BASE_URL = "http://localhost:4000";
      try {
        const response = await fetch(`${BASE_URL}/user`, {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          // Set user info if logged in
          setUserName(data.name);
          setRole(data.role);
        } else if (response.status === 401) {
          setUserName("Guest User");
          setRole("user");
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
      <h2>
        <span>{userName}</span> ({role})
      </h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th></th> {/* Logout button column */}
            {role === "admin" && <th></th>} {/* soft Delete button column */}
            {role === "admin" && <th></th>} {/* hard Delete button column */}
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
                <>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => {
                        console.log(user._id);
                        softDeleteUser(user._id);
                      }}
                      disabled={!user.isLoggedIn}
                    >
                      Soft Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => {
                        console.log(user._id);
                        hardDeleteUser(user._id);
                      }}
                      disabled={!user.isLoggedIn}
                    >
                      Hard Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
