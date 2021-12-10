import {useState, useEffect} from "react";
import { Spinner } from "react-bootstrap";
import {getFetch} from "../../helpers/getFetch.js";
import ItemDetail from "../ItemDetail/ItemDetail.js"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({});
    const inicial = 1;

    useEffect(()=>{
        getFetch
        .then((resp)=> setProducto(resp.find(item => item.id === 1)))
        .catch((err)=> console.log (err))
        console.log (producto)
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                { !producto ?
                        <div className="spinner-container">
                            <div className="spinner-div">
                                <Spinner color="primary" animation="grow" role="status">
                                <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        </div>
                        :
                        <ItemDetail inicial={inicial} stock={producto.stock} producto={producto}/>               
                }
            </div>
        </div>
    )
}

export default ItemDetailContainer;