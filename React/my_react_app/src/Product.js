import React from 'react'
import './App.css'
const Product = () => {
    const image = "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/m/b/-original-imagrdefbw6bhbjr.jpeg?q=70"
    const Pname = "Nothing Phone (2) (Dark Grey, 512 GB)  (12 GB RAM)"
    const Price = "₹49,999/-"
    const other = "+ ₹99 Secured Packaging Fee"
  return (
    <>
    <div className='product'>
    <div className='product-image'><img src={image} alt='media'></img></div>
    <div className='product-name'><h2>{Pname}</h2>
    <h3 style={{marginTop:"10px"}}>{Price}</h3>
    <p style={{fontStyle:"italic", color:"red", marginTop:"-5px"}}>{other}</p>
    <button className='btn'>Add to Cart</button>
    </div>
    </div>
    </>
  )
}

export default Product
