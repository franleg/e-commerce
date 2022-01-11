import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faAngleUp, faAngleDown, faTrash} from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import {useCartContext} from "../../context/CartContext";

const Cart = () => {

    const {cartList, vaciarCarrito, removerDelCarrito, totalCompra, addQuantity, subtractQuantity} = useCartContext()

    return (
        <div>
            {cartList.length > 0 ?
                <div className="container-fluid contenedor-carrito">
                    <div class="row">
                        <div class="col-lg-12 col-xs-12 d-flex justify-content-center">
                            <Table className="tabla-carrito">
                                <thead>
                                    <tr>
                                        <th className="th-cart"></th>
                                        <th className="th-img"></th>
                                        <th className="th-prod">PRODUCTO</th>
                                        <th>PRECIO</th>
                                        <th>CANTIDAD</th>
                                        <th>SUBTOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList.map(prod=>                
                                        <tr key={prod.id}>
                                            <td className="td-cart"><FontAwesomeIcon icon={faTrash} className="icono-vaciar" onClick={()=> {removerDelCarrito(prod.id)}}/></td>
                                            <td className="td-img"><Link to={`/detalle/${prod.id}`}><Card.Img variant="top" src={prod.imagen}/></Link></td>
                                            <td className="td-prod">{prod.marca} {prod.modelo}</td>
                                            <td className="td-price">${prod.precioEfectivo}</td>
                                            <td className="td-cant">
                                                <div className="td-container">
                                                    <div className="cant-container">{prod.cantidad}</div>
                                                    <div className="arrow-container">
                                                        <FontAwesomeIcon icon={faAngleUp} className="up" onClick={()=> addQuantity(prod)}/>
                                                        <FontAwesomeIcon icon={faAngleDown} className="down"onClick={()=> subtractQuantity(prod)}/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="td-price">$ {prod.precioEfectivo * prod.cantidad}</td>
                                        </tr>)}
                                </tbody>
                            </Table>
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
                            <Table className="tabla-total">
                                <tbody>
                                    <tr>
                                        <th>Envío</th>
                                        <td>
                                            <span>Envío Gratuito</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Impuesto</th>
                                        <td>
                                            <span>$0</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>TOTAL</th>
                                        <td>
                                            <span>${totalCompra()}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
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

