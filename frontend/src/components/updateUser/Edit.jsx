import React from 'react'
import "./Edit.css"
import { Link } from 'react-router-dom'

const Add = () => {
  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Update the user</h3>
      <form>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input type="text" id='fname' name='fname' autoComplete='off' placeholder='Enter your first name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id='lname' name='lname' autoComplete='off' placeholder='Enter your last name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="text" id='email' name='email' autoComplete='off' placeholder='Enter your e-mail'/>
        </div>
        <div className="inputGroup">
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Add
