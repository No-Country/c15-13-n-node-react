import Card from "../Card/Card";
//import { useCart } from "../../hooks/useCart";


export default function Productos({ products }) {
    //const { addToCart } = useCart();

    const listProducts = products;
    //const listProduct = products ? products : allProducts;

    function addToCart(product) {
        console.log("aca llego");
    }
    return (
        <div className="flex flex-row flex-wrap">
            {listProducts?.map((product, index) => {
                return (
                    <div key={index}>
                        <Card id={product._id} name={product.name} image={product.image} price={product.price} addToCart={() => addToCart(product)} />
                    </div>
                )
            })}
        </div>
    )
}