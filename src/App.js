import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import Cart from "./components/Cart/Cart.js";
import Checkout from "./components/Checkout/Checkout.js";
import Footer from "./components/Footer/Footer.js";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
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
            <Route
              exact
              path="/carrito"
              element={<Cart/>}
            />  
            <Route
              exact
              path="/checkout"
              element={<Checkout/>}
            />        
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
