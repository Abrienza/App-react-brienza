import React, { useContext, useState, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc, writeBatch, doc } from "firebase/firestore";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function CheckOut(){
    
    const navigate = useNavigate();

    const {cart, totalProducts, totalPrice, clearAll} = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        country: ""
    });

    const [edited, setEdited] = useState({
        firstname: false,
        lastname: false,
        email: false,
        email2: false,
        phone: false,
        country: false
    });

    const [validatedField, setvalidatedField] = useState({
        firstname: false,
        lastname: false,
        email: false,
        email2: false,
        phone: false,
        country: false
    });    

    const db = getFirestore();

    // Guardo los datos del formulario
    const handleChange = (event) => {  
        // Evita la accion por defecto del campo editado
        event.preventDefault();

        // Actualizo valores de campos
        const {name, value} = event.target;
        if (name !== "email2") {
            setBuyer({...buyer, [name]: value});
        };

        // Actualizo lista de campos editados
        setEdited({...edited, [name]: true});

        // Valido el campo
        validate(name, value)
    }
    
    const validate = (name, value) => {
        // Valida el formulario
        switch (name) {
            case 'firstname':
                setvalidatedField({...validatedField, [name]: !!value});
                break;
            case 'lastname':
                setvalidatedField({...validatedField, [name]: !!value});
                break;
            case 'email':
                setvalidatedField({...validatedField, [name]: !!value});
                break;
            case 'phone':
                setvalidatedField({...validatedField, [name]: !!value});
                break;
            case 'country':
                setvalidatedField({...validatedField, [name]: !!value});
                break;
            case 'email2':
                setvalidatedField({...validatedField, [name]: buyer.email === value});
                break;
            default:
                console.log(`Campo desconocido: ${name}`);
        }
    }

    const validated = useMemo(
        () => Object.values(validatedField).reduce(
            (previousValue, currentValue) => previousValue && currentValue,
            true
        ),
        [validatedField]
    );

    // Accion que se ejecuta al hacer click en el boton finalizar compra
    const handleSubmit = (event) => {
        
        // evita que el formulario haga una redireccion
        event.preventDefault();

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

    // Batch update de productos una vez generada la orden
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
                    <Form.Control
                        name="firstname" 
                        onChange={handleChange} 
                        type="name" 
                        placeholder="Enter first name"
                        isInvalid={edited.firstname && !validatedField.firstname}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridSurname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        name="lastname"
                        onChange={handleChange}
                        type="name" 
                        placeholder="Enter last name"
                        isInvalid={edited.lastname && !validatedField.lastname}
                    />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        onChange={handleChange} 
                        type="email" 
                        placeholder="Enter email"
                        isInvalid={edited.email && !validatedField.email}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email confirmation</Form.Label>
                    <Form.Control
                        name="email2"
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter email"
                        isInvalid={edited.email2 && !validatedField.email2}
                    />
                </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        name="phone"
                        onChange={handleChange} 
                        type="phone" 
                        placeholder="Enter phone"
                        isInvalid={edited.phone && !validatedField.phone}
                    />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                    name="country"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter country"
                    isInvalid={edited.country && !validatedField.country}
                />
            </Form.Group>
            </Row>

            <Button
                type="submit" 
                disabled={!validated} 
                className="buttonGeneral" 
                variant="secondary">Finalizar Compra</Button>
            
            <Link to="/cart">
                <Button 
                    variant="secondary" 
                    className="buttonGeneral">Volver al carrito</Button>
            </Link>

        </Form>
    )
}