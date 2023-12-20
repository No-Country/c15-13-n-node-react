import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant/constantes";

export default function CheckoutSuccess(data) {
  const { user } = data;
  const [cart, setCart] = useState({});

  const [error, setError] = useState(null);
  const headers = {
    "x-access-token": user?.token,
  };

  const fetchData = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}cart/delete-cart/${id}`,
        { headers }
      );
      console.log('RESPUESTA PAGO ', response.data)
      if (response.data.success) {
        if (response.data.status) {
          alert(response.data.msg);
          setCart({})
        }
      } else {
        console.log(response.data.msg)
        alert(response.data.msg);
      }
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {

    axios.get(`${BASE_URL}cart/get-cart`, {
      headers: {
        'x-access-token': `${user?.token}`,
      }
    }).then(res => {
      setCart(res.data.cart);
    })
    //priceTotal = calculateTotalPrice();
    return fetchData(cart._id);
  }, [])

  if (!cart) {
    return (
      <>
        <h1>No se encuentra ningun carrito</h1>
      </>
    )
  }

  return (
    <>
      <h1>Su compra fue exitosa</h1>
      <h2>El siguiente pedido fue procesado con exito</h2>
      <div className="w-full bg-black ">
        <ul className="p-2 m-1">
          {cart.map((price, name, quantity) => {
            return <>
              <li className=' w-full flex justify-between'>
                <div>
                  {/* <img className=' w-20' src={image} alt={name} /> */}
                  <div className='flex items-center'>
                    <strong className=' text-white'>{name}</strong>
                  </div>
                </div>
                <div className='flex items-center gap-6'>
                  <small className='text-white w-10 text-lg'>
                    {quantity}
                  </small>
                </div>
                <div className='text-white flex items-center'>
                  ${price}
                </div>
              </li>
            </>
          }
          )

          }
        </ul>
      </div>
    </>
  );
}
