"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Contenedor from "@/src/components/ui/Contenedor";
import { rutasImagenes } from "@/src/data/inicio";

export default function Header() {
  const [estaEnScroll, setEstaEnScroll] = useState(false);

  const irAlInicio = () => {
    document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const actualizarEstado = () => {
      setEstaEnScroll(window.scrollY > 0);
    };

    actualizarEstado();
    window.addEventListener("scroll", actualizarEstado, { passive: true });

    return () => {
      window.removeEventListener("scroll", actualizarEstado);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-marca-principal py-3 shadow-sm md:py-4">
      <Contenedor className="flex justify-center">
        <Link aria-label="Ir al inicio" href="#inicio" onClick={irAlInicio}>
          <Image
            alt="Kunan"
            className={`w-auto transition-all duration-300 ${estaEnScroll ? "h-10" : "h-[60px]"}`}
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
