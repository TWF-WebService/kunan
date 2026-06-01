import Image from "next/image";
import { rutasImagenes } from "@/src/data/inicio";

export default function Hero() {
  return (
    <section
      className="relative isolate h-dvh overflow-hidden bg-marca-oscuro"
      id="inicio"
      style={{
        backgroundImage: `url(${rutasImagenes.heroDesktop})`,
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <style>{`
        @media (max-width: 1023px) {
          #inicio {
            background-image: url(${rutasImagenes.heroMobile}) !important;
            background-position: bottom left !important;
          }
        }
      `}</style>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 z-20">
        <div className="contenedor-kunan flex h-full flex-col items-center justify-start pb-8 pt-16 lg:items-end lg:justify-center lg:pb-8 lg:pt-8">
          <div className="flex w-full max-w-[320px] flex-col items-center lg:max-w-[560px] lg:items-end">
            <Image
              alt="Para ti, para los tuyos, para tu bienestar"
              height={401}
              priority
              src={rutasImagenes.slogan}
              style={{ height: "auto", width: "min(100%, 320px)" }}
              width={557}
            />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 px-2 py-2 lg:ml-auto lg:justify-start lg:gap-5">
              <Image alt="La Ibérica" height={66} src={rutasImagenes.logoIberica} width={181} className="h-8 w-auto lg:h-[66px]" />
              <span className="h-6 w-px bg-marca-secundario lg:h-10" />
              <Image alt="Kunan" height={28} src={rutasImagenes.logoKunan} width={169} className="h-4 w-auto lg:h-7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
