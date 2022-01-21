import { useCounter } from "../../hooks/useCounter";
import "./ItemCount.css";
import Button from "react-bootstrap/Button";

const ItemCount = ( {initial, stock, onAdd} ) => {
    const {counter, increment, decrement} = useCounter (initial, stock)

    return (
        <div>
            <h1 className="counter">Cantidad</h1>
            <div className="quantity-container d-flex justify-content-center align-items-center">
                <div className="subtract-container" onClick={decrement}>-</div>
                <div className="quantity">{counter}</div>
                <div className="add-container" onClick={increment}>+</div>
            </div>
            <Button className="btn-addToCart" variant="primary" onClick={()=> onAdd(counter)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount