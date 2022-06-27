import React, { useContext, useState, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc, writeBatch, doc } from "firebase/firestore";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function CheckOut(){
    
    const navigate = useNavigate();

    const {cart, totalProducts, totalPrice, clearAll} = useContext(CartContext);

    const [email2, setEmail2] = useState();
    const [buyer, setBuyer] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        country: ""
    })

    const db = getFirestore();

    // Guardo los datos del formulario
    const handleChange = (event) => {  
        // evita la accion por defecto del campo editado
        event.preventDefault();
        const {name, value} = event.target;
        if (name == "email2") {
            setEmail2(value);
        } else {
            setBuyer({...buyer, [name]: value});
        }
    }
    
    const validate = () => {
        // valida el formulario
        if (buyer.email !== email2) {
            return false
        }
        return true
    }

    const validated = useMemo(validate, [buyer, email2]);

    // Accion que se ejecuta al hacer click en el boton finalizar compra
    const handleSubmit = (event) => {
        
        // evita que el formulario haga una redireccion
        event.preventDefault();

        if (!validate()) {
            console.log('fallo la validacion')
        } else {

            // crea la orden
            const order = {
                buyer,
                products: cart,
                date: new Date(),
                totalProducts,
                totalPrice,
            }
            
            const ordersCollection = collection(db, "orders");        
            
            addDoc(ordersCollection, order).then(({ id }) => {
                clearAll()
                updateStock()
                navigate(`/order/${id}`);
            })
        }

    }

    //batch update de productos una vez generada la orden
    const updateStock = () => {
        const batch = writeBatch(db); //inicio nuevo batch
        // obtener las referencias por cada item del carrito
            cart.forEach(product => { //recorro carrito
                const productRef = doc(db,"products", product.id)
                    batch.update(productRef, { //listamos el update en el batch
                        stock: product.stock - product.amount,
            }); 
        })
        batch.commit()
    }

    return (
        <Form onSubmit={handleSubmit} className="formularioCheckout">

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstname" onChange={handleChange} type="name" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSurname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastname" onChange={handleChange} type="name" placeholder="Enter last name"/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email confirmation</Form.Label>
                    <Form.Control name="email2" onChange={handleChange} type="email"
                        placeholder="Enter email" isInvalid={!validated}/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name="phone" onChange={handleChange} type="phone" placeholder="Enter phone" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control name="country" onChange={handleChange} type="text" placeholder="Enter country"/>
            </Form.Group>
            </Row>

            <Button type="submit" disabled={!validated} className= "buttonGeneral" variant="secondary">Finalizar Compra</Button>
            
            <Link to="/cart">
                <Button variant="secondary" className="buttonGeneral">Volver al carrito</Button>
            </Link>

        </Form>
    )
}