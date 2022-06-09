import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { getProductsByCategory } from "../../mocks/FakeApi";

export default function ItemListContainer({ categoryId }) {

    const [products, setProducts] = useState([]);

    const [charge, setcharge] = useState(false)

    useEffect(() => {
        setcharge(true)
        getProductsByCategory(categoryId)
            .then((result) => {
                setProducts(result);
            })
            .catch((err) => {
                console.log('respuesta', err)
            })
            .finally((chau) => setcharge(false))
    }, [categoryId])

    return (
        <Container className="itemlist-container">
            <main className="main">
                {charge ? <p>Cargando... </p> : <ItemList products={products} />}
            </main>
        </Container>

    )
}


