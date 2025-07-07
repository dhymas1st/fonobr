// src/components/sections/WhyChooseUsSection.tsx
import React from "react";

// Importe os dados mocados de vantagens
import { advantagesData } from "@/data";

const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      className="py-16 bg-gray-100"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="why-choose-us-heading"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        >
          Por que escolher a FonoBR?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantagesData.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-xl
                         focus-within:ring-4 focus-within:ring-blue-500 focus:ring-blue-500 focus:ring-opacity-50" // Acessibilidade: feedback visual ao focar
              // Para acessibilidade, podemos tornar o card focável se ele fosse interativo
              // tabIndex={0}
              // role="listitem" // Se estiver dentro de uma <ul> com role="list"
            >
              {/* Ícone */}
              <div className="mb-6">
                <advantage.icon
                  className="h-16 w-16 text-blue-600 mx-auto"
                  aria-hidden="true"
                />{" "}
                {/* Acessibilidade: aria-hidden se o texto já descreve */}
              </div>

              {/* Título */}
              <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight">
                {advantage.title}
              </h3>

              {/* Descrição */}
              <p className="text-gray-700 text-base leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
