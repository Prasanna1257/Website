import React from 'react'
import { Link } from 'react-router-dom'

const InnerAdditional = () => {
  return (
    <div className='inner-vegetarian'>
      <div>
        <h1>Welcome to Bala Bheem</h1>
        <div>
            <h2>Our Products</h2>
        <section id="additional">
        <h3>Additional Items</h3>
        <p>Basied on your requirements we charge cost for Pickels and Jams.</p>
        <div>
            <figure>
                <img src="/images/pickles.jpg" alt="Pickles" /><br />
                <p>Pickles</p>                
            </figure>

            <figure>
                <img src="/images/jams.jpg" alt="Jam" /><br />
                <p>Jam</p>
            </figure>

            <figure>
                <img src="/images/honey01.jpg" alt="Honey" /><br />
                <p>Honey</p>
                <p>1kg cost is 250/-</p>            
            </figure>
        </div>
    </section> <br />
    <Link to={"/additionalitems"}><button>Back</button></Link>
    <Link to={"/deliverydetails"}> <button>Buy</button> </Link>
    </div>
    </div>
    </div>
  )
}

export default InnerAdditional
