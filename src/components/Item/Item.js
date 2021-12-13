import React from 'react'
import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Item.css";

function Item( {prod} ) {
    return (
        <div
            key={prod.id}
            className="card-container col-lg-3 col-xs-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prod.imagen} />
                    <Card.Body>
                        <Card.Title>{`${prod.marca} - ${prod.modelo}`}</Card.Title>
                        <hr/>
                        <Card.Text className="precio">{`$${prod.precioTarjeta}`}</Card.Text>
                        <Link to={`/detalle/${prod.id}`}>
                            <Button className="btn-detalle" variant="primary">Ver Detalle</Button>
                        </Link>
                        <div className="contenedor-stock">
                            <h5>Stock Disponible: {prod.stock}</h5>
                        </div>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Item
