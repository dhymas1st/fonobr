import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productsData } from "@/data";
import { Product } from "@/lib/types";
import ProductDetailClient from "@/components/products/ProductDetailClient"; // Importa o novo Client Component

// Tipagem para os parâmetros da rota
interface ProductDetailPageProps {
  params: {
    slug: string | string[];
  };
}

// 1. Função para gerar os parâmetros estáticos (Server Function)
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

// 2. Função para gerar metadados dinamicamente (Server Function)
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

// 3. Componente da página (Server Component)
const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const productSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const product = productsData.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  // Passa o produto encontrado para o Client Component
  return <ProductDetailClient initialProduct={product as Product} />;
};

export default ProductDetailPage;
