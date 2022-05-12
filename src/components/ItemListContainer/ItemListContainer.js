import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList"

import {products_json} from "../../data/productos"

export default function ItemListContainer({mensaje}) {

    const [products, setProducts] = React.useState([]);

    const task = new Promise ((resolve, rejected) => {
        setTimeout(() => {
            resolve(products_json);
        }, 2000)
    })
      
    task.then((result) => {
        setProducts(result);
    }, err => {
        console.log(err)
    }).catch((err) =>{
        console.log(err)
    })

    return (
        <Container className="itemlist-container">
            <div className="header">
                {mensaje}
            </div>
            <div className="body">
                <ItemList products={products} />
            </div>            
        </Container>

    )}    


