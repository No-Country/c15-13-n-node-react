import { getListCategorias } from "../../../constant/constantes"

export default function Categorias() {


    const listaCategorias = getListCategorias;


    return (
        <div className="w-full h-auto flex-col justify-start items-center gap-14 inline-flex  py-40">
            <div className="w-full px-5 justify-start items-end gap-96 inline-flex">
                <div className="Frame624 flex-col justify-start items-start gap-5 inline-flex">
                    <div className="Frame623 justify-start items-center gap-4 inline-flex">
                        <div className="Rectangle18 w-5 h-10 relative">
                            <div className="Rectangle17 w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                        </div>
                        <div className="Categories text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Categorias</div>
                    </div>
                    <div className="BrowseByCategory text-black text-4xl font-semibold font-['Inter'] leading-10 tracking-wider">Buscar por Categoria</div>
                </div>
            </div>
            <div className="Frame597 justify-start items-start gap-7 inline-flex">
                {listaCategorias.map((cat) => (
                    <div className="CategoryPhone w-44 h-36 px-11 pt-6 rounded border border-black border-opacity-30 flex-col justify-end items-center gap-4 inline-flex" key={cat.categoria}>
                        <img src={cat.imagen} alt="" />
                        <div className="MQuinasABaterAs text-center text-black text-base font-normal font-['Poppins'] leading-normal">{cat.categoria}</div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}