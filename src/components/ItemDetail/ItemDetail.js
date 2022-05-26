import React from "react"
import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export default function ItemDetail ({product}) {
    
    const [goToCart, setGoToCart] = React.useState(false);
    const [amountToBuy, setAmountToBuy] = React.useState(0);
    const onAdd = (amount) => {
        setAmountToBuy(amount);
        setGoToCart(true);
    }

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

                {
                    goToCart ?
                    <Link to='/cart'>Finalizar Compra</Link> :
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                }

            </Card.Body>
            </Card>
        </div>
    )
}