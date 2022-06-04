import React from "react";
import { CartContext } from "../CartContext/CartContext"

export default function ItemCount({initial, stock, onAdd, onSubmit}) {
//no poner acá onSubmit para que sea mas reutilizable
    const [count, setCount] = React.useState(initial);

    const handleResto = () => {
        if(count > initial) {
            setCount(count - 1);
        }
    }
    
    const handleSumo = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const addToCart = () => {
        if (stock > 0) {
            onAdd(count);
        }
    }

    return (
        <div className= "contenedorContador">
            <div>
                <div>
                    <input type="button" value=" - " onClick={handleResto} />
                    <span> {count} </span>
                    <input type="button" value=" + " onClick={handleSumo} />                    
                </div>
            </div>
            <div className="agregar">
                <input type="button" value="Agregar al Carrito" onClick={addToCart}/>
            </div>
        </div>
    )}      