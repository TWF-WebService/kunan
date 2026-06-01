import type { ReactNode } from "react";

const enlaceExterno =
  "font-bold !text-[#C10C2B] underline-offset-4 transition duration-300 hover:!text-[#1E1E1EB3] hover:underline";

type PreguntaFrecuente = {
  pregunta: string;
  respuesta: ReactNode;
};

type CategoriaPreguntas = {
  categoria: string;
  preguntas: PreguntaFrecuente[];
};

export const categoriasPreguntas: CategoriaPreguntas[] = [
  {
    categoria: "Ingreso a Kunan",
    preguntas: [
      {
        pregunta: "¿Cómo puedo ingresar a Kunan Salud?",
        respuesta: (
          <p>
            Puedes acceder de dos formas:
            <br />
            1. Descargando la app en las tiendas virtuales:{" "}
            <a
              className={enlaceExterno}
              href="https://apps.apple.com/pe/app/kunan-salud/id1567338325"
              rel="noopener noreferrer"
              target="_blank"
            >
              App Store (iPhone)
            </a>{" "}
            o{" "}
            <a
              className={enlaceExterno}
              href="https://play.google.com/store/search?q=kunan%20salud&c=apps"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Play (Android)
            </a>
            <br />
            2. A través de la página web:{" "}
            <a
              className={enlaceExterno}
              href="https://www.kunansalud.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.kunansalud.com
            </a>
          </p>
        ),
      },
      {
        pregunta: "¿Cómo me descargo Kunan Salud?",
        respuesta: (
          <>
            <p>
              Busca Kunan Salud en las tiendas virtuales:{" "}
              <a
                className={enlaceExterno}
                href="https://apps.apple.com/pe/app/kunan-salud/id1567338325"
                rel="noopener noreferrer"
                target="_blank"
              >
                App Store (iPhone)
              </a>{" "}
              o{" "}
              <a
                className={enlaceExterno}
                href="https://play.google.com/store/search?q=kunan%20salud&c=apps"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Play (Android)
              </a>
              .
            </p>
            <p>Solo debes hacer clic en «Instalar» y listo.</p>
          </>
        ),
      },
      {
        pregunta: "¿Cómo ingreso a través de la página web?",
        respuesta: (
          <p>
            Desde una laptop, tablet o smartphone: ingresa a{" "}
            <a
              className={enlaceExterno}
              href="https://www.kunansalud.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.kunansalud.com
            </a>
            . Desde ahí podrás usar la plataforma en línea sin necesidad de descargar nada.
          </p>
        ),
      },
      {
        pregunta: "¿Cómo ingresar vía WEB? (Primera vez)",
        respuesta: (
          <p>
            1. Ingresa a{" "}
            <a
              className={enlaceExterno}
              href="https://www.kunansalud.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.kunansalud.com
            </a>
            <br />
            2. Haz clic en la sección para colaboradores y proveedores.
            <br />
            3. Ingresa tu DNI y haz clic en continuar.
          </p>
        ),
      },
      {
        pregunta: "¿Cómo ingresar vía WEB? (Segunda vez)",
        respuesta: (
          <p>
            1. Ingresa a{" "}
            <a
              className={enlaceExterno}
              href="https://www.kunansalud.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.kunansalud.com
            </a>
            <br />
            2. Haz clic en la sección para colaboradores y proveedores.
            <br />
            3. Ingresa tu DNI, contraseña y haz clic en continuar.
            <br />
            4. ¡Ya estarás dentro y podrás disfrutar del servicio!.
          </p>
        ),
      },
      {
        pregunta: "¿Cómo ingresar vía APP?",
        respuesta: (
          <p>
            1. Ingresa a{" "}
            <a
              className={enlaceExterno}
              href="https://play.google.com/store/search?q=kunan%20salud&c=apps"
              rel="noopener noreferrer"
              target="_blank"
            >
              Play Store (Android)
            </a>{" "}
            o{" "}
            <a
              className={enlaceExterno}
              href="https://apps.apple.com/pe/app/kunan-salud/id1567338325"
              rel="noopener noreferrer"
              target="_blank"
            >
              App Store (iPhone)
            </a>{" "}
            y busca “Kunan Salud”.
            <br />
            2. Descarga e instala la app.
            <br />
            3. Seleccionar la opción acceder como Cliente Kunan.
            <br />
            4. Ingresa tu DNI y da clic a “continuar”.
            <br />
            5. Completa tu información y crea una contraseña.
          </p>
        ),
      },
      {
        pregunta: "¿Cómo ingresar vía APP (Segunda vez)?",
        respuesta: (
          <p>
            1. Abre la app Kunan Salud.
            <br />
            2. Haz clic en la sección para colaboradores y proveedores.
            <br />
            3. Ingresa tu DNI, contraseña y haz clic en continuar.
            <br />
            4. ¡Ya estarás dentro y podrás disfrutar del servicio!.
          </p>
        ),
      },
    ],
  },
  {
    categoria: "Atenciones",
    preguntas: [
      {
        pregunta: "¿Cómo me atiendo con un doctor en minutos?",
        respuesta:
          "Haz clic en el botón que dice ¡Atiéndete con un doctor ya! Entrarás a una sala de espera virtual, que es un chat donde puedes contarle tus síntomas al doctor que te atenderá. Es importante mantenerte conectado hasta que el doctor te llame. Cuando sea tu turno, recibirás una notificación para atenderte en videollamada",
      },
      {
        pregunta: "¿Cuáles son los horarios de atención de medicina general?",
        respuesta:
          "De 9 am a 9 pm, todos los días de la semana, incluyendo domingos y feriados",
      },
      {
        pregunta: "¿Las atenciones tienen un costo?",
        respuesta: "No tienen un costo. El beneficio lo asume la empresa",
      },
      {
        pregunta: "¿Las atenciones son virtuales o presenciales?",
        respuesta: "Todas son virtuales, a través de videollamada.",
      },
    ],
  },
  {
    categoria: "Recetas",
    preguntas: [
      {
        pregunta: "¿Qué pasa si el doctor te emite una receta?",
        respuesta:
          "La receta en sí es gratuita, pero los medicamentos sí tienen costo y deben pagarlos los usuarios. Además, cualquier examen adicional (Por ejemplo: Pruebas de laboratorio) también los asume el usuario.",
      },
    ],
  },
  {
    categoria: "Familiares",
    preguntas: [
      {
        pregunta: "¿Cómo registro a un familiar?",
        respuesta:
          "En la pantalla principal, haz clic en “Agregar Familiares” y completa los datos del familiar para registrarlo.",
      },
      {
        pregunta: "¿Un familiar puede atenderse desde mi perfil?",
        respuesta:
          "No. Cada persona debe atenderse desde su propio perfil. Cada familiar tendrá su propio perfil y debe validar su identidad cuando soliciten atención.",
      },
      {
        pregunta: "¿Puedo incluir a alguien que no sea familiar directo?",
        respuesta:
          "Sí, puedes incluir a quien desees, no necesariamente un familiar cercano.",
      },
      {
        pregunta: "¿Un familiar puede acceder desde su propio smartphone?",
        respuesta:
          "Sí. El titular primero registra al familiar. Después, puede notificarle y que descargue Kunan en su teléfono, y allí podrá acceder con sus propios datos (que el mismo titular ha registrado previamente).",
      },
    ],
  },
];
