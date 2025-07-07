// src/app/(main)/aparelhos/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data";
import { HiOutlineArrowLeft } from "react-icons/hi2";

// Tipagem para os parâmetros da rota
interface ProductDetailPageProps {
  params: {
    slug: string | string[]; // O slug do produto virá como string ou array da URL
  };
}

// Função para gerar os parâmetros estáticos (slugs) para o build
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

// Função para gerar metadados dinamicamente
export async function generateMetadata({
  params,
}: {
  params: { slug: string | string[] };
}): Promise<Metadata> {
  const currentSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const product = productsData.find((p) => p.slug === currentSlug);

  if (!product) {
    return {
      title: "Produto Não Encontrado | FonoBR",
      description: "O aparelho auditivo que procura não foi encontrado.",
    };
  }

  return {
    title: `${product.name} - Detalhes | FonoBR`,
    description: product.description,
    keywords: [
      `${product.name.toLowerCase()}`,
      `${product.brand.toLowerCase()}`,
      `${product.type.toLowerCase()}`,
      "aparelho auditivo",
      "detalhes",
      "FonoBR",
    ],
    openGraph: {
      title: `${product.name} - Aparelho Auditivo | FonoBR`,
      description: product.description,
      url: `https://www.fonobr.com.br/aparelhos/${product.slug}`,
      images: [
        {
          url: `https://www.fonobr.com.br${product.image}`,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

// Componente da página de detalhes do produto
const ProductDetailPage: React.FC<ProductDetailPageProps> = async ({
  params,
}) => {
  const productSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const product = productsData.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="product-detail-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/aparelhos"
          className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-8 transition-colors duration-200"
          aria-label="Voltar para a lista de aparelhos"
        >
          <HiOutlineArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
          Voltar para Aparelhos
        </Link>

        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Imagem do Produto */}
          <div className="relative w-full md:w-1/2 h-80 md:h-[400px] flex-shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              objectFit="contain"
              className="rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>

          {/* Detalhes do Produto */}
          <div className="flex-grow text-center md:text-left">
            <h1
              id="product-detail-heading"
              className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4"
            >
              {product.name}
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-3 mb-8 text-gray-800">
              <p className="text-xl font-semibold">
                Marca:{" "}
                <span className="font-normal text-blue-600">
                  {product.brand}
                </span>
              </p>
              <p className="text-xl font-semibold">
                Tipo:{" "}
                <span className="font-normal text-blue-600">
                  {product.type}
                </span>
              </p>
              {/* Adicione mais detalhes aqui se os seus productsData tiverem mais campos */}
              <p className="text-xl font-semibold">
                Tecnologia:{" "}
                <span className="font-normal text-gray-700">
                  Digital Avançada
                </span>
              </p>
              <p className="text-xl font-semibold">
                Conectividade:{" "}
                <span className="font-normal text-gray-700">
                  Bluetooth, App Control
                </span>
              </p>
              <p className="text-xl font-semibold">
                Recursos:{" "}
                <span className="font-normal text-gray-700">
                  Cancelamento de Ruído, IA Adaptativa
                </span>
              </p>
            </div>

            {/* CTA para agendar consulta/teste */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Interessado neste aparelho?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Agende uma consulta gratuita para um teste e descubra como o **
                {product.name}** pode transformar a sua audição.
              </p>
              <Link
                href="/contato"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
                aria-label={`Agendar consulta para ${product.name}`}
              >
                Agende a Sua Consulta
              </Link>
            </div>
          </div>
        </div>

        {/* Secção de Produtos Relacionados (Opcional) */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Explore Outros Aparelhos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/aparelhos/${relatedProduct.slug}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center border border-gray-200"
                  aria-label={`Ver detalhes do aparelho ${relatedProduct.name}`}
                >
                  <div className="relative w-full h-32 mb-3">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      objectFit="contain"
                      className="rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {relatedProduct.brand}
                  </p>
                  <span className="mt-3 text-blue-700 font-medium hover:underline">
                    Ver Detalhes
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
