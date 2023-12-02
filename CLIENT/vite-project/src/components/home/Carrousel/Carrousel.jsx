import { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const Carrousel = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const images = [
        "/image/robotcesped.png",
        "/image/sopladorbateria.png",
        "/image/minitractores.png",
    ];

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const selectSlide = (index) => {
        setSlideIndex(index);
    };



    return (
        <div className=" w-4/5 h-80 relative bg-black self-center flex">
            <img className="HeroEndframeCvklg0xk3w6eLarge2 w-96 h-80 left-[396px] top-[16px] absolute" src={images[slideIndex]} />
            <div className="w-72 left-[43px] top-[16px] absolute text-neutral-50 text-5xl font-semibold font-['Inter'] leading-10 tracking-widest">Qué maquina necesita tu jardín?</div>

            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded"
                onClick={prevSlide}
            >
                <ChevronLeftIcon />
            </button>

            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded"
                onClick={nextSlide}
            >
                <ChevronRightIcon />
            </button>
            <div className=" left-1/2 top-[320px] absolute justify-center items-center gap-3 inline-flex">
                {images.map(
                    (image, index) => (
                        <div
                            key={index}
                            onClick={() => selectSlide(index)}
                            className={slideIndex === index ? "w-3 h-3 bg-red-500 rounded-full " : "w-3 h-3 opacity-50 bg-black rounded-full"}
                        />
                    ))
                }
            </div>
        </div>
    );
};

