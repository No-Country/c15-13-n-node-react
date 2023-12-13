import { Carrousel } from "../../components/home/Carrousel/Carrousel";
import Categorias from "../../components/home/Categorias/Categorias";
import Ofertas from "../../components/home/ofertas/Ofertas";

export default function Home() {

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