import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--fuente-montserrat",
  display: "swap",
});

const fuenteManuscrita = localFont({
  src: "./fuentes/behind-the-nineties-sans.ttf",
  variable: "--fuente-manuscrita",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kunan | La Ibérica",
  description:
    "Plataforma de salud y bienestar para trabajadores y familiares de La Ibérica.",
  icons: {
    icon: "/imagenes/kunan/favicon-kunan.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${fuenteManuscrita.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
