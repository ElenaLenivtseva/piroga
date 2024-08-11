import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <h2><Link to='/'>HOME</Link></h2>
      <h2><Link to='/about'>ABOUT</Link></h2>
      <h2><Link to='/delivery'>DELIVERY</Link></h2>
      <h2><Link to='/cart'>CART</Link></h2>
      
    </div>
  )
}

export default Menu
