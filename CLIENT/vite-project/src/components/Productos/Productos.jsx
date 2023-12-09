import { getListProduct } from "../../constant/constantes";
import Card from "../Card/Card";
import { useProductStore } from "../../store/productStore"

export default function Productos({ products }) {

    const listProduct = products ? products : getListProduct;
    const listBase = useProductStore((state) => state.products);


    return (
        <div className="flex flex-row flex-wrap">
            {listProduct.map((product) => {
                return (
                    <div key={product.id}>
                        <Card id={product.id} name={product.name} image={product.image} price={product.price} />
                    </div>
                )
            })}
            {listBase.map((product) => {
                return (
                    <div key={product.id}>
                        <Card id={product.id} name={product.name} image={product.image} price={product.price} />
                    </div>
                )
            })}
        </div>
    )
}