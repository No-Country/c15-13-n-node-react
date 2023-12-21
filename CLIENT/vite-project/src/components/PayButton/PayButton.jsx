import axios from "axios";
import { BASE_URL } from "../../constant/constantes";
// Creamos el pago en Stripe tomando el Id del carrito
export default function PayButton(data) {
  const { id, user } = data
  const postData = {
    OrderId: id,  //Id del carrito
  };

  const headers = {
    "Content-Type": "application/json",
    "x-access-token": user.token,
  };
  //https://ecommerce-upload-backend.onrender.com/api/order/stripe/create-checkout-session
  const handleSubmit = () => {
    console.log(id);
    console.log(user);
    axios
      .post(`${BASE_URL}order/stripe/create-checkout-session`,  //Cambiarlo por el de produccion
        postData,
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  };

  return (
    <div className="bg-black w-56">
      <button
        onClick={handleSubmit}
        className="text-white bg-transparent px-12 py-4 text-base font-medium font-['Poppins'] leading-normal"
      >
        Comprar ahora
      </button>
    </div>
  );
}
