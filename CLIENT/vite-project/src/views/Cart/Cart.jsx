import { NavLink } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "../../hooks/useCart";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';


export default function Cart() {
    //hacer las card del carrito responsive
    const { cart, clearCart, addToCart } = useCart()

    function CartItem({ image, price, name, quantity, addToCart }) {
        return (
            <li>
                <img src={image} alt={name} />
                <div>
                    <strong>{name}</strong>
                </div>
                <div>
                    <small>
                        {quantity}
                    </small>
                    <div className="flex flex-col w-10">
                        <button>
                            <AddBoxIcon />
                        </button>
                        <button>
                            <RemoveIcon />
                        </button>
                    </div>
                </div>
                <div>
                    ${price}
                </div>
            </li>
        )
    }

    const handlerSubmit = () => {

    }
    const handlerClear = () => {
        clearCart();
    }
    return (
        <>
            <div className="w-full h-full flex flex-col items-start gap-20">
                <div className="flex-col w-full p-6 justify-start items-start gap-6 flex">
                    <div className="flex-col w-full justify-start items-start gap-10 flex">
                        <div className="w-full flex h-16 pl-10 pr-2.5 py-6 bg-white rounded shadow justify-center items-center">
                            <div className="flex w-full justify-between items-center gap-72 ">
                                <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Producto</div>

                                <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Subtotal</div>
                            </div>
                        </div>

                        <div className="w-full bg-black ">
                            <ul className="bg-white p-2 m-1">
                                {cart.map(product => {
                                    <CartItem
                                        key={product.id}
                                        addToCart={() => addToCart(product)}
                                        {...product} />
                                })}
                            </ul>
                        </div>

                    </div>
                    <div className="justify-start items-start gap-96 inline-flex">

                        <NavLink className="px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 flex" to={"/productos"} >
                            <button className="text-black bg-transparent text-base font-medium font-['Poppins'] leading-normal">Seguir Comprando</button>
                        </NavLink>

                        <div className="px-12 py-4 rounded border bg-red-500 border-black border-opacity-50 justify-center items-center gap-2.5 flex">
                            <button onClick={handlerClear} className="text-white bg-transparent text-base font-medium font-['Poppins'] leading-normal">
                                <DeleteIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="justify-start p-6 items-start gap-44 inline-flex">

                    <div className="w-full h-auto p-6 relative rounded border border-black">
                        <div className="left-[24px] top-[32px] text-black text-xl font-medium font-['Poppins'] leading-7">Ticket</div>
                        <div className="flex justify-start items-start gap-80 p-2">
                            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Total:</div>
                            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">$1750</div>
                        </div>
                        <div className="px-12 bg-black rounded justify-center items-center gap-2.5 inline-flex">
                            <button onClick={handlerSubmit} className="text-neutral-50 bg-transparent px-12 py-4 text-base font-medium font-['Poppins'] leading-normal">Comprar</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}