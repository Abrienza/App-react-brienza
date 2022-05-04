export default function Navbar() {
    
    const headerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        listStyle: "none",
        padding: "1rem",
    };

    return (
              
        <header>
            <div className= "logo">
                Logo
            </div>
            <div>
                <ul style={ headerStyle }>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Sobre nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
        </header>
    );
};