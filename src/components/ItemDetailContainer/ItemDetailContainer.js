import {useState, useEffect} from "react";
import {getProduct} from "../../helpers/getProduct.js";
import ItemDetail from "../ItemDetail/ItemDetail.js"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({});
    const inicial = 1;
    const stock= 15;

    useEffect(()=>{
        getProduct
        .then((resp)=> setProducto(resp))
        .catch((err)=> console.log (err))
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <ItemDetail iniciar={inicial} stock={stock} producto={producto}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;