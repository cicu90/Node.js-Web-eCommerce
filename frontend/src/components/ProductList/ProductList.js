import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ProductList.scss";

import ItemCard from "../ItemCard/ItemCard";



function ProductList(
){
    const [productsArray, setProductsArray]= useState([])

    useEffect(()=>{
        let products = async ()=>{
            const {data}= await axios
            .get('http://localhost:4000/products/findAll')
            setProductsArray(data.response)
            console.log(data.response)
        }
        products()
    },[])

    return(
        <section className="row">
                {productsArray.map((item) =>((
                    <ItemCard
                        imgSrc = {"https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"}
                        name= {item.title}
                        description={item.description}
                        price= {item.price}
                        >
                    </ItemCard>
                )))}
        </section>
    )
}

export default ProductList;