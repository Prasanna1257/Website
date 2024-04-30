import React from 'react'
import Nav from './Nav'
import Main from './Main'
import { useLocation } from 'react-router-dom'


const Home = () => {
const location =useLocation ()

const isMain = location.pathname==="/products" || location.pathname === '/services' || location.pathname === '/about' || 
location.pathname === '/contact' || location.pathname==="/vegetarianitems" || location.pathname==="/nonvegetarianitems" || 
location.pathname==="/milkitems" || location.pathname==="/riceitems" || location.pathname ==="/additionalitems" ||
location.pathname==="/innervegetarian" || location.pathname==="/innernonvegetarian" || location.pathname==="/innermilkitems" || 
location.pathname==="/innerriceitems" || location.pathname==="/deliverydetails" || location.pathname==="/inneradditional"; 

  return (
    <div>
      <Nav />
       <div style={{ display: isMain ? "none" : "block"}}>
          <Main />
        </div>
    </div>
  )
}

export default Home
