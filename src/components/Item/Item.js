import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Item ({product}) {
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
                <Link to={`/item/${product.id}`}>Más info</Link>
            </Card.Body>
            </Card>
        </div>
    )
}