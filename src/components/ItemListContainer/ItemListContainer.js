import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap";
import ItemList from "../ItemList/ItemList.js";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"
import "./ItemListContainer.css";

function ItemListContainer () {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)

    const {ruta} = useParams();

    useEffect(() => {
        const dataBase = getFirestore()
        const queryCollection = ruta ? 
            query(collection(dataBase, "items"), where("ruta", "==", ruta))
            :
            query(collection(dataBase, "items"))
        getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [ruta])     

    return (
        <div className="container-fluid list-container">
            <div className="row div-container">
                    { loading ?
                        <div className="spinner-container">
                            <div className="spinner-div">
                                <Spinner color="primary" animation="grow" role="status">
                                <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        </div>
                        :   
                        <ItemList productos={productos}/>
                    } 
            </div>
        </div>
    )
}

export default ItemListContainer