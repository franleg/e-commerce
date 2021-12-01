import { useCounter } from "../../hooks/useCounter";
import "./ItemCount.css";

const ItemCount = ( {inicial, stock} ) => {

    const { counter, increment, decrement} = useCounter (inicial, stock)

    return (
        <div>
            <h1 className="contador">Cantidad: {counter}</h1>
            <buttom className="btn btn-outline-primary btn-count" onClick={decrement}>-</buttom>
            <buttom className="btn btn-outline-primary btn-count" onClick={increment}>+</buttom>
        </div>
    )
}

export default ItemCount