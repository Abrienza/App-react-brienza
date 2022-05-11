import React from "react";
import ItemCount from "../ItemCount/ItemCount"

export default function ItemListContainer() {

    return (
        <div>
            <ItemCount 
                initial={0}
                stock={1} 
                onAdd={ (count) => { console.log("Se agregegaron " + count + " unidades") } }
            />
            <h1>
                Aquí pondré el catálogo de productos luego
            </h1>
        </div>
    )}    


