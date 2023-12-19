import { NavLink } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "../../hooks/useCart";
import { useEffect } from "react";
import CartItem from "../../components/Card/CartItem";

export default function Cart() {
    //hacer las card del carrito responsive
    const { cart, clearCart, addToCart, removeFromCart, calculateTotalPrice, discountOneProduct } = useCart()
    let priceTotal = calculateTotalPrice();

    useEffect(() => {
        priceTotal = calculateTotalPrice();
    }, [cart])
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
                        <div className="w-full flex h-16 pl-10 pr-10 py-6 bg-white rounded shadow justify-center items-center">
                            <div className="flex w-full justify-between items-center">
                                <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Producto</div>

                                <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Subtotal</div>
                            </div>
                        </div>

                        <div className="w-full bg-black ">
                            <ul className="p-2 m-1">
                                {cart.length ? cart?.map((product) =>
                                    <CartItem
                                        key={product.id}
                                        addToCart={() => addToCart(product)}
                                        removeFromCart={() => removeFromCart(product)}
                                        discountOneProduct={() => discountOneProduct(product)}
                                        id={product.id} image={product.image} name={product.name} price={product.price} quantity={product.quantity} />

                                ) : <h1 className=" text-white w-full flex ">No hay productos añadidos al carrito</h1>}
                            </ul>
                        </div>

                    </div>
                    <div className="justify-start h-auto items-start w-full inline-flex">

                        <NavLink className=" flex w-1/2 h-full rounded border border-black border-opacity-50 justify-center items-center " to={"/productos"} >
                            <button className="text-black w-full h-full bg-transparent text-base font-medium font-['Poppins'] leading-normal">Seguir Comprando</button>
                        </NavLink>


                        <button onClick={handlerClear} className="text-white px-12 h-full w-1/2 py-4 rounded border bg-red-500 border-black border-opacity-50 justify-center items-center flex text-base font-medium font-['Poppins'] leading-normal">
                            <DeleteIcon />
                        </button>

                    </div>
                </div>
                <div className="justify-start w-full p-6 items-start inline-flex">
                    <div className="w-full h-auto p-6 relative rounded border border-black">
                        <div className=" text-black text-xl font-medium font-['Poppins'] leading-7">Ticket</div>
                        <div className="flex justify-between items-start p-2">
                            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Total:</div>
                            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">${priceTotal}</div>
                        </div>

                        <button onClick={handlerSubmit} className="text-neutral-50 flex bg-black rounded justify-center items-center text-base font-medium font-['Poppins'] leading-normal">Comprar</button>


                    </div>
                </div>
            </div>
        </>
    );
}