import React from "react"
import Item from "../Item/Item"


export default function ItemList ({products}) {
    
    return (
        <>
        <h3>
            Lista de Productos
        </h3>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap',alignItems:'center'}}>
            {products.map((product, index) => {
                return (
                    <Item product={product} key={product.id}/>
                )
                })}
        </div>
        </>
    )
}