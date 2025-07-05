// src/app/aparelhos/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/lib/products";
import { Check, Phone, MessageSquareText } from "lucide-react";
import { PageProps } from "@/app/types/PageProps"; // Caminho relativo correto

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
        ...(product.images || []).map((imgUrl) => ({
          url: imgUrl,
          alt: product.name,
        })),
      ],
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
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
    // JSX completo aqui (igual ao anterior)
    <div className="py-16 md:py-20 bg-white">
      {/* ... o restante permanece igual */}
    </div>
  );
}
