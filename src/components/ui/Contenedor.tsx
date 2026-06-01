import type { ComponentPropsWithoutRef } from "react";
import { unirClases } from "@/src/lib/utilidades";

type PropiedadesContenedor = ComponentPropsWithoutRef<"div">;

export default function Contenedor({
  className,
  ...propiedades
}: PropiedadesContenedor) {
  return (
    <div
      className={unirClases("contenedor-kunan", className)}
      {...propiedades}
    />
  );
}
