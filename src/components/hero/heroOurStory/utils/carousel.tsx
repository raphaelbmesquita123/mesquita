import React, { useState, useEffect, ReactElement } from "react";

interface ICarousel {
  images: string[];
}

const Carousel: React.FC<ICarousel> = ({ images }): ReactElement => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % images.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className='bg-zinc-750'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={image + index}
          className={`absolute object-cover w-full h-full transition-opacity duration-500
        ${index === currentImageIndex ? "opacity-90" : "opacity-0"}
        `}
        />
      ))}
    </div>
  );
};

export default Carousel;
