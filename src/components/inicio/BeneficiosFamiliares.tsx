import Image from "next/image";
import Seccion from "@/src/components/ui/Seccion";
import { rutasImagenes } from "@/src/data/inicio";

export default function BeneficiosFamiliares() {
  return (
    <Seccion className="bg-marca-superficie py-0">
      <div className="contenedor-kunan grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <Image
          alt="Beneficios para familiares"
          className="mx-auto self-end"
          height={480}
          src={rutasImagenes.familia}
          style={{ height: "auto", width: "min(100%, 390px)" }}
          width={480}
        />
        <div className="space-y-5 py-10 md:py-14">
          <h2 className="text-3xl font-semibold uppercase leading-tight text-marca-oscuro md:text-[42px]">
            Los beneficios también <span className="texto-manuscrito text-marca-principal normal-case">Protegen</span>
            <br /> a tu familia
          </h2>
          <p className="max-w-xl text-sm leading-6 text-marca-texto md:text-base">
            Este beneficio no es solo para ti. Puedes incluir a tus familiares o a quién tú desees (hasta 5 adicionales). ¡Todos se benefician!
          </p>
          <div className="inline-flex items-center gap-4 text-marca-oscuro">
            <span className="grid size-12 place-items-center rounded-full bg-marca-principal text-sm font-bold text-white">TU</span>
            <span className="text-3xl font-bold text-marca-principal">+</span>
            <span className="text-sm font-bold uppercase tracking-wide">5 adicionales</span>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
