import React, { useState, useEffect } from "react";



import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/Home';

import useLocalStorage from "./hooks/useLocalStorage";
import ProductsContextProvider from './ContextProvider/ProductContextProvider';
import loadLocalStorageItems from "./utils/loadLocalStorageItems";

function buildNewCartItem(cartItem) {
  

  return {
    id: "",
    title:"",
    img: "",
    price: "",
    unitsInStock: "",
    createdAt: "",
    updatedAt:"",
    quantity: 1,
  };
}

const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

function App() {
  const [cartItems, setCartItems] = useState(() =>
    loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
  );

  // save in the localStorage the state values
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  // Add products to cart
  function handleAddToCart(product) {
    if(!product) return;
    const prevCartItem = cartItems.find((item) => item.id === product.id);

    if (prevCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id !== product.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity?item.quantity + 1:1,
        };
      });
      // edit the cartItem state
      setCartItems(updatedCartItems);
      return;
    }

    const updatedProduct = buildNewCartItem(product);
    setCartItems((prevState) => [...prevState, updatedProduct]);
  }


  return (
    <ProductsContextProvider>

    <div className="App">
        <Home
        handleAddToCart={handleAddToCart}
        />
    </div>
    </ProductsContextProvider>
  );
}

export default App;
