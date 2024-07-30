import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      loadUsers();
   }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
    } catch (error) {
          console.log("Error Occurred", error.message);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/user/${userId}`
        );
        console.log("Deleted Successfully");
        window.location.reload();
    } catch (error) {
          console.log("Error Ocurred", error.message);
    }
  };

  const navigate = useNavigate();
  const handleUpdate = async (userId) => {
      navigate(`/user/${userId}`);
  }

        return (
        <>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.username}</th>
                <th>{user.email}</th>
                <th>{user.password}</th>
                <th>
                  <button class="btn btn-primary" onClick={() => handleUpdate(user.id)}>EDIT</button>
                  <button
                    class="btn btn-danger ms-5"
                    onClick={() => handleDelete(user.id)}
                  >
                    DELETE
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
