import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import "./ProductList.scss";

import ItemCard from "../ItemCard/ItemCard";
import ProductsContext from "../../Context/ProductContext";



function ProductList({
    handleAddToCart,
}
){
    const {initialState, products} = useContext(ProductsContext)
    useEffect(()=>{
        initialState()
    },[])
    // const [productsArray, setProductsArray]= useState([])

    // useEffect(()=>{
    //     let products = async ()=>{
    //         const {data}= await axios
    //         .get('http://localhost:4000/products/findAll')
    //         setProductsArray(data.response)
    //         console.log(data.response)
    //     }
    //     products()
    // },[])
 console.log(products)
    return(
        <section className="row">
                {products?.map((item) =>((
                    <ItemCard
                        id={item.id}
                        imgSrc = {"https://www.luisan.net/blog/wp-content/uploads/2014/09/color_small_mk-e1549454603143.png"}
                        name= {item.title}
                        description={item.description}
                        price= {item.price}
                        handleAddToCart={handleAddToCart}
                        >
                    </ItemCard>
                )))}
        </section>
    )
}

export default ProductList;