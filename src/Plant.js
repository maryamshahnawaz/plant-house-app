
const Plant = ({ cart, plantStore, addToCart }) => {
  const { id, img, title, price, inventory } = plantStore;
  return (
    <>
      <div className="plant">
        <div key={id} className="imageBox">
          <img src={img} alt={title} />
        </div>
        <h3 className="title">{title}</h3>
        <p className="price">Price : ${price}</p>
        <p className="inventory">Inventory : {inventory}</p>
        <button className="plantBtn" onClick={() => { addToCart(cart, id) }}>Add to Cart</button>
      </div>
    </>
  )
}
export default Plant;