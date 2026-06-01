"use client";

import { useState } from "react";

type ElementoAcordeon = {
  pregunta: string;
  respuesta: string;
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
              className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-marca-oscuro md:text-base"
              onClick={() => setAbierto(estaAbierto ? -1 : indice)}
              type="button"
            >
              <span>{elemento.pregunta}</span>
              <span className="grid size-6 shrink-0 place-items-center text-xl text-marca-oscuro">
                {estaAbierto ? "-" : "+"}
              </span>
            </button>
            {estaAbierto ? (
              <div className="max-w-2xl pb-5 text-xs leading-5 text-marca-texto md:text-sm">
                {elemento.respuesta}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
