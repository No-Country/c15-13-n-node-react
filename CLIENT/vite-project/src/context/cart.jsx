/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
//import { cartReducer, cartInitialState } from '../reducers/cart.js'
export const CartContex = createContext()

// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider({ children }) {
    //const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
    const [cart, setCart] = useState([]);

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

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
    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const discountOneProduct = (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id);

        if (cart[productInCartIndex].quantity === 1) {
            return setCart(prevState => prevState.filter(item => item.id !== product.id))
        }
        const newCart = structuredClone(cart)
        newCart[productInCartIndex].quantity -= 1
        return setCart(newCart);
    }

    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    };

    return (
        <CartContex.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            discountOneProduct,
            clearCart,
            calculateTotalPrice,
            checkProductInCart
        }}
        >
            {children}
        </CartContex.Provider>
    )
}

