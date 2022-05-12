import React from "react";

export default function ItemCount(args) {

    const [count, setCount] = React.useState(args.initial);

    const handleResto = () => {
        if(count > args.initial) {
            setCount(count - 1);
        }
    }
    
    const handleSumo = () => {
        if (count < args.stock) {
            setCount(count + 1);
        }
    }
    
    const esteClick = () => {
        if (args.stock > 0) {
            args.onAdd(count);
        }
    }

    return (
        <div className= "contenedorContador">
            <div>
                <div>
                    <input type="button" value="-" onClick={handleResto} />
                    {count}
                    <input type="button" value="+" onClick={handleSumo} />                    
                </div>
            </div>
            <div className="agregar">
                <input type="button" value="Agregar al Carrito" onClick={esteClick}/>
            </div>
        </div>
    )}      