import type { ComponentPropsWithoutRef } from "react";
import { unirClases } from "@/src/lib/utilidades";

type PropiedadesSeccion = ComponentPropsWithoutRef<"section">;

export default function Seccion({ className, ...propiedades }: PropiedadesSeccion) {
  return (
    <section
      className={unirClases("seccion-kunan", className)}
      {...propiedades}
    />
  );
}
