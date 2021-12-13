import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer/>}
          />
          <Route
            exact
            path="/categorias/:ruta"
            element={<ItemListContainer/>}
          />          
          <Route
            exact
            path="/detalle/:idProducto"
            element={<ItemDetailContainer/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
