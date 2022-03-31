import React from "react";
import "./home.scss";

import ProductList from "../components/ProductList/ProductList";

function Home(){
    return (
        <div className="bodyHome">
            <p>
                Home div
            </p>
            <div className="row squareHome">
                <div className="col-8 items">
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