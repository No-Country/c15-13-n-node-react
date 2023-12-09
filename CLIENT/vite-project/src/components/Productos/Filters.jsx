import { useState } from "react";
import { getListCategorias } from "../../constant/constantes"

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0);
    const listCategorias = getListCategorias;

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.taget.value);
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value,
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value,
        }))
    }
    return (
        <section className="flex justify-between w-full py-10">
            <div>
                <label htmlFor="price">Precio</label>
                <input type="range" id='price' min='0' max='100000' onChange={handleChangeMinPrice} />
                <span>${minPrice}</span>

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