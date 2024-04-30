import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const DeliveryDetails = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const [selectedCategory, setSelectedCategory]= useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:1999/deliveryDetails/createData",
     {name, address, phoneNumber, deliveryInstructions, product, quantity})

      .then(result =>{
        console.log(result.data)
    })
      .catch(err => console.log(err))
           
      alert("Your order successfully registered");
      window.location.reload();
 }



  const handleChange=(e)=>{
  const  setSelectedCategory=e.target.value;

    const fruitsDropdown=document.getElementById("fruitsDropdown");
    const vegetablesDropdown=document.getElementById("vegetablesDropdown");
    const grainsDropdown=document.getElementById("grainsDropdown");
    const nutsDropdown=document.getElementById("nutsDropdown");
    const herbsDropdown=document.getElementById("herbsDropdown");
    const meatDropdown=document.getElementById("meatDropdown");
    const seafoodDropdown=document.getElementById("seafoodDropdown");
    const eggsDropdown=document.getElementById("eggsDropdown");
    const milkDropdown=document.getElementById("milkDropdown");
    const riceDropdown=document.getElementById("riceDropdown");
   const additionalDropdown=document.getElementById("additionalDropdown");

    fruitsDropdown.style.display=setSelectedCategory==="fruits" ? "block" : "none";
    vegetablesDropdown.style.display=setSelectedCategory==="vegetables" ? "block" : "none";
    grainsDropdown.style.display=setSelectedCategory==="grainsandpulses" ? "block" : "none";
    nutsDropdown.style.display=setSelectedCategory==="nutsandseeds" ? "block" : "none";
    herbsDropdown.style.display=setSelectedCategory==="herbsandspices" ? "block" : "none";
    meatDropdown.style.display=setSelectedCategory==="meat" ? "block" : "none";
    seafoodDropdown.style.display=setSelectedCategory==="seafood" ? "block" : "none";
    eggsDropdown.style.display=setSelectedCategory==="eggs" ? "block" : "none";
    milkDropdown.style.display=setSelectedCategory==="milkitems" ? "block" : "none";
    riceDropdown.style.display=setSelectedCategory==="rice" ? "block" : "none";
    additionalDropdown.style.display=setSelectedCategory==="additionalitems" ? "block" : "none";
  };


  return (
    <div>
      <h1>Welcome to Bala Bheem</h1>
      <div>
        <h3 style={{ textAlign: "center" }}>Delivery Details</h3>
        <form onSubmit={handleSubmit} style={{ alignItems: "center" }}>
          <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Name' required />
          <input type="text" name="address" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder='Address' required />
          <input type="text" name="phoneNumber" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder='Phone Number' required />
          <input type="text" name="deliveryInstructions" value={deliveryInstructions} onChange={(e) => { setDeliveryInstructions(e.target.value) }} placeholder='Any Delivery Instructions' />

          <select name="category" id="category" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="grainsandpulses">Grains and Pulses</option>
            <option value="nutsandseeds">Nuts and Seeds</option>
            <option value="herbsandspices">Herbs and Spices</option>
            <option value="meat">Meat</option>
            <option value="seafood">Sea food</option>
            <option value="eggs">Eggs</option>
            <option value="milkitems">Milk items</option>
            <option value="rice">Rice (Paddy)</option>
            <option value="additionalitems">Additional Items</option>
        </select>

        <div id="fruitsDropdown" style={{display:"none"}} >
          <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}>
            <option value="">select</option>
            <option value="apples">Apples</option>
            <option value="bananas">Bananas</option>
            <option value="oranges">Oranges</option>
            <option value="mangoes">Mangoes</option>
            <option value="guvava">Guvava</option>
            <option value="watermelon">Watermelon</option>
          </select>
    </div>

    <div id="vegetablesDropdown" style={{display:"none"}} >
        <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}>
            <option value="">select</option>
            <option value="tomatos">Tomatos</option>
            <option value="greenchilli">Green Chilli</option>
            <option value="cucumber">Cucumber</option>
            <option value="potato">Potato</option>
            <option value="carrot">Carrot</option>
            <option value="cabbage">Cabbage</option>
        </select>
    </div>

    <div id="grainsDropdown" style={{display:"none"}} >
        <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}>
            <option value="">select</option>
            <option value="wheat">Wheat</option>
            <option value="barley">Barley</option>
            <option value="corn">Corn</option>
            <option value="blackgram">Black gram</option>
            <option value="redgram">Red gram</option>
            <option value="greengram">Green gram</option>
        </select>
    </div>

    <div id="nutsDropdown" style={{display:"none"}} >
    <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}>
        <option value="">select</option>
        <option value="almonds">Almonds</option>
        <option value="pistachio">Pistachio</option>
        <option value="walnuts">Walnuts</option>
        <option value="cashews">Cashews</option>
        <option value="pecans">Pecans</option>
        <option value="hazelnuts">Hazelnuts</option>
    </select>
    </div>

    <div id="herbsDropdown" style={{display:"none"}} >
        <select name="product"  value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}>
            <option value="">select</option>
            <option value="garlic">Garlic</option>
            <option value="ginger">Ginger</option>
            <option value="blackpepper">Black Pepper</option>
            <option value="turmeric">Turmeric</option>
            <option value="dalchini">Dalchini</option>
            <option value="thyme">Thyme</option>
        </select>
    </div>

    <div id="meatDropdown" style={{display:"none"}} >
        <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}>
            <option value="">select</option>
            <option value="mutton">Mutton</option>
            <option value="chicken">Chicken</option>
            <option value="nattukodichicken">Nattu Kodi Chicken</option>
        </select>
    </div>

    <div id="seafoodDropdown" style={{display:"none"}} >
        <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}> 
            <option value="">select</option>
            <option value="fish">Fish</option>
            <option value="prawn">Prawn</option>
        </select>
    </div>

    <div id="eggsDropdown" style={{display:"none"}} >
        <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}>
            <option value="">select</option>
            <option value="eggs">Eggs</option>
            <option value="natueggs">Nattu Eggs</option>
            <option value="mixedeggs">Mixed Eggs</option>
        </select>
    </div>

    <div id="milkDropdown" style={{display:"none"}} >
        <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}>
            <option value="">select</option>
            <option value="buffalomilk">Buffalo Milk</option>
            <option value="cowmilk">Cow Milk</option>
            <option value="curd">Curd</option>
            <option value="butter">Butter</option>
            <option value="ghee">Ghee</option>
            <option value="cream">Cream</option>
        </select>
    </div>

    <div id="riceDropdown" style={{display:"none"}} >
        <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} requiredrequired={!product && selectedCategory !== ""}>
            <option value="">select</option>
            <option value="basmatirice">Basmati Rice</option>
            <option value="jasminerice">Jasmine Rice</option>
            <option value="brownrice">Brown Rice</option>
            <option value="arboriorice">Arborio Rice</option>
            <option value="specialtyrice">Specialty Rice Blends</option>
            <option value="wildrice">Wild Rice</option>
        </select>
    </div>

    <div id="additionalDropdown" style={{display:"none"}} >
        <select name="product" value={product} onChange={(e) => { setProduct(e.target.value) }} required={!product && selectedCategory !== ""}>
            <option value="">select</option>
            <option value="pickels">Pickles</option>
            <option value="jam">Jam</option>
            <option value="honey">Honey</option>
        </select>
    </div>
          
          <input type="text" name="quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} placeholder='Quantity' required />
                <p>Based on Distance Delivery time calculate</p>
          <input type="submit" value="submit" /> <br />
          <Link to={"/products"}><button>Back</button></Link>
        </form>

      </div>
    </div>
  );
};

export default DeliveryDetails;
