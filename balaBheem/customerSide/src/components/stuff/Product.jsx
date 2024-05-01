import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className="tot">
    <div className='gallery-wrapper'>
        <h2 className='header'>Explore Our Products</h2>
        <p>Discover a selection of certified organic products for a healthier and more sustainable lifestyle. A diverse range of high-quality agricultural products sourced directly from local farms and producers. Whether you're looking for fresh fruits and vegetables, premium meats and seafood, or artisanal dairy products, we have something for everyone. Browse through our categories and find the perfect ingredients to elevate your culinary experience.</p>
        

        <section>
            <a href="#vegetarian"><h3>Vegetarian Items:</h3></a>
            <p>Indulge in the goodness of nature with our selection of fresh fruits, vegetables, grains, nuts, and herbs. Packed with vitamins, minerals, and antioxidants, our vegetarian items are perfect for creating delicious and nutritious meals for your family.</p>
        </section>

        <section>
            <a href="#non-vegetarian"><h3>Non-Vegetarian Items:</h3></a>
            <p>Satisfy your cravings with our premium-quality meats, poultry, seafood, and eggs. Responsibly sourced and expertly prepared, our non-vegetarian items are sure to delight your taste buds and add excitement to your meals.</p>
        </section>

        <section>
            <a href="#milk-items"><h3>Milk Items:</h3></a>
            <p>Experience the richness and creaminess of our dairy products, including fresh milk, cheese, yogurt, and butter. Produced by local dairy farms using traditional methods, our milk items are wholesome and delicious, perfect for enjoying on their own or incorporating into your favorite recipes.</p>
        </section>

        <section>
            <a href="#rice"><h3>Rice:</h3></a>
            <p>Delight in the versatility and richness of our rice selection, featuring a variety of grains from around the globe</p>
        </section>

        <section>
            <a href="#additional"><h3>Additional Categories:</h3></a>
            <p>Explore our additional categories, featuring organic products, specialty items, and local delights. From organic produce and gourmet treats to handmade crafts and unique gifts, there's always something new to discover at our marketplace.</p>
        </section>
        
        <div className='gallery'>
            <figure className='image-container'>
                <Link to={"/vegetarianitems"}>
                    <img src="/images/vegi.jpg" alt="Vegetarian" className='image' id='vegetarian'/>
                    <p>Vegetarian</p>
                </Link>
            </figure>

            <figure className='image-container'>
                <Link to={"/nonvegetarianitems"}>
                    <img src="/images/non-vegi.jpg" alt="Non-Vegetarian" className='image' id='non-vegetarian'/>
                    <p>Non-Vegetarian</p>
                </Link>
            </figure>

            <figure className='image-container'>
                <Link to={"/milkitems"}>
                    <img src="/images/milk-items.jpg" alt="Milk Items" className='image' id='milk-items'/>
                    <p>Milk Items</p>
                </Link>
            </figure>

            <figure className='image-container'>
                <Link to={"/riceitems"}>
                    <img src="/images/rice.jpg" alt="Rice" className='image' id='rice'/>
                    <p>Rice (Paddy)</p>
                </Link>
            </figure>

            <figure className='image-container'>
                <Link to={"/additionalitems"}>
                    <img src="/images/organic.jpg" alt="Additional" className='image' id='additional'/>
                    <p>Additional</p>
                </Link>
            </figure>

        </div>

        <p>Join us on a culinary journey and explore the vibrant flavors and textures of our products. With our commitment to quality, freshness, and sustainability, you can trust that every item you choose is of the highest standard. Start exploring today and experience the joy of farm-fresh goodness delivered right to your doorstep.</p>
        <p>Explore our diverse range of products and find the perfect ingredients for your culinary adventures. Whether you're a vegetarian, a meat lover, or a dairy enthusiast, we have something for everyone!</p>
    </div>
    </div>
  )
}

export default Product
