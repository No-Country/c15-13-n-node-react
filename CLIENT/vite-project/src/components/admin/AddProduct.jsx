import { useState } from "react";
import FormInput from "../../components/Register/FormInput";
import axios from "axios";
import RegisterImage from "../../components/RegisterImage/RegisterImage";
import validateProduct from "./validateProduct";
import { BASE_URL, getListCategorias } from "../../constant/constantes";

export default function AddProduct(data) {
    const listCategorias = getListCategorias;
    const { user } = data;
    const [name, setName] = useState('');
    const [reference, setReference] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [stock, setStock] = useState(10);
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
            name: 'Stock',
            type: 'number',
            autoComplete: '',
            value: stock,
            onChange: (e) => {
                setStock(e.target.value);
                //setErrors(validate({ ...{ name, email, password, confirmPassword }, email: e.target.value }));
            },
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

        setErrors(validateProduct({
            name,
            reference,
            description,
            price,
            category,
        }))

        if (!image) {
            alert('No se ha seleccionado ninguna imagen');
            return;
        }

        try {
            base64String = await convertToBase64(image);
            // Resto del código para enviar la cadena de base64 a través de axios
        } catch (error) {
            console.error('Error al subir imagen:', error);
        }

        axios.post(`${BASE_URL}product/create`, {
            name,
            reference,
            description,
            price,
            category,
            image: base64String,
            stock,

        }, {
            headers: {
                'x-access-token': `${user.token}`,
            }
        }
        ).then(res => {
            //localStorage.setItem('token', res.data.token);
            //localStorage.setItem('user', JSON.stringify(res.data.user));
            //navigate('/');
            alert(`${res.data.msg}`);

        }).catch(
            error => {
                alert(`Error al crear el producto`)
                console.log("error");
                console.log(error.data);

            }
        )

    }


    return (
        <div className="w-full h-full">

            <div className=" flex w-full flex-wrap justify-around items-center">
                <div className="w-full sm:w-1/2 justify-center items-center flex">
                    <RegisterImage file={image} setFile={setImage} />
                </div>
                <section className="flex-col justify-start items-start gap-6 inline-flex w-full sm:w-1/2 ">
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
                        <label htmlFor="category">Categoria</label>
                        <select name="category" id="cartegory" onChange={(value) => setCategory(value)} >
                            <option value="all">Todas</option>
                            {listCategorias.map((cat, index) => (
                                <option key={index} value={cat.categoria}>{cat.categoria}</option>
                            ))}

                        </select>

                        <button onClick={handlerSubmit} className="Button px-32 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                            <p className="text-white bg-transparent text-base font-medium font-['Poppins'] leading-normal">Agregar producto</p>
                        </button>


                    </form>
                </section>
            </div>

        </div>
    );
}