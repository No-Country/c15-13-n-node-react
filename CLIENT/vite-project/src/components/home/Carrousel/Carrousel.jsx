import { useEffect, useState } from "react";
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

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className="flex flex-col py-6 w-4/5 h-auto bg-black self-center">
            <div className="flex items-center h-auto w-full flex-wrap">
                <div className="flex w-full sm:w-1/2 ">
                    <div className="flex w-4/5 px-12 text-neutral-50 text-4xl font-semibold font-['Inter'] leading-auto tracking-widest">
                        Qué maquina necesita tu jardín?
                    </div>
                </div>
                <picture className="bg-transparent sm:w-1/2 flex justify-center items-center">
                    <img className=" w-4/5 h-auto" src={images[slideIndex]} />
                </picture>
                <div className="absolute w-4/5 flex justify-between items-center">
                    <button
                        className="flex self-center bg-transparent text-white rounded"
                        onClick={prevSlide}
                    >
                        <ChevronLeftIcon />
                    </button>

                    <button
                        className="flex self-center bg-transparent text-white rounded"
                        onClick={nextSlide}
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>

            <div className="justify-center items-center gap-3 inline-flex">
                {images.map(
                    (image, index) => (
                        <div
                            key={index}
                            onClick={() => selectSlide(index)}
                            className={slideIndex === index ? "w-3 h-3 bg-red-500 rounded-full " : "w-3 h-3 opacity-50 bg-white rounded-full"}
                        />
                    ))
                }
            </div>
        </div>
    );
};

