import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import Loading from "../Loading/Loading.js";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [loading, setLoading] = useState (true)

    const {idProduct} = useParams();

    const initial = 1;

   useEffect(() => {
    const dataBase = getFirestore()
    const queryDataBase = doc(dataBase, "items", idProduct)
    getDoc(queryDataBase)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .catch((err)=> console.log (err))
        .finally(()=> setLoading(false)) 
    }, [idProduct]) 

    return (
        <div className="container-fluid item-container">
            <div className="row">
                { loading ?
                    <Loading/>
                    :
                    <ItemDetail initial={initial} stock={product.stock} product={product}/>               
                }
            </div>
        </div>
    )
}

export default ItemDetailContainer;