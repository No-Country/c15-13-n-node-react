import { useState } from "react";
import validate from "./validate";
import FormInput from "../../components/Register/FormInput";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterImage from "../../components/RegisterImage/RegisterImage";
import { BASE_URL } from "../../constant/constantes";

export default function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const formInputs = [
        {
            name: 'Nombre',
            type: 'text',
            autoComplete: 'firstName',
            value: firstName,
            onChange: (e) => {
                setFirstName(e.target.value);
                setErrors(validate({ ...{ name, email, password, confirmPassword }, name: e.target.value }));
            },
            errorName: 'Nombre',
        },
        {
            name: 'Apellido',
            type: 'text',
            autoComplete: 'lastName',
            value: lastName,
            onChange: (e) => {
                setLastName(e.target.value);
                setErrors(validate({ ...{ name, email, password, confirmPassword }, name: e.target.value }));
            },
            errorName: 'Apellido',
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
            name: 'mobile',
            type: 'text',
            autoComplete: 'mobile',
            value: mobile,
            onChange: (e) => {
                setMobile(e.target.value);
                setErrors(validate({ ...{ name, email, password, confirmPassword }, name: e.target.value }));
            },
            errorName: 'movile',
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
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };
    const handlerSubmit = async (e) => {
        let base64String;
        e.preventDefault();
        if (avatar) {
            try {
                base64String = await convertToBase64(avatar);
                // Resto del código para enviar la cadena de base64 a través de axios
            } catch (error) {
                console.log("error al subir la imagen");
            }
        }

        axios.post(`${BASE_URL}user/register`, {
            lastName,
            firstName,
            email,
            mobile,
            password,
            avatar: base64String,

        }).then(() => {
            //navigate('/');
            alert(`usuario creado con exito`);
            navigate('/login');

        })
            .catch(
                (error) => {
                    alert(`Error al crear la cuenta${error.response.data.message}`)
                }
            )

    }


    return (
        <div className="w-full h-full">

            <div className="flex justify-center flex-wrap items-center gap-32 ">
                <div className="SideImage pl-4 pr-5 pt-20 pb-16 bg-sky-50 rounded-tr rounded-br justify-center items-center flex">
                    <RegisterImage file={avatar} setFile={setAvatar} />
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