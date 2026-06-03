"use client";

import { useState } from "react";
import Acordeon from "@/src/components/ui/Acordeon";
import Seccion from "@/src/components/ui/Seccion";
import { categoriasPreguntas } from "@/src/data/preguntasFrecuentes";

export default function PreguntasFrecuentes() {
  const [categoriaActiva, setCategoriaActiva] = useState(0);
  const categoria = categoriasPreguntas[categoriaActiva];

  return (
    <Seccion className="bg-white py-10 md:py-14">
      <div className="contenedor-kunan">
        <div className="mb-8 text-center">
          <h2 className="text-[42px] font-medium uppercase tracking-wide text-marca-oscuro">
            Preguntas <span className="font-bold">frecuentes</span>
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categoriasPreguntas.map((item, indice) => (
            <button
              className={
                indice === categoriaActiva
                  ? "rounded-md bg-marca-principal px-6 py-2 text-xs font-bold text-white"
                  : "rounded-md border border-marca-gris bg-white px-6 py-2 text-xs font-semibold text-marca-suave transition hover:bg-marca-acento"
              }
              key={item.categoria}
              onClick={() => setCategoriaActiva(indice)}
              type="button"
            >
              {item.categoria}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-[900px]">
          <Acordeon elementos={categoria.preguntas} />
        </div>
      </div>
    </Seccion>
  );
}
