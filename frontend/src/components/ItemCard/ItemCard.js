import React from "react";

import Button from "../Button/Button";

function ItemCard({
    imgSrc="",
    name= "",
    price=0,
}){
    return(
        <article className="col">
                        <img
                        src={imgSrc} alt={name}/>
                        <p>{name}</p>
                        <p>{price} €</p>
                        <Button>Add Cart</Button>
        </article>
    )
}

export default ItemCard;