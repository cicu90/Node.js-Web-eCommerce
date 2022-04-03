import React from "react";
import "./home.scss";

import ProductList from "../components/ProductList/ProductList";
import Cart from "../components/Cart/Cart";

function Home({
    handleAddToCart,
}){
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