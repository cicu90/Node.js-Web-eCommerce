import React from "react";

import Button from "../Button/Button";

function ItemCard({
    children,
    imgSrc,
}){
    return(
        <div className="col">
                        <img
                        src={imgSrc} alt={children}/>
                        <p>{children}</p>
                        <Button>Add Cart</Button>
        </div>
    )
}

export default ItemCard;