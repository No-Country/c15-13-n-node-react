import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
//import PaymentIcon from '@mui/icons-material/Payment';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios"
import { BASE_URL } from "../../constant/constantes";
import { red } from "@mui/material/colors";
import { useProductStore } from "../../store/productStore";

export default function Card(data) {
    const { id, image, name, price, stock, user } = data;
    const { addToCart, removeFromCart, checkProductInCart } = useCart();
    const { getProduct } = useProductStore();
    const navigate = useNavigate();

    const isProductInCart = checkProductInCart(data);

    const handlerDelete = () => {
        axios.delete(`${BASE_URL}product/delete-product/${id}`, {
            headers: {
                'x-access-token': `${user?.token}`,
            }
        }).then(res => {
            alert(`El siguiente producto se elimino con exito: ${res.data.name}`);
            getProduct();
        }).catch(error => {
            alert("El producto no pudo ser eliminado");
        })
    }

    /* const handlerPayment = () => {
        if (!isProductInCart) addToCart(data);
        navigate("/cart")
    } */

    return (
        <div className="flex w-64 h-min-80 flex-col justify-start items-start gap-4 p-6">
            {!!user && <button className="absolute" onClick={handlerDelete} >
                <DeleteIcon style={{ color: red }} />
            </button>}
            <div className="flex flex-col items-center justify-center w-full py-6 h-auto bg-neutral-100 rounded">
                <NavLink className="flex w-full justify-center items-center h-48" to={`/detail/${id}`}>
                    <img className=" w-3/4 h-auto" src={image} alt="card" />
                </NavLink>
                <div className="w-full h-10 flex items-center">
                    <NavLink to={`/detail/${id}`} className={`flex w-full self-end h-full justify-center items-center ${isProductInCart ? 'bg-red-500' : 'bg-black'}`}>
                        {isProductInCart ? <RemoveShoppingCartOutlinedIcon style={{ color: "white" }} /> : <AddShoppingCartOutlinedIcon style={{ color: "white" }} />}
                    </NavLink>

                </div>
            </div>
            <h2>{name}</h2>

            <div className="flex flex-row w-full justify-between">
                <p className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">${price}</p>
                <div className="flex flex-row gap-1">
                    <p>Cantidad: </p>
                    <p className="text-red-500">{stock} uni.</p>
                </div>
            </div>
        </div>
    )
}

/* 
() => { isProductInCart ? removeFromCart(data) : addToCart(data) } */