import React from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer productId={3} />
    </div>
  );
}

export default App;
