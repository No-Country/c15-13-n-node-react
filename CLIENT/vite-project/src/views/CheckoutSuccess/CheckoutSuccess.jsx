import { useState, useEffect } from "react";
import axios from "axios";

export default function CheckoutSuccess() {
  const [error, setError] = useState(null);
  const headers = {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2EwOWU0NGE0MmZjNzBlODNmYzExNyIsImlhdCI6MTcwMjc2NzY2MSwiZXhwIjoxNzAzMDI2ODYxfQ.Dssxy0DZ_9RmwCDOIpnZ8OBd4ROXJFP1562sdb47yyo",
  };

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.delete(
          `http://localhost:8000/api/cart/delete-cart/${id}`,
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
    const id = "6580d451bb3d0c78bcc526eb";
    fetchData(id);
  }, []);
  return <h2>Compra satisfactoria...</h2>;
}
