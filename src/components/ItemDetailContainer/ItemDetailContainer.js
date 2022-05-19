import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { task2 } from "../../mocks/FakeApi";

export default function ItemDetailContainer({productId}) {

    const [product, setProduct] = React.useState({})

    const [charge, setcharge] = React.useState(false)

    React.useEffect(() => {
        setcharge(true)

        // console.log(`El producto es: ${productId}`);

        task2(productId)
            .then((result) => {
                setProduct(result);
            })
            .catch((err) => {
                console.log('Error', err)
            })
            .finally((_) => setcharge(false))
    }, [])


    return (
        <Container className="item-details-container">
            <main className="main">
                <div className="title">
                    <p>Detalle de Producto</p>
                </div>                
                {charge ? <p>Cargando... </p> : <ItemDetail product={product} />}
            </main>
        </Container>

    )


}

