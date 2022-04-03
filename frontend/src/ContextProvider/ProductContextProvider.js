import React, { useReducer} from "react";
import axios from "axios";

import ProductContext from "../Context/ProductContext";


const INITIAL_STATE = "initialState";
const SAVE_NEW_PRODUCT = "saveNewProduct";

async function productsReducer(state,action){
    switch (action.type) {
        case SAVE_NEW_PRODUCT :
            {
                const products = state;
                products.push(action.newProduct)
                return products;
            }
            case INITIAL_STATE:
            {
                const productValue = await axios
            .get('http://localhost:4000/products/findAll')
            .then(res=>{
                console.log(res)
                return res.data.response
            })
            return productValue ;
            }

        default:
            {
                return state;
            }
    }
}


function ProductContextProvider({children}){

    const [productsState, setProductsState] = useReducer(productsReducer,[]);

    function saveNewProduct(newProduct){
        setProductsState({type: SAVE_NEW_PRODUCT,
        newProduct: newProduct })
    }

    function initialState(){
        setProductsState({type: INITIAL_STATE,
            })
    }

    return (
        <ProductContext.Provider value={{
            products: productsState,
            saveNewProduct: saveNewProduct,
            initialState:initialState
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;