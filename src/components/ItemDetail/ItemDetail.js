import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function ItemDetail ({product}) {
    
    const {addProduct} = useContext(CartContext);
    
    const [goToCart, setGoToCart] = React.useState(false);
    
    const onAdd = (amount) => {
        addProduct({...product, amount: amount})
        setGoToCart(true);
    };

    return (
        <div>
            <Card className="itemDetailGeneral" border="dark" style={{ width: '25rem', borderBottomRightRadius: "30%", borderTopLeftRadius: "30%"}}>
            <Card.Img variant='bottom' style={{ width: '20rem', marginTop: "1rem"}} src={product.image} alt={product.name}/>
            <Card.Body className="text-center">
                <Card.Title style={{ width: '20rem', margin: "1rem", fontSize:"2rem"}}>{product.title}</Card.Title>
                <Card.Text style={{ width: '22rem'}}>
                    Descripción: {product.description}
                </Card.Text>
                <Card.Text>
                    Stock: {product.stock}
                </Card.Text>
                <Card.Text>
                    Precio: AR$ {product.price}
                </Card.Text>

                {
                    goToCart ?
                    <>
                    <Card.Text style={{ width: '22rem', color: "#3DAF08"}}>
                    ESTAS A UN PASO DE TENER TU PRODUCTO!!!
                    </Card.Text>

                    <Link to='/cart'>
                        <Button
                            className= "buttonGeneral"
                            variant="secondary">Finalizar Compra</Button>
                    </Link>
                    </> :
                    <ItemCount onSubmit={() => addProduct(product)} initial={1} stock={product.stock} onAdd={onAdd} />
                }
                <Card.Text>
                    <Link to='/'>
                        <Button className= "buttonGeneral" variant="secondary">Seguir comprando</Button>
                    </Link>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}
