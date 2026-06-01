import Image from "next/image";
import Seccion from "@/src/components/ui/Seccion";
import { rutasImagenes } from "@/src/data/inicio";

export default function Introduccion() {
  return (
    <Seccion className="bg-marca-superficie py-10 md:py-12">
      <div className="contenedor-kunan grid items-center gap-8 md:grid-cols-[1fr_380px]">
        <div className="space-y-4 text-sm leading-snug text-marca-oscuro md:text-base">
          <p>En La Ibérica sabemos que cada día das lo mejor de ti, en tu trabajo y con tu familia.</p>
          <p>
            Por eso hoy cuentas con un respaldo adicional: un <strong>servicio de orientación médica, psicológica y nutricional</strong>, rápido y fácil de usar.
          </p>
          <p>Porque cuidar de ti y de los tuyos también importa. Y ahora, tienes una mano cuando la necesitas.</p>
          <Image alt="Decorativo de rombos" height={47} src={rutasImagenes.rombos} width={134} />
        </div>
        <Image
          alt="Trabajadora de La Ibérica"
          className="mx-auto"
          height={408}
          src={rutasImagenes.persona}
          style={{ height: "auto", width: "min(100%, 320px)" }}
          width={368}
        />
      </div>
    </Seccion>
  );
}
