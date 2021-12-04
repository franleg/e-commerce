import React from 'react'
import Item from "../Item/Item.js"

function ItemList( {productos, inicial, stock} ) {
    return (
        <>
            {productos.map ((prod) => <Item inicial={inicial} stock={stock} prod={prod} /> )}
        </>
    )
}

export default ItemList
