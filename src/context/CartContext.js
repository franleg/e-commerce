import {createContext, useState, useContext} from "react";

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
        let productExist = cartList.find((item) => item.id === product.id);
        setCartList (
            cartList.map((item) => item.id === product.id 
                ? {...productExist, cantidad: productExist.cantidad + 1}
                : item
            )
        );
    }

    function subtractQuantity(product) {
         let productExist = cartList.find((item) => item.id === product.id);
         if (productExist.cantidad > 1) {
            setCartList (
                cartList.map((item) => item.id === product.id 
                    ? {...productExist, cantidad: productExist.cantidad - 1}
                    : item
                    )
            );
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
            vaciarCarrito,
            totalCantidad,
            totalCompra,
            addQuantity,
            subtractQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider