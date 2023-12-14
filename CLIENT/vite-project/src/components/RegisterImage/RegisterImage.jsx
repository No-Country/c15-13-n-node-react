import { useEffect, useState } from "react";

export default function RegisterImage(data) {
    const { file, setFile } = data;
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {

    }, [file])

    const handlerClose = () => {
        setInputValue("");
        setFile(null);
    };

    const handlerFileChange = (event) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
        if (selectedFile) {
            setInputValue(URL.createObjectURL(selectedFile));
        }
        console.log('se selecciono la imagen');
    };


    return (
        <div className="flex relative h-80 w-80 aligne-center justify-center">
            <img src={inputValue === "" ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : inputValue} alt="Foto usuario"
                className="absolute overflow-hidden object-cover rounded-xl" />
            <div className="flex flex-col relative justify-start">
                <button className="flex absolute rounded-full justify-center items-center text-white bg-red-500 w-5 h-10 " onClick={handlerClose}> X </button>
            </div>
            <div className="flex flex-col relative justify-end">
                <input name="image" className="bg-white" type="file" onChange={handlerFileChange} />
            </div>
        </div>
    );
}