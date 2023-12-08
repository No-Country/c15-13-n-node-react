import { useState } from "react";
import Productos from "../../components/Productos/Productos";
import { getListProduct } from "../../constant/constantes";
import { Filters } from "../../components/Productos/Filters";

function useFilters() {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    })
    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
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
    const [products] = useState(getListProduct);
    const { filterProducts, setFilters } = useFilters()

    const filteredProducts = filterProducts(products)

    return (
        <>
            <Filters onChange={setFilters} />
            <Productos products={filteredProducts} />
        </>
    )
}