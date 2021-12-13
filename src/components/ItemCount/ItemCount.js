import { useCounter } from "../../hooks/useCounter";
import "./ItemCount.css";


const ItemCount = ( {inicial, stock} ) => {

    const {counter, increment, decrement} = useCounter (inicial, stock)

    return (
        <div>
            <h1 className="contador">Cantidad</h1>
            <div class="contenedor-cantidad d-flex justify-content-center align-items-center">
                <div class="contenedor-restar" onClick={decrement}>-</div>
                <div class="cantidad">{counter}</div>
                <div class="contenedor-sumar" onClick={increment}>+</div>
            </div>
        </div>



    )
}

export default ItemCount