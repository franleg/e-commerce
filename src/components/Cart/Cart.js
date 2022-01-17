import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartTable from "../CartTable/CartTable"
import TotalTable from "../TotalTable/TotalTable"
import "./Cart.css";

const Cart = () => {
    const {cartList, vaciarCarrito} = useCartContext()

    return (
        <div>
            {cartList.length > 0 ?
                <div className="container-fluid contenedor-carrito">
                    <div class="row">
                        <div class="col-lg-12 col-xs-12 d-flex justify-content-center">
                            <CartTable />
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6 col-xs-6 text-end">
                            <Link to="/">
                                <Button className="btn-seguirComprando" variant="primary">Seguir Comprando</Button>
                            </Link>                            
                        </div>
                        <div className="col-lg-6 col-xs-6 text-start">
                            <button className="btn-vaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="titulo-total text-center">
                            TOTAL DEL CARRITO
                        </h2>
                        <div className="col-lg-12 col-xs-12 d-flex justify-content-center">
                            <TotalTable />
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-lg-12 col-xs-12 text-center">
                            <Link to="/checkout">
                                <Button className="btn-finalizarCompra">Finalizar Compra</Button>
                            </Link>
                        </div>
                    </div>           
                </div>
                :
                <div className="text-center">
                    <h2 className="texto-carrito">El carrito de compras está vacío</h2>
                    <hr className="hr-carrito"/>
                    <Link to="/">
                            <Button className="btn-volver" variant="primary">Volver al Inicio</Button>
                    </Link>

                </div>
            } 
        </div>
    )
}

export default Cart

