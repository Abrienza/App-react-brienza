import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export default function ItemListContainer({ categoryId }) {

    const [products, setProducts] = useState([]);
    const [charge, setCharge] = useState(false)

    useEffect(() => {

        const db = getFirestore();

        const productQuery = categoryId ?
            // Obtengo la consulta a la base de productos por categoryId
            query(  // Operacion de consulta
                collection(db, "products"), // Referencia a la coleccion sobre la cual buscamos
                where("categoryId", "==", categoryId)  // Condicion de busqueda
            ) :
            collection(db, "products"); // No defini categoryId, retorno todo

        setCharge(true);

        // Hago una llamada al store. Retorno una promesa y resuelvo.
        getDocs(productQuery).then(snapshot => {

            if (snapshot.size === 0) {
                console.log("No hay productos");  // TODO: Mostrar al usuario
            } else {
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})));
            }

        }).catch((err) => {
            console.log('Error:', err)
        }).finally(
            () => setCharge(false)
        );

    }, [categoryId]);

    return (
        <Container className="itemlist-container">
            <main className="main">
                {charge ? <p>Cargando... </p> : <ItemList products={products} />}
            </main>
        </Container>

    )
}
