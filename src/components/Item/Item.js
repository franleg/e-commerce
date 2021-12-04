import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount.js";

function Item( {inicial, stock, prod} ) {
    return (
        <div
            key={prod.id}
            className="card-container col-lg-4 col-xs-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" sr={`${prod.img}`} />
                    <Card.Body>
                        <Card.Title>{`${prod.marca} - ${prod.modelo}`}</Card.Title>
                        <hr/>
                        <ItemCount inicial={inicial} stock={stock} />
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Item
