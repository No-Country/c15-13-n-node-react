import Productos from "../../components/Productos/Productos";
//import { getListProduct } from "../../constant/constantes";
import { Filters } from "../../components/Productos/Filters";
import { useFilters } from "../../hooks/useFilters";
import { useProductStore } from "../../store/productStore"
import { useEffect } from "react";


export default function Product() {
    const { filterProducts } = useFilters();
    const { getProduct } = useProductStore();
    const products = useProductStore(state => state.products);

    useEffect(() => {
        getProduct();
    }, [])

    const filteredProducts = filterProducts(products)

    return (
        <>
            <Filters />
            <Productos products={filteredProducts} />
        </>
    )
}