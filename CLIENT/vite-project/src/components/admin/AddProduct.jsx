import { useState } from "react";
import FormInput from "../../components/Register/FormInput";
//import { NavLink } from "react-router-dom";
import axios from "axios";
import RegisterImage from "../../components/RegisterImage/RegisterImage";
const BASE_URL = import.meta.env.VITE_URL_BASE;


export default function AddProduct(data) {
    const { user } = data;
    const [name, setName] = useState('');
    const [reference, setReference] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const [errors, setErrors] = useState({});
    const formInputs = [
        {
            name: 'Nombre',
            type: 'text',
            autoComplete: 'name',
            value: name,
            onChange: (e) => {
                setName(e.target.value);
                //setErrors(validate({ ...{ name, email, password, confirmPassword }, name: e.target.value }));
            },
        },
        {
            name: 'Referencia',
            type: 'text',
            autoComplete: '',
            value: reference,
            onChange: (e) => {
                setReference(e.target.value);
                //setErrors(validate({ ...{ name, email, password, confirmPassword }, name: e.target.value }));
            },
        },
        {
            name: 'Description',
            type: 'text',
            autoComplete: '',
            value: description,
            onChange: (e) => {
                setDescription(e.target.value);
                //setErrors(validate({ ...{ name, email, password, confirmPassword }, email: e.target.value }));
            },
        },
        {
            name: 'Precio',
            type: 'number',
            autoComplete: '',
            value: price,
            onChange: (e) => {
                setPrice(e.target.value);
                //setErrors(validate({ ...{ name, email, password, confirmPassword }, email: e.target.value }));
            },
        },
        {
            name: 'Categoria',
            type: 'text',
            autoComplete: '',
            value: category,
            onChange: (e) => {
                setCategory(e.target.value);
                //setErrors(validate({ ...{ name, email, password, confirmPassword }, email: e.target.value }));
            },
        },


    ];

    const handlerSubmit = (e) => {
        let base64;
        e.preventDefault();

        console.log(user);
        const reader = new FileReader();
        reader.onload = () => {
            base64 = reader.result;
        };
        reader.readAsDataURL(image);

        axios.post(`${BASE_URL}product/create`, {
            name,
            reference,
            description,
            price,
            category,
            image: base64,

        }, {
            headers: {
                authorization: `Bearer ${user.token}`,
            }
        }
        ).then(res => {
            //localStorage.setItem('token', res.data.token);
            //localStorage.setItem('user', JSON.stringify(res.data.user));
            //navigate('/');
            alert(`${res.data.msg}`);
            console.log(res.data);
        }).catch(
            (error) => {
                console.log("error");
                console.log(error.response.data.message);

                alert(`Error al crear la cuenta${error.data.message}`)
            }
        )

    }


    return (
        <div className="w-full h-full">

            <div className="flex justify-center items-center gap-32 ">
                <div className="SideImage pl-4 pr-5 pt-20 pb-16 justify-center items-center flex">
                    <RegisterImage file={image} setFile={setImage} />
                </div>
                <section className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                        <div className="CreateAnAccount text-black text-4xl font-medium font-['Inter'] leading-loose tracking-wider">Nuevo Producto</div>

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
                                        errors={errors[input.value]}
                                    />

                                </div>
                            ))
                        }

                        <button onClick={handlerSubmit} className="Button px-32 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                            <p className="text-white bg-transparent text-base font-medium font-['Poppins'] leading-normal">Agregar producto</p>
                        </button>


                    </form>
                </section>
            </div>

        </div>
    );
}