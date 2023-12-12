import { useState } from "react";

import FormInput from "../../components/Register/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const { user, setUser } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const formInputs = [

        {
            name: 'Email',
            type: 'email',
            autoComplete: 'email',
            value: email,
            onChange: (e) => {
                setEmail(e.target.value);
            },

        },

        {
            name: 'Contraseña',
            type: 'password',
            autoComplete: 'password',
            value: password,
            onChange: (e) => {
                setPassword(e.target.value);
            },

        },

    ];

    const handlerSubmit = (e) => {
        e.preventDefault();
        /* setErrors({});
        if (Object.keys(validate({ name, email, password, confirmPassword })).length !== 0) {
            setErrors(validate({ name, email, password, confirmPassword }));
            return;
        } */
        if (user) {
            alert("Ya se encuentra autenticado debe cerrar sesion")
            return;
        }

        axios.post('http://localhost:8000/api/user/login', {
            email,
            password,

        }).then(res => {
            //aca guardo los datos del usuario

            setUser(res.data);
            navigate('/');


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
                <section className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                        <div className="CreateAnAccount text-black text-4xl font-medium font-['Inter'] leading-loose tracking-wider">Iniciar</div>

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

                                    />

                                </div>
                            ))
                        }

                        <button onClick={handlerSubmit} className="Button px-32 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                            <p className="text-white bg-transparent text-base font-medium font-['Poppins'] leading-normal">Iniciar sesion</p>
                        </button>

                    </form>
                </section>
            </div>

        </div>
    );
}