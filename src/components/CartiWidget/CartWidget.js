import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import React, { useContext } from "react";

export default function CartWidget(){
    const {cart} = useContext(CartContext);

    return(
        <div>
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className= "carrito">
                    {cart.length}
                </span>
            </Link>
        </div>
    )
}