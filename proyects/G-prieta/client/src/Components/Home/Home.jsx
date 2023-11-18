import React, { useState, useEffect } from "react";
import { Nav } from "../Navbar/Navbar";
import { Carrousel } from "../Utils/Carrousel/Carrousel";
import { Image } from "@nextui-org/react";

const Home = () => {
  return (
    <main className="h-screen overflow-auto">
      <header className="w-full">
        <div className="min-h-[10vh]">
          <Nav />
        </div>
        <section className="w-full overflow-hidden">
          <section className="px-3 h-[60vh] flex items-center">
            <Carrousel />
            <div className="m-2">
              <h1 className="font-extrabold text-4xl">Dale un nuevo estilo a tu afro</h1>
              <p>Esta nueva colección es ideal para las personas que buscan reflejar su verdadero ser</p>
            </div>
          </section>
          <section className="w-full h-[29vh]">
            <img src="./tela.jpg" alt="" className="w-full" />
          </section>
        </section>
      </header>
      <section className="bg-black grid grid-cols-2">
        <div className="flex gap-7 p-[3rem] justify-center items-center">
          <Image width={240} alt="Hombre" src="./hombre.jpg" className="h-[60vh] hover:scale-110" />
          <Image width={240} alt="Mujer" src="./mujer.jpg" className="h-[60vh] hover:scale-110" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-yellow-200 font-black ">Nuestra nueva colección ya a tus manos</h1>
          <p className="text-white ">Elije lo que más se acomede a tu gusto</p>
        </div>
      </section>
    </main>
  );
};

export { Home };
