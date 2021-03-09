import firebase from './firebase.js';
//import the useEffect and useState Hook from the React library
import Plant from './Plant';
import Header from './Header';
import { useState, useEffect } from 'react';
import Nav from './Nav';


const PlantsData = () => {
  const [plantsArray, setPlantsArray] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (data) => {
      console.log(data);
      const plantData = data.val();
      console.log(plantData)
      const plantFile = plantData.store;
      const plantBag = [];
      for (let plant in plantFile) {
        console.log(plant);
        console.log(plantFile);
        plantBag.push({
          img: plantFile[plant].img,
          title: plantFile[plant].title,
          price: plantFile[plant].price,
          inventory: plantFile[plant].inventory,
          id: plantFile[plant].id,
        })
      }
      console.log(plantBag);
      setPlantsArray(plantBag);
    });
  }, []);
  const addToCart = (cartItem) => {
    console.log(cartItem);
    const newCart = [...cart];
    newCart.push({
      title: cartItem.title,
      image: cartItem.img,
      price: cartItem.price,
      inventory: cartItem.inventory
    });
    setCart(newCart);
    console.log(cart);
    updateDatebase(cartItem)
  }


  const updateDatebase = (cart) => {
    const dbRef = firebase.database().ref('cart')
    dbRef.push(cart.title);
  }
  // dbRef.update(newCart)
  // console.log(newCart)
  // dbRef.update({
  // "plant": {
  //     "title": "i m plant",
  //     "img": "https:www.logo.com"
  //   }

  // })
  // setCart([...cart, cartItem])
  // }



  return (
    <>
      <Nav cart={cart} />
      <Header><h1 className="heading">Plant House</h1></Header>
      <section className="plantStore wrapper">
        {plantsArray.map((plant) => {
          return (
            <Plant addToCart={() => addToCart(plant)} plant={plant} />
          )
        })}
      </section>
    </>
  )
}

export default PlantsData;