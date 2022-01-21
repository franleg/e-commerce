import { useCartContext } from "../../context/CartContext";
import { Navigate } from 'react-router';
import { Formik } from "formik";
import { generateOrder } from "../../config/generateOrder.js"
import * as Yup from "yup"
import "./Checkout.css";

const schema = Yup.object().shape({
    name: Yup.string()
            .required("Este campo es obligatorio")
            .min(3, "Nombre inválido")
            .max(30, "Nombre inválido"),
    lastName: Yup.string()
            .required("Este campo es obligatorio")
            .min(3, "Nombre inválido")
            .max(30, "Nombre inválido"),
    phone: Yup.string()
            .required("Este campo es obligatorio")
            .min(8, "Teléfono inválido"),           
    email: Yup.string()
            .required("Este campo es obligatorio")
            .email("Email inválido")
            .oneOf([Yup.ref("emailConfirm")], "Los emails no coinciden"),
    emailConfirm: Yup.string()
            .required("Este campo es obligatorio")
            .email("Email inválido") 
            .oneOf([Yup.ref("email")], "Los emails no coinciden") 
            
})

function Checkout() { 
    const {cartList, totalPurchase, emptyCart} = useCartContext();

    const initialValues = {
        name: "",
        lastName: "",
        phone: "",
        email: "",
        emailConfirm: "",
    };

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
                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={(values)=>{
                                generateOrder(values, cartList, totalPurchase, emptyCart)
                            }}
                        >
                            {(formik) => (
                                <form onSubmit={formik.handleSubmit}>
                                <label className="title-form">Nombre</label>
                                <input 
                                    onChange={formik.handleChange} 
                                    name= "name"
                                    value= {formik.values.name}
                                    className= "form-control my-2"
                                    type= "text"
                                    placeholder= "Escriba su nombre"
                                />
                                {formik.errors.name && <small>{formik.errors.name}</small>}
                                <br/>

                                <label className="title-form">Apellido</label>
                                <input 
                                    onChange={formik.handleChange} 
                                    name= "lastName"
                                    value= {formik.values.lastName}
                                    className="form-control my-2"
                                    type= "text"
                                    placeholder= "Escriba su apellido"
                                />
                                {formik.errors.lastName && <small>{formik.errors.lastName}</small>}
                                <br/>

                                <label className="title-form">Telefono</label>
                                <input 
                                    onChange={formik.handleChange} 
                                    name= "phone"
                                    value= {formik.values.phone}
                                    className="form-control my-2"
                                    type= "number"
                                    placeholder= "Escriba su teléfono"
                                />
                                {formik.errors.phone && <small>{formik.errors.phone}</small>}
                                <br/>

                                <label className="title-form">E-mail</label>
                                <input 
                                    onChange={formik.handleChange} 
                                    name= "email"
                                    value= {formik.values.email}
                                    className="form-control my-2"
                                    type= "email"
                                    placeholder= "nombre@ejemplo.com"
                                /> 
                                {formik.errors.email && <small>{formik.errors.email}</small>}
                                <br/>

                                <label className="title-form">E-mail</label>
                                <input 
                                    onChange={formik.handleChange} 
                                    name= "emailConfirm"
                                    value= {formik.values.emailConfirm}
                                    className="form-control my-2"
                                    type= "email"
                                    placeholder= "Repita su e-mail"
                                /> 
                                {formik.errors.emailConfirm && <small>{formik.errors.emailConfirm}</small>}                               
                                <div className="text-center">    
                                    <button type="submit" className="btn-confirmPurchase">Confirmar Compra</button>    
                                </div>                             
                            </form>
                            )} 
                        </Formik>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Checkout

