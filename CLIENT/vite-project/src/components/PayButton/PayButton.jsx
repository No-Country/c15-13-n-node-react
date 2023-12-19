import axios from "axios";
// Creamos el pago en Stripe tomando el Id del carrito
export default function PayButton() {
  const postData = {
    OrderId: "6580d451bb3d0c78bcc526eb",  //Id del carrito
  };

  const headers = {
    "Content-Type": "application/json",
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2EwOWU0NGE0MmZjNzBlODNmYzExNyIsImlhdCI6MTcwMjc2NzY2MSwiZXhwIjoxNzAzMDI2ODYxfQ.Dssxy0DZ_9RmwCDOIpnZ8OBd4ROXJFP1562sdb47yyo",
  };
  //https://ecommerce-upload-backend.onrender.com/api/order/stripe/create-checkout-session
  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:8000/api/order/stripe/create-checkout-session",  //Cambiarlo por el de produccion
        postData,
        { headers }
      )
      .then((res) => {
        if(res.data.url){
            window.location.href = res.data.url;
        }
      })
      .catch(error=>{
        console.error('Error: ',error);
      });
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className="text-neutral-50 bg-transparent px-12 py-4 text-base font-medium font-['Poppins'] leading-normal"
      >
        Comprar ahora
      </button>
    </div>
  );
}
