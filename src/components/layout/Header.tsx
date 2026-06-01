import Image from "next/image";
import Link from "next/link";
import Contenedor from "@/src/components/ui/Contenedor";
import { rutasImagenes } from "@/src/data/inicio";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-marca-principal py-3 shadow-sm md:py-4">
      <Contenedor className="flex justify-center">
        <Link aria-label="Ir al inicio" href="#inicio">
          <Image
            alt="Kunan"
            className="h-9 w-auto md:h-12"
            height={60}
            priority
            src={rutasImagenes.logo}
            width={228}
          />
        </Link>
      </Contenedor>
    </header>
  );
}
