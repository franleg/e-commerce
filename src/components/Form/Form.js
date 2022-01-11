import React from 'react'
import "./Form.css";

function Form(handleInputChange, handleSubmit, values) {

    return (
        <>
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
        </>
    )
}

export default Form
