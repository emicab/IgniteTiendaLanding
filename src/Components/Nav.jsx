import React from 'react'
import { FaCartShopping, FaUserLarge } from "react-icons/fa6";
import '../Styles/styles.css'

const Nav = () => {
  return (
    <nav>
      <img src="./Ignite_logo.png" alt="logo Ignite Indumentaria" id='logoHome' />
      <div className="links">
        <ul>
          <li>Productos</li>
          <li>Personalizá</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="cart-login">
        <span className='ico_cart'><FaCartShopping/></span>
        <span className='ico_logIn'><FaUserLarge/></span>
      </div>
    </nav>
  )
}

export default Nav