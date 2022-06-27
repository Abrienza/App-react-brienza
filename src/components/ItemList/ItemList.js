import React from "react"
import Item from "../Item/Item"


export default function ItemList ({products}) {
    
    return (
        <div className= "ItemListGeneral">
            {products.map((product, index) => {
                return (
                    <Item product={product} key={product.id}/>
                )
                })}
        </div>
    )
}