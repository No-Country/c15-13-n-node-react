import { useState } from "react";

export default function RegisterImage({ avatar, handler }) {
    const [file, setFile] = useState(avatar);
    const [inputValue, setInputValue] = useState("");

    const handlerClose = () => {
        setInputValue("");
        setFile(null);
        handler(null);
    };

    const handleInputChange = (event) => {
        handler(event);
        setInputValue(event.target?.value);
    };

    const handlerFileChange = (event) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
        handler(selectedFile);
        if (selectedFile) {
            setInputValue(URL.createObjectURL(selectedFile));
        }
    };


    return (
        <div className="flex relative h-80 w-80 aligne-center justify-center">
            <div className="flex pl-2 justify-end" onClick={handlerClose}>
                <button className="flex absolute rounded-full justify-center items-center text-white bg-red-500 w-10 h-10 "> X </button>
            </div>
            <img src={inputValue === "" ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" : inputValue} alt="Foto usuario"
                className="absolute overflow-hidden object-cover rounded-full" />
            <div className="flex flex-col relative justify-end">
                <input name="image" className="bg-white" type="file" onChange={handlerFileChange} />
            </div>
        </div>
    );
}