import './App.scss';
import firebase from './firebase.js';
import { useState, useEffect, Fragment } from 'react';
import Nav from './Nav';
import Plant from './Plant';
import CartItems from './CartItems';
import Header from './Header';
import Footer from './Footer';
import { faHome } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [plantsArray, setPlantsArray] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showInventory, setShowInventory] = useState([]);
  const [dataBase, setDataBase] = useState([]);

  //Items added to the firebase
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
          uniqueKey: plant
        });
      };
      setPlantsArray(plantBag);
    });
  }, []);
  //Items added to the cart
  const addToCart = (cartItem) => {
    const newCart = [...cart];
    newCart.push({
      title: cartItem.title,
      image: cartItem.img,
      price: cartItem.price,
      inventory: cartItem.inventory,
      uniqueKey: cartItem.uniqueKey
    });
    setCart(newCart);
    setDataBase(cartItem);
    // updateDatebase(cartItem)
    updataInFirebase();
  };

  const updataInFirebase = () => {
    const dbRef = firebase.database().ref();
    dbRef.push(dataBase);
  }

  //Check duplicates
  const plantArrayInventory = [...plantsArray]
  const checkDuplicate = function () {
    let hasDuplicate = false;
    plantsArray.forEach((item) => {
      const savedName = item.uniqueKey
      if (savedName) {
        hasDuplicate = true;
      }
    });
    return hasDuplicate;
  };







  return (
    <>
      <div>
        <Nav cart={cart} showCart={showCart} setShowCart={setShowCart} />
      </div>

      <Header><h1 className="heading">Plant Store</h1></Header>
      <section className="plantStore wrapper">
        {plantsArray.map((plantStore, index) => {
          return (
            <Fragment key={index}>
              <Plant plantStore={plantStore} key={index} addToCart={() => addToCart(plantStore)} />
              {
                showCart ? <CartItems plantsArray={plantsArray} plantStore={plantStore} cart={cart} setCart={setCart} /> : null
              }
            </Fragment>
          )
        })
        }
      </section>
      <Footer />
    </>
  )
};

export default App;
