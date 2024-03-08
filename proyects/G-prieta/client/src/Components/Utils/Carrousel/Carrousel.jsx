import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";

export const Carrousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const images = ["./logo.png", "./home.png", "./home3.png"]; // Añade más imágenes según sea necesario

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setAutoPlay(false);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  useEffect(() => {
    let timer;

    if (autoPlay) {
      timer = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 3000);
    }

    return () => clearInterval(timer);
  }, [autoPlay]);

  const getAdjacentImages = () => {
    const indices = [(currentImage - 1 + images.length) % images.length, currentImage, (currentImage + 1) % images.length];
    return indices.map((index) => images[index]);
  };

  return (
    <main>
      <div className="flex gap-4 relative">
        {getAdjacentImages().map((src, index) => (
          <div key={index} className={`w-1/3 flex ${index === 1 ? "opacity-110 scale-110" : "opacity-60 scale-90"} transition-transform duration-300`}>
            <Image isZoomed width={340} alt={`Mujer${index + 1}`} src={src} className="rounded-lg" />
          </div>
        ))}
        <div className="absolute flex gap-4 cursor-pointer top-[15rem] left-3">
          <div onClick={handlePrevImage} className="hover:bg-yellow-600 text-yellow-700 hover:text-white p-2 rounded-full">
            <i className="fi fi-sr-angle-left" />
          </div>
          <div onClick={handleNextImage} className="hover:bg-yellow-600 text-yellow-700 hover:text-white p-2 rounded-full">
            <i className="fi fi-sr-angle-right" />
          </div>
        </div>
      </div>
    </main>
  );
};
