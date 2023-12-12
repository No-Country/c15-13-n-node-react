import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_URL_BASE;

export default function useProductById(id) {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`${BASE_URL}product/get-one-product/${id}`).then(({ data }) => {
            console.log(data);
            setCharacter(data.user);
            setLoading(false);
        });
        return setCharacter({});
    }, [id]);

    return { ...{ character, loading } };
}
