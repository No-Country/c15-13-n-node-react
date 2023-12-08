import { useEffect } from "react";
import { getListProduct } from "../../constant/constantes";
import Card from "../Card/Card";
import axios from "axios"

export default function Productos({ products }) {

    const listProduct = products ? products : getListProduct;

    useEffect(
        () => {
            axios("http://localhost:8000/api/product/get-products ").then(response => {
                console.log(response.data);
            })
        }, []
    )

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