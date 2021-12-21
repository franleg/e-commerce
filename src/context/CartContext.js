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

    function vaciarCarrito() {
        setCartList ([])
    }

    return (
        <CartContext.Provider value={{cartList, agregarAlCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider