import React, { createContext, useState } from "react"

const CartContext = createContext();
const {Provider} = CartContext

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    
    const addProduct = (product) => {

        // filter crea un nuevo array con todos los elementos que pasan la condicion
        const newCart = cart.filter(oldProduct => oldProduct.id !== product.id);
        newCart.push(product);
        setCart(newCart)
    }

    const removeProduct = ({id}) => {
        
        // filter crea un nuevo array con todos los elementos que pasan la condicion
        const newCart = cart.filter(oldProduct => oldProduct.id !== id);
        setCart(newCart)
    }

    const clearAll = () => {
        setCart([])
    }

    return (
        <Provider value={{cart, addProduct, removeProduct, clearAll}}>
            {children}
        </Provider>
    )
}

export {CartContext, CartProvider}