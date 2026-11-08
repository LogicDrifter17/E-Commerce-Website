import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div id="Header">
      
     <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/ProductsDetails">Product Details</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Orders">Orders</Link> 
    </div>
  )
}

export default Header