import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <div >
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/cart">Cart</NavLink>

        </div>
    );
}
