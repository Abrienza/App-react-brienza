import React from "react"
import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export default function ItemDetail ({product}) {
    
    const [count, setCount] = React.useState(1);
    const onAdd = (quantityToAdd) => setCount(count + quantityToAdd);
    const addToCart = () => console.log("TODO: Agregar a carrito");

    return (
        <div>
            <Card className="item" style={{ width: '18rem', border: "2px solid #000", margin: "1rem" }}>
            <Card.Img variant="top" src={product.image} alt={product.name}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    Stock: {product.stock}
                </Card.Text>
                <Card.Text>
                    Precio: {product.price}
                </Card.Text>

                <ItemCount 
                    count={count}
                    stock={product.stock} 
                    onAdd={onAdd}
                />

                <div className="agregar">
                    <input type="button" value="Agregar al Carrito" onClick={addToCart}/>
                    <Link to={'/cart'}><input type="button" value="Finalizar Compra"/></Link>
                </div>                

            </Card.Body>
            </Card>
        </div>
    )
}