const CartItems = ({ cart }) => {
  return (
    <section className="cartDesign">
      {
        cart.map((item) => {
          console.log(item);
          const { title, image, price, id, inventory } = item;
          return (
            <>
              <div key={id} className="items">
                <div className="cartImage">
                  <img src={image} alt={title} />
                </div>
                <div className="cartInfo">
                  <h4>{title}</h4>
                  <p>Price: {price}</p>
                  <p>{inventory}</p>
                </div>
              </div>
            </>
          )
        })}
      <button className="checkOut">CheckOut</button>
    </section >
  )
}
export default CartItems;