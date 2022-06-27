import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';


export default function CartWidget(){
    const {cart, removeProduct, clearAll, totalProducts, totalPrice} = useContext(CartContext);

    return(
        <div className="text-center">
            { 
                cart.map((product) =>
                    <Card key={product.id}>
                        <Card.Body>
                            <Card.Text>
                                Producto: {product.title}
                            </Card.Text>
                            <Card.Text>
                                Precio unitario: AR$ {product.price}
                            </Card.Text>
                            <Card.Text>
                                Cantidad: {product.amount}
                            </Card.Text>
                            <Button variant="dark" onClick={() => removeProduct(product.id)}>Quitar</Button>
                        </Card.Body>                        
                    </Card>
                )
            }
            {
                totalProducts ?
                <>  
                    <Card className="text-center">
                        <Card.Body>
                            <div>Total cantidad: {totalProducts}</div>
                            <div>Total precio: AR$ {totalPrice}</div>

                            <Card.Footer className="text-muted">
                                <Link to="/CheckOut">
                                    <Button className= "buttonGeneral" variant="success">CheckOut</Button>
                                </Link>
                                <Button className= "buttonGeneral" variant="danger" onClick={clearAll}>Borrar carrito</Button>
                                <Link to="/">
                                    <Button className= "buttonGeneral" variant="secondary">Click aquí para seguir comprando</Button>
                                </Link>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </> :
                <>
                    <Card className="text-center">
                        <Card.Body>
                            <h2>El carrito esta vacío</h2>
                            <Link to={"/"}>
                                <Button className= "buttonGeneral" variant="secondary"> Volver a inicio</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </>
                
            }

        </div>
    )
}