// src/components/home/FeaturedProductsSection.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Importe os dados mocados de produtos
import { productsData } from "@/data";

const FeaturedProductsSection: React.FC = () => {
  // Filtra apenas os produtos marcados como destaque e limita a 4 itens
  const featuredProducts = productsData
    .filter((product) => product.isFeatured)
    .slice(0, 4);

  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="featured-products-heading"
    >
      {/* Contêiner principal da secção com max-w-7xl */}
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <h2
          id="featured-products-heading"
          className="text-3xl md:text-4xl font-light text-gray-800 mb-12"
        >
          Nossas Soluções Auditivas em Destaque
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(
            (
              product // <--- AGORA USA featuredProducts
            ) => (
              <div
                key={product.id}
                // Efeitos de hover e transição para o card
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-4 transition-all duration-300 p-6 flex flex-col items-center border border-gray-200"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    objectFit="contain"
                    className="rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                <h3
                  className="text-lg font-semibold text-gray-900 mb-2 truncate w-full px-2"
                  title={product.name}
                >
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow text-center">
                  {product.description}
                </p>

                <Link
                  href={`/aparelhos/${product.slug}`}
                  // Botão "Ver Detalhes" agora é w-full para melhor clique
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md text-base transition-colors duration-200 transform w-full"
                  aria-label={`Ver Detalhes do aparelho ${product.name}`}
                >
                  Ver Detalhes
                </Link>
              </div>
            )
          )}
        </div>

        <div className="mt-12">
          <Link
            href="/aparelhos"
            className="inline-block bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-3 px-8 rounded-md text-lg transition-all duration-300"
            aria-label="Navegar para a página de todos os aparelhos"
          >
            Ver Todos os Aparelhos &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
