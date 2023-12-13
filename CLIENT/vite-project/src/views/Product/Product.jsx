import Productos from "../../components/Productos/Productos";
import { getListProduct } from "../../constant/constantes";
import { Filters } from "../../components/Productos/Filters";
import { useFilters } from "../../hooks/useFilters";

export default function Product() {
    const { filterProducts } = useFilters();

    const filteredProducts = filterProducts(getListProduct)

    return (
        <>
            <Filters />
            <Productos products={filteredProducts} />
        </>
    )
}