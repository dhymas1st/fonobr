// src/app/aparelhos/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/lib/products";
import { Check, Phone, MessageSquareText } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

// Gerar metadados dinâmicos para SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product = allProducts.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Produto Não Encontrado | FonoBR Audição",
      description:
        "A página do produto que você está procurando não foi encontrada.",
    };
  }

  return {
    title: `${product.name} | FonoBR Audição`,
    description: product.descriptionLong,
    keywords: [
      ...product.categories,
      product.name,
      "aparelho auditivo",
      "comprar",
      "preço",
      "oferta",
      "São Paulo",
    ],
    openGraph: {
      title: `${product.name} - FonoBR Audição`,
      description: product.descriptionLong,
      url: `https://www.fonobr.com.br/aparelhos/${product.slug}`,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
        ...(product.images ?? []).map((imgUrl) => ({
          url: imgUrl,
          alt: product.name,
        })),
      ],
      type: "website",
    },
  };
}

// Gerar rotas estáticas
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

// Componente principal da página de produto
export default function ProductDetailPage({ params }: PageProps) {
  const product = allProducts.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="container mx-auto max-w-7xl px-6 py-20 text-center min-h-[60vh] bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Produto Não Encontrado
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Desculpe, o aparelho auditivo que você está procurando não existe ou
          foi removido.
        </p>
        <Link
          href="/aparelhos"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200"
        >
          Ver Todos os Aparelhos
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          {product.name}
        </h1>

        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-8" aria-label="breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link
                href="/aparelhos"
                className="text-blue-600 hover:text-blue-800"
              >
                Aparelhos
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center text-gray-500" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Imagem Principal */}
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <div className="relative w-full h-[350px] md:h-[500px] mb-6 rounded-lg shadow-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                objectFit="contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.images && product.images.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center">
                {product.images.map((imgUrl, index) => (
                  <div
                    key={index}
                    className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-200 hover:border-blue-600 transition-colors duration-200 cursor-pointer"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${product.name} - Imagem ${index + 1}`}
                      fill
                      objectFit="cover"
                      sizes="(max-width: 768px) 25vw, 10vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Detalhes do Produto */}
          <div className="lg:w-1/2 w-full">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {product.descriptionLong}
            </p>

            {product.price && (
              <p className="text-3xl font-bold text-blue-700 mb-6">
                {product.price}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 w-full sm:w-auto"
              >
                <Phone size={20} className="mr-2" />
                Solicitar Orçamento
              </Link>
              <Link
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 w-full sm:w-auto"
              >
                <MessageSquareText size={20} className="mr-2" />
                Falar no WhatsApp
              </Link>
            </div>

            {product.features?.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Principais Características
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check
                        size={20}
                        className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.benefits?.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Benefícios para Você
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-700">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check
                        size={20}
                        className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
