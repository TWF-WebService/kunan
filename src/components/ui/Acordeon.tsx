"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type ElementoAcordeon = {
  pregunta: string;
  respuesta: ReactNode;
};

type PropiedadesAcordeon = {
  elementos: ElementoAcordeon[];
};

export default function Acordeon({ elementos }: PropiedadesAcordeon) {
  const [abierto, setAbierto] = useState(0);

  return (
    <div className="divide-y divide-marca-principal/35 border-y border-marca-principal/35">
      {elementos.map((elemento, indice) => {
        const estaAbierto = abierto === indice;

        return (
          <div className="bg-white" key={elemento.pregunta}>
            <button
              aria-expanded={estaAbierto}
              className="flex w-full items-center justify-between gap-4 py-4 text-left text-marca-oscuro"
              onClick={() => setAbierto(estaAbierto ? -1 : indice)}
              type="button"
            >
              <span className="font-sans text-2xl font-semibold">
                {elemento.pregunta}
              </span>
              <span className="grid size-6 shrink-0 place-items-center text-xl text-marca-oscuro">
                {estaAbierto ? "-" : "+"}
              </span>
            </button>
            <div
              className={
                estaAbierto
                  ? "grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out"
                  : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out"
              }
            >
              <div className="overflow-hidden">
                <div className="w-full space-y-3 pb-5 font-sans text-base font-normal leading-relaxed text-marca-texto md:text-lg">
                  {elemento.respuesta}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
