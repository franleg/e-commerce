import imagen from "../assets/img/auris.sennheiser.jpg"
import imagen2 from "../assets/img/auris.aiaiai.jpg"
import imagen3 from "../assets/img/auris.technics.jpg"
import imagen4 from "../assets/img/auris.pioneer.jpg"
import imagen5 from "../assets/img/monitores.krk.jpg"
import imagen6 from "../assets/img/monitores.jbl.jpg"
import imagen7 from "../assets/img/monitores.yamaha.jpg"
import imagen8 from "../assets/img/monitores.pioneer.jpg"
import imagen9 from "../assets/img/mixer.450.jpg"
import imagen10 from "../assets/img/mixer.900.jpg"
import imagen11 from "../assets/img/mixer.23c.jpg"
import imagen12 from "../assets/img/mixer.92.jpg"
import imagen13 from "../assets/img/compacteras.700.jpg"
import imagen14 from "../assets/img/compacteras.1000.jpg"
import imagen15 from "../assets/img/compacteras.2000.jpg"
import imagen16 from "../assets/img/compacteras.3000.jpg"

const productos = [
    { id: 1, categoría: "Auriculares", marca: "Sennheiser", modelo:"HD 25", stock: 8, precio: 45000, imagen: imagen},
    { id: 2, categoría: "Auriculares", marca: "AIAIAI", modelo:"Dj Preset", stock: 10, precio: 42000, imagen: imagen2},
    { id: 3, categoría: "Auriculares", marca: "Technics", modelo:"Dj 1200", stock: 5, precio: 40000, imagen: imagen3},
    { id: 4, categoría: "Auriculares", marca: "Pioneer", modelo:"HDJ-X5", stock: 3, precio: 48000, imagen: imagen4},
    { id: 5, categoría: "Monitores de estudio", marca: "KRK", modelo:"Rokit 5", stock: 12, precio: 40000, imagen: imagen5},
    { id: 6, categoría: "Monitores de estudio", marca: "JBL", modelo:"LSR 305 MK2", stock: 8, precio: 45000, imagen: imagen6},
    { id: 7, categoría: "Monitores de estudio", marca: "Yamaha", modelo:"Hs5", stock: 4, precio: 48000, imagen: imagen7},
    { id: 8, categoría: "Monitores de estudio", marca: "Pioneer", modelo:"S-dj50-x", stock: 6, precio: 42000, imagen:imagen8},
    { id: 9, categoría: "Mixers", marca: "Pioneer", modelo:"Djm-450mk2", stock: 5, precio: 80000, imagen: imagen9},
    { id: 10, categoría: "Mixers", marca: "Pioneer", modelo:"DJM-900nxs2", stock: 3, precio: 350000, imagen: imagen10},
    { id: 11, categoría: "Mixers", marca: "Allen & Heath", modelo:"Xone 23c", stock: 7, precio: 90000, imagen: imagen11},
    { id: 12, categoría: "Mixers", marca: "Allen & Heath", modelo:"Xone 92", stock: 4, precio: 320000, imagen: imagen12},
    { id: 13, categoría: "Compacteras", marca: "Pioneer", modelo:"Xdj-700", stock: 8, precio: 180000, imagen: imagen13},
    { id: 14, categoría: "Compacteras", marca: "Pioneer", modelo:"Xdj-1000mk2", stock: 6, precio: 220000, imagen: imagen14},
    { id: 15, categoría: "Compacteras", marca: "Pioneer", modelo:"Cdj-2000nx2", stock: 4, precio: 290000, imagen: imagen15},
    { id: 16, categoría: "Compacteras", marca: "Pioneer", modelo:"Cdj-3000", stock: 2, precio: 320000, imagen: imagen16},
]; //

export const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})