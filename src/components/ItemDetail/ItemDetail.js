import ItemCount from "../ItemCount/ItemCount.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../../context/CartContext"
import "./ItemDetail.css";

const ItemDetail = ({initial, stock, product}) => {

    const [goCart, setGoCart] = useState(false);

    const {addToCart} = useCartContext()

    const onAdd = (quantity) => {
        setGoCart (true)
        addToCart ({...product, cantidad:quantity})
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-xs-6">
                    <div className="detail-container img-container">
                        <img src={product.imagen} className="img-fluid" alt="producto"/> 
                    </div>
                </div>
                <div className="col-lg-6 col-xs-6">
                    <div className="detail-container">
                        <h1>{`${product.marca} - ${product.modelo}`}</h1>
                        <hr/>
                        <h3>TARJETA DE CRÉDITO</h3>
                        <h4>{`$${product.precioTarjeta}`}</h4>
                        <h3>TRANSFERENCIA BANCARIA</h3>
                        <h4 className="cash-price">{`$${product.precioEfectivo}`}</h4>
                        <h2>{`${product.categoria}`}</h2>
                        <p className="description-container">{`${product.descripcion}`}</p>
                        {!goCart ? 
                            <ItemCount initial={initial} stock={stock} onAdd={onAdd}/>
                            :
                            <>
                                <Link to="/carrito"><Button className="btn-addToCart" variant="primary">Ir al carrito</Button></Link>
                                <br/>
                                <Link to="/"><Button className="btn-addToCart" variant="primary">Volver al inicio</Button></Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;