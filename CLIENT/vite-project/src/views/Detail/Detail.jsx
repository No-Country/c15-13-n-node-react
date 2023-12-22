import { useNavigate, useParams } from 'react-router-dom';
import useProductById from '../../hooks/useProductById';
import { useCart } from '../../hooks/useCart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import { BASE_URL } from '../../constant/constantes';
import { useState } from 'react';
//import { getListProduct } from '../../constant/constantes';

export default function Detail(data) {
    const { user } = data;
    const { id } = useParams();
    const { character, loading } = useProductById(id);
    const { addToCart } = useCart();
    const [cantidad, setCantidad] = useState(1);
    const navigate = useNavigate();

    if (loading) {
        return <h1>Cargando...</h1>
    }
    const dataProduct = { id: character._id, name: character.name, image: character.image, price: character.price, stock: character.stock };

    const handlerOrder = async () => {
        if (!user || !user.token) {
            navigate("/register");
            return;
        }
        addToCart(dataProduct);
        axios.post(`${BASE_URL}cart/fill-cart`, {
            "productId": id,
            "quantity": cantidad,
        }, {
            headers: {
                'x-access-token': `${user?.token}`,
            }
        }).then(() => {
            navigate("/productos");
        })

    }

    const sumCantidad = () => {
        setCantidad(cantidad === dataProduct.stock ? cantidad : (cantidad + 1));
    }
    const resCantidad = () => {
        setCantidad(cantidad === 1 ? cantidad : (cantidad - 1));
    }

    return (
        <>
            <div className="w-full h-auto bg-white flex flex-wrap justify-around">

                <div className="w-full sm:w-1/2 h-96 px-7 pt-40 mb-2 pb-32 bg-neutral-100 rounded flex-col justify-center items-center inline-flex">
                    <img className="w-96 h-80" src={character?.image} />
                </div>

                <div className='w-full sm:w-96 p-4 h-96 gap-2 flex flex-col justify-center'>
                    <div className="w-96 text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">{character.name}</div>
                    <div className=" text-black text-2xl font-normal font-['Inter'] leading-normal tracking-wide">${character.price}</div>
                    <div className="justify-start items-start gap-4 inline-flex">
                        <div className="justify-start items-center gap-4 flex">

                            <div className="opacity-60 text-green-500 text-sm font-normal font-['Poppins'] leading-tight">In Stock</div>
                        </div>
                    </div>
                    <div className="w-96 text-black text-sm font-normal font-['Poppins'] leading-tight">
                        {character.stock}
                    </div>

                    <div className="w-40 h-14 justify-start items-start inline-flex">
                        <div className="w-14 h-full px-2 py-2.5 rounded-tl rounded-bl border border-black border-opacity-50 flex-col justify-center items-center inline-flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                                {cantidad}
                            </div>
                        </div>

                        <div className="w-14 h-full bg-white border border-black rounded-tr rounded-br flex-col justify-center items-center inline-flex">
                            <button className='flex bg-transparent w-full h-1/2 justify-center items-center' onClick={() => sumCantidad()}>
                                <AddBoxIcon />
                            </button>
                            <button className='flex bg-transparent w-full  h-1/2 justify-center items-center' onClick={() => resCantidad()}>
                                <RemoveIcon />
                            </button>
                        </div>
                    </div>
                    <button onClick={handlerOrder} className=" bg-black rounded justify-center items-center gap-2.5 inline-flex">
                        <p className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Agregar al Carrito</p>
                    </button>
                </div>


                <div className="flex flex-col w-full px-6 py-10 justify-start items-start gap-14">
                    <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-5 h-10 relative">
                            <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                        </div>
                        <div className="text-red-500 text-4xl font-semibold font-['Inter'] leading-10 tracking-wider">Especificaciones Técnicas</div>

                    </div>
                    <span>{character.description}</span>
                </div>

            </div>
        </>
    );
}

/* 
checkProductInCart(dataProduct) ? cart.find(product => product.id === character._id).quantity : cantidad */