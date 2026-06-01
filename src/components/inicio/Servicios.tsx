import Image from "next/image";
import Seccion from "@/src/components/ui/Seccion";
import { rutasImagenes, servicios } from "@/src/data/inicio";

export default function Servicios() {
  return (
    <Seccion className="bg-white py-12 md:py-16">
      <div className="contenedor-kunan grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="w-full space-y-5">
          <div>
            <h2 className="text-4xl font-medium uppercase leading-tight text-marca-oscuro md:text-[48px]">
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
            <p className="mt-5 w-full text-sm leading-5 text-marca-texto md:text-base md:leading-6 lg:max-w-md">
              Accede a diferentes servicios pensados para acompañarte en el cuidado de tu salud y bienestar, todo desde un solo lugar.
            </p>
          </div>
          <Image
            alt="Kunan en la app"
            height={275}
            src={rutasImagenes.app}
            style={{ height: "auto", marginInline: "auto", width: "min(100%, 380px)" }}
            width={444}
          />
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2">
          {servicios.map((servicio) => (
            <article className="tarjeta-kunan group p-4" key={servicio.titulo}>
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
          ))}
        </div>
      </div>
    </Seccion>
  );
}
