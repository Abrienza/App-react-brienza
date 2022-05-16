import React, { useEffect, useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { task } from "../../mocks/FakeApi";

export default function ItemListContainer({mensaje}) {

    const [products, setProducts] = React.useState([]);

    const [charge, setcharge] = useState(false)
    
    React.useEffect(()=>{
    setcharge(true)
    task
        .then((result) => {
        setProducts(result);
        console.log('respuesta', result)
    })
        .catch((err) =>{
        console.log('respuesta', err)
    })

        .finally((chau) => setcharge(false))

    },[])


    return (
        <Container className="itemlist-container">
            <main className="main">
                <div className="title">
                    {mensaje}
                </div>
                {charge ? <p>Cargando... </p> : <ItemList products={products}/>}
                
            </main>            
        </Container>

    )}    


