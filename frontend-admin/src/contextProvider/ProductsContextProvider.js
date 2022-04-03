import React, { useReducer } from "react";
import ProductsContext from "../context/ProductsContext"
import loadLocalStorageItems from "../utils/loadLocalStorageItems";

const INITIALVALUE = "initialValue";
const HANDLEDOWNVOTE = "handleDownVote";
const HANDLEUPVOTE = "handleUpVote";
const HANDLESETFAVORITE = "handleSetFavorite";
const SAVENEWPRODUCT = "saveNewProduct";


function productReducer(state, action) {
  switch (action.type) {
    case INITIALVALUE: {

      return action.data;
    }
    case HANDLEDOWNVOTE: {
        const updatedProducts = state.map((product) => {
          if (
            product.id === action.productId &&
            product.votes.downVotes.currentValue <
              product.votes.downVotes.lowerLimit
          ) {
            return {
              ...product,
              votes: {
                ...product.votes,
                downVotes: {
                  ...product.votes.downVotes,
                  currentValue: product.votes.downVotes.currentValue + 1,
                },
              },
            };
          }
    
          return product;
        });
        return updatedProducts ;
    }
    case HANDLEUPVOTE: {
        const updatedProducts = state.map((product) => {
          if (
            product.id === action.productId &&
            product.votes.upVotes.currentValue < product.votes.upVotes.upperLimit
          ) {
            return {
              ...product,
              votes: {
                ...product.votes,
                upVotes: {
                  ...product.votes.upVotes,
                  currentValue: product.votes.upVotes.currentValue + 1,
                },
              },
            };
          }
    
          return product;
        });
    
        return (updatedProducts);
    }
    case HANDLESETFAVORITE: {
      const updatedProducts = state.map((product) => {
        if (product.id === action.productId) {
          return {
            ...product,
            isFavorite: !product.isFavorite,
          };
        }
  
        return product;
      });
  
      
      return updatedProducts;

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

  

  const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
  const products = loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []);
  const [productsState, setProductsState] = useReducer(productReducer, products)

  function initialValue(data){
    setProductsState({
      type: INITIALVALUE,
      data: data,
    })
  }
  function handleDownVote(productId){
    setProductsState({
      type: HANDLEDOWNVOTE,
      products: productsState,
      productId: productId,
    })
  }

  function handleUpVote (productId) {
    setProductsState({
      type: HANDLEUPVOTE,
      products: productsState,
      productId: productId,
    })
  }

  function handleSetFavorite(productId) {
    setProductsState({
      type: HANDLESETFAVORITE,
      productId: productId,
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
        handleDownVote: handleDownVote,
        handleUpVote: handleUpVote,
        handleSetFavorite: handleSetFavorite,
        saveNewProduct: saveNewProduct,
      }
    } >
    {children} 
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;