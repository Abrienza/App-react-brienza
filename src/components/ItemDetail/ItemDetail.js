import React from "react"
import {Card, Button, Container} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail ({product}) {
    return (
        <div>
            <Card className="item" style={{ width: '18rem', border: "2px solid #000", margin: "1rem" }}>
            <Card.Img variant="top" src={product.image} alt={product.name}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    Stock: {product.stock}
                </Card.Text>
                <Card.Text>
                    Precio: {product.price}
                </Card.Text>

                <ItemCount 
                    initial={1}
                    stock={product.stock} 
                    onAdd={ (count) => { console.log("Se agregegaron " + count + " unidades") } }
                />

            </Card.Body>
            </Card>
        </div>
    )
}