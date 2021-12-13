import ItemCount from "../ItemCount/ItemCount.js";
import React from 'react'
import Button from "react-bootstrap/Button";
import "./ItemDetail.css";

const itemDetail = ({inicial, stock, producto}) => {
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
                        <ItemCount inicial={inicial} stock={stock} />
                        <Button className="btn-carrito" variant="primary">Agregar al carrito</Button>
                    </div>
                </div>
            </div>
        </div>

        /*
        <div
            className="card-container col-lg-3 col-xs-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>{`${producto.marca} - ${producto.modelo}`}</Card.Title>
                        <hr/>
                        <Card.Text>{`$${producto.precio}`}</Card.Text>
                        <ItemCount inicial={inicial} stock={stock} />
                        <Button className="btn-carrito" variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
        </div>
        */
    )
}

export default itemDetail;