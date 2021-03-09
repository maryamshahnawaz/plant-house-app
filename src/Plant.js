const Plant = ({ addToCart, plant, cart }) => {
  const { id, img, title, price } = plant;

  return (
    <div className="plant wrapper">
      <div key={id} className="imageBox">
        <img src={img} alt={title} />
      </div>
      <h3 className="title">{title}</h3>
      <div className="box">
        <p className="price">{price}</p>
      </div>
      <button className="plantBtn" onClick={() => { addToCart(cart) }}>Add to Cart</button>
    </div>
  )
}
export default Plant;