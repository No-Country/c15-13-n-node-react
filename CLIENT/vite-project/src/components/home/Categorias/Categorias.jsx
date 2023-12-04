export default function Categorias() {
    return (
        <div className="w-full h-auto flex-col justify-start items-start gap-14 inline-flex  py-40">
            <div className="Frame729 justify-start items-end gap-96 inline-flex">
                <div className="Frame624 flex-col justify-start items-start gap-5 inline-flex">
                    <div className="Frame623 justify-start items-center gap-4 inline-flex">
                        <div className="Rectangle18 w-5 h-10 relative">
                            <div className="Rectangle17 w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                        </div>
                        <div className="Categories text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
                    </div>
                    <div className="BrowseByCategory text-black text-4xl font-semibold font-['Inter'] leading-10 tracking-wider">Browse By Category</div>
                </div>
                <div className="Frame615 justify-start items-start gap-2 flex">
                    <div className="FillWithLeftArrow w-11 h-11 relative">
                        <div className="Ellipse15 w-11 h-11 left-0 top-0 absolute bg-neutral-100 rounded-full" />
                        <div className="IconsArrowLeft w-6 h-6 left-[11px] top-[11px] absolute" />
                    </div>
                    <div className="FillWithRightArrow w-11 h-11 relative">
                        <div className="Ellipse16 w-11 h-11 left-0 top-0 absolute bg-neutral-100 rounded-full" />
                        <div className="IconsArrowRight w-6 h-6 left-[11px] top-[11px] absolute" />
                    </div>
                </div>
            </div>
            <div className="Frame597 justify-start items-start gap-7 inline-flex">
                <div className="CategoryPhone w-44 h-36 px-11 pt-6 rounded border border-black border-opacity-30 flex-col justify-end items-center gap-4 inline-flex">
                    <div className="CategoryCellphone w-14 h-14 relative flex-col justify-start items-start flex">
                        <div className="Line8 w-6 h-px border-2 border-black"></div>
                    </div>
                    <div className="MQuinasABaterAs text-center text-black text-base font-normal font-['Poppins'] leading-normal">Máquinas <br />a Baterías</div>
                </div>
                <div className="CategoryPhone w-44 h-36 px-10 pt-6 rounded border border-black border-opacity-30 flex-col justify-end items-center gap-4 inline-flex">
                    <div className="CategoryComputer w-14 h-14 relative flex-col justify-start items-start flex" />
                    <div className="MQuinasAExplosiN text-center text-black text-base font-normal font-['Poppins'] leading-normal">Máquinas<br />a Explosión</div>
                </div>
                <div className="CategoryPhone w-44 h-36 pl-10 pr-9 pt-6 rounded border border-black border-opacity-30 flex-col justify-end items-center gap-4 inline-flex">
                    <div className="CategorySmartwatch w-14 h-14 relative flex-col justify-start items-start flex">
                        <div className="Frame724 w-2.5 h-3 justify-start items-end gap-1 inline-flex">
                            <div className="Line11 w-3 h-px origin-top-left rotate-90 border-2 border-black"></div>
                            <div className="Line10 w-2 h-px origin-top-left rotate-90 border-2 border-black"></div>
                            <div className="Line9 w-2.5 h-px origin-top-left rotate-90 border-2 border-black"></div>
                        </div>
                    </div>
                    <div className="LNeaDecoracOn text-center text-black text-base font-normal font-['Poppins'] leading-normal">Línea <br />Decoracíon</div>
                </div>
                <div className="CategoryPhone w-44 h-36 px-7 pt-6 bg-red-500 rounded shadow flex-col justify-end items-center gap-4 inline-flex">
                    <div className="CategoryCamera w-14 h-14 relative flex-col justify-start items-start flex" />
                    <div className="HerramientasDeJardN text-center text-black text-base font-normal font-['Poppins'] leading-normal">Herramientas<br />de Jardín</div>
                </div>
                <div className="CategoryPhone w-44 h-36 relative rounded border border-black border-opacity-30">
                    <div className="LNeaRiego left-[34px] top-[97px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">Línea Riego</div>
                    <div className="CategoryHeadphone w-14 h-14 left-[57px] top-[25px] absolute" />
                </div>
                <div className="CategoryPhone w-44 h-36 px-11 pt-6 rounded border border-black border-opacity-30 flex-col justify-end items-center gap-4 inline-flex">
                    <div className="CategoryGamepad w-14 h-14 relative flex-col justify-start items-start flex" />
                    <div className="OtrosProductos text-center text-black text-base font-normal font-['Poppins'] leading-normal">Otros <br />Productos</div>
                </div>
            </div>
        </div>
    )
}