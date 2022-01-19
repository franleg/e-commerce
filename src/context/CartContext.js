import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        let index = cartList.findIndex(i => i.id === item.id);
        if (index > -1){
            const oldItem = cartList [index].cantidad
            cartList.splice(index, 1)
            setCartList ([...cartList, {...item, cantidad: item.cantidad + oldItem}])
        }else{
            setCartList ([...cartList, item])
        }
    }

    function addQuantity(product) {
        let index = cartList.findIndex(i => i.id === product.id);
        if (index > -1 && product.cantidad < product.stock) {
            const oldItem = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, { ...product, cantidad: oldItem + 1 }])
        }
    }

    function subtractQuantity(product) {
        let index = cartList.findIndex(i => i.id === product.id);
        if (index > -1 && product.cantidad > 1) {
            const oldItem = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, { ...product, cantidad: oldItem - 1 }])
        }
    }

    function removeFromCart(id) {
        setCartList (cartList.filter(prod => prod.id !== id))
    }

    function emptyCart() {
        setCartList ([])
    }

    function totalQuantity () {
        return cartList.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    function totalPurchase () {
        return cartList.reduce ((acc, prod) => acc + prod.precioEfectivo * prod.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart,
            removeFromCart, 
            addQuantity,
            subtractQuantity,
            emptyCart,
            totalQuantity,
            totalPurchase}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider