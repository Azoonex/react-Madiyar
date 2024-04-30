import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
    images: string[];
    interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const autoPlayInterval = setInterval(nextSlide, interval);
        return () => {
            clearInterval(autoPlayInterval);
        };
    }, [interval]);

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                <IoIosArrowBack className='i-sm'/>
            </button>
            <img
                src={images[activeIndex]}
                alt={`Slide ${activeIndex}`}
                className="carousel__img"
            />
            <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                <IoIosArrowForward className='i-sm' />
            </button>
        </div>
    );
};
export default Carousel;
