import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export default function ItemDetailContainer({productId}) {

    const [product, setProduct] = useState({});

    const [charge, setCharge] = useState(false);

    useEffect(() => {

        const db = getFirestore();

        // Busco el producto por ID
        const productQuery = doc(db, 'products', productId);
    
        setCharge(true);

        // getDoc retorna un unico valor (por eso no hay docs en el medio)
        getDoc(productQuery).then(response => {
            if (!response.exists()) {
                console.log("El producto no existe");  // TODO: Mostrar al usuario
            } else {
                setProduct({ id: response.id, ...response.data() });
            }
        }).catch((err) => {
            console.log('Error:', err)
        }).finally(
            () => setCharge(false)
        );
    
      }, [productId]);

    return (
        <>
        <h2>Detalle de Producto</h2>
        <Container className="itemdetail-container">
            <main>        
                {charge ? <Spinner
                    animation="border"
                    variant="danger" /> : <ItemDetail product={product} />}
            </main>
        </Container>
        </>
    )
}
