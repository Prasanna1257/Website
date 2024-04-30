import React from 'react'
// import "./innerProducts.css"
import { Link } from 'react-router-dom'

const Vegetarian = () => {
  return (
    <div className='tot'>
      <div className='gallery-wrapper'>
          <div>
            <h2 className='header'>Welcome to Vegetarian Items Page</h2>
            <p>Discover a wide selection of fresh and nutritious vegetarian products sourced directly from local farms</p>

            <section>
              <h3>Fruits:</h3>
              <p>Enjoy a variety of fresh fruits bursting with flavor and nutrients.</p>
            </section>

            <section>
              <h3>Vegetables:</h3>
              <p>Explore a colorful array of seasonal vegetables, perfect for creating wholesome meals.</p>
            </section>

            <section>
              <h3>Grains and Pulses:</h3>
              <p>Stock up on nutritious grains, pulses, and legumes for your pantry staples.</p>
            </section>

            <section>
              <h3>Nuts and Seeds:</h3>
              <p>Indulge in crunchy nuts and seeds packed with essential vitamins and minerals.</p>
            </section>

            <section>
              <h3>Herbs and Spices:</h3>
              <p>Elevate your dishes with aromatic herbs and spices for added flavor.</p>
            </section>

            <div className='gallery'>
              
              <figure className='image-container'>
              <Link to={"/innervegetarian#fruits"}><img src="/images/fruits.jpg" alt="Fruits" className='image'/>
                <p>Fruits</p> 
              </Link>  
              </figure>

              <figure className='image-container'>
              <Link to={"/innervegetarian#vegetables"}><img src="/images/vegetables.jpg" alt="Vegetables" className='image'/>
                <p>Vegetables</p>
              </Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/innervegetarian#grains and pulses"}><img src="/images/grains and pulses.jpg" alt="Grains and Pulses" className='image'/>
                <p>Grains and Pulses</p>
                </Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/innervegetarian#nuts and seeds"}><img src="/images/nuts and seeds.jpg" alt="Nuts and Seeds" className='image'/>
                <p>Nuts and Seeds</p>
                </Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/innervegetarian#nuts and seeds"}><img src="/images/herbs and spices.jpg" alt="Herbs and Spices" className='image'/>
                <p>Herbs and Spices</p>
                </Link>
              </figure>
            
            </div>
            <Link to={"/products"}><button>Back</button></Link>
          </div>
      </div>
    </div>
  )
}

export default Vegetarian
