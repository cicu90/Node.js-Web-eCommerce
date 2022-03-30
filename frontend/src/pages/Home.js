import React from "react";
import "./home.scss";

import ItemCard from "../components/ItemCard/ItemCard";

function Home(){
    return (
        <div className="bodyHome">
            <p>
                Home div
            </p>
            <div className="row squareHome">
                <div className="col-8 items">
                    <div className="row">
                    <ItemCard
                    imgSrc = {"https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"}
                    >Item 1</ItemCard>
                    <div className="col">
                    <img src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png" alt="Girl in a jacket"/>
                            <p>Artículo 2</p>
                            <button>Add Cart</button>
                    </div>
                    <div className="col">
                    <img src="https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png" alt="Girl in a jacket"/>
                            <p>Artículo 3</p>
                            <button>Add Cart</button>
                    </div>
                    </div>
                </div>
                <div className="col cart">
                        <p>Cart</p>
                </div>
            </div>
        </div>
    )
}

export default Home;