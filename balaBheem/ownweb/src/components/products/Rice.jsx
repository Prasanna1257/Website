import React from 'react'
import { Link } from 'react-router-dom'

const Rice = () => {
  return (
<div className='tot'>
      <div className='gallery-wrapper'>
          <div>
            <h2 className='header'>Welcome to Rice (Paddy) Items Page</h2>
            <p>Dive into the world of rice and discover the rich variety of flavors, textures, and aromas waiting to be explored. At our marketplace, we take pride in offering an exceptional selection of premium rice varieties sourced from the finest rice paddies around the globe. Whether you're a seasoned chef, a home cook, or simply a rice aficionado, our diverse range of rice options is sure to satisfy your culinary cravings.</p>

            <section>
              <h3>Basmati Rice:</h3>
              <p>Indulge in the fragrant allure of Basmati rice, renowned for its long grains, delicate aroma, and exquisite flavor profile. Perfect for pilafs, biryanis, and other aromatic dishes, Basmati rice adds a touch of elegance to any meal and elevates your dining experience to new heights.</p>
            </section>

            <section>
              <h3>Jasmine Rice:</h3>
              <p>Transport yourself to the verdant landscapes of Southeast Asia with our selection of Jasmine rice. Known for its subtle floral fragrance, soft texture, and slightly sticky consistency, Jasmine rice is a versatile staple that pairs beautifully with a wide range of cuisines, from Thai curries to Japanese stir-fries.</p>
            </section>

            <section>
              <h3>Arborio Rice:</h3>
              <p>Embark on a culinary journey to Italy with our Arborio rice, prized for its creamy texture and ability to absorb rich flavors. Ideal for risottos, paellas, and creamy rice puddings, Arborio rice adds a touch of indulgence to your favorite dishes and transforms ordinary meals into extraordinary culinary creations.</p>
            </section>

            <section>
              <h3>Brown Rice:</h3>
              <p>Nourish your body and soul with the wholesome goodness of brown rice, revered for its nutty flavor, chewy texture, and impressive nutritional profile. Packed with fiber, vitamins, and minerals, brown rice is a healthy and hearty choice that satisfies your hunger and fuels your active lifestyle.</p>
            </section>

            <section>
              <h3>Wild Rice:</h3>
              <p>Celebrate the untamed beauty of wild rice, a cherished staple of Native American cuisine prized for its earthy flavor and striking appearance. With its long grains and robust texture, wild rice adds depth and complexity to soups, salads, and grain bowls, making every dish a memorable experience.</p>
            </section>

            <section>
              <h3>Specialty Rice Blends:</h3>
              <p>Elevate your cooking repertoire with our selection of specialty rice blends, expertly crafted to deliver a harmonious blend of flavors and textures. From Mediterranean-inspired couscous blends to savory pilaf mixes, our rice blends offer endless possibilities for culinary creativity and innovation.</p>
            </section>

            <div className='gallery'>
              <figure className='image-container'>
              <Link to={"/innerriceitems#riceitems"}> <img src="/images/basmati rice.jpg" alt="Basmati Rice" className='image'/>
                <p>Basmati Rice</p>
                </Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/innerriceitems#riceitems"}>  <img src="/images/jasmine rice.jpg" alt="Jasmine Rice" className='image'/>
                <p>Jasmine Rice</p>
                </Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/innerriceitems#riceitems"}>  <img src="/images/brown rice.jpg" alt="Brown Rice" className='image'/>
                <p>Brown Rice</p>
                </Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/innerriceitems#riceitems"}>  <img src="/images/arborio rice.jpg" alt="Arborio Rice" className='image'/>
                <p>Arborio Rice</p></Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/innerriceitems#riceitems"}><img src="/images/specialty rice blends.jpg" alt="Specialty Rice Blends" className='image'/>
                <p>Specialty Rice</p></Link>
              </figure>

              <figure className='image-container'>
              <Link to={"/innerriceitems#riceitems"}>  <img src="/images/wild rice.jpg" alt="Wild Rice" className='image'/>
                <p>Wild Rice</p></Link>
              </figure>

            </div>
            Join us on a culinary adventure as we celebrate the timeless allure of rice in all its forms. With our commitment to quality, sustainability, and authenticity, you can trust that every grain of rice we offer is of the highest standard and destined to delight your taste buds. 
          </div> <br />
          <Link to={"/products"}> <button>Back</button></Link>
      </div>
    </div>
  )
}

export default Rice
