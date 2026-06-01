import Seccion from "@/src/components/ui/Seccion";
import { testimonio } from "@/src/data/inicio";

export default function Testimonios() {
  return (
    <Seccion className="bg-white py-8 md:py-12">
      <div className="contenedor-kunan">
        <div className="mb-6">
          <div className="flex items-center gap-5">
            <p className="texto-linea-derecha max-w-[280px] shrink-0">
              {testimonio.titulo}
            </p>
            <span className="h-0.5 flex-1 bg-marca-secundario" />
          </div>
          <h2 className="mt-6 flex w-fit items-center rounded-full bg-marca-principal px-8 py-3 text-3xl font-medium leading-none text-white md:text-[48px]">
            conoce sus&nbsp;
            <span className="font-manuscrita font-medium italic leading-none">
              testimonios
            </span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-kunan-grande bg-marca-oscuro shadow-kunan">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full"
            src={testimonio.youtube}
            title="Testimonio de la familia Ibérica"
          />
        </div>
      </div>
    </Seccion>
  );
}
