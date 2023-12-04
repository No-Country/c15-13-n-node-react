export default function Cart() {
    return (
        <>
            <div className="w-full">
                <div className="Line3 w-96 h-px left-0 top-[142px] absolute justify-center items-center inline-flex">
                    <div className="Line3 w-96 h-px origin-top-left rotate-180 opacity-30 border border-black"></div>
                </div>
                <div className="Frame807 left-[135px] top-[323px] absolute flex-col justify-start items-start gap-20 inline-flex">
                    <div className="Frame805 flex-col justify-start items-start gap-6 flex">
                        <div className="Frame803 flex-col justify-start items-start gap-10 flex">
                            <div className="CartMainSection w-96 h-16 pl-10 pr-2.5 py-6 bg-white rounded shadow justify-end items-center inline-flex">
                                <div className="Frame793 justify-start items-center gap-72 inline-flex">
                                    <div className="Producto text-black text-base font-normal font-['Poppins'] leading-normal">Producto</div>
                                    <div className="Precio text-black text-base font-normal font-['Poppins'] leading-normal">Precio</div>
                                    <div className="Cantidad text-black text-base font-normal font-['Poppins'] leading-normal">Cantidad</div>
                                    <div className="Subtotal text-black text-base font-normal font-['Poppins'] leading-normal">Subtotal</div>
                                </div>
                            </div>
                            <div className="CartSection w-96 h-24 relative bg-white rounded shadow">
                                <div className="650 left-[387px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">$650</div>
                                <div className="650 left-[1063px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">$650</div>
                                <div className="Quantity w-16 h-11 px-3 py-1.5 left-[710px] top-[29px] absolute rounded border border-black border-opacity-40 justify-center items-center inline-flex">
                                    <div className="Frame791 h-8 justify-start items-center gap-4 inline-flex">
                                        <div className=" text-black text-base font-normal font-['Poppins'] leading-normal">01</div>
                                        <div className="Frame792 flex-col justify-start items-start inline-flex">
                                            <div className="DropUpSmall w-4 h-4 relative origin-top-left -rotate-180" />
                                            <div className="DropDownSmall w-4 h-4 relative" />
                                        </div>
                                    </div>
                                </div>
                                <div className="MonitorCartSmall w-14 h-14 px-0.5 pt-2 pb-1.5 left-[40px] top-[24px] absolute justify-center items-center inline-flex">
                                    <img className="G27cq4500x5001 w-12 h-10" src="https://via.placeholder.com/50x39" />
                                </div>
                                <div className="Desmalezadora left-[114px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">Desmalezadora</div>
                                <div className="IconCancel w-6 h-6 left-[30px] top-[20px] absolute">
                                    <div className="Ellipse26 w-4 h-4 left-[3px] top-[3px] absolute bg-red-500 rounded-full" />
                                </div>
                            </div>
                            <div className="CartSection w-96 h-24 relative bg-white rounded shadow">
                                <div className="650 left-[387px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">$550</div>
                                <div className="650 left-[1063px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">$1100</div>
                                <div className="Quantity w-16 h-11 px-3 py-1.5 left-[710px] top-[29px] absolute rounded border border-black border-opacity-40 justify-center items-center inline-flex">
                                    <div className="Frame791 h-8 justify-start items-center gap-3 inline-flex">
                                        <div className=" text-black text-base font-normal font-['Poppins'] leading-normal">02</div>
                                        <div className="Frame792 flex-col justify-start items-start inline-flex">
                                            <div className="DropUpSmall w-4 h-4 relative origin-top-left -rotate-180" />
                                            <div className="DropDownSmall w-4 h-4 relative" />
                                        </div>
                                    </div>
                                </div>
                                <div className="GamepadCartSmall w-14 h-14 px-0.5 py-1.5 left-[40px] top-[24px] absolute justify-center items-center inline-flex">
                                    <img className="G922500x5001 w-12 h-11" src="https://via.placeholder.com/49x42" />
                                </div>
                                <div className="Desmalezadora left-[114px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">AUTOMOWER</div>
                            </div>
                        </div>
                        <div className="Frame804 justify-start items-start gap-96 inline-flex">
                            <div className="Button px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 flex">
                                <div className="VerTodosLosProductos text-black text-base font-medium font-['Poppins'] leading-normal">Seguir Comprando</div>
                            </div>
                            <div className="Button px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 flex">
                                <div className="VerTodosLosProductos text-black text-base font-medium font-['Poppins'] leading-normal">Actualizar</div>
                            </div>
                        </div>
                    </div>
                    <div className="Frame806 justify-start items-start gap-44 inline-flex">
                        <div className="Frame801 justify-start items-end gap-4 flex">
                            <div className="Frame798 pl-6 pr-32 py-4 rounded border border-black justify-start items-center flex">
                                <div className="CupNDescuento opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">Cupón descuento</div>
                            </div>
                            <div className="Button px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex">
                                <div className="VerTodosLosProductos text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Aplicar Cupón</div>
                            </div>
                        </div>
                        <div className="Frame800 w-96 h-80 relative rounded border border-black">
                            <div className="Total left-[24px] top-[32px] absolute text-black text-xl font-medium font-['Poppins'] leading-7">Total</div>
                            <div className="Frame796 left-[24px] top-[84px] absolute justify-start items-start gap-80 inline-flex">
                                <div className="Subtotal text-black text-base font-normal font-['Poppins'] leading-normal">Subtotal:</div>
                                <div className="1750 text-black text-base font-normal font-['Poppins'] leading-normal">$1750</div>
                            </div>
                            <div className="Frame795 w-96 left-[24px] top-[140px] absolute justify-start items-start gap-80 inline-flex">
                                <div className="Descuento text-black text-base font-normal font-['Poppins'] leading-normal">Descuento:</div>
                                <div className="Free w-9 text-black text-base font-normal font-['Poppins'] leading-normal">Free</div>
                            </div>
                            <div className="Frame794 left-[24px] top-[196px] absolute justify-start items-start gap-80 inline-flex">
                                <div className="Total text-black text-base font-normal font-['Poppins'] leading-normal">Total:</div>
                                <div className="1750 text-black text-base font-normal font-['Poppins'] leading-normal">$1750</div>
                            </div>
                            <div className="Button px-12 py-4 left-[150px] top-[236px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="VerTodosLosProductos text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Comprar</div>
                            </div>
                            <div className="Underline w-96 h-px left-[24px] top-[124px] absolute opacity-40 justify-center items-center inline-flex">
                                <div className="Line1 w-96 h-px border border-black"></div>
                            </div>
                            <div className="Underline w-96 h-px left-[24px] top-[180px] absolute opacity-40 justify-center items-center inline-flex">
                                <div className="Line1 w-96 h-px border border-black"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}