import Image from "next/image";
import { rutasImagenes } from "@/src/data/inicio";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-marca-oscuro" id="inicio">
      <Image
        alt="Familia La Ibérica usando Kunan"
        className="hidden h-auto w-full md:block"
        height={1429}
        priority
        sizes="100vw"
        src={rutasImagenes.heroDesktop}
        width={2560}
      />

      <div className="absolute inset-0 z-10">
        <div className="contenedor-kunan flex h-full items-center justify-end pb-8 pt-8">
        <div className="w-full max-w-[560px]">
          <Image
            alt="Para ti, para los tuyos, para tu bienestar"
            className="ml-auto"
            height={401}
            priority
            src={rutasImagenes.slogan}
            style={{ height: "auto", width: "min(100%, 557px)" }}
            width={557}
          />
          <div className="ml-auto mt-6 hidden w-fit flex-wrap items-center gap-5 px-2 py-2 lg:flex">
            <Image alt="La Ibérica" height={66} src={rutasImagenes.logoIberica} width={181} />
            <span className="h-10 w-px bg-marca-secundario" />
            <Image alt="Kunan" height={28} src={rutasImagenes.logoKunan} width={169} />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
