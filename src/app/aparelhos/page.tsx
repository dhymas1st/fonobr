// src/app/aparelhos/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Definindo o tipo para os dados de cada produto
interface Product {
  id: number;
  name: string;
  image: string; // Caminho para a imagem do produto em public/images/products/
  description: string;
  link: string; // Link para a página de detalhes do produto
}

// Dados de todos os produtos (mockados por enquanto)
// Você pode adicionar mais produtos aqui para testar a listagem
const allProducts: Product[] = [
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
    link: "/acessorios/kit-limpeza-premium", // Exemplo de link para acessório
  },
  {
    id: 5,
    name: "Aparelho Auditivo com Conectividade Bluetooth",
    image: "/images/products/product-5.png", // **Adicione esta imagem**
    description:
      "Conecte-se ao seu smartphone e TV. Streaming de áudio direto para seus aparelhos auditivos. Qualidade de som superior.",
    link: "/aparelhos/conectividade-bluetooth",
  },
  {
    id: 6,
    name: "Mini Retroauricular Elegance",
    image: "/images/products/product-6.png", // **Adicione esta imagem**
    description:
      "Compacto e elegante, oferece alta performance e discrição. Ideal para quem busca um aparelho discreto e potente.",
    link: "/aparelhos/mini-retroauricular",
  },
];

// Metadados específicos para a página /aparelhos para SEO
export const metadata: Metadata = {
  title: "Nossos Aparelhos Auditivos - Modelos e Soluções | Fonomax Audição",
  description:
    "Explore a linha completa de aparelhos auditivos Fonomax. Modelos retroauriculares, intra-auriculares, recarregáveis e mais. Encontre a solução perfeita para sua audição em São Paulo.",
  keywords: [
    "aparelhos auditivos",
    "comprar aparelho auditivo",
    "tipos de aparelho auditivo",
    "aparelho auditivo digital",
    "aparelho auditivo recarregável",
    "aparelho auditivo discreto",
    "aparelho auditivo preço",
    "soluções auditivas",
  ],
  openGraph: {
    title: "Aparelhos Auditivos - Fonomax Audição",
    description:
      "Conheça todos os nossos modelos de aparelhos auditivos e encontre o ideal para você.",
    url: "https://www.fonomax.com.br/aparelhos", // Atualize com a URL real do seu site
  },
};

export default function AparelhosPage() {
  return (
    <div className="py-16 bg-gray-50">
      {/* Container principal da página com max-w-7xl */}
      <div className="container mx-auto max-w-7xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Nossa Coleção de Aparelhos Auditivos
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore nossa ampla gama de aparelhos auditivos modernos e encontre o
          que melhor se adapta às suas necessidades e estilo de vida. Qualidade,
          tecnologia e discrição para reconectar você ao mundo dos sons.
        </p>

        {/* Futuramente, aqui podem vir filtros e opções de ordenação */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-700 font-semibold">
            Filtros (Em Breve):
          </span>
          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300">
              Retroauricular
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300">
              Intra-auricular
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300">
              Recarregável
            </button>
          </div>
          <span className="text-gray-700 font-semibold">Ordenar por:</span>
          <select className="border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Relevância</option>
            <option>Mais Novos</option>
            <option>Mais Vendidos</option>
          </select>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center border border-gray-200"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  objectFit="contain"
                  className="rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md text-base transition-colors duration-200 transform w-full"
              >
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
