import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const location= useLocation();
  const isProductPage=location.pathname==="/products" || location.pathname==="/login";
  const isServicePage=location.pathname==="/services" || location.pathname==="/login";
  const isAboutUs=location.pathname==="/about" || location.pathname==="/login";
  const isContactUs=location.pathname==="/contact" || location.pathname==="/login";
  // const isLogin= location.pathname==="/login";

  return (
    <div>
    <nav>
        <Link to={"/"}><img src="/images/logo01.png" alt="Company logo" /></Link>
        <ul>
          <ol>
            <Link to={"/products"} style={{display: isProductPage? "none": "inline-block"}}>Products</Link>
            <Link to={"/services"} style={{ display: isServicePage ? 'none' : 'inline-block'}}>Services</Link>
            <Link to={"/about"} style={{ display: isAboutUs ? 'none' : 'inline-block'}}>About Us</Link>
            <Link to={"/contact"} style={{display: isContactUs? 'none': 'inline-block'}}>Contact Us</Link>
            {/* <Link to={"/login"} style={{display: isLogin? "none": "inline-block"}}>Login</Link> */}
          </ol>
        </ul>
    </nav>
    </div>
  )
}

export default Nav
