import React, { useEffect, useState } from 'react'
import axios from "axios"

const FrontPage = () => {

  const [data, setData] = useState([])

  const fetchData= ()=>{
    axios.get("http://localhost:1999/deliveryDetails/customerDetails")
    .then(res=>{
      setData(res.data)
    })
    .catch(err=> console.log(err))
  }

  useEffect(()=>{
    fetchData();
    const interval= setInterval(fetchData, 10000);
    return ()=> clearInterval(interval);
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1999/deliveryDetails/deleteData/${id}`)
      .then(() => {
        // If deletion is successful, fetch updated data
        fetchData();
      })
      .catch(err => console.log(err));
  };

  const handlePrint = (index) => {
    const customerDetails = data[index]; 
    // Get details of the selected customer

    // Create a new window with the selected customer details
    const printWindow = window.open("", "", "height=400,width=600");
    printWindow.document.write(`
      <html>
        <head>
          <title>Order Details</title>
          <style>
          /* CSS to center the table */
          body {
            padding: 10%;
            height: 90vh;
          }
          h1, h2{
            text-align: center;
          }
          table {
            border-collapse: collapse;
            width: 50%;
            border: 2px solid #000; /* Border around the table */
          }
          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd; /* Border between rows */
          }
          th {
            background-color: #f2f2f2; /* Header background color */
          }

          @media print {
            body {
              padding-top: 0;
              padding-left: 0;
              height: auto;
            }
            table {
              width: 100%;
            }
            /* Set page size and orientation */
            @page {
              size: A4 portrait;
              margin: 20mm; /* Adjust margin as needed */
            }
          }
        </style>
        </head>
        <body>
          <h1> Bala Bheem </h1>
          <h2>Order Details</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <td>${customerDetails.name}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>${customerDetails.address}</td>
              </tr>
              <tr>
                <th>Pho. Number</th>
                <td>${customerDetails.phoneNumber}</td>
              </tr>
              <tr>
                <th>Del. Instructions</th>
                <td>${customerDetails.deliveryInstructions}</td>
              </tr>
              <tr>
                <th>Product</th>
                <td>${customerDetails.product}</td>
              </tr>
              <tr>
                <th>Quantity</th>
                <td>${customerDetails.quantity}</td>
              </tr>

            </thead>
          
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-90 bg-white rounded p-3'>
        <h2>Customer Details</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Pho. Number</th>
              <th>Del. Instructions</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Date and Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { data.map((details, index)=>{
               return (
                <tr key={index}>
                  <td>{details.name}</td>
                  <td>{details.address}</td>
                  <td>{details.phoneNumber}</td>
                  <td>{details.deliveryInstructions}</td>
                  <td>{details.product}</td>
                  <td>{details.quantity}</td>
                  <td>{new Date(details.orderDateTime).toLocaleString()}</td>
                  <td>
                    <button className='btn btn-sm btn-danger' onClick={()=>handleDelete(details._id)}>Delete</button>
                    <button className='btn btn-sm  btn-warning mx-2' onClick={()=>handlePrint (index)}>Print</button>
                  </td>
                </tr>
              )
            })}
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FrontPage