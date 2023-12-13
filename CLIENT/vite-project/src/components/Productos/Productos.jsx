import Card from "../Card/Card";
import { useProductStore } from "../../store/productStore"


export default function Productos(data) {
    const { products } = data;
    const allProducts = useProductStore((state) => state.products);
    const listProduct = products ? products : allProducts;

    console.log(allProducts);

    return (
        <div className="flex flex-row flex-wrap">
            {listProduct?.map((product, index) => {
                return (
                    <div key={index}>
                        <Card id={product._id} name={product.name} image={product.image} price={product.price} />
                    </div>
                )
            })}
        </div>
    )
}