import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList.js";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"
import "./ItemListContainer.css";
import Loading from "../Loading/Loading.js";

function ItemListContainer () {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    const {route} = useParams();

    useEffect(() => {
        const dataBase = getFirestore()
        const queryCollection = route ? 
            query(collection(dataBase, "items"), where("ruta", "==", route))
            :
            query(collection(dataBase, "items"))
        getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [route])     

    return (
        <div className="container-fluid list-container">
            <div className="row div-container">
                    { loading ?
                        <Loading/>
                        :   
                        <ItemList products={products}/>
                    } 
            </div>
        </div>
    )
}

export default ItemListContainer