import React from "react";
import "./home.scss";

import ProductList from "../components/ProductList/ProductList";

function Home(){
    return (
        <div className="bodyHome">
            <p>
                Nav bar
            </p>
            <div className="row squareHome">
                <div className="col-9 items">
                    <ProductList/>
                </div>
                <div className="col cart">
                        <p>Cart</p>
                </div>
            </div>
        </div>
    )
}

export default Home;