import { memo } from "react";
import Item from "../Item/Item.js"

const ItemList = memo(
    ({ productos, initial, stock }) => {
        return (
            <>
                { productos.map((prod) => <Item initial={initial} stock={stock} prod={prod} />) }
            </>
        )
    }
)

export default ItemList
