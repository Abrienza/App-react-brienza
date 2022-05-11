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
            <h2>
            CONTADOR
            </h2>
            <div>
                <div className="numero">
                    {count}
                </div>
                <div>
                    <input type="button" value="Quitar" onClick={handleResto} />
                    <input type="button" value="Sumar" onClick={handleSumo} />                    
                </div>
            </div>
            <div className="agregar">
                <input type="button" value="Agregar al Carrito" onClick={esteClick}/>
            </div>
        </div>
    )}      