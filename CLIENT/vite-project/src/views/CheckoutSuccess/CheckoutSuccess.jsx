import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant/constantes";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function CheckoutSuccess(data) {
  const { user } = data;
  const [cart, setCart] = useLocalStorage('cart', "")
  const [error, setError] = useState(null);
  const headers = {
    "x-access-token": user?.token,
  };

  useEffect(() => {
    console.log(cart);
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
          }
        } else {
          console.log(response.data.msg)
          alert(response.data.msg);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData(cart);
  }, []);
  return <h2>Compra satisfactoria...</h2>;
}
