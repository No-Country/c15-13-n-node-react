import { getListCategorias } from "../../constant/constantes"
import { useFilters } from "../../hooks/useFilters";

export function Filters() {

    const { filters, setFilters } = useFilters();

    const listCategorias = getListCategorias;

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value,
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value,
        }))
    }
    return (
        <section className="flex justify-between w-full py-10">
            <div>
                <label htmlFor="price">Precio</label>
                <input type="range" id='price' min='0' max='100000' value={filters.minPrice} onChange={handleChangeMinPrice} />
                <span>${filters.minPrice}</span>

            </div>
            <div>
                <label htmlFor="category">Categoria</label>
                <select name="category" id="cartegory" onChange={handleChangeCategory} >
                    <option value="all">Todas</option>
                    {listCategorias.map((cat, index) => (
                        <option key={index} value={cat.categoria}>{cat.categoria}</option>
                    ))}

                </select>
            </div>
        </section>
    )
}