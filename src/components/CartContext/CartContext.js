import React, { createContext } from "react"

export const contexto = createContext()

const INITIAL = {
    products: {},
    total: 0
}

export default function CartContext({children}) {

    // La estructura de nuestro carrito sera un objeto en donde las claves son
    // los ids de los productos y las cantidades los valores.
    // cart = {
    //    productos: {
    //        1: 10,
    //        4: 15
    //    },
    //    total: 0
    // }
    const [cart, setCart] = React.useState(INITIAL)


    const addProduct = ({id, amount}) => {
        setCart({...INITIAL, products: {...cart.products, [id]:amount}})
    }

    const removeProduct = ({id}) => {
        const { [id]: amount, ...products } = cart.products;
        setCart({...INITIAL, products: products})
    }

    const clear = () => {
        setCart(INITIAL)
    }

    return (
        <contexto.Provider value={{cart, addProduct, removeProduct, clear}}>
            {children}
        </contexto.Provider>
    )

}