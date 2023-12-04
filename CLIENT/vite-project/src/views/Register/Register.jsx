import { useEffect, useState } from "react";
import validate from "./validate";
import FormInput from "../../components/Register/FormInput";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const formInputs = [
        {
            name: 'Nombre',
            type: 'text',
            autoComplete: 'name',
            value: name,
            onChange: (e) => {
                setName(e.target.value);
                setErrors(validate({ ...{ name, email, password, confirmPassword }, name: e.target.value }));
            },
            errorName: 'name',
        },
        {
            name: 'Email',
            type: 'email',
            autoComplete: 'email',
            value: email,
            onChange: (e) => {
                setEmail(e.target.value);
                setErrors(validate({ ...{ name, email, password, confirmPassword }, email: e.target.value }));
            },
            errorName: 'email',
        },
        {
            name: 'Contraseña',
            type: 'password',
            autoComplete: 'password',
            value: password,
            onChange: (e) => {
                setPassword(e.target.value);
                setErrors(validate({ ...{ name, email, password, confirmPassword }, password: e.target.value }));
            },
            errorName: 'password',
        },
        {
            name: 'Confirmar Contraseña',
            type: 'password',
            autoComplete: 'password',
            value: confirmPassword,
            onChange: (e) => {
                setConfirmPassword(e.target.value);
                setErrors(validate({ ...{ name, email, password, confirmPassword }, confirmPassword: e.target.value }));
            },
            errorName: 'confirmPassword'

        },
    ];

    const handlerSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        if (Object.keys(validate({ name, email, password, confirmPassword })).length !== 0) {
            setErrors(validate({ name, email, password, confirmPassword }));
            return;
        }
        axios.post('https://localhost:8000/register', {
            name,
            email,
            password,
            confirmPassword
        }).then(res => {
            if (res.data.status === 200) {
                //localStorage.setItem('token', res.data.token);
                //localStorage.setItem('user', JSON.stringify(res.data.user));
                navigate('/');
            }
        })
            .catch(
                (error) => {
                    alert(`Error al crear la cuenta${error.response.data.message}`)
                }
            )

    }


    return (
        <div className="w-full h-full">

            <div className="flex justify-center items-center gap-32 ">
                <div className="SideImage pl-4 pr-5 pt-20 pb-16 bg-sky-50 rounded-tr rounded-br justify-center items-center flex">
                    <img className="DlBeatsnoop1 w-96 h-96" src="/image/varias_herramientas.png" />
                </div>
                <section className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                        <div className="CreateAnAccount text-black text-4xl font-medium font-['Inter'] leading-loose tracking-wider">Registrarse</div>

                    </div>
                    <form className="flex-col justify-start items-center gap-5 flex">
                        {
                            formInputs.map((input) => (
                                <div key={input.name} className="form-group relative mb-10 w-full justify-self-end">
                                    <FormInput
                                        type={input.type}
                                        name={input.name}
                                        value={input.value}
                                        handler={input.onChange}
                                        autoComplete={input.autoComplete}
                                        errors={errors[input.errorName]}
                                    />

                                </div>
                            ))
                        }

                        <button onClick={handlerSubmit} className="Button px-32 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                            <p className="text-white bg-transparent text-base font-medium font-['Poppins'] leading-normal">CREAR CUENTA</p>
                        </button>
                        <div className="flex-col justify-start items-center gap-8 flex">

                            <div className="justify-start items-center gap-4 inline-flex">
                                <div className="AlreadyHaveAccount opacity-70 text-black text-base font-normal font-['Poppins'] leading-normal">¿Ya tiene una cuenta?</div>
                                <div className="flex-col justify-start items-start gap-1 inline-flex">
                                    <NavLink to={"/login"} className="LogIn opacity-70 text-black text-base font-medium font-['Poppins'] leading-normal">Iniciar sesion</NavLink>
                                </div>
                            </div>
                        </div>

                    </form>
                </section>
            </div>

        </div>
    );
}