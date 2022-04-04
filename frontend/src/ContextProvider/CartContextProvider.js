import React, { useReducer, useEffect, useState} from "react";
import axios from "axios";

import CartContext from "../Context/CartContext";

const SAVE_NEW_CART = "saveNewCart";
const INITIAL_STATE = "initialState";

async function cartReducer(state,action){
    switch (action.type) {
        case SAVE_NEW_CART :
            {
                const cart = state;
                cart.push(action.newCart)
                return cart;
            }
        case INITIAL_STATE:
            {
                const cartValue = await axios
            .get('http://localhost:4000/cart/findAll')
            .then(res=>{
                console.log(res)
                return res.data.response
            })
            return cartValue ;
            }
        default:
            {
                return state;
            }
    }
}


function CartContextProvider({children}){

    const [cartsState, setCartsState] = useReducer(cartReducer,[]);

    function saveNewCart(newCart){
        setCartsState({type: SAVE_NEW_CART,
        newCart: newCart })
    }

    function initialState(){
        setCartsState({type: INITIAL_STATE,
            })
    }

    return (
        <CartContext.Provider value={{
            carts: cartsState,
            saveNewCart: saveNewCart,
            initialState:initialState

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;