import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { enlaces, enlacesFooter, rutasImagenes } from "@/src/data/inicio";

const columna1 = enlacesFooter.slice(0, 5);
const columna2 = enlacesFooter.slice(5, 9);

const enlaceClase =
  "block w-fit font-sans text-lg font-semibold text-white/90 transition duration-300 hover:!text-[#DBC09B]";

const enlaceInlineClase =
  "font-sans font-semibold text-white/90 transition duration-300 hover:!text-[#DBC09B]";

const redesSociales = [
  {
    nombre: "Facebook",
    url: "https://www.facebook.com/LaIberica",
    Icono: FaFacebookF,
  },
  {
    nombre: "Instagram",
    url: "https://www.instagram.com/laiberica",
    Icono: FaInstagram,
  },
  {
    nombre: "TikTok",
    url: "https://www.tiktok.com/@laiberica",
    Icono: FaTiktok,
  },
];

export default function Footer() {
  return (
    <footer className="bg-marca-principal py-16 text-white md:py-24">
      <div className="contenedor-kunan space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <h2 className="texto-manuscrito text-3xl leading-tight md:text-[32px]">
              Fábrica de Chocolates La Ibérica
            </h2>
            <p className="font-sans text-lg">
              <b>Contáctanos:</b>{" "}
              <a className={enlaceInlineClase} href={enlaces.correo}>
                atenciónalcliente@laiberica.com.pe
              </a>
            </p>
          </div>

          <nav aria-label="Enlaces de La Ibérica" className="grid gap-2 lg:grid-cols-2 lg:gap-5">
            <div className="space-y-1.5">
              {columna1.map((enlace) => (
                <a
                  className={enlaceClase}
                  href={enlace.url}
                  key={enlace.texto}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {enlace.texto}
                </a>
              ))}
            </div>
            <div className="space-y-1.5">
              {columna2.map((enlace) => (
                <a
                  className={enlaceClase}
                  href={enlace.url}
                  key={enlace.texto}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {enlace.texto}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex justify-center gap-6">
          {redesSociales.map(({ nombre, url, Icono }) => (
            <a
              aria-label={nombre}
              className="grid size-9 place-items-center text-white transition duration-300 hover:!text-[#DBC09B]"
              href={url}
              key={nombre}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icono aria-hidden="true" className="size-8" />
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            aria-label="Abrir libro de reclamaciones"
            href={enlaces.libroReclamaciones}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Libro de reclamaciones"
              height={120}
              src={rutasImagenes.libroReclamaciones}
              style={{ height: "auto", width: "240px" }}
              width={218}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
