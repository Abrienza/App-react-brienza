import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function EmptyState () {

    return (
            <>
            <Card className="itemGeneral" border="dark" style={{ width: '25rem', borderBottomRightRadius: "30%", borderTopLeftRadius: "30%"}}>
            <Card.Body className="text-center">
                <Card.Title style={{ width: '20rem', margin: "1rem", fontSize:"2rem"}}>Lo sentimos! No encontramos lo que estás buscando</Card.Title>
                <Card.Text>
                    Puedes regresar a Inicio haciendo click en el siguiente botón.
                </Card.Text>                
                <Link to={"/"}>
                    <Button
                        className="buttonGeneral"
                        variant="secondary"> Volver a inicio</Button>
                </Link>
            </Card.Body>
            </Card>
            </>
    )
}