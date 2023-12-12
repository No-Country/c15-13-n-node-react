import { useProductStore } from "../../../store/productStore";
import Productos from "../../Productos/Productos";


export default function Ofertas() {
    const ofertas = useProductStore((state) => state.ofertas)

    return (
        <div className="w-full h-auto flex-col justify-start items-start py-10 gap-10 inline-flex">
            <div className="justify-start items-end gap-96 inline-flex">
                <div className="px-5 justify-start items-end gap-20 flex">
                    <div className="h-24 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="justify-start items-center gap-4 inline-flex">
                            <div className="Rectangle18 w-5 h-10 relative">
                                <div className="Rectangle17 w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                            </div>
                        </div>
                        <div className="Ofertas text-black text-4xl font-semibold font-['Inter'] leading-10 tracking-wider">Ofertas</div>
                    </div>
                </div>

            </div>
            <div className="flex w-full justify-center items-start gap-7">
                <Productos products={ofertas} />
            </div>
        </div>
    )
}