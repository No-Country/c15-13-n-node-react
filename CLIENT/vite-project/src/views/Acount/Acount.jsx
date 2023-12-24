import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

Acount.propTypes = {
    user: PropTypes.object,
    setUser: PropTypes.func,
};

export default function Acount({ user, setUser }) {
    const navigate = useNavigate();
    const handler = () => {
        setUser({});
        navigate('/login');
    };
    return (
        <div className="w-full h-full flex flex-col items-center">
            <h1>Usuario</h1>
            <h2 className=" text-lg">Nombre ={user.firstname} {user.lastname}</h2>
            <h2 className=" text-lg">Email ={user.email}</h2>
            <h2 className=" text-lg">Tel = {user.mobile}</h2>
            <button onClick={handler}>Cerrar sesion</button>
        </div>
    )
}