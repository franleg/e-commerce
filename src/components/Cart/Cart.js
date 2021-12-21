import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faAngleUp, faAngleDown, faTrash} from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import {useCartContext} from "../../context/CartContext";

const Cart = () => {

    const {cartList, vaciarCarrito} = useCartContext()

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-xs-12 d-flex justify-content-center">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="th-cart"></th>
                                <th className="th-img"></th>
                                <th className="th-prod">Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map(prod=>                
                                <tr>
                                    <td className="td-cart"><FontAwesomeIcon icon={faTrash} className="icono-vaciar"/></td>
                                    <td className="td-img"><Link to={`/detalle/${prod.id}`}><Card.Img variant="top" src={prod.imagen}/></Link></td>
                                    <td className="td-prod">{prod.marca} {prod.modelo}</td>
                                    <td className="td-price">${prod.precioEfectivo}</td>
                                    <td className="td-cant"><div className="td-container"><div className="cant-container">{prod.cantidad}</div><div className="arrow-container"><FontAwesomeIcon icon={faAngleUp} className="up"/><FontAwesomeIcon icon={faAngleDown} className="down"/></div></div></td>
                                    <td className="td-price">$ {prod.precioEfectivo * prod.cantidad}</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-12 col-xs-12">
                    <button className="btn-vaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div>
            </div> 
        </div>
    )
}

export default Cart

