import { NavLink } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
//import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import CartItem from "../../components/Card/CartItem";
import axios from "axios";
import { BASE_URL } from "../../constant/constantes";
//import { useProductStore } from "../../store/productStore";

export default function Cart(data) {
    const { user } = data;
    //hacer las card del carrito responsive
    //const { cart, clearCart, calculateTotalPrice, discountOneProduct } = useCart();
    //const products = useProductStore(state => state.products);
    const [productItem, setProductItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState("");
    //let priceTotal = calculateTotalPrice();

    useEffect(() => {

        //https://ecommerce-upload-backend.onrender.com/api/cart/get-cart
        axios.get(`${BASE_URL}cart/get-cart`, {
            headers: {
                'x-access-token': `${user?.token}`,
            }
        }).then(res => {
            console.log(res.data);
            setProductItem([...res.data.cart.products]);
            setTotalPrice(res.data.cart.totalPrice);
            /* addListCart(products.filter((item) => res.data.cart.products.map((prod) => prod._id).includes(item._id)
            )) */
        })
        //priceTotal = calculateTotalPrice();
    }, [])
    /* const handlerSubmit = () => {

    }
    const handlerClear = () => {
        clearCart();
    } */
    //https://ecommerce-upload-backend.onrender.com/api/cart/fill-cart
    const addToCart = (product) => {
        console.log(product);
        axios.post(`${BASE_URL}cart/fill-cart`, {
            productId: product.product,
            quantity: product.quantity + 1,
        }, {
            headers: {
                'x-access-token': `${user?.token}`,
            }
        }).then(res => {
            console.log(res.data);
            setProductItem([...res.data.cart.products]);
            setTotalPrice(res.data.cart.totalPrice);
        })
    }

    const removeFromCart = (product) => {
        if (product.quantity === 1) {
            axios.delete(`${BASE_URL}cart/delete-product-cart/?productId=${product.product}`, {
                headers: {
                    'x-access-token': `${user?.token}`,
                }
            }).then(res => {
                setProductItem(productItem.filter(item => item.product !== product.product));
                setTotalPrice(res.data.cart.totalPrice);
            })
        } else {
            axios.post(`${BASE_URL}cart/fill-cart`, {
                productId: product.product,
                quantity: -(1),
            }, {
                headers: {
                    'x-access-token': `${user?.token}`,
                }
            }).then(res => {

                const newProductItem = productItem.map(item => {
                    if (item.product === product.product)
                        return ({ ...item, quantity: (item.quantity - 1) })
                    return item;
                });

                setProductItem([...newProductItem]);
                setTotalPrice(res.data.cart.totalPrice);
            })
        }
    }

    return (
        <>
            <div className="w-full h-full flex flex-col items-start gap-20">
                <div className="flex-col w-full p-6 justify-start items-start gap-6 flex">
                    <div className="flex-col w-full justify-start items-start gap-10 flex">
                        <div className="w-full flex h-16 pl-10 pr-10 py-6 bg-white rounded shadow justify-center items-center">
                            <div className="flex w-full justify-between items-center">
                                <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Nombre</div>

                                <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Subtotal</div>
                            </div>
                        </div>

                        <div className="w-full bg-black ">
                            <ul className="p-2 m-1">
                                {productItem ? productItem.map((product) => {
                                    return <CartItem
                                        key={product?._id}
                                        addToCart={() => addToCart(product)}
                                        removeFromCart={() => removeFromCart(product)}
                                        discountOneProduct={() => removeFromCart(product)}
                                        id={product?._id} name={product?.name} price={product?.price} quantity={product?.quantity} />
                                }
                                )
                                    : <li>No hay productos</li>
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="justify-start h-auto items-start w-full inline-flex">

                        <NavLink className=" flex w-1/2 h-full rounded border border-black border-opacity-50 justify-center items-center " to={"/productos"} >
                            <button className="text-black w-full h-full bg-transparent text-base font-medium font-['Poppins'] leading-normal">Seguir Comprando</button>
                        </NavLink>


                        <button className="text-white px-12 h-full w-1/2 py-4 rounded border bg-red-500 border-black border-opacity-50 justify-center items-center flex text-base font-medium font-['Poppins'] leading-normal">
                            <DeleteIcon />
                        </button>

                    </div>
                </div>
                <div className="justify-start w-full p-6 items-start inline-flex">
                    <div className="w-full h-auto p-6 relative rounded border border-black">
                        <div className=" text-black text-xl font-medium font-['Poppins'] leading-7">Ticket</div>
                        <div className="flex justify-between items-start p-2">
                            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Total:</div>
                            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">${totalPrice}</div>
                        </div>

                        {/* <button onClick={handlerSubmit} className="text-neutral-50 flex bg-black rounded justify-center items-center text-base font-medium font-['Poppins'] leading-normal">Comprar</button> */}


                    </div>
                </div>
            </div>
        </>
    );
}



/* {
    cart.length ? cart?.map((product) =>
        <CartItem
            key={product.id}
            addToCart={() => addToCart(product)}
            removeFromCart={() => removeFromCart(product)}
            discountOneProduct={() => discountOneProduct(product)}
            id={product.id} image={product.image} name={product.name} price={product.price} quantity={product.quantity} />

    ) : <h1 className=" text-white w-full flex ">No hay productos añadidos al carrito</h1>
} */