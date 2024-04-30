import React from 'react'
import Footer from './Footer'

const Main = () => {
  return (
    <main>

    <div style={{textAlign:"center"}}>
      <h1>Welcome to <span>Bala Bheem</span>!</h1>
      <h3>Empowering Farmers, Connecting Communities</h3>
    </div>
    <div className='gallery-wrapper'>  
      <h1>About Us: </h1>
      <p>At Bala Bheem, we're dedicated to revolutionizing the way farmers sell their crops. We understand the challenges farmers face in reaching consumers directly and aim to bridge this gap by providing a platform where farmers can showcase their produce and connect with customers seamlessly.</p>

      <h1>Our Mission:</h1>
      <p>Our mission is to empower farmers by providing them with a direct channel to sell their crops and eliminate the middlemen, ensuring fair prices and greater profits. We believe in supporting local agriculture and fostering stronger connections between farmers and consumers.</p>

      <h1>How It Works:</h1>

      <h2>Farmers Listings:</h2>
      <p>Farmers can create listings for their crops, including details such as crop type, quantity, pricing, and location.</p>

      <h2>Direct Sales:</h2>
      <p>Customers can browse through various listings and purchase fresh produce directly from the farmers, ensuring transparency and quality.</p>

      <h2>Community Support:</h2>
      <p>By buying from local farmers, customers support sustainable agriculture practices and contribute to the local economy.</p>

      <h1>Why Choose Us:</h1>

      <h2>Freshness Guaranteed:</h2>
      <p>Enjoy farm-fresh produce straight from the source.</p>

      <h2>Fair Prices:</h2>
      <p>Farmers set their prices, ensuring fair compensation for their hard work.</p>

      <h2>Community Engagement:</h2>
      <p>Join a community of like-minded individuals passionate about supporting local farmers and sustainable agriculture.</p>

      <h1>Get Started:</h1>
      <p>Join us in empowering farmers and supporting local agriculture. Browse our listings, connect with farmers, and enjoy the freshest produce delivered to your doorstep!</p>
      </div>      
          <Footer />
    </main>
  )
}

export default Main
