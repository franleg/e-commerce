import { useCounter } from "../../hooks/useCounter";
import "./ItemCount.css";
import Button from "react-bootstrap/Button";

const ItemCount = ( {inicial, stock, onAdd} ) => {

    const {counter, increment, decrement} = useCounter (inicial, stock)

    return (
        <div>
            <h1 className="contador">Cantidad</h1>
            <div class="contenedor-cantidad d-flex justify-content-center align-items-center">
                <div class="contenedor-restar" onClick={decrement}>-</div>
                <div class="cantidad">{counter}</div>
                <div class="contenedor-sumar" onClick={increment}>+</div>
            </div>
            <Button className="btn-agregarCarrito" variant="primary" onClick={()=> onAdd(counter)}>Agregar al carrito</Button>
        </div>



    )
}

export default ItemCount