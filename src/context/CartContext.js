import React, { createContext, useState, useMemo } from "react";

const CartContext = createContext();

const {Provider} = CartContext;

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    
    const addProduct = (product) => {
        // Filter crea un nuevo array con todos los elementos que pasan la condicion
        const newCart = cart.filter(oldProduct => oldProduct.id !== product.id);
        newCart.push(product);
        setCart(newCart)
    };

    const removeProduct = (id) => {       
        const newCart = cart.filter(oldProduct => oldProduct.id !== id);
        setCart(newCart)
    };

    const clearAll = () => {
        setCart([])
    };

    // UseMemo memoriza el calculo y actualiza cuando cart se actualiza
    const totalProducts = useMemo(
        // Reduce computa un unico valor sobre todo el array
        () => cart.reduce(
            (previousValue, currentValue) => previousValue + currentValue.amount,
            0), // Valor inicial
        [cart]);

    const totalPrice = useMemo(
        () => cart.reduce(
            (previousValue, currentValue) => previousValue + (currentValue.amount * currentValue.price),
            0), // valor inicial
        [cart]);

    return (
        <Provider value={{cart, addProduct, removeProduct, clearAll, totalProducts, totalPrice}}>
            {children}
        </Provider>
    )
}

export {CartContext, CartProvider}