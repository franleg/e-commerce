import { faAngleUp, faAngleDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { useCartContext } from "../../context/CartContext";
import "./CartTable.css";

function CartTable() {
    const {cartList, removeFromCart, addQuantity, subtractQuantity} = useCartContext()

    cartList.sort((prod1, prod2) =>{
        if(prod1.marca < prod2.modelo){
            return -1;
        } else if (prod1.marca > prod2.marca){
            return 1;
        } else{
            return 0
        }
    }) 

    return (
        <>
            <Table className="table-cart">
                <thead className="thead-cart">
                    <tr className="tr-cart">
                        <th className="th-cart th-delete"></th>
                        <th className="th-cart th-img"></th>
                        <th className="th-cart th-prod">PRODUCTO</th>
                        <th className="th-cart">PRECIO</th>
                        <th className="th-cart">CANTIDAD</th>
                        <th className="th-cart">SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody className="tbody-cart">
                    {cartList.map(prod=>                
                        <tr key={prod.id} className="tr-cart">
                            <td className="td-cart td-delete"><FontAwesomeIcon icon={faTrash} className="icono-vaciar" onClick={()=> {removeFromCart(prod.id)}}/></td>
                            <td className="td-cart td-img"><Link to={`/detalle/${prod.id}`}><Card.Img variant="top" src={prod.imagen}/></Link></td>
                            <td data-label="PRODUCTO" className="td-cart td-prod">{prod.marca} {prod.modelo}</td>
                            <td data-label="PRECIO" className="td-cart td-price">${prod.precioEfectivo}</td>
                            <td data-label="CANTIDAD" className="td-cart td-cant">
                                <div className="cant-container">
                                    {prod.cantidad}  
                                    <div className="arrow-container">
                                        <FontAwesomeIcon icon={faAngleUp} onClick={()=> addQuantity(prod)}/>
                                        <FontAwesomeIcon icon={faAngleDown} onClick={()=> subtractQuantity(prod)}/>
                                    </div>
                                </div>                                   
                            </td>
                            <td data-label="SUBTOTAL" className="td-cart td-price">$ {prod.precioEfectivo * prod.cantidad}</td>
                        </tr>)}
                </tbody>
            </Table> 
        </>
    )
}

export default CartTable
