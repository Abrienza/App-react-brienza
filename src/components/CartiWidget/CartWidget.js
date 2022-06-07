import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import React, { useContext } from "react";

export default function CartWidget(){
    const {totalProducts} = useContext(CartContext);

    return(
        <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            {
                totalProducts !== 0 &&
                <span className= "carrito">
                    {totalProducts}
                </span>
            }
        </Link>
    )
}