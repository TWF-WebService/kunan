import Image from "next/image";
import Seccion from "@/src/components/ui/Seccion";
import { beneficios } from "@/src/data/inicio";
import { unirClases } from "@/src/lib/utilidades";

export default function Beneficios() {
  return (
    <Seccion className="bg-white py-10 md:py-14">
      <div className="contenedor-kunan">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold uppercase text-marca-oscuro md:text-4xl">
            Una manera <span className="texto-manuscrito rounded-full bg-marca-principal px-3 py-1 text-xl normal-case text-white md:text-2xl">Simple</span> de cuidar tu salud
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {beneficios.map((beneficio, indice) => (
            <article
              className="relative rounded-[20px] bg-marca-acento p-4 text-center"
              key={beneficio.titulo}
            >
              <div className={unirClases("relative mx-auto mb-10 grid size-44 place-items-center rounded-full", beneficio.colorCirculo)}>
                <Image
                  alt=""
                  height={86}
                  src={beneficio.imagen}
                  width={86}
                />
                <span className={unirClases("absolute -bottom-5 grid size-12 place-items-center rounded-full text-xl font-bold text-white", beneficio.colorNumero)}>
                  {beneficio.numero}
                </span>
              </div>
              <h3 className="texto-manuscrito text-2xl leading-tight text-marca-oscuro">{beneficio.titulo}</h3>
              <p className="mt-6 text-base leading-snug text-marca-oscuro">{beneficio.descripcion}</p>
              {indice < beneficios.length - 1 ? (
                <svg
                  aria-hidden="true"
                  className="absolute -right-7 top-1/2 hidden size-6 -translate-y-1/2 text-marca-principal lg:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m9 5 7 7-7 7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </Seccion>
  );
}
