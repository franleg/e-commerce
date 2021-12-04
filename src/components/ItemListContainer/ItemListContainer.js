import {useState, useEffect} from "react";
import {getFetch} from "../../helpers/getFetch.js";
import { Spinner } from "react-bootstrap";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js"

function ItemListContainer () {

    const inicial = 1
    const stock = 15

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect(()=>{
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log (err))
        .finally(()=>setLoading(false))
    })

    return (
        <div className="container-fluid">
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
                    <ItemList inicial={inicial} stock={stock} productos={productos}/>
                } 
            </div>
        </div>
    )
}

export default ItemListContainer