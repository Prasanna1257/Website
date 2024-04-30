import React from 'react'
// import "./regi.css"
const CustomerRegi = () => {
  return (
    <div className='containe'>
        <div>
            <h1>Welcome to Bala Bheem!</h1>
            <div>
                <h2>Customer Registration Form</h2>
                <form method="post">
                <div>
                    <h3>Full Name:</h3>
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="" id="" />
                </div>
                
                <div>
                    <h3>Contact Information:</h3>
                    <label htmlFor="">Email:</label>
                    <input type="email" name="" id="" />
                    <label htmlFor="">Phone Number:</label>
                    <input type="text" name="" id="" />
                </div>

                <div>
                    <h3>Address:</h3>
                    <label htmlFor="">D- No:</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Street Address:</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">City:</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">State:</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Pincode:</label>
                    <input type="text" name="" id="" />
                </div>

                <div>
                    <h3>Account Information:</h3>
                    <label htmlFor="">Username:</label>
                    <input type="email" name="" id="" />
                    <label htmlFor="">Password:</label>
                    <input type="password" name="" id="" />
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" name="" id="" />
                </div>
                <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default CustomerRegi