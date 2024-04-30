import React from 'react'
import { Link } from 'react-router-dom'

const NonVegetarian = () => {
  return (
<div className='tot'>
      <div className='gallery-wrapper'>
          <div>
            <h2 className='header'>Welcome to Non Vegetarian Items Page</h2>
            <p>Savor the taste of premium-quality non-vegetarian products sourced ethically and sustainably</p>

            <section>
              <h3>Meat:</h3>
              <p>Choose from a variety of tender and succulent cuts of meat for your culinary creations. Delight in farm-fresh poultry products, including chicken and mutton</p>
            </section>

            <section>
              <h3>Seafood:</h3>
              <p>Dive into a selection of fresh seafood, sourced responsibly from local waters.</p>
            </section>

            <section>
              <h3>Eggs:</h3>
              <p>Enjoy farm-fresh eggs, perfect for breakfast, baking, or as a protein-packed snack.</p>
            </section>

            <div className='gallery'>
              <figure className='image-container'>
              <Link to={"/innernonvegetarian#meat"}><img src="/images/non-vegi.jpg" alt="Meat" className='image'/>
                <p>Meat</p>
                </Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/innernonvegetarian#seafood"}><img src="/images/fishes.jpg" alt="Seafood" className='image'/>
                <p>Seafood</p>
                </Link>  
              </figure>

              <figure className='image-container'>
              <Link to={"/innernonvegetarian#eggs"}><img src="/images/eggs.jpg" alt="Eggs" className='image'/>
                <p>Eggs</p>
                </Link>
              </figure>

            </div>
          </div>
          <Link to={"/products"}><button>Back</button></Link>
      </div>
    </div>
  )
}

export default NonVegetarian
