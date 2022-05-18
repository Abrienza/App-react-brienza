import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { task2 } from "../../mocks/FakeApi";

// import axios from "axios"

export default function ItemDetailContainer() {

    const [product, setProduct] = React.useState({})

    const [charge, setcharge] = React.useState(false)

    React.useEffect(() => {
        setcharge(true)

        // TODO: Solucionar problema de CORS
        // axios.get("https://apimocha.com/item-detail-list/items").then((res) => {
        //     console.log(res.data.results);
        //     // setItemDetail(res.data.results[3])
        // })

        task2
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

