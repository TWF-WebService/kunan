"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Seccion from "@/src/components/ui/Seccion";
import { rutasImagenes, servicios } from "@/src/data/inicio";

export default function Servicios() {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const servicioActivo = servicios[indiceActivo];

  const irAlAnterior = () => {
    setIndiceActivo((indiceActual) =>
      indiceActual === 0 ? servicios.length - 1 : indiceActual - 1,
    );
  };

  const irAlSiguiente = () => {
    setIndiceActivo((indiceActual) =>
      indiceActual === servicios.length - 1 ? 0 : indiceActual + 1,
    );
  };

  const renderizarTarjeta = (servicio: (typeof servicios)[number], className = "") => (
    <article className={`tarjeta-kunan group flex flex-col p-4 ${className}`} key={servicio.titulo}>
      <h3 className="texto-manuscrito text-center text-2xl text-marca-principal transition group-hover:text-white">
        {servicio.titulo}
      </h3>
      <div className="my-4 h-px bg-marca-secundario transition group-hover:bg-white" />
      <p className="text-center font-sans text-base italic leading-snug text-marca-oscuro transition group-hover:text-white">
        {servicio.descripcion}
      </p>
      {servicio.nota ? (
        <span className="mt-3 block text-center font-sans text-xs italic leading-snug text-marca-oscuro transition group-hover:text-white">
          {servicio.nota}
        </span>
      ) : null}
    </article>
  );

  return (
    <Seccion className="bg-white py-12 md:py-16">
      <div className="contenedor-kunan grid gap-10 lg:grid-cols-2">
        <div className="w-full space-y-5">
          <div>
            <h2 className="text-[42px] font-medium uppercase leading-tight text-marca-oscuro">
              <span className="inline-flex flex-wrap items-center gap-x-4 gap-y-2">
                <b className="font-medium">KUNAN</b>
              <span className="texto-manuscrito inline-flex items-center justify-center rounded-full bg-marca-principal px-5 py-3 align-middle text-[28px] normal-case leading-none text-white">
                tu plataforma
              </span>
              </span>
              <br />
              <b className="font-medium">DE SALUD Y </b>
              <b className="font-bold">BIENESTAR</b>
            </h2>
            <p className="mt-5 w-full text-xl leading-snug text-marca-texto lg:max-w-md">
              Accede a diferentes servicios pensados para acompañarte en el cuidado de tu salud y bienestar, todo desde un solo lugar.
            </p>
          </div>
          <div className="hidden xl:block">
            <Image
              alt="Kunan en la app"
              height={275}
              src={rutasImagenes.app}
              style={{ height: "auto", marginInline: "auto", width: "min(100%, 444px)" }}
              width={444}
            />
          </div>
        </div>

        <div className="w-full">
          <div className="sm:hidden">
            <div className="grid">
              {servicios.map((servicio, indice) =>
                renderizarTarjeta(
                  servicio,
                  `col-start-1 row-start-1 transition duration-300 ${
                    indice === indiceActivo ? "opacity-100" : "pointer-events-none invisible opacity-0"
                  }`,
                ),
              )}
            </div>
            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                aria-label="Ver servicio anterior"
                className="grid size-12 place-items-center rounded-full border-3 border-[#b8955a] bg-white text-[#b8955a] transition duration-300 hover:bg-[#FEEBDC]"
                onClick={irAlAnterior}
                type="button"
              >
                <FiChevronLeft aria-hidden="true" className="size-7" />
              </button>
              <button
                aria-label="Ver siguiente servicio"
                className="grid size-12 place-items-center rounded-full border-3 border-[#b8955a] bg-white text-[#b8955a] transition duration-300 hover:bg-[#FEEBDC]"
                onClick={irAlSiguiente}
                type="button"
              >
                <FiChevronRight aria-hidden="true" className="size-7" />
              </button>
            </div>
          </div>

          <div className="hidden w-full gap-4 sm:grid sm:grid-cols-2">
            {servicios.map((servicio) => renderizarTarjeta(servicio))}
          </div>
        </div>
      </div>
    </Seccion>
  );
}
