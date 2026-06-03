import Image from "next/image";
import Seccion from "@/src/components/ui/Seccion";
import { rutasImagenes } from "@/src/data/inicio";

export default function BeneficiosFamiliares() {
  return (
    <Seccion className="bg-marca-superficie py-0">
      <div className="contenedor-kunan grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <Image
          alt="Beneficios para familiares"
          className="order-2 mx-auto self-end md:order-1"
          height={480}
          src={rutasImagenes.familia}
          style={{ height: "auto", width: "min(100%, 440px)" }}
          width={480}
        />
        <div className="order-1 space-y-5 py-10 md:order-2 md:py-14">
          <h2 className="font-sans text-[42px] font-medium uppercase leading-tight text-marca-oscuro">
            <b className="font-medium">Los beneficios también</b>{" "}
            <span className="texto-manuscrito inline-flex items-center justify-center rounded-full bg-marca-principal px-5 py-3 align-middle text-[28px] normal-case leading-none text-white">
              Protegen
            </span>
            {" "}
            <b className="font-medium">a tu </b>
            <b className="font-bold">familia</b>
          </h2>
          <p className="max-w-xl text-xl leading-snug text-marca-texto">
            Este beneficio no es solo para ti. Puedes incluir a tus familiares o a quién tú desees (hasta 5 adicionales). ¡Todos se benefician!
          </p>
          <div className="inline-flex max-w-full flex-nowrap items-center gap-2 whitespace-nowrap text-marca-oscuro sm:gap-4">
            <span className="inline-flex size-14 items-center justify-center rounded-full border-[8px] border-marca-borde bg-marca-principal p-0 text-center text-xl font-bold leading-none text-white sm:size-20 sm:border-[12px] sm:text-[28px]">
              TÚ
            </span>
            <span className="text-2xl font-bold text-marca-principal sm:text-3xl">+</span>
            <span className="text-lg font-bold uppercase leading-none tracking-wide sm:text-[28px]">5 adicionales</span>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
