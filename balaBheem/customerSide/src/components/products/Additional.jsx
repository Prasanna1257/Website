import React from 'react'
import { Link } from 'react-router-dom'

const Additional = () => {
  return (
    <div className='tot'>
      <div className='gallery-wrapper'>
          <div>
            <h2 className='header'>Welcome to Additional Categories Items Page</h2>

            <section>
              <h3>Specialty Items:</h3>
              <p>Treat yourself to specialty products such as gourmet cheeses, artisanal bread, and handmade condiments.</p>
            </section>

            <section>
              <h3>Local Delights:</h3>
              <p>Support local producers and artisans by choosing from a range of locally made products, including honey, jams, and preserves.</p>
            </section>

            <div className='gallery'>
              <figure className='image-container'>
              <Link to={"/inneradditional"}>  <img src="/images/specialty items.jpg" alt="Specialty items" className='image'/>
                <p>Specialty items</p>
                </Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/inneradditional"}>   <img src="/images/honey.webp" alt="Local Delights" className='image'/>
                <p>Local Delights</p>
                </Link>
              </figure>

            </div>
          </div>
          <Link to={"/products"} ><button>Back</button></Link>
      </div>
    </div>
  )
}

export default Additional