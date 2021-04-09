import React, { Fragment } from 'react';
import firebase from './firebase.js';
import { useState } from 'react';
const CartItems = ({ cart, index, plantsArray, setCart }) => {
  const [total, setTotal] = useState(0);

  const average = cart.reduce((total, amount, index, array) => {
    total += amount;
    if (index === array.length - 1) {
      return total / array.length;
    } else {
      return total;
    }
  });
  console.log(average)


  // const [total, setTotal] = useState(0);
  // const cartTotal = () => {
  //   const copyOfCart = [...cart];

  //   cart.reduce((sum, i) => {
  //     console.log(sum)
  //     console.log(i)
  //     sum += i.count * i.price
  //   }, 0)


  // }
  // console.log(cartTotal);


  // cartTotal()
  const removeFromCart = (uniqueKey) => {
    const removeCart = [...cart];
    console.log("remove cart", removeCart);
    const updatedCart = removeCart.filter(item => {
      console.log("Cart Item uniqueKey", uniqueKey);
      console.log("Item uniqueKey", item.uniqueKey);
      return uniqueKey !== item.uniqueKey
    });

    setCart(updatedCart);
  }

  return (
    <section className="cartDesign" >
      {
        cart.map((item, index) => {
          const { title, image, price, id, uniqueKey } = item;

          return (
            <Fragment key={index}>
              <div key={id} className="items">
                <div className="cartImage">
                  <img src={image} alt={title} />
                </div>
                <div className="cartInfo">
                  <div className="cartItemPrice">
                    <p>{title}</p>
                    <p className="price">Price: ${price}</p>
                  </div>
                  <button className="removeBtn" onClick={() => removeFromCart(uniqueKey)}>remove</button>
                  <span>Qty:</span>
                </div>
              </div>
            </Fragment>
          )
        })}
      {/* <p>Total:${cartTotal}</p> */}
    </section >
  )
}
export default CartItems;