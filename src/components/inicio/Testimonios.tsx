"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Seccion from "@/src/components/ui/Seccion";
import { testimonio } from "@/src/data/inicio";

export default function Testimonios() {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const tieneVariosTestimonios = testimonio.videos.length > 1;
  const videoActivo = testimonio.videos[indiceActivo];

  const irAlAnterior = () => {
    if (!tieneVariosTestimonios) return;

    setIndiceActivo((indiceActual) =>
      indiceActual === 0 ? testimonio.videos.length - 1 : indiceActual - 1,
    );
  };

  const irAlSiguiente = () => {
    if (!tieneVariosTestimonios) return;

    setIndiceActivo((indiceActual) =>
      indiceActual === testimonio.videos.length - 1 ? 0 : indiceActual + 1,
    );
  };

  return (
    <Seccion className="bg-white py-8 md:py-12">
      <div className="contenedor-kunan">
        <div className="mb-6">
          <div className="flex items-center gap-5">
            <p className="texto-linea-derecha max-w-[280px] shrink-0">
              {testimonio.titulo}
            </p>
            <span className="h-0.5 flex-1 bg-marca-secundario" />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <h2 className="w-fit rounded-full bg-marca-principal px-8 py-3 text-3xl font-medium leading-none text-white md:text-[48px]">
              {testimonio.subtitulo.split(" ").slice(0, -1).join(" ")}&nbsp;
              <span className="font-manuscrita font-medium italic leading-none">
                {testimonio.subtitulo.split(" ").at(-1)}
              </span>
            </h2>
            <div className="hidden flex-1 basis-full items-center justify-end gap-4 lg:flex lg:basis-auto">
              <button
                aria-label="Ver testimonio anterior"
                className="grid size-12 place-items-center rounded-full border-2 border-[#b8955a] bg-white text-[#b8955a] transition duration-300 hover:bg-[#FEEBDC] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white md:size-14"
                disabled={!tieneVariosTestimonios}
                onClick={irAlAnterior}
                type="button"
              >
                <FiChevronLeft aria-hidden="true" className="size-7 md:size-8" />
              </button>
              <button
                aria-label="Ver siguiente testimonio"
                className="grid size-12 place-items-center rounded-full border-2 border-[#b8955a] bg-white text-[#b8955a] transition duration-300 hover:bg-[#FEEBDC] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white md:size-14"
                disabled={!tieneVariosTestimonios}
                onClick={irAlSiguiente}
                type="button"
              >
                <FiChevronRight aria-hidden="true" className="size-7 md:size-8" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-kunan-grande bg-marca-oscuro shadow-kunan">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full"
            src={videoActivo.youtube}
            title={videoActivo.titulo}
          />
        </div>

        <div className="mt-5 flex items-center justify-center gap-4 lg:hidden">
          <button
            aria-label="Ver testimonio anterior"
            className="grid size-12 place-items-center rounded-full border-2 border-[#b8955a] bg-white text-[#b8955a] transition duration-300 hover:bg-[#FEEBDC] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white md:size-14"
            disabled={!tieneVariosTestimonios}
            onClick={irAlAnterior}
            type="button"
          >
            <FiChevronLeft aria-hidden="true" className="size-7 md:size-8" />
          </button>
          <button
            aria-label="Ver siguiente testimonio"
            className="grid size-12 place-items-center rounded-full border-2 border-[#b8955a] bg-white text-[#b8955a] transition duration-300 hover:bg-[#FEEBDC] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white md:size-14"
            disabled={!tieneVariosTestimonios}
            onClick={irAlSiguiente}
            type="button"
          >
            <FiChevronRight aria-hidden="true" className="size-7 md:size-8" />
          </button>
        </div>
      </div>
    </Seccion>
  );
}
