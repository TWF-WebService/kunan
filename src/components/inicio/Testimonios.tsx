import Seccion from "@/src/components/ui/Seccion";
import { testimonio } from "@/src/data/inicio";

export default function Testimonios() {
  return (
    <Seccion className="bg-white py-8 md:py-12">
      <div className="contenedor-kunan">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-marca-oscuro">
              {testimonio.titulo}
            </p>
            <h2 className="mt-4 inline-flex rounded-full bg-marca-principal px-8 py-3 text-2xl font-semibold text-white md:text-3xl">
              conoce sus&nbsp;<span className="texto-manuscrito">testimonios</span>
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-marca-secundario md:block" />
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
