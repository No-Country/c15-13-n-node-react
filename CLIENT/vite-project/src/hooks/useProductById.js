import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/constantes";


export default function useProductById(id) {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`${BASE_URL}product/get-one-product/${id}`).then(({ data }) => {
            setCharacter(data.user);
            setLoading(false);
        });
        return setCharacter({});
    }, [id]);

    return { ...{ character, loading } };
}
