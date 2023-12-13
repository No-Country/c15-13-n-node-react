import { useEffect, useState } from "react";
import Productos from "../../components/Productos/Productos";
//import { getListProduct } from "../../constant/constantes";
import { Filters } from "../../components/Productos/Filters";
import { useProductStore } from "../../store/productStore";

function useFilters() {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    });
    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                Number(product.price) >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    }
    return { filterProducts, setFilters }
}

export default function Product() {
    const allProducts = useProductStore((state) => state.products);
    //const [products] = useState(getListProduct);
    const { filterProducts, setFilters } = useFilters();
    const filteredProducts = filterProducts(allProducts);
    const { getProduct } = useProductStore();

    useEffect(() => {
        !allProducts && getProduct();
    }, [allProducts])

    return (
        <>
            <Filters onChange={setFilters} />
            <Productos products={filteredProducts} />
        </>
    )
}