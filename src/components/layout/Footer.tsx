import Image from "next/image";
import { enlaces, enlacesFooter, rutasImagenes } from "@/src/data/inicio";

export default function Footer() {
  return (
    <footer className="bg-marca-principal py-14 text-white md:py-16">
      <div className="contenedor-kunan grid gap-10 md:grid-cols-[1.2fr_2fr]">
        <div className="space-y-5">
          <p className="texto-manuscrito text-2xl">Fábrica de Chocolates La Ibérica</p>
          <a className="text-xs font-semibold hover:text-marca-acento" href={enlaces.correo}>
            atencionalcliente@laiberica.com.pe
          </a>
        </div>

        <nav aria-label="Enlaces de La Ibérica" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {enlacesFooter.map((enlace) => (
            <a
              className="text-xs font-semibold text-white/90 transition hover:text-marca-acento"
              href={enlace.url}
              key={enlace.texto}
              rel="noopener noreferrer"
              target="_blank"
            >
              {enlace.texto}
            </a>
          ))}
        </nav>
      </div>
      <div className="contenedor-kunan mt-10 flex justify-center">
        <Image
          alt="Libro de reclamaciones"
          height={120}
          src={rutasImagenes.libroReclamaciones}
          style={{ height: "auto", width: "150px" }}
          width={218}
        />
      </div>
    </footer>
  );
}
