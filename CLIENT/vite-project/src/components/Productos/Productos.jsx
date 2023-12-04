import { getListProduct } from "../../constant/constantes"
import Card from "../Card/Card";

export default function Productos() {

    const listProduct = [...getListProduct];

    return (
        <>
            {listProduct.map((product) => {
                return (
                    <div key={product.id}>
                        <Card id={product.id} name={product.name} image={product.image} price={product.price} />
                    </div>
                )
            })}
        </>
    )
}