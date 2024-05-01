import React from 'react'
import { Link } from 'react-router-dom'

const InnerNonVegetarian = () => {
  return (
    <div className='inner-vegetarian'>
      <div>
        <h1>Welcome to Bala Bheem</h1>
        <div>
            <h2>Our Products</h2>
        <section id="meat">
        <h3>Meat</h3>
        <div>
            <figure>
                <img src="/images/mutton.jpg" alt="Mutton" /><br />
                <p>Mutton</p>
                <p>1kg cost is 800/-</p>                
            </figure>

            <figure>
                <img src="/images/formchicken.jpg" alt="Chicken" /><br />
                <p>Chicken</p>
                <p>1kg cost is 250/-</p>            
            </figure>

            <figure>
                <img src="/images/nottuchicken.jpg" alt="Nattu Chicken" /><br />
                <p>Nattu Kodi Chicken</p>
                <p>1kg cost is 550/-</p>            
            </figure>
        </div>
    </section>

        <section id="seafood">
        <h3>Sea Food</h3>
        <div>
            <figure>
                <img src="/images/fish.jpg" alt="Fish" /><br />
                <p>Fish</p>
                <p>1kg cost is 400/-</p>                
            </figure>

            <figure>
                <img src="/images/prawn.jpg" alt="Prawn" /><br />
                <p>Prawn</p>
                <p>1kg cost is 250/-</p>            
            </figure>
        </div>
    </section>

        <section id="eggs">
        <h3>Eggs</h3>
        <div>
            <figure>
                <img src="/images/farmeggs.jpg" alt="Eggs" /><br />
                <p>Eggs</p>
                <p>1 dozen cost is 80/-</p>                
            </figure>

            <figure>
                <img src="/images/nattueggs.jpg" alt="Eggs" /><br />
                <p>Nattu Eggs</p>
                <p>1 dozen cost is 150/-</p>            
            </figure>
            
            <figure>
                <img src="/images/mix.jpg" alt=" Mix Eggs" /><br />
                <p>Mixed Eggs</p>
                <p>1 dozen cost is 110/-</p>            
            </figure>
        </div>
    </section>
    <div>
        <Link to={"/nonvegetarianitems"}><button>Back</button></Link>
       <Link to={"/deliverydetails"} style={{alignContent:"end"}}> <button>Buy</button> </Link>
       </div>
    </div>
    </div>
    </div>
  )
}

export default InnerNonVegetarian
