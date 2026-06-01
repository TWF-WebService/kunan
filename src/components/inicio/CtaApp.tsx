import Image from "next/image";
import Seccion from "@/src/components/ui/Seccion";
import { enlaces, rutasImagenes } from "@/src/data/inicio";

export default function CtaApp() {
  return (
    <Seccion className="bg-white pb-0 pt-8 md:pt-10">
      <div className="contenedor-kunan overflow-visible">
        <div className="flex flex-col items-center gap-5 rounded-t-kunan border-2 border-b-0 border-marca-secundario bg-marca-acento md:flex-row md:pb-0">
          <div className="w-full space-y-6 px-4 pt-4 sm:px-6 sm:pt-6 md:w-[65%] md:pl-[60px] md:pr-0 md:pt-[60px] md:pb-8">
            <h2 className="font-sans text-[32px] font-medium uppercase leading-snug text-marca-oscuro">
              Descarga la app,{" "}
              <span className="texto-manuscrito font-medium text-marca-principal">
                activa tu acceso
              </span>{" "}
              y aprovecha tus beneficios
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                className="transition-transform duration-300 hover:scale-105"
                href={enlaces.googlePlay}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt="Disponible en Google Play"
                  height={45}
                  src={rutasImagenes.googlePlay}
                  width={152}
                />
              </a>
              <a
                className="transition-transform duration-300 hover:scale-105"
                href={enlaces.appStore}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt="Descargar en App Store"
                  height={45}
                  src={rutasImagenes.appStore}
                  width={152}
                />
              </a>
            </div>
          </div>
          <div className="flex w-full justify-center md:-mt-[80px] md:w-fit md:justify-start md:self-end">
            <Image
              alt="Aplicación Kunan Salud"
              className="w-auto"
              height={383}
              src={rutasImagenes.mockupApp}
              style={{
                height: "clamp(200px, 45vw, 380px)",
                width: "auto",
              }}
              width={239}
            />
          </div>
        </div>
      </div>
    </Seccion>
  );
}
