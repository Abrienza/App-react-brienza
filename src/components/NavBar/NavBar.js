import React from "react";
import CartWidget from "../CartiWidget/CartWidget";
import { Link } from "react-router-dom";

export default function NavBarAye() {

    const headerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        listStyle: "none",
        padding: "1rem",
    };

    return (
        <header className= "header">
            <div className= "logo">
                <ul>
                    <li ><Link to="/">DODONEA</Link></li>
                    <li ><p>Las mejores Plantas</p></li>
                </ul>
            </div>
            <div>
                <ul style={ headerStyle }>
                    <li><Link to="/category/oferta">Ofertas</Link></li>
                    <li><Link to="/category/interior">Interior</Link></li>
                    <li><Link to="/category/exterior">Exterior</Link></li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div> 
        </header>
    );
};
