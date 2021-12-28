import ItemCount from "../ItemCount/ItemCount.js";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./ItemDetail.css";
import Button from "react-bootstrap/Button";
import {useCartContext} from "../../context/CartContext"

const ItemDetail = ({inicial, stock, producto}) => {

    const [goCart, setGoCart] = useState(false);

    const {cartList, agregarAlCarrito} = useCartContext()

    const onAdd = (cantidad) => {
        console.log(cantidad);
        setGoCart (true)
        agregarAlCarrito ({...producto, cantidad:cantidad})
    }
    console.log (cartList);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="detail-container d-flex justify-content-end">
                        <img src={producto.imagen} className="img-fluid img-container" /> 
                    </div>
                </div>
                <div className="col-lg-6 col-xs-6">
                    <div className="detail-container">
                        <h1>{`${producto.marca} - ${producto.modelo}`}</h1>
                        <hr/>
                        <h3>TARJETA DE CRÉDITO</h3>
                        <h4>{`$${producto.precioTarjeta}`}</h4>
                        <h3>TRANSFERENCIA BANCARIA</h3>
                        <h4 className="precio-efectivo">{`$${producto.precioEfectivo}`}</h4>
                        <h2>{`${producto.categoria}`}</h2>
                        <p className="description-container">{`${producto.descripcion}`}</p>
                        {!goCart ? 
                            <ItemCount inicial={inicial} stock={stock} onAdd={onAdd}/>
                            :
                            <Link to="/cart"><Button className="btn-agregarCarrito" variant="primary">Ir al carrito</Button></Link>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;