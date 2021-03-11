import './App.scss';
import firebase from './firebase.js';
import { useState, useEffect, Fragment } from 'react';
import Nav from './Nav';
import Plant from './Plant';
import CartItems from './CartItems';
import Header from './Header';
import Footer from './Footer';


function App() {
  const [plantsArray, setPlantsArray] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (data) => {
      const plantData = data.val();
      const plantFile = plantData.store;
      const plantBag = [];
      for (let plant in plantFile) {
        plantBag.push({
          img: plantFile[plant].img,
          title: plantFile[plant].title,
          price: plantFile[plant].price,
          inventory: plantFile[plant].inventory,
          id: plantFile[plant].id,
        });
      };
      setPlantsArray(plantBag);
    });
  }, []);

  const addToCart = (cartItem) => {
    const newCart = [...cart];
    newCart.push({
      title: cartItem.title,
      image: cartItem.img,
      price: cartItem.price,
      inventory: cartItem.inventory
      //unique property for each item 
    });
    setCart(newCart);
    //updateDatebase(cartItem)
  };

  //THIS FUNCTION IS FOR UPDATE DATABASE WITH CHOSEN ITEMS I WILL WORK LATER ON A STRECHICAL GOALS
  // const updateDatebase = (cart) => {
  //   const dbRef = firebase.database().ref('cart')
  //   dbRef.push(cart.title);
  // }

  // const removeFromCart = (cartItem) => {
  //   console.log(cartItem);
  //   const removeCart = [...cart];
  // const update = removeCart.filter((item)=>{
  // )
  // }
  //   removeFromCart = {() => removeFromCart(cart)
  // }
  // const removeDatebase = (cart) => {
  //   const dbRef = firebase.database().ref('cart')
  //   dbRef.remove(cart);

  //Strechical Goals
  //const [total, setTotal] = useState(0);
  // console.log(total);
  // const cartTotal = () => {
  //   const copyOfCart = [...cart];
  //   console.log(copyOfCart);
  //   copyOfCart.map((cart, index) => {
  //     const cartData = cart.price + 1;
  //     const parseData = parseInt(cartData);
  //     console.log(parseData);
  //   })
  // }
  // cartTotal();
  // }

  return (
    <>
      <Nav cart={cart} showCart={showCart} setShowCart={setShowCart} />
      <Header><h1 className="heading">Plant House</h1></Header>
      <section className="plantStore wrapper">
        {plantsArray.map((plantStore, index) => {
          return (
            <Fragment key={index}>
              <Plant plantStore={plantStore} key={index} addToCart={() => addToCart(plantStore)} />
              {
                showCart ? <CartItems plantStore={plantStore} cart={cart} /> : null
              }
            </Fragment>
          )
        })};
      </section>
      <Footer />
    </>
  )
};

export default App;
