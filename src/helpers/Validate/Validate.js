import Swal from 'sweetalert2';
import "./Validate.css";

function validate(values) {
    if (values.name.length < 4){
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

     if (values.lastName.length < 4){
         Swal.fire({
             icon: "error",
             title: "Apellido inválido",
             confirmButtonColor: "#212529"
         })
         return false
     }

     if (values.phone.length < 4){
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
