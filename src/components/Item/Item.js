import React from "react"
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom"

export default function Item ({product}) {
    return (
        <>
            <Card border="dark" style={{ width: '25rem', borderBottomRightRadius: "30%", borderTopLeftRadius: "30%"}} className="itemGeneral">
            <Card.Img variant="top" style={{ width: '20rem', marginTop: "1rem"}} src={product.image} alt={product.name}/>
            <Card.Body className="text-center">
                <Card.Title style={{ width: '20rem', margin: "1rem", fontSize:"2rem"}}>{product.title}</Card.Title>
                <Card.Text>
                    Stock: {product.stock}    
                </Card.Text>
                <Card.Text>
                    Precio: AR$ {product.price}
                </Card.Text>
                <Link to={`/item/${product.id}`} >
                    <Button className= "buttonGeneral" variant="secondary"> Más info</Button>
                </Link>

            </Card.Body>
            </Card>
        </>
    )
}