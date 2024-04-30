import React from 'react'
import { Link } from 'react-router-dom'

const InnerMilkItems = () => {
  return (
    <div className='inner-vegetarian'>
<div>
        <h1>Welcome to Bala Bheem</h1>
        <div>
            <h2>Our Products</h2>
        <section id="milkitems">
        <h3>Milk Items</h3>
        <div>
            <figure>
                <img src="/images/buffalomilk.jpg" alt="Buffalo Milk" /><br />
                <p>Buffalo Milk</p>
                <p>1lit cost is 50/-</p>                
            </figure>

            <figure>
                <img src="/images/cowmilk.jpg" alt="Cow Milk" /><br />
                <p>Cow Milk</p>
                <p>1lit cost is 80/-</p>                
            </figure>

            <figure>
                <img src="/images/curd.jpg" alt="Curd" /><br />
                <p>Curd</p>
                <p>1lit cost is 60/-</p>            
            </figure>

            <figure>
                <img src="/images/butter.jpg" alt="Butter" /><br />
                <p>Butter</p>
                <p>1kg cost is 150/-</p>              
            </figure>

            <figure>
                <img src="/images/ghee.jpg" alt="Ghee" /><br />
                <p>Ghee</p>
                <p>1lit cost is 100/-</p>             
            </figure>

            <figure>
                <img src="/images/cream.jpg" alt="Cream" /><br />
                <p>Cream</p>
                <p>1kg cost is 90/-</p>            
            </figure>
        </div>
    </section>
    <Link to={"/milkitems"}><button>Back</button></Link>
    <Link to={"/deliverydetails"} style={{alignContent:"end"}}> <button>Buy</button> </Link>
    </div>
    </div>
    </div>
  )
}

export default InnerMilkItems
