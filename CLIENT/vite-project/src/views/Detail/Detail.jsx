//import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductById from '../../hooks/useProductById';
import { useEffect } from 'react';
import { useCart } from '../../hooks/useCart';
//import { getListProduct } from '../../constant/constantes';

export default function Detail() {
    const { id } = useParams();
    const { character, loading } = useProductById(id);
    const { addToCart } = useCart();
    const cantidad = 1;

    useEffect(() => {

    }, [character, loading])

    if (loading) {
        return <h1>Cargando...</h1>
    }
    return (
        <>
            <div className="w-full h-auto bg-white flex flex-wrap justify-around">

                <div className="h-96 px-7 pt-40 pb-32 bg-neutral-100 rounded flex-col justify-end items-center inline-flex">
                    <img className="w-96 h-80" src={character?.image} />
                </div>

                <div>
                    <div className="w-96 text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">{character.name}</div>
                    <div className=" text-black text-2xl font-normal font-['Inter'] leading-normal tracking-wide">${character.price}</div>
                    <div className="justify-start items-start gap-4 inline-flex">
                        <div className="justify-start items-center gap-4 flex">

                            <div className="opacity-60 text-green-500 text-sm font-normal font-['Poppins'] leading-tight">In Stock</div>
                        </div>
                    </div>
                    <div className="w-96 text-black text-sm font-normal font-['Poppins'] leading-tight">
                        {character.description}
                    </div>

                    <div className="w-40 h-11justify-start items-start inline-flex">
                        <div className="w-10 h-11 px-2 py-2.5 rounded-tl rounded-bl border border-black border-opacity-50 flex-col justify-center items-center inline-flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                                {cantidad}
                            </div>
                        </div>

                        <div className="w-10 h-11 px-2 py-2.5 bg-red-500 rounded-tr rounded-br flex-col justify-center items-center inline-flex">
                            <button onClick={addToCart} className="w-6 h-6 flex-col justify-start items-center flex">+</button>

                        </div>
                    </div>
                    <div className="px-12 py-2.5 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Comprar</div>
                    </div>
                </div>


                <div className="flex flex-col w-full px-6 py-10 justify-start items-start gap-14">
                    <div className="justify-start items-center gap-4 inline-flex">
                        <div className="w-5 h-10 relative">
                            <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                        </div>
                        <div className="text-red-500 text-4xl font-semibold font-['Inter'] leading-10 tracking-wider">Especificaciones Técnicas</div>

                    </div>
                    <span>Aca van las espesificaciones</span>
                </div>

            </div>
        </>
    );
}