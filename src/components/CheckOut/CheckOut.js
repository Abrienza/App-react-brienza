import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CheckOut(){
    
    const {cart} = useContext(CartContext);

    return(
        <div>
            <p>
                Anda esto?
            </p>
        </div>
    )
}