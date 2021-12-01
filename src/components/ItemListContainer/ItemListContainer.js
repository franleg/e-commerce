import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount.js";
import Auris from "../../assets/Auris.jpg";
import "./ItemListContainer.css";

function ItemListContainer () {

    const inicial = 1
    const stock = 15

    return (
        <div className="card-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Auris} />
                <Card.Body>
                    <Card.Title>Producto 1</Card.Title>
                    <hr/>
                    <Card.Text>Este es el producto 1</Card.Text>
                    <ItemCount inicial={inicial} stock={stock} />
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemListContainer