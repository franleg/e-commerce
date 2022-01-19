import { useCartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ShoppingCart.css";

function ShoppingCart () {
    const {totalQuantity, cartList} = useCartContext();

    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span className={cartList.length === 0 ? "hidden" : "cart-counter"}>{totalQuantity()}</span>
        </div>
    )
}

export default ShoppingCart;