import React from 'react'
import { Link } from 'react-router-dom'
// import "./regi.css"

const CustomerLogin = () => {
  return (
    <div className='container'>
      <div>
        <h1>Welcome to Bala Bheem</h1>
        <form method='post'>
          <h2>Customer Login Form</h2>
          <div>
            <label htmlFor="">Username:</label>
            <input type="text" name="" id="" />
          </div>

          <div>
            <label htmlFor="">Password:</label>
            <input type="password" name="" id="" />
            <Link to={"/forgotpassword"}>Forgot Password</Link>
          </div>
          
          
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default CustomerLogin

/* Username:
Field for entering the username used during registration.
Password:
Field for entering the password used during registration.
Remember Me:
Checkbox option to remember the user's login credentials for future visits (optional).
Login Button:
Button to submit the login credentials and access the respective dashboard. */