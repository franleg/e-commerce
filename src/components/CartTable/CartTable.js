import { faAngleUp, faAngleDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { useCartContext } from "../../context/CartContext";
import "./CartTable.css";

function CartTable() {
    const {cartList, removerDelCarrito, addQuantity, subtractQuantity} = useCartContext()

    return (
        <>
            <Table className="table-cart">
                <thead>
                    <tr>
                        <th className="th-delete"></th>
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
                            <td dataLabel="PRODUCTO" className="td-prod">{prod.marca} {prod.modelo}</td>
                            <td dataLabel="PRECIO" className="td-price">${prod.precioEfectivo}</td>
                            <td dataLabel="CANTIDAD" className="td-cant">
                                <div className="cant-container">
                                    {prod.cantidad}  
                                    <div className="arrow-container">
                                        <FontAwesomeIcon icon={faAngleUp} onClick={()=> addQuantity(prod)}/>
                                        <FontAwesomeIcon icon={faAngleDown} onClick={()=> subtractQuantity(prod)}/>
                                    </div>
                                </div>                                   
                            </td>
                            <td dataLabel="SUBTOTAL" className="td-price">$ {prod.precioEfectivo * prod.cantidad}</td>
                        </tr>)}
                </tbody>
            </Table> 
        </>
    )
}

export default CartTable
