"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Seccion from "@/src/components/ui/Seccion";
import { beneficios } from "@/src/data/inicio";
import { unirClases } from "@/src/lib/utilidades";

export default function Beneficios() {
  const [indiceActivo, setIndiceActivo] = useState(0);

  const irAlAnterior = () => {
    setIndiceActivo((indiceActual) =>
      indiceActual === 0 ? beneficios.length - 1 : indiceActual - 1,
    );
  };

  const irAlSiguiente = () => {
    setIndiceActivo((indiceActual) =>
      indiceActual === beneficios.length - 1 ? 0 : indiceActual + 1,
    );
  };

  const renderizarTarjeta = (
    beneficio: (typeof beneficios)[number],
    indice: number,
    className = "",
  ) => (
    <article
      className={unirClases(
        "relative rounded-[20px] bg-marca-acento p-4 text-center",
        className,
        indice < beneficios.length - 1 && "tarjeta-beneficio-flecha",
        (indice === 0 || indice === 2) && "tarjeta-beneficio-flecha-fila",
      )}
      key={beneficio.titulo}
    >
      <div className={unirClases("relative mx-auto mb-9 grid size-36 place-items-center rounded-full md:size-40", beneficio.colorCirculo)}>
        <Image
          alt=""
          height={86}
          src={beneficio.imagen}
          style={{ height: "auto", width: "70px" }}
          width={86}
        />
        <span className={unirClases("absolute -bottom-4 grid size-10 place-items-center rounded-full text-lg font-bold text-white", beneficio.colorNumero)}>
          {beneficio.numero}
        </span>
      </div>
      <h3 className="texto-manuscrito text-2xl leading-tight text-marca-oscuro">{beneficio.titulo}</h3>
      <p className="mt-6 text-base leading-snug text-marca-oscuro">{beneficio.descripcion}</p>
    </article>
  );

  return (
    <Seccion className="bg-white py-10 md:py-14">
      <div className="contenedor-kunan">
        <div className="mb-8 text-center">
          <h2 className="font-sans text-3xl font-medium uppercase leading-tight text-marca-oscuro md:text-[42px]">
            Una manera{" "}
            <span className="texto-manuscrito relative -top-1 inline-flex items-center justify-center rounded-full bg-marca-principal px-5 py-3 align-middle text-2xl normal-case leading-none text-white md:text-[28px]">
              Simple
            </span>{" "}
            de cuidar tu salud
          </h2>
        </div>

        <div className="md:hidden">
          <div className="grid">
            {beneficios.map((beneficio, indice) =>
              renderizarTarjeta(
                beneficio,
                indice,
                `col-start-1 row-start-1 transition duration-300 ${
                  indice === indiceActivo ? "opacity-100" : "pointer-events-none invisible opacity-0"
                }`,
              ),
            )}
          </div>
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              aria-label="Ver beneficio anterior"
              className="grid size-12 place-items-center rounded-full border-3 border-[#b8955a] bg-white text-[#b8955a] transition duration-300 hover:bg-[#FEEBDC]"
              onClick={irAlAnterior}
              type="button"
            >
              <FiChevronLeft aria-hidden="true" className="size-7" />
            </button>
            <button
              aria-label="Ver siguiente beneficio"
              className="grid size-12 place-items-center rounded-full border-3 border-[#b8955a] bg-white text-[#b8955a] transition duration-300 hover:bg-[#FEEBDC]"
              onClick={irAlSiguiente}
              type="button"
            >
              <FiChevronRight aria-hidden="true" className="size-7" />
            </button>
          </div>
        </div>

        <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
          {beneficios.map((beneficio, indice) => renderizarTarjeta(beneficio, indice))}
        </div>
      </div>
    </Seccion>
  );
}
