import { NavLink } from "react-router-dom";

export default function Card(data) {
    const { id, image, name, price } = data
    return (
        <div className="flex w-64 h-80 flex-col justify-start items-start gap-4">
            <div className="flex items-center justify-center w-64 h-64 relative bg-neutral-100 rounded">
                <NavLink to={`/detail/${id}`}>
                    <img className="w-44 h-32" src={image} alt="card" />
                </NavLink>
                <button className="flex self-end absolute justify-center items-center gap-2 bg-black w-full">
                    <p className="text-white text-xl h-6 font-normal font-['Poppins'] leading-none">Agregar al carrito</p>
                </button>
            </div>

            <h2>{name}</h2>
            <p className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">${price}</p>
        </div>
    )
}


{/* <div className="w-64 h-80 flex-col justify-start items-start gap-4 inline-flex">
    <div className="w-64 h-64 relative bg-neutral-100 rounded">
        <div className="w-64 h-10 left-0 top-[209px] absolute bg-black rounded-bl rounded-br" />
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 left-[5px] top-[5px] absolute" />
            </div>
        </div>

        <div className="w-48 h-44 px-1.5 py-6 left-[40px] top-[15px] absolute justify-center items-center inline-flex">
            <img className="w-44 h-32" src="https://via.placeholder.com/178x129" />
        </div>
        <div className="left-[66.50px] top-[217px] absolute justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-white text-xs font-normal font-['Poppins'] leading-none">Agregar al carrito</div>
        </div>
    </div>
    <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Robot Cortador césped</div>
        <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$960</div>
            <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$1160</div>
        </div>
    </div>
</div> */}