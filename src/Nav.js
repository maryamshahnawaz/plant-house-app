import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const Nav = ({ cart, setCart }) => {
  const [ showCart,setShowCart] = useState(false);
  return (
    <nav className="navBar">
    <button onClick={()=>setShowCart(!showCart)}></button>
    {
      showCart ? <div>hello</div> : null
    }
      <ul className="wrapper">
        <FontAwesomeIcon icon={faCartPlus} className="icon" />
        <li>({cart.length})</li>
      </ul>
    </nav>
  )
}
export default Nav;
