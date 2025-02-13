import React, { useEffect, useState } from 'react'
import "./Edit.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Add = () => {
  const users = {
    fname : "",
    lname : "",
    email : ""
  }
  const {id} = useParams();
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = async(event) => {
    const {name, value} = event.target;
    setUser({...user, [name] : value});
    // console.log(user);
  }

  const submitForm = async(event) => {
    try {
      event.preventDefault();
      await axios.put(`http://localhost:8000/api/update/${id}`, user)
      .then((response) => {
        // console.log(response.data.msg);
        toast.success(response.data.msg, {position : "top-right"});
        navigate("/");
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/api/readOne/${id}`)
      .then((response) => {
        // console.log(response);
        setUser(response.data);
      }, [id]);

    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Update the user</h3>
      <form onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input onChange={inputHandler} type="text" id='fname' name='fname' value={user.fname} autoComplete='off' placeholder='Enter your first name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input onChange={inputHandler} type="text" id='lname' name='lname' value={user.lname} autoComplete='off' placeholder='Enter your last name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input onChange={inputHandler} type="text" id='email' name='email' value={user.email} autoComplete='off' placeholder='Enter your e-mail'/>
        </div>
        <div className="inputGroup">
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Add
