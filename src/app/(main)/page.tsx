// src/app/(main)/page.tsx
import HeroSection from "@/components/home/HeroSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import BrandsSection from "@/components/sections/BrandsSection"; // Importe o novo componente
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function HomePage() {
  return (
    <>
      {/* O Header e Footer já são renderizados pelo layout.tsx */}
      <div id="main-content" tabIndex={-1}>
        <HeroSection />

        <FeaturedProductsSection />

        <WhyChooseUsSection />

        {/* Adicione a secção "Marcas que trabalhamos" aqui */}
        <BrandsSection />

        <ContactFormSection />
      </div>
    </>
  );
}
