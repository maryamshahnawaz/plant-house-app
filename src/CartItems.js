import React, { Fragment } from 'react'
const CartItems = ({ cart, index }) => {
  return (
    <section className="cartDesign" >
      {
        cart.map((item, index) => {
          const { title, image, price, id } = item;

          return (
            <Fragment key={index}>
              <div key={id} className="items">
                <div className="cartImage">
                  <img src={image} alt={title} />
                </div>
                <div className="cartInfo">
                  <div className="cartItemPrice">
                    <p>{title}</p>
                    <p className="price">Price: {price}</p>
                  </div>
                  <button className="removeBtn">remove</button>
                </div>
              </div>
            </Fragment>
          )
        })}
    </section >
  )
}
export default CartItems;