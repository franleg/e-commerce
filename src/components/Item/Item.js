import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Item.css";

function Item({prod}) {
    return (
        <div
            className="card-container col-lg-3 col-xs-6">
                <Card style={{ width: '18rem' }}>
                    <Link to={`/detalle/${prod.id}`}><Card.Img variant="top" src={prod.imagen} className="card-img" /></Link>
                    <Card.Body>
                        <Card.Title>{`${prod.marca} - ${prod.modelo}`}</Card.Title>
                        <hr className="item-hr"/>
                        <Card.Text className="price">{`$${prod.precioTarjeta}`}</Card.Text>
                        <div className="stock-container">
                            <h5>Stock Disponible: {prod.stock}</h5>
                        </div>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Item
