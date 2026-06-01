import Image from "next/image";
import Seccion from "@/src/components/ui/Seccion";
import { rutasImagenes, servicios } from "@/src/data/inicio";

export default function Servicios() {
  return (
    <Seccion className="bg-white py-12 md:py-16">
      <div className="contenedor-kunan grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <div>
            <h2 className="titulo-seccion uppercase">
              KUNAN <span className="texto-manuscrito inline-flex rounded-full bg-marca-principal px-3 py-1.5 text-lg normal-case leading-none text-white md:text-2xl">tu plataforma</span>
              <br /> DE SALUD Y <span className="font-bold">BIENESTAR</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-5 text-marca-texto md:text-base md:leading-6">
              Accede a diferentes servicios pensados para acompañarte en el cuidado de tu salud y bienestar, todo desde un solo lugar.
            </p>
          </div>
          <Image
            alt="Kunan en la app"
            className=""
            height={275}
            src={rutasImagenes.app}
            style={{ height: "auto", width: "min(100%, 380px)" }}
            width={444}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {servicios.map((servicio) => (
            <article className="tarjeta-kunan group" key={servicio.titulo}>
              <h3 className="texto-manuscrito text-center text-xl text-marca-principal transition group-hover:text-white">
                {servicio.titulo}
              </h3>
              <div className="my-4 h-px bg-marca-secundario transition group-hover:bg-white" />
              <p className="text-center text-sm italic leading-5 text-marca-oscuro transition group-hover:text-white">
                {servicio.descripcion}
              </p>
              {servicio.nota ? (
                <p className="mt-3 text-center text-xs italic text-marca-oscuro transition group-hover:text-white">
                  {servicio.nota}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </Seccion>
  );
}
