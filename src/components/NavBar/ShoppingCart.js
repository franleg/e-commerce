import {useCartContext} from "../../context/CartContext"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import "./ShoppingCart.css";

function ShoppingCart () {

    const {totalCantidad, cartList} = useCartContext();

    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span className={cartList.length === 0 ? "hidden" : "contador-carrito"}>{totalCantidad()}</span>
        </div>
    )
}

export default ShoppingCart;