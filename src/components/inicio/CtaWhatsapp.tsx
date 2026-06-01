import Image from "next/image";
import Boton from "@/src/components/ui/Boton";
import Seccion from "@/src/components/ui/Seccion";
import { enlaces, rutasImagenes } from "@/src/data/inicio";

export default function CtaWhatsapp() {
  return (
    <Seccion className="bg-white py-12 md:py-16">
      <div className="contenedor-kunan grid gap-4 md:grid-cols-[1.8fr_1fr]">
        <div className="relative min-h-[330px] overflow-hidden rounded-kunan border-2 border-marca-principal bg-white p-8 md:p-10">
          <div className="relative z-10 max-w-[360px] space-y-10">
            <h2 className="text-2xl font-semibold uppercase leading-tight text-marca-oscuro md:text-3xl">
              Únete a nuestro <br /> <b>WhatsApp</b>
            </h2>
            <p className="font-sans text-xl leading-snug text-marca-texto">
              Únete al grupo exclusivo para trabajadores. Resuelve dudas, comparte experiencias y entérate de nuevos beneficios.
            </p>
            <Boton href={enlaces.whatsapp} rel="noopener noreferrer" target="_blank">
              Unirme al grupo
            </Boton>
          </div>
          <Image
            alt="Asesora de soporte Kunan"
            className="absolute bottom-0 right-0"
            height={310}
            src={rutasImagenes.decorativoCta}
            style={{ height: "auto", width: "min(42vw, 280px)" }}
            width={295}
          />
        </div>

        <div className="flex min-h-[330px] flex-col justify-between rounded-kunan bg-marca-principal p-8 text-white md:p-10">
          <h2 className="font-sans text-3xl font-medium uppercase leading-tight md:text-[38px]">
            Descarga el manual de uso sobre <b className="font-bold">Kunan</b>
          </h2>
          <a
            className="group inline-flex items-center gap-3 self-end font-sans text-base font-semibold transition duration-300 hover:text-marca-acento"
            href={enlaces.manual}
            rel="noopener noreferrer"
            target="_blank"
          >
            Descargar pdf
            <span className="grid size-7 place-items-center rounded-full bg-marca-borde text-white transition duration-300 group-hover:bg-white group-hover:text-marca-borde">
              ›
            </span>
          </a>
        </div>
      </div>
    </Seccion>
  );
}
