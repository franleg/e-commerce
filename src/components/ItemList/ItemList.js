import { memo } from "react";
import Item from "../Item/Item.js"

const ItemList = memo(
    ({ products, initial, stock }) => {
        return (
            <>
                { products.map((prod) => <Item key={prod.id} initial={initial} stock={stock} prod={prod} />) }
            </>
        )
    }
)

export default ItemList
