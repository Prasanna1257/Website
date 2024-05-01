import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Services from './components/stuff/Services.jsx'
import About from './components/stuff/About.jsx'
import Contact from './components/stuff/Contact.jsx'
import Home from './components/stuff/Home.jsx'
import Product from './components/stuff/Product.jsx'
import Vegetarian from './components/products/Vegetarian.jsx'
import NonVegetarian from "./components/products/NonVegetarian.jsx"
import MilkItems from "./components/products/MilkItems.jsx"
import Rice from './components/products/Rice.jsx'
import Additional from "./components/products/Additional.jsx"
import InnerVegetarian from './components/products/innerProduction/InnerVegetarian.jsx'
import InnerNonVegetarian from './components/products/innerProduction/InnerNonVegetarian.jsx'
import DeliveryDetails from './components/products/innerProduction/DeliveryDetails.jsx'
import InnerMilkItems from './components/products/innerProduction/InnerMilkItems.jsx'
import InnerRice from './components/products/innerProduction/InnerRice.jsx'
import InnerAdditional from './components/products/innerProduction/InnerAdditional.jsx'

const App = () => {

  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path='/products' element={<Product/>}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/vegetarianitems' element={<Vegetarian/>}/>
        <Route path='/nonvegetarianitems' element={<NonVegetarian/>}/>
        <Route path='/milkitems' element={<MilkItems/>}/>
        <Route path='/riceitems' element={<Rice/>}/>
        <Route path='/additionalitems' element={<Additional/>}/>
        <Route path='/innervegetarian' element={<InnerVegetarian/>}/>
        <Route path="/innernonvegetarian" element={<InnerNonVegetarian/>} />
        <Route path='/deliverydetails' element={<DeliveryDetails />} />
        <Route path='/innermilkitems' element={<InnerMilkItems />}/>
        <Route path='/innerriceitems' element={<InnerRice />} />
        <Route path='/inneradditional' element={<InnerAdditional />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
