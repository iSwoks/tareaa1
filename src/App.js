import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/">
          <ItemListContainer greeting="¡Bienvenidos a mi tienda en línea!" />
        </Route>
      </div>
    </Router>
  );
}

export default App;
