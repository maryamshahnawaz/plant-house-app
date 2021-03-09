import { useState } from 'react';
const Plant = ({ addToCart, plant, cart, updateDatebase }) => {
  const { id, img, title, price, inventory } = plant;

  return (
    <div className="plant wrapper">
      <div key={id} className="imageBox">
        <img src={img} alt={title} />
      </div>
      <h3 className="title">{title}</h3>
      <div className="box">
        <p className="price">{price}</p>
        <button className="inventoryBtn" onClick={() => { updateDatebase(cart) }}>{inventory}</button>
      </div>
      <button className="plantBtn" onClick={() => { addToCart(cart) }}>Add to Cart</button>
    </div>
  )
}
export default Plant;