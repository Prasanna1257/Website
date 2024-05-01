import React from 'react'
import { Link } from 'react-router-dom'

const InnerRice = () => {
  return (
    <div className='inner-vegetarian'>
    <div>
      <h1>Welcome to Bala Bheem</h1>
      <div>
          <h2>Our Products</h2>
      <section id="riceitems">
      <h3>Rice Items</h3>
      <div>
          <figure>
              <img src="/images/basmati rice.jpg" alt="Basmati Rice" /><br />
              <p>Basmati Rice</p>
              <p>1kg cost is 90/-</p>                
          </figure>

          <figure>
              <img src="/images/jasmine rice.jpg" alt="Jasmine Rice" /><br />
              <p>Jasmine Rice</p>
              <p>1kg cost is 70/-</p>            
          </figure>

          <figure>
              <img src="/images/brown rice.jpg" alt="Brown Rice" /><br />
              <p>Brown Rice</p>
              <p>1kg cost is 80/-</p>            
          </figure>

          <figure>
              <img src="/images/arborio rice.jpg" alt="Arborio Rice" /><br />
              <p>Arborio Rice</p>
              <p>1kg cost is 70/-</p>            
          </figure>

          <figure>
              <img src="/images/specialty rice blends.jpg" alt="Specialty Rice Blends" /><br />
              <p>Specialty Rice Blends</p>
              <p>1kg cost is 110/-</p>            
          </figure>

          <figure>
              <img src="/images/wild rice.jpg" alt="Wild Rice" /><br />
              <p>Wild Rice</p>
              <p>1kg cost is 120/-</p>            
          </figure>
      </div>
  </section>
  <Link to={"/riceitems"}><button>Back</button></Link>
    <Link to={"/deliverydetails"} style={{alignContent:"end"}}> <button>Buy</button> </Link>
  </div>
  </div>
  </div>
  )
}

export default InnerRice
