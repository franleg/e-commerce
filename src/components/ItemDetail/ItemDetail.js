import ItemCount from "../ItemCount/ItemCount.js";
import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const itemDetail = ({inicial, stock, producto}) => {
    return (
        <div
            className="card-container col-lg-3 col-xs-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>{`${producto.marca} - ${producto.modelo}`}</Card.Title>
                        <hr/>
                        <Card.Text>{`${producto.precio}`}</Card.Text>
                        <ItemCount inicial={inicial} stock={stock} />
                        <Button className="btn-carrito" variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default itemDetail;