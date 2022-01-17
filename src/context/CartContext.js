import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(item) {
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

    function removerDelCarrito(id) {
        setCartList (cartList.filter(prod => prod.id !== id))
    }

    function vaciarCarrito() {
        setCartList ([])
    }

    function totalCantidad () {
        return cartList.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    function totalCompra () {
        return cartList.reduce ((acc, prod) => acc + prod.precioEfectivo * prod.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            agregarAlCarrito,
            removerDelCarrito, 
            addQuantity,
            subtractQuantity,
            vaciarCarrito,
            totalCantidad,
            totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider