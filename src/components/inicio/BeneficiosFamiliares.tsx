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
          style={{ height: "auto", width: "min(100%, 390px)" }}
          width={480}
        />
        <div className="order-1 space-y-5 py-10 md:order-2 md:py-14">
          <h2 className="font-sans text-4xl font-medium uppercase leading-tight text-marca-oscuro md:text-[48px]">
            <b className="font-medium">Los beneficios también</b>{" "}
            <span className="texto-manuscrito inline-flex items-center justify-center rounded-full bg-marca-principal px-5 py-3 align-middle text-[28px] normal-case leading-none text-white">
              Protegen
            </span>
            <br />
            <b className="font-medium">a tu </b>
            <b className="font-bold">familia</b>
          </h2>
          <p className="max-w-xl text-sm leading-6 text-marca-texto md:text-base">
            Este beneficio no es solo para ti. Puedes incluir a tus familiares o a quién tú desees (hasta 5 adicionales). ¡Todos se benefician!
          </p>
          <div className="inline-flex items-center gap-4 text-marca-oscuro">
            <span className="inline-flex size-20 items-center justify-center rounded-full border-[12px] border-marca-borde bg-marca-principal p-0 text-center text-[28px] font-bold leading-none text-white">
              TÚ
            </span>
            <span className="text-3xl font-bold text-marca-principal">+</span>
            <span className="text-[28px] font-bold uppercase leading-none tracking-wide">5 adicionales</span>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
