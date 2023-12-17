import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import PaymentIcon from '@mui/icons-material/Payment';

export default function Card(data) {
    const { id, image, name, price } = data;
    const { addToCart, removeFromCart, checkProductInCart } = useCart();
    const navigate = useNavigate();

    const isProductInCart = checkProductInCart(data);

    const handlerPayment = () => {
        if (!isProductInCart) addToCart(data);
        navigate("/cart")
    }

    return (
        <div className="flex w-64 h-min-80 flex-col justify-start items-start gap-4 p-6">
            <div className="flex flex-col items-center justify-center w-full py-6 h-auto bg-neutral-100 rounded">
                <NavLink className="flex w-full justify-center items-center h-48" to={`/detail/${id}`}>
                    <img className=" w-3/4 h-auto" src={image} alt="card" />
                </NavLink>
                <div className="w-full h-auto flex items-center">
                    <button onClick={() => { isProductInCart ? removeFromCart(data) : addToCart(data) }} className={`flex w-1/2 self-end h-full justify-center items-center ${isProductInCart ? 'bg-red-500' : 'bg-black'}`}>
                        {isProductInCart ? <RemoveShoppingCartOutlinedIcon style={{ color: "white" }} /> : <AddShoppingCartOutlinedIcon style={{ color: "white" }} />}
                    </button>
                    <button onClick={handlerPayment} className="flex border border-black">
                        <PaymentIcon />
                        <p>Comprar</p>
                    </button>

                </div>
            </div>

            <h2>{name}</h2>
            <p className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">${price}</p>
        </div>
    )
}
