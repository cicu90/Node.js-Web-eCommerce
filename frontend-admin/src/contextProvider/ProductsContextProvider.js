import React, { useReducer } from "react";
import ProductsContext from "../context/ProductsContext"
import axios from "axios";
// import loadLocalStorageItems from "../utils/loadLocalStorageItems";

const INITIALVALUE = "initialValue";
const SAVENEWPRODUCT = "saveNewProduct";
const DELETEPRODUCT = "deleteProduct";
// const UPDATEPRODUCT = "updateProduct";



async function productReducer(state, action) {


  switch (action.type) {
    case INITIALVALUE: {
      const ProductsValue = await axios.get("http://localhost:4000/products/findAll/"
      ).then((res) => {
        return res.data.response
      })
      return ProductsValue;
    }
    case DELETEPRODUCT: {
      await axios
      .get(
        "http://localhost:4000/products/delete/{{action.productId}}",
        )
        .then((res) => {
         
        })
        return productReducer({type: INITIALVALUE})
    }
    case SAVENEWPRODUCT: {
        return [action.newProduct, ...state];
    }
    default: {
      return state;
    }
  }
}

function ProductsContextProvider({
  children
}) {


  const [productsState, setProductsState] = useReducer(productReducer, [])

  function initialValue(){
    setProductsState({
      type: INITIALVALUE
    })
  }

  function saveNewProduct(newProduct) {
    setProductsState({
      type: SAVENEWPRODUCT,
      newProduct: newProduct,
    })
  }
  return ( <
    ProductsContext.Provider 
    value = {
      {
        products: productsState,  
        initialValue: initialValue,
        saveNewProduct: saveNewProduct,
      }
    } >
    {children} 
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;