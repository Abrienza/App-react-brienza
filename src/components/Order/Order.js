import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { INITIAL, LOADING, ORDER_READY, NOT_FOUND, ERROR } from "../../constants/constants";
import EmptyState from "../EmptyState/EmptyState";

export default function Order({orderId}){

    const [state, setState] = useState(INITIAL)
    const [order, setOrder] = useState({})

    useEffect(() => {

        const db = getFirestore();
        const orderQuery = doc(db, 'orders', orderId);
    
        setState(LOADING);

        getDoc(orderQuery).then(response => {
            if (!response.exists()) {
                setState(NOT_FOUND);
            } else {
                setOrder({ id: response.id, ...response.data() });
                setState(ORDER_READY);
            }
        }).catch((err) => {
            console.log('Error:', err);
            setState(ERROR);
        });
    
      }, [orderId]);

    return (
        <>
        {
            state == INITIAL || state == LOADING ? <Spinner animation="border" variant="danger" /> : 
            state == NOT_FOUND ? <EmptyState/> :
            <>
                <Card className="text-center">
                    <Card.Body>
                        <h2>Su compra fue realizada con exito, el número de orden es: {orderId} </h2>
                        <div>Total unidades: {order.totalProducts}</div>
                        <div>Total precio: AR$ {order.totalPrice}</div>
                    </Card.Body>
                </Card>

                <h2>Detalle de la compra</h2>

                {
                    order.products.map((product) =>
                        <Card key={product.id} className="text-center">
                        <Card.Body>
                            <Card.Text>
                                Producto: {product.title}
                            </Card.Text>
                            <Card.Text>
                                Precio unitario: AR$ {product.price}
                            </Card.Text>
                            <Card.Text>
                                Cantidad: {product.amount}
                            </Card.Text>
                        </Card.Body>                        
                        </Card>
                    )
                }

                <h2>Detalle del comprador</h2>
                <Card key={order.buyer.name} className="text-center">
                    <Card.Body>
                        <Card.Text>
                            Last Name: {order.buyer.lastname}
                        </Card.Text>
                        <Card.Text>
                            Phone: {order.buyer.phone}
                        </Card.Text>
                        <Card.Text>
                            Country: {order.buyer.country}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Link to="/">
                            <Button
                                variant="secondary"
                                className="buttonGeneral">Click aquí para volver a Inicio</Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </>
        }
        </>
    )
}