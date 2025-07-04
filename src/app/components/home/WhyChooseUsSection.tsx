// src/components/home/WhyChooseUsSection.tsx
import React from "react";
// Importe os ícones do Lucide React que você deseja usar.
// Para explorar mais ícones, visite: https://lucide.dev/icons/
import {
  GraduationCap,
  Microchip,
  Headphones,
  ShieldCheck,
} from "lucide-react";

// Dados dos motivos para escolher a Fonomax Audição
const reasons = [
  {
    icon: <GraduationCap className="text-gray-800 w-12 h-12 mb-4" />, // Ícone para Fonoaudiólogos Especializados
    title: "Fonoaudiólogos Especializados",
    description:
      "Nossa equipe é altamente qualificada e dedicada a encontrar a melhor solução para sua saúde auditiva.",
  },
  {
    icon: <Microchip className="text-gray-800 w-12 h-12 mb-4" />, // Ícone para Tecnologia de Ponta
    title: "Tecnologia de Ponta",
    description:
      "Oferecemos aparelhos das melhores marcas com as últimas inovações do mercado para uma audição clara.",
  },
  {
    icon: <Headphones className="text-gray-800 w-12 h-12 mb-4" />, // Ícone para Suporte Pós-Venda Completo
    title: "Suporte Completo",
    description:
      "Garantimos acompanhamento e assistência contínua, com suporte técnico e fonoaudiológico para sua total satisfação.",
  },
  {
    icon: <ShieldCheck className="text-gray-800 w-12 h-12 mb-4" />, // Ícone para Garantia e Segurança
    title: "Garantia e Segurança",
    description:
      "Sua compra é protegida por garantia estendida e nossa política de satisfação. Confiança e tranquilidade para você.",
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      {/* Contêiner principal da seção com max-w-7xl */}
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Por Que Escolher a Fonomax Audição?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-transparent p-8 rounded-lg border border-gray-800 flex flex-col items-center text-center"
            >
              {/* Renderiza o componente de ícone do Lucide React */}
              {reason.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-700 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
