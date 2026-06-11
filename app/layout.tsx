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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kunan-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kunan | La Ibérica",
    template: "%s | Kunan",
  },
  description:
    "Kunan es la plataforma de salud y bienestar para trabajadores y familiares de La Ibérica.",
  applicationName: "Kunan",
  keywords: [
    "Kunan",
    "La Ibérica",
    "salud",
    "bienestar",
    "beneficios",
    "familiares",
    "trabajadores",
  ],
  authors: [{ name: "La Ibérica" }],
  creator: "La Ibérica",
  publisher: "La Ibérica",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kunan | La Ibérica",
    description:
      "Plataforma de salud y bienestar para trabajadores y familiares de La Ibérica.",
    siteName: "Kunan",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/imagenes/kunan/destacada_Kunan.jpg",
        alt: "Kunan, para ti, para los tuyos, para tu bienestar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunan | La Ibérica",
    description:
      "Plataforma de salud y bienestar para trabajadores y familiares de La Ibérica.",
    images: ["/imagenes/kunan/destacada_Kunan.jpg"],
  },
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
