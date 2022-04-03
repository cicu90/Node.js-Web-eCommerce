import React, { useContext, useEffect } from "react";
import "./home.scss";

import ProductList from "../components/ProductList/ProductList";
import Cart from "../components/Cart/Cart";
import CartContext from "../Context/CartContext";

function Home({
    handleAddToCart,
}){
    const {initialState} = useContext(CartContext)
    useEffect(()=>{
        initialState()
    },[])
    return (
        <div className="bodyHome">
            <p>
                Nav bar
            </p>
            <div className="row squareHome">
                <div className="col-9 items">
                    <ProductList
                    handleAddToCart={handleAddToCart}
                    />
                </div>
                <div className="col cart">
                        <Cart/>
                </div>
            </div>
        </div>
    )
}

export default Home;