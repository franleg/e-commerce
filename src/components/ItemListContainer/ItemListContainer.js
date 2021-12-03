import {useState, useEffect} from "react";
import {getFetch} from "../../helpers/getFetch.js";
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
        <div>
            { loading ? 
                <h2>Cargando..</h2>
                :
                <ItemList inicial={inicial} stock={stock} productos={productos}/>
            } 
        </div>
    )
}

export default ItemListContainer