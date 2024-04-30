import React from 'react'
import { Link } from 'react-router-dom'

const FarmerLogin = () => {
  return (
    <div className='container'>
      <div>
        <h1>Welcome to Bala Bheem</h1>
        <form method='post'>
          <h2>Farmer Login Form</h2>
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

export default FarmerLogin
