// src/components/home/FeaturedProductsSection.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Definindo o tipo para os dados de cada produto
interface Product {
  id: number;
  name: string;
  image: string; // Caminho para a imagem do produto em public/images/products/
  description: string;
  link: string; // Link para a página de detalhes do produto
}

// Exemplo de dados de produtos (em um projeto real, viria de uma API/BD)
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Aparelho Retroauricular Ultra Power",
    image: "/images/products/product-1.png",
    description:
      "Potência e conforto superiores para perdas auditivas severas. Design ergonômico, ideal para o dia a dia.",
    link: "/aparelhos/retroauricular-ultra-power",
  },
  {
    id: 2,
    name: "Aparelho Intra-auricular Discreto Pro",
    image: "/images/products/product-2.png",
    description:
      "Quase invisível, este modelo oferece alta tecnologia e discrição para perdas leves a moderadas. Adaptação personalizada.",
    link: "/aparelhos/intra-auricular-discreto-pro",
  },
  {
    id: 3,
    name: "Aparelho Recarregável com IA Connect",
    image: "/images/products/product-3.png",
    description:
      "Liberdade sem troca de bateria e inteligência artificial para adaptação sonora automática em diferentes ambientes.",
    link: "/aparelhos/recarregavel-ia-connect",
  },
  {
    id: 4,
    name: "Kit Limpeza Premium para Aparelhos",
    image: "/images/products/product-4.png",
    description:
      "Mantenha seu aparelho em perfeito estado com nosso kit completo de limpeza e manutenção, essencial para durabilidade.",
    link: "/acessorios/kit-limpeza-premium",
  },
];

const FeaturedProductsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Contêiner principal da seção com max-w-7xl */}
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">
          Nossas Soluções Auditivas em Destaque
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
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
                href={product.link}
                // Botão "Ver Detalhes" agora é w-full para melhor clique
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md text-base transition-colors duration-200 transform w-full"
              >
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/aparelhos"
            className="inline-block bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-3 px-8 rounded-md text-lg transition-all duration-300"
          >
            Ver Todos os Aparelhos &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
