import React, { useEffect, useState } from "react";
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList"

import {products_json} from "../../data/productos"

export default function ItemListContainer({mensaje}) {

    const [products, setProducts] = React.useState([]);

    const task = new Promise ((resolve, rejected) => {
        let condition = true
        setTimeout(() => {
            if(condition){
                resolve(products_json);
            }else{
                rejected('Salió mal')
            }
        }, 2000)
    })
    
    React.useEffect(()=>{
    task
        .then((result) => {
        setProducts(result);
        console.log('respuesta', result)
    })
        .catch((err) =>{
        console.log('respuesta', err)
    })
    },[])

    return (
        <Container className="itemlist-container">
            <main className="main">
                <div className="title">
                    {mensaje}
                </div>
                <ItemList products={products}/>
            </main>            
        </Container>

    )}    


