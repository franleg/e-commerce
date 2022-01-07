import React from 'react'
import "./Checkout.css";
import {useState} from "react";
import {useCartContext} from "../../context/CartContext";
import validate from "../../helpers/validate"
import { Navigate } from 'react-router';

function Checkout() {

    const {cartList, totalCompra} = useCartContext();

    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
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

        if (!validate(values)) {return}

        const order = {
            buyer: {...values},
            items: cartList.map(cartItem => {
                const id = cartItem.id; 
                const marca = cartItem.marca;
                const modelo = cartItem.modelo;
                const precio = cartItem.precioEfectivo * cartItem.cantidad;

                return (id, marca, modelo, precio)
            }),
            total: totalCompra()

        }
        console.log(order)  
    }

    return (
        <>
            {cartList.length === 0 
                ? <Navigate to="/"/>
                :
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                            <h2 className="texto-resumen">Resumen de Compra</h2>
                            <hr className="hr-resumen" />                      
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                            <form onSubmit={handleSubmit}>
                                <label for="nombre" class="formulario-titulo">Nombre</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name= "nombre"
                                    value= {values.nombre}
                                    className= "form-control my-2"
                                    type= "text"
                                    placeholder= "Escriba su nombre"
                                />
                                <label for="apellido" class="formulario-titulo">Apellido</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name= "apellido"
                                    value= {values.apellido}
                                    className="form-control my-2"
                                    type= "text"
                                    placeholder= "Escriba su apellido"
                                />
                                <label for="telefono" class="formulario-titulo">Telefono</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name= "telefono"
                                    value= {values.telefono}
                                    className="form-control my-2"
                                    type= "number"
                                    placeholder= "Escriba su teléfono"
                                />
                                <label for="email" class="formulario-titulo">E-mail</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name= "email"
                                    value= {values.email}
                                    className="form-control my-2"
                                    type= "email"
                                    placeholder= "nombre@ejemplo.com"
                                />  
                                <label for="emailConfirm" class="formulario-titulo">E-mail</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name= "emailConfirm"
                                    value= {values.emailConfirm}
                                    className="form-control my-2"
                                    type= "email"
                                    placeholder= "Repita su e-mail"
                                /> 
                                <div className="text-center">    
                                    <button type="submit" className="btn-confirmarCompra">Confirmar Compra</button>    
                                </div>                             
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Checkout



