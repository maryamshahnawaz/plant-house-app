import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react';
// import CartItems from "./CartItems";
const Nav = ({ cart, showCart, setShowCart, }) => {
  return (
    <nav className="navBar">
      <button onClick={() => setShowCart(!showCart)} className="iconBtn"><FontAwesomeIcon icon={faShoppingCart} className="icon" aria-label="shopping cart" /></button>
      <li>({cart.length})</li>
    </nav>
  )
}
export default Nav;
