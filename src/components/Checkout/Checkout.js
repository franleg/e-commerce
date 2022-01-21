import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Validate from "../../helpers/Validate/Validate.js"
import { Navigate } from 'react-router';
import Form from "../Form/Form"
import { generateOrder } from "../../config/generateOrder.js"
import "./Checkout.css";

function Checkout() { 
    const {cartList, totalPurchase, emptyCart} = useCartContext();

    const [values, setValues] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        emailConfirm: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Validate(values)) {return}
        
        generateOrder(values, cartList, totalPurchase, emptyCart)
    }

    return (
        <>
            {cartList.length === 0 
                ? <Navigate to="/"/>
                :
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                            <h2 className="summary-text">Resumen de Compra</h2>
                            <hr className="summary-hr" />                      
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xs-12 form-container">
                            <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} values={values}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Checkout



