import Image from "next/image";
import { enlaces, enlacesFooter, rutasImagenes } from "@/src/data/inicio";

const columna1 = enlacesFooter.slice(0, 5);
const columna2 = enlacesFooter.slice(5, 9);

const enlaceClase =
  "block w-fit font-sans text-lg font-semibold text-white/90 transition duration-300 hover:!text-[#DBC09B]";

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
              <a className="transition duration-300 hover:text-marca-acento" href={enlaces.correo}>
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

        <div className="flex justify-center gap-4">
          <a aria-label="Facebook" className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20" href="https://www.facebook.com/LaIberica" rel="noopener noreferrer" target="_blank">
            <svg aria-hidden="true" className="size-5 fill-white" viewBox="0 0 320 512">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </a>
          <a aria-label="Instagram" className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20" href="https://www.instagram.com/laiberica" rel="noopener noreferrer" target="_blank">
            <svg aria-hidden="true" className="size-5 fill-white" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a aria-label="TikTok" className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20" href="https://www.tiktok.com/@laiberica" rel="noopener noreferrer" target="_blank">
            <svg aria-hidden="true" className="size-5 fill-white" viewBox="0 0 448 512">
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </svg>
          </a>
        </div>

        <div className="flex justify-center">
          <Image
            alt="Libro de reclamaciones"
            height={120}
            src={rutasImagenes.libroReclamaciones}
            style={{ height: "auto", width: "160px" }}
            width={218}
          />
        </div>
      </div>
    </footer>
  );
}
