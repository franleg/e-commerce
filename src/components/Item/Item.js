import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Item.css";

function Item( {inicial, stock, prod} ) {
    return (
        <div
            key={prod.id}
            className="card-container col-lg-3 col-xs-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prod.imagen} />
                    <Card.Body>
                        <Card.Title>{`${prod.marca} - ${prod.modelo}`}</Card.Title>
                        <hr/>
                        <Card.Text>{`Precio: $${prod.precio}`}</Card.Text>
                        <Button className="btn-carrito" variant="primary">Ver Detalle</Button>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Item
