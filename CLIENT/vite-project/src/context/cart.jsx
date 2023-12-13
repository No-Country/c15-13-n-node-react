/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
//import { cartReducer, cartInitialState } from '../reducers/cart.js'
export const CartContex = createContext()


/* function useCartReducer() {
    const [state, dispatch] = useState(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, clearCart }
} */

// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider({ children }) {
    //const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart);
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }
    const clearCart = () => {
        setCart([])
    }
    const removeFromCart = () => { }

    return (
        <CartContex.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContex.Provider>
    )
}

