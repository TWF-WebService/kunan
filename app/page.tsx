import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import Beneficios from "@/src/components/inicio/Beneficios";
import BeneficiosFamiliares from "@/src/components/inicio/BeneficiosFamiliares";
import CtaApp from "@/src/components/inicio/CtaApp";
import CtaWhatsapp from "@/src/components/inicio/CtaWhatsapp";
import Hero from "@/src/components/inicio/Hero";
import Introduccion from "@/src/components/inicio/Introduccion";
import PreguntasFrecuentes from "@/src/components/inicio/PreguntasFrecuentes";
import Servicios from "@/src/components/inicio/Servicios";
import Testimonios from "@/src/components/inicio/Testimonios";
import AnimarAlScroll from "@/src/components/ui/AnimarAlScroll";

export default function PaginaInicio() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimarAlScroll>
          <Introduccion />
        </AnimarAlScroll>
        <AnimarAlScroll>
          <Servicios />
        </AnimarAlScroll>
        <AnimarAlScroll>
          <Testimonios />
        </AnimarAlScroll>
        <AnimarAlScroll>
          <Beneficios />
        </AnimarAlScroll>
        <AnimarAlScroll>
          <BeneficiosFamiliares />
        </AnimarAlScroll>
        <AnimarAlScroll>
          <CtaWhatsapp />
        </AnimarAlScroll>
        <AnimarAlScroll>
          <PreguntasFrecuentes />
        </AnimarAlScroll>
        <AnimarAlScroll>
          <CtaApp />
        </AnimarAlScroll>
      </main>
      <Footer />
    </>
  );
}
