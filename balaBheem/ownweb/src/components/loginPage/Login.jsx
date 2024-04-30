import React from 'react'
import { Link } from 'react-router-dom'
// import "./login.css"

const Login = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h1>Welcome to Bala Bheem!</h1>
        <div className='login-container'>
            <h2>Login</h2>
            <div className='login-option'>
            <div className='farmer-login'>
            <h3>Farmer Login</h3>
                If you are a farmer looking to sell your crops directly to consumers, please log in using your farmer account credentials.
                <Link to={"/farmerlogin"} className='login-link'> Farmer</Link>
            </div>

            <div className='customer-login'>
            <h3>Customer Login</h3>
                If you are a customer looking to purchase fresh produce from local farmers, please log in using your customer account credentials.
                <Link to={"/customerlogin"} className='login-link'> Customer</Link>
            </div> 
        </div>
        <h2 className='new-user'>New User?</h2>

        <div className='regi-options'>
            <div className='farmer-regi'>
                <h3>Farmer Registration:</h3>
                    Farmers can create a new account to start selling their crops on our platform.
                    Register as a<Link to={"/farmerregi"} className='regi-link'> Farmer</Link>
            </div>

            <div className='customer-regi'>
                <h3>Customer Registration:</h3>
                    Customers can create a new account to browse and purchase fresh produce directly from local farmers. Register as a 
                    <Link to={"/customerregi"} className='regi-link'> Customer</Link>
            </div>
        </div>

        {/* <Link to={"/forgotpassword"} className='forgot-password'>Forgot Password?</Link> 
        <div className='rest-instructions'>
                If you've forgotten your password, you can reset it by following the password reset instructions.
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Login
