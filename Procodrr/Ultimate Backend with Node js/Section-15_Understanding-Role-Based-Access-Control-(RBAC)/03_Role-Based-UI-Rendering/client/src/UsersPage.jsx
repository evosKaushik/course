import { useEffect, useState } from "react";
import "./UsersPage.css";
import { fetchAllUsersApi } from "./apis/usersApi";
import {useNavigate} from "react-router-dom"

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

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
      if(users.error){
        
        navigate("/")
      }
      setUsers(users);
      console.log(users);
    };
    fetchAllUsers();
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
                  onClick={() => logoutUser(user.id)}
                  disabled={!user.isLoggedIn}
                >
                  Logout
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
