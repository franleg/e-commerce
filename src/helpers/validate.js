import Swal from 'sweetalert2';

function validate(values) {

    if (values.nombre.length < 4){
        Swal.fire({
            icon: "error",
            title: "Nombre inválido"
        })
        return false
     }
     if (values.apellido.length < 4){
         Swal.fire({
             icon: "error",
             title: "Apellido inválido"
         })
         return false
     }
     if (values.telefono.length < 4){
        Swal.fire({
            icon: "error",
            title: "Teléfono inválido"
        })
        return false
    }     
     if (values.email.length < 4){
         Swal.fire({
             icon: "error",
             title: "E-mail inválido"
         })
         return false
     }
     if (values.emailConfirm.length !== values.email){
         Swal.fire({
             icon: "error",
             title: "Los e-mails no coinciden"
         })
         return false
     }

    return true
}

export default validate
