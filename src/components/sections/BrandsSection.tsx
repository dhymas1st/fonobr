// src/components/sections/BrandsSection.tsx
import React from "react";
import Image from "next/image"; // Para otimização de imagens

// Importe os dados mocados de marcas
import { brandsData } from "@/data";

const BrandsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="brands-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="brands-heading"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        >
          Marcas que trabalhamos
        </h2>

        {/* Grelha responsiva para exibir os logótipos/nomes das marcas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-center items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500" // Adicionado focus-within para acessibilidade
              // Se a marca tivesse uma ligação para a sua página, o div seria uma Ligação/botão.
              // Como é apenas uma lista de logótipos, o div é suficiente.
            >
              <Image
                src={brand.logo}
                alt={`Logótipo da marca ${brand.name}`} // Alt text descritivo é crucial para SEO e acessibilidade
                width={120} // Largura intrínseca para otimização do Next/Image
                height={60} // Altura intrínseca para otimização do Next/Image
                objectFit="contain" // Garante que o logótipo seja exibido completamente dentro do espaço
                className="max-h-16 w-auto" // Controla o tamanho máximo dentro do flex container
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
