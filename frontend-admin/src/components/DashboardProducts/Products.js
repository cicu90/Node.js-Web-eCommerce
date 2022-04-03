import React, { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";

import ItemCard from "../ItemCard";

function ProductList({
  ...props
}) {
  const { products } = useContext(ProductsContext);
  return (
    <section className="row" {...props}>
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          shortDescription={product.shortDescription}
          upVotes={product.votes.upVotes}
          downVotes={product.votes.downVotes}
          isFavorite={product.isFavorite}
        />
      ))}
    </section>
  );
}

export default ProductList;