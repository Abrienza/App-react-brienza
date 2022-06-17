import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"

export default function CartWidget(){
    const {cart, removeProduct, clearAll, totalProducts} = useContext(CartContext);

    return(
        <div>
            { 
                cart.map((product) =>
                    <div key={product.id}>
                        <div>{product.title}</div>
                        <div>{product.price}</div>
                        <div>{product.amount}</div>
                        <button onClick={() => removeProduct(product.id)}>Borrar</button>                        
                    </div>
                )
            }
            {
                totalProducts ?
                <>
                    <div>Total cantidad</div>
                    <div>Total precio</div>
                    <Link to="/CheckOut">
                        <button>CheckOut</button>
                    </Link>
                    <button onClick={clearAll}>Borrar carrito</button>
                </> :
                <>
                    <div>El carrito esta vacio</div>
                    <Link to={"/"}>Volver a inicio</Link>
                </>
            }

        </div>
    )
}