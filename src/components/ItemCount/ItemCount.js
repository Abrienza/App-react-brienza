import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';

export default function ItemCount({initial, stock, onAdd}) {
//no poner acá onSubmit para que sea mas reutilizable
    const [count, setCount] = useState(initial);

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
        <div>
            <div>
                <Button className= "buttonGeneral" variant="secondary" onClick={handleResto}> - </Button>
                <span> {count} </span>
                <Button className= "buttonGeneral" variant="secondary" onClick={handleSumo}> + </Button>                   
            </div>
            <div>
                <Button className= "buttonGeneral" variant="secondary" onClick={addToCart}> Agregar al Carrito </Button>
            </div>
        </div>
    )}      