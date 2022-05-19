import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

export default function Prods() {
    return(
        <div className="App">
            <h2> Llegaste al listado de productos DESTACADO </h2>
            <p> Realiza la búsqueda de todo lo que necesites</p>
            <p> Selecciona las cantidades</p>
            <ItemListContainer mensaje="Aqui encontrará todo lo que busca"/>
        </div>
    )
}
