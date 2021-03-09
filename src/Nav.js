import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import CartItems from "./CartItems";
const Nav = ({ cart, setCart }) => {

  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <nav className="navBar">
        <button onClick={() => setShowCart(!showCart)} className="iconBtn"><FontAwesomeIcon icon={faShoppingCart} className="icon" /></button>
        <li>({cart.length})</li>
      </nav>
      {
        showCart ? <CartItems cart={cart} /> : null
      }
    </>
  )
}
export default Nav;
