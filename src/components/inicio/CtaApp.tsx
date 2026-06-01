import Image from "next/image";
import Seccion from "@/src/components/ui/Seccion";
import { enlaces, rutasImagenes } from "@/src/data/inicio";

export default function CtaApp() {
  return (
    <Seccion className="bg-white pb-0 pt-8 md:pt-10">
      <div className="contenedor-kunan">
        <div className="mx-auto grid max-w-[900px] items-end gap-8 rounded-t-kunan border-2 border-b-0 border-marca-secundario bg-marca-acento p-8 md:grid-cols-[1fr_260px] md:px-12 md:pt-10 md:pb-0">
          <div className="space-y-5 pb-8">
            <h2 className="text-2xl font-medium uppercase leading-tight text-marca-oscuro md:text-3xl">
              Descarga la app, <span className="font-manuscrita text-marca-principal">activa tu acceso</span>
              <br /> y aprovecha tus beneficios
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href={enlaces.googlePlay} rel="noopener noreferrer" target="_blank">
                <Image
                  alt="Disponible en Google Play"
                  height={45}
                  src={rutasImagenes.googlePlay}
                  width={152}
                />
              </a>
              <a href={enlaces.appStore} rel="noopener noreferrer" target="_blank">
                <Image
                  alt="Descargar en App Store"
                  height={45}
                  src={rutasImagenes.appStore}
                  width={152}
                />
              </a>
            </div>
          </div>
          <Image
            alt="Aplicación Kunan Salud"
            className="mx-auto"
            height={383}
            src={rutasImagenes.mockupApp}
            style={{ height: "auto", width: "min(100%, 260px)" }}
            width={239}
          />
        </div>
      </div>
    </Seccion>
  );
}
