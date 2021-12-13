import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Spinner } from "react-bootstrap";
import {getFetch} from "../../helpers/getFetch.js";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({});
    const [loading, setLoading] = useState (true)
    const inicial = 1;

    const {idProducto} = useParams();

    useEffect(()=>{
        getFetch
        .then((resp)=> setProducto(resp.find(prod => prod.id === parseInt(idProducto))))
        .catch((err)=> console.log (err))
        .finally(()=> setLoading(false)) 
    }, []);

    return (
        <div className="container-fluid item-container">
            <div className="row">
                { loading ?
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