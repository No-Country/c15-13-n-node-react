
export const BASE_URL = "https://ecommerce-upload-backend.onrender.com/api/"
//export const BASE_URL = "http://localhost:8000/api/"
export const getListProduct = [{
    id: 1,
    name: 'Tijera de podar',
    reference: 'T-podar',
    image: '/image/tijerapodar.png',
    price: 100,
    description: 'Tijera de podar de 100 cm de alto',
    categoria: "Herramientas de Jardín",

},
{
    id: 2,
    name: 'Soplador',
    image: '/image/sopladorbateria.png',
    price: 10000,
    description: 'Soplador a bateria de alto poder de soplado, ideal para grandes espacios',
    category: "Máquinas a Baterías",
},
{
    id: 3,
    name: 'Podadora',
    image: '/image/podadoraltura.png',
    price: 10000,
    description: 'Podadora electrica',
    category: "Máquinas a Explosión",
},
{
    id: 4,
    name: 'Robot cortador',
    image: '/image/robotcesped.png',
    price: 15000,
    description: 'Robot cortador a bateria, gracias a nuestra tecnologia solo tendra que procuparce por cargar la bateria de su podadora',
    category: "Máquinas a Baterías",
},]

export const getListCategorias = [
    {
        id: 1,
        categoria: "Máquinas a Baterías",
        imagen: "/image/robotcesped.png"
    },
    {
        id: 2,
        categoria: "Máquinas a Explosión",
        imagen: "/image/mototaladro.png"
    },
    {
        id: 3,
        categoria: "Herramientas de Jardín",
        imagen: "/image/tijerapodar.png"
    },
    {
        id: 4,
        categoria: "Otros Productos",
        imagen: "/image/varias_herramientas.png",
    },
]
