import Image from "next/image";
import Seccion from "@/src/components/ui/Seccion";
import { rutasImagenes } from "@/src/data/inicio";

export default function Introduccion() {
  return (
    <Seccion className="overflow-hidden bg-marca-superficie pb-0 pt-10 md:pt-12">
      <div className="contenedor-kunan grid items-end gap-5 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4 self-center pb-10 text-2xl leading-snug text-marca-oscuro lg:pb-12">
          <p>En La Ibérica sabemos que cada día das lo mejor de ti, en tu trabajo y con tu familia.</p>
          <p>
            Por eso hoy cuentas con un respaldo adicional: un <strong>servicio de orientación médica, psicológica y nutricional</strong>, rápido y fácil de usar.
          </p>
          <p>Porque cuidar de ti y de los tuyos también importa. Y ahora, tienes una mano cuando la necesitas.</p>
          <span className="decorativo-rombos-linea">
            <Image alt="Decorativo de rombos" height={47} src={rutasImagenes.rombos} width={134} />
          </span>
        </div>
        <Image
          alt="Trabajadora de La Ibérica"
          className="mx-auto self-end"
          height={408}
          src={rutasImagenes.persona}
          style={{ height: "auto", width: "min(100%, 440px)" }}
          width={368}
        />
      </div>
    </Seccion>
  );
}
