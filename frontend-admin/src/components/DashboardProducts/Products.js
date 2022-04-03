import React, { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";

import ItemCard from "../ItemCard";

function ProductList() {
  const { products } = useContext(ProductsContext);
  return (
    <section className="row">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          img={product.images}
          title={product.title}
          shortDescription={product.description}
          
        />
      ))}
    </section>
  );
}

export default ProductList;
