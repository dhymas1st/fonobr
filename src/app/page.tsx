// src/app/page.tsx
import React from "react";
import HeroSection from "@/app/components/home/HeroSection"; // <-- Importe esta linha
// Outras seções virão aqui

import type { Metadata } from "next";
import FeaturedProductsSection from "./components/home/FeaturedProductsSection";
import WhyChooseUsSection from "./components/home/WhyChooseUsSection";
import ContactFormSection from "./components/home/ContactFormSection";

export const metadata: Metadata = {
  title: "Aparelhos Auditivos em São Paulo | Fonomax Audição",
  description:
    "Encontre os melhores aparelhos auditivos em São Paulo. Soluções personalizadas, tecnologia de ponta e atendimento especializado para sua perda auditiva.",
  keywords: [
    "aparelho auditivo são paulo",
    "perda auditiva",
    "aparelho auditivo online",
    "audição sp",
    "comprar aparelho auditivo",
    "melhor aparelho auditivo",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <ContactFormSection />
    </>
  );
}
