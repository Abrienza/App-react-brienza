import React from "react"
import {Card, Button, Container, Row, Col} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

export default function Item ({product}) {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', border: "2px solid #000" }}>
                    <Card.Img variant="top" src={product.image}/>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            Stock: {product.stock}    
                        </Card.Text>
                        <Card.Text>
                            Precio: {product.price}
                        </Card.Text>
                        <Button variant="primary">Más info</Button>

                        <ItemCount 
                            initial={1}
                            stock={product.stock} 
                            onAdd={ (count) => { console.log("Se agregegaron " + count + " unidades") } }
                        />

                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}