import type { AnchorHTMLAttributes, ReactNode } from "react";
import { unirClases } from "@/src/lib/utilidades";

type VarianteBoton = "principal" | "secundario" | "contorno";

type PropiedadesBoton = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variante?: VarianteBoton;
  children: ReactNode;
};

const clasesPorVariante: Record<VarianteBoton, string> = {
  principal: "boton-principal px-5 py-5 font-sans text-lg font-medium uppercase !text-white duration-300 hover:bg-marca-oscuro hover:!text-white hover:opacity-100",
  secundario: "boton-secundario",
  contorno: "boton-contorno",
};

export default function Boton({
  variante = "principal",
  className,
  children,
  ...propiedades
}: PropiedadesBoton) {
  return (
    <a className={unirClases(clasesPorVariante[variante], className)} {...propiedades}>
      {children}
    </a>
  );
}
