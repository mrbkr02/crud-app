import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios"
import "./User.css"
import { Link } from 'react-router-dom';

const User = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async() => {
    try {
      const response = await axios.get("http://localhost:8000/api/read")
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="userTable">
        <Link to={"/create"}>Add a User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>User Name</th>
              <th>User E-mail</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return(
            <tr key={user._id || index}>
              <td>{index+1}</td>
              <td>{user.fname} {user.lname}</td>
              <td>{user.email}</td>
              <td id="action-buttons">
                <button>Delete</button>
                <Link to={`/update/` + user._id}>Update</Link>
              </td>
            </tr>
              )
            })}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default User;