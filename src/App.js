import React from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensaje="Aqui encontrará todo lo que busca"/>
    </div>
  );
}

export default App;
