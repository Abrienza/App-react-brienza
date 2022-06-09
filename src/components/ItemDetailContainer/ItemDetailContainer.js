import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
//import { getProductById } from "../../mocks/FakeApi";

export default function ItemDetailContainer({productId}) {

    const [product, setProduct] = useState({})

    const [charge, setcharge] = useState(false)


    useEffect(() => {
        const db = getFirestore();

        const productsCollection = db.collection("products");
        const productsRef = doc(db, "products", "xxxxxx");
        getDoc(productsRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProduct({ id: snapshot.id, ...snapshot.data() });
            }
        })
    }, []);


    //useEffect(() => {
        //const db = getFirestore();
        //const productsCollection = db.collection("products");
        //const productsRef = productsCollection.where("categoryId", "==", categoryId);
        //const unsubscribe = productsRef.onSnapshot(snapshot => {
            //const products = snapshot.docs.map(doc => {
                //return {
                    //id: doc.id,
                    //...doc.data()
                //};
            //});
            //setProduct(product);
            //setIsLoading(false);
        //});
        //return () => unsubscribe();
    //}, [])

    //useEffect(() => {
        //setcharge(true)

        //getProductById(productId)
            //.then((result) => {
                //setProduct(result);
            //})
            //.catch((err) => {
                //console.log('Error', err)
            //})
            //.finally((_) => setcharge(false))
    //}, [])


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

