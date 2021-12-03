import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount.js";

function Item( {inicial, stock, prod} ) {
    return (
        <div 
            key={prod.id}
            className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" sr={`${productos.img}`} />
                    <Card.Body>
                        <Card.Title>{`${productos.nombre} - ${productos.categoria}`}</Card.Title>
                        <hr/>
                        <ItemCount inicial={inicial} stock={stock} />
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Item