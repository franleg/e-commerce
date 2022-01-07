import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import {getFetch} from "../../helpers/getFetch.js";
import { Spinner } from "react-bootstrap";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"

function ItemListContainer () {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)

    const {ruta} = useParams();

    // useEffect(()=>{
    //     if (ruta) {
    //         getFetch
    //         .then((resp)=> setProductos(resp.filter(prod => prod.ruta === ruta)))
    //         .catch((err)=> console.log (err))
    //         .finally(()=> setLoading(false))            
    //     } else {
    //         getFetch
    //         .then((resp)=> setProductos(resp))
    //         .catch((err)=> console.log (err))
    //         .finally(()=> setLoading(false))            
    //     }
    // }, [ruta])

    useEffect(() => {
        const dataBase = getFirestore()
        if (ruta) {
            const queryCollection = query(collection(dataBase, "items"), where("ruta", "==", ruta))
            getDocs(queryCollection)
                .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))           
        } else {
            const queryCollection = query(collection(dataBase, "items"))
            getDocs(queryCollection)
                .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))           
        }
    }, [ruta]) 


    return (
        <div className="container-fluid">
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