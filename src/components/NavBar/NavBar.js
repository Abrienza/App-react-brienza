import React from "react";
import {Navbar, Container, Nav, NavDropdown, Offcanvas} from "react-bootstrap"
import CartWidget from "../CartiWidget/CartWidget";

export default function NavBarAye() {


    const headerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        listStyle: "none",
        padding: "1rem",
    };

    const esteClick = () => {
        alert("Bien hecho")
    }

    const Button = ({ texto }) => {
        return (
            <input type="button" value={texto} onClick={esteClick}/>
        )
    }


    return (
        <>
        <header className= "header">
            {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                DODONEA
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <Nav.Link href="#action2">Conoce mas</Nav.Link>
                <NavDropdown
                    title="Productos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                    <NavDropdown.Item href="#action3">Mas Vendidos</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Ofertas
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    Contactanos
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
    ))}
            <div>
                <ul style={ headerStyle }>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Conoce mas</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contactanos</a></li>
                </ul>
            </div>
            <div className= "logo">
                DODONEA
            </div>
            <div>
                <Button texto="Ir al Carrito"/>
                <CartWidget counter={55}/>
            </div> 
        </header>
        </>
    );
};
