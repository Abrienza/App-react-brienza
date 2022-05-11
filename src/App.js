import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensaje="Aqui encontrará todo lo que busca"/>
        <h1>
          Desafío N° 4
        </h1>
    </div>
  );
}

export default App;
