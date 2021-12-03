const productos = [
    { id: 1, categoría: "Auriculares", marca: "Sennheiser", modelo:"HD 25", stock: 8, imagen:""},
    { id: 2, categoría: "Auriculares", marca: "AIAIAI", modelo:"Dj Preset", stock: 10, imagen:""},
    { id: 3, categoría: "Auriculares", marca: "Technics", modelo:"Dj 1200", stock: 5, imagen:""},
    { id: 4, categoría: "Auriculares", marca: "Pioneer", modelo:"HDJ-X5", stock: 3, imagen:""},
    { id: 5, categoría: "Monitores de estudio", marca: "KRK", modelo:"Rokit 5", stock: 12, imagen:""},
    { id: 6, categoría: "Monitores de estudio", marca: "JBL", modelo:"LSR 305 MK2", stock: 8, imagen:""},
    { id: 7, categoría: "Monitores de estudio", marca: "Yamaha", modelo:"Hs5", stock: 4, imagen:""},
    { id: 8, categoría: "Monitores de estudio", marca: "Pioneer", modelo:"S-dj50-x", stock: 6, imagen:""},
    { id: 9, categoría: "Mixers", marca: "Pioneer", modelo:"Djm-450mk2", stock: 5, imagen:""},
    { id: 10, categoría: "Mixers", marca: "Pioneer", modelo:"DJM-900nxs2", stock: 3, imagen:""},
    { id: 11, categoría: "Mixers", marca: "Allen & Heath", modelo:"Xone 23c", stock: 7, imagen:""},
    { id: 12, categoría: "Mixers", marca: "Allen & Heath", modelo:"Xone 92", stock: 4, imagen:""},
    { id: 13, categoría: "Compacteras", marca: "Pioneer", modelo:"Xdj-700", stock: 8, imagen:""},
    { id: 14, categoría: "Compacteras", marca: "Pioneer", modelo:"Xdj-1000mk2", stock: 6, imagen:""},
    { id: 15, categoría: "Compacteras", marca: "Pioneer", modelo:"Cdj-2000nx2", stock: 4, imagen:""},
    { id: 16, categoría: "Compacteras", marca: "Pioneer", modelo:"Cdj-3000", stock: 2, imagen:""}, 
]; //

export const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})