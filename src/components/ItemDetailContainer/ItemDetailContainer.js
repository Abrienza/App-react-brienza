import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export default function ItemDetailContainer({productId}) {

    const [product, setProduct] = useState({})
    const [charge, setCharge] = useState(false)

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
