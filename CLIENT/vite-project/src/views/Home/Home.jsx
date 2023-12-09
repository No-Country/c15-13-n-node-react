import { useEffect } from "react";
import { Carrousel } from "../../components/home/Carrousel/Carrousel";
import Categorias from "../../components/home/Categorias/Categorias";
import Ofertas from "../../components/home/ofertas/Ofertas";
import { useProductStore } from "../../store/productStore";

export default function Home() {
    const { getProduct } = useProductStore();

    useEffect(() => {
        getProduct();
    }, [])
    return (
        <>
            <Carrousel />
            <br />
            <Ofertas />
            <br />
            <Categorias />
        </>
    );
}