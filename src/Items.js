import React from 'react'

export default function Items({ cart }) {
  return (
    <div>
      {cart.map((item) => {
        console.log(item);
      })}
    </div>
  )
}
