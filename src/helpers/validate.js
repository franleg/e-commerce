import Swal from 'sweetalert2';
import "./validate.css";

function validate(values) {

    if (values.nombre.length < 4){
        Swal.fire({
            icon: "error",
            title: "Nombre inválido",
            confirmButtonColor: "#212529",
            customClass: {
                popup: "popup-class"
            }
            
        })
        return false
     }
     if (values.apellido.length < 4){
         Swal.fire({
             icon: "error",
             title: "Apellido inválido",
             confirmButtonColor: "#212529"
         })
         return false
     }
     if (values.telefono.length < 4){
        Swal.fire({
            icon: "error",
            title: "Teléfono inválido",
            confirmButtonColor: "#212529"
        })
        return false
    }     
     if (values.email.length < 4){
         Swal.fire({
             icon: "error",
             title: "E-mail inválido",
             confirmButtonColor: "#212529"
         })
         return false
     }
     if (values.emailConfirm !== values.email){
         Swal.fire({
             icon: "error",
             title: "Los e-mails no coinciden",
             confirmButtonColor: "#212529"
         })
         return false
     }

    return true
}

export default validate
