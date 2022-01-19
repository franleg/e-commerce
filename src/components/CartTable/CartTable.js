import { faAngleUp, faAngleDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { useCartContext } from "../../context/CartContext";
import "./CartTable.css";

function CartTable() {
    const {cartList, removeFromCart, addQuantity, subtractQuantity} = useCartContext()

    return (
        <>
            <Table className="table-cart">
                <thead className="thead-cart">
                    <tr className="tr-cart">
                        <th className="th-cart th-delete"></th>
                        <th className="th-cart th-img"></th>
                        <th className="th-cart th-prod">PRODUCTO</th>
                        <th className="th-cart th-prod">PRECIO</th>
                        <th className="th-cart th-prod">CANTIDAD</th>
                        <th className="th-cart th-prod">SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody className="tbody-cart">
                    {cartList.map(prod=>                
                        <tr key={prod.id} className="tr-cart">
                            <td className="td-cart td-delete"><FontAwesomeIcon icon={faTrash} className="icono-vaciar" onClick={()=> {removeFromCart(prod.id)}}/></td>
                            <td className="td-cart td-img"><Link to={`/detalle/${prod.id}`}><Card.Img variant="top" src={prod.imagen}/></Link></td>
                            <td dataLabel="PRODUCTO" className="td-cart td-prod">{prod.marca} {prod.modelo}</td>
                            <td dataLabel="PRECIO" className="td-cart td-price">${prod.precioEfectivo}</td>
                            <td dataLabel="CANTIDAD" className="td-cart td-cant">
                                <div className="cant-container">
                                    {prod.cantidad}  
                                    <div className="arrow-container">
                                        <FontAwesomeIcon icon={faAngleUp} onClick={()=> addQuantity(prod)}/>
                                        <FontAwesomeIcon icon={faAngleDown} onClick={()=> subtractQuantity(prod)}/>
                                    </div>
                                </div>                                   
                            </td>
                            <td dataLabel="SUBTOTAL" className="td-cart td-price">$ {prod.precioEfectivo * prod.cantidad}</td>
                        </tr>)}
                </tbody>
            </Table> 
        </>
    )
}

export default CartTable
