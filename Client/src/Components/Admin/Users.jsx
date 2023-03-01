import React, { useState, useEffect } from "react";
import "./stylesadmin/Users.css";
const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://taupe-raven-gear.cyclic.app/api/admin/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <div className="user-table">
      <h1 style={{ fontSize: "30px", fontWeight: "700" }}>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.first_name + " " + user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
