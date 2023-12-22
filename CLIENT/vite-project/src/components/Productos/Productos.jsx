import Card from "../Card/Card";

export default function Productos(data) {
    const { products, user } = data;
    const listProducts = products;

    return (
        <div className="flex justify-center flex-row flex-wrap">
            {listProducts?.map((product, index) => {
                return (
                    <div key={index}>
                        <Card id={product._id} name={product.name} image={product.image} price={product.price} stock={product.stock} user={user} />
                    </div>
                )
            })}
        </div>
    )
}