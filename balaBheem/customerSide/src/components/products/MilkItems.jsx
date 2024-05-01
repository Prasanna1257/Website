import React from 'react'
import { Link } from 'react-router-dom'

const MilkItems = () => {
  return (
    <div className='tot'>
      <div className='gallery-wrapper'>
        <div>
          <h2 className='header'>Welcome to Milk Items Page</h2>
          <p>Indulge in creamy and delicious milk-based products sourced from local dairy farms</p>

          <section>
            <h3>Milk:</h3>
            <p>Start your day right with a glass of fresh and nutritious milk, available in various varieties.</p>
          </section>

          <section>
            <h3>Cheese:</h3>
            <p>Explore a range of artisanal cheeses, handcrafted with care for exceptional flavor and texture.</p>
          </section>

          <section>
            <h3>Yogurt:</h3>
            <p>Nourish your body with creamy and probiotic-rich yogurt, available in a variety of flavors and textures.</p>
          </section>

          <section>
            <h3>Butter and Cream:</h3>
            <p>Enhance your recipes with rich and flavorful butter and cream, perfect for cooking and baking.</p>
          </section>

          <section>
            <h3>Ghee:</h3>
            <p>Indulge in the rich, golden goodness of ghee, a traditional dairy delicacy cherished for centuries for its exquisite flavor and numerous health benefits. Made from pure, clarified butter, ghee is a staple ingredient in Indian cuisine and a versatile addition to any kitchen.</p>
          </section>

          <div className='gallery'>
            <figure className='image-container'>
              <Link to={"/innermilkitems#milkitem"}><img src="/images/milk.jpg" alt="Milk" className='image' />
                <p>Milk</p>
              </Link>
            </figure>

            <figure className='image-container'>
              <Link to={"/innermilkitems#milkitem"}>  <img src="/images/cheese.jpg" alt="Cheese" className='image' />
                <p>Cheese</p></Link>
            </figure>

            <figure className='image-container'>
              <Link to={"/innermilkitems#milkitem"}>  <img src="/images/yogurt.jpg" alt="Yogurt" className='image' />
                <p>Yogurt</p></Link>
            </figure>

            <figure className='image-container'>
              <Link to={"/innermilkitems#milkitem"}>  <img src="/images/butter and cream.jpg" alt="Butter and Cream" className='image' />
                <p>Butter and Cream</p></Link>
            </figure>

            <figure className='image-container'>
              <Link to={"/innermilkitems#milkitem"}>  <img src="/images/ghee.jpg" alt="Ghee" className='image' />
                <p>Ghee</p></Link>
            </figure>

          </div>
        </div>
        <Link to={"/products"}><button>Back</button></Link>
      </div>
    </div>
  )
}

export default MilkItems
