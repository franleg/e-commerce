import imagen from "../assets/img/auris.sennheiser.jpg"

const producto = [
    { 
    id: 1, 
    categoría: "Auriculares", 
    marca: "Sennheiser", 
    modelo:"HD 25", 
    stock: 8, 
    descripcion: "Los resistentes HD 25 son capaces de manejar altos niveles de presión de sonido y tienen un excepcional desempeño en ambientes sumamente ruidosos.",
    imagen: imagen,
    precio: 45000,
    },
];


export const getProduct = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(producto)
    }, 2000)
})
