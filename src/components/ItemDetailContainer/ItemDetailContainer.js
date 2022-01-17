import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({});
    const [loading, setLoading] = useState (true)

    const {idProducto} = useParams();

    const initial = 1;

   useEffect(() => {
    const dataBase = getFirestore()
    const queryDataBase = doc(dataBase, "items", idProducto)
    getDoc(queryDataBase)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
        .catch((err)=> console.log (err))
        .finally(()=> setLoading(false)) 
    }, [idProducto]) 

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
                    <ItemDetail initial={initial} stock={producto.stock} producto={producto}/>               
                }
            </div>
        </div>
    )
}

export default ItemDetailContainer;