import {useState, useEffect} from "react";
import { Spinner } from "react-bootstrap";
import {getProduct} from "../../helpers/getProduct.js";
import ItemDetail from "../ItemDetail/ItemDetail.js"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({});
    const inicial = 1;
    const stock= 15;
    console.log(producto)

    useEffect(()=>{
        getProduct
        .then((resp)=> setProducto(resp))
        .catch((err)=> console.log (err))
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                { producto ?
                    <div className="spinner-container">
                        <div className="spinner-div">
                            <Spinner color="primary" animation="grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </div>
                    :
                    <ItemDetail iniciar={inicial} stock={stock} producto={producto}/>
                }
            </div>
        </div>
    )
}

export default ItemDetailContainer;