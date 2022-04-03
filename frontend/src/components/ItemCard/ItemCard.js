import React from "react";

import "./ItemCard.scss";

import Button from "../Button/Button";


function ItemCard({
    id,
    imgSrc = "",
    name = "",
    description="",
    price = 0,
    handleAddToCart,
    ...props }) {

    function onAddToCart() {
        handleAddToCart({id});
    }

    return (
        <article className="col-3 itemCard">
            <img src={imgSrc} alt={name} />
            <p>{name}</p>
            <p className="desc">{description}</p>
            <div className="row">
                <div className="col">
                    <Button onClick={onAddToCart} name="Add Cart"></Button>
                </div>
                <div className="col">
                    <p className="price">{price} €</p>
                </div>
            </div>
        </article>
    );
}

export default ItemCard;
