import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CartWidget(){
    const {cart, removeProduct, clearAll, totalProducts, totalPrice} = useContext(CartContext);

    return(
        <div>
            { 
                cart.map((product) =>
                    <Card key={product.id} className="text-center">
                    <Card.Body>
                        <Card.Text>
                            Producto: {product.title}
                        </Card.Text>
                        <Card.Text>
                            Precio unitario: {product.price}
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

                    <div>Total precio: {totalPrice}</div>
                        <Card.Footer className="text-muted">
                        <Link to="/CheckOut">
                            <Button variant="success">CheckOut</Button>
                        </Link>
                        <Button variant="danger" onClick={clearAll}>Borrar carrito</Button>
                        <br/>
                        <br/>
                        <Link to="/">
                            <Button variant="light">Click aquí para seguir comprando</Button>
                        </Link>
                        </Card.Footer>
                    </Card.Body>
                    </Card>
                </> :
                <>
                    <Card className="text-center">
                    <Card.Body>
                    <div>El carrito esta vacio</div>
                    <Link to={"/"}>Volver a inicio</Link>
                    </Card.Body>
                    </Card>

                </>
                
            }

        </div>
    )
}