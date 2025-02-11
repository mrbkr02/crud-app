import React, { useState } from 'react'
import "./add.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Add = () => {
  const users = {
    "fname" : "",
    "lname" : "",
    "email" : "",
    "password" : ""
  }

  const submitForm = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:8000/api/create", user);
        toast.success(response.data.message || "User added successfully", { position: "top-right" });
        navigate("/");

    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}


  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    setUser({...user, [name] : value});
    
    // console.log(name); console.log(value);
  }
  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Add a User</h3>
      <form onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input onChange={inputHandler} type="text" id='fname' name='fname' autoComplete='off' placeholder='Enter your first name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input onChange={inputHandler} type="text" id='lname' name='lname' autoComplete='off' placeholder='Enter your last name' />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input onChange={inputHandler} type="text" id='email' name='email' autoComplete='off' placeholder='Enter your e-mail' />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input onChange={inputHandler} type="text" id='pass' name='password' autoComplete='off' placeholder='Enter your password' />
        </div>
        <div className="inputGroup">
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Add
