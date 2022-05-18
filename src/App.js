import React from "react"
import NavBar from "./components/NavBar/NavBar"
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer mensaje="Aqui encontrará todo lo que busca"/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
