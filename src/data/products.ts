// src/data/products.ts
import { Product } from "@/lib/types";

export const productsData: Product[] = [
  {
    id: 1,
    name: "Aparelho Retroauricular Ultra Power",
    image: "/images/products/product-1.png",
    description:
      "Potência e conforto superiores para perdas auditivas severas. Design ergonómico, ideal para o dia a dia.",
    slug: "aparelho-retroauricular-ultra-power",
    brand: "Sonic Innovation",
    type: "Retroauricular",
    isFeatured: true, // <--- MARCADO COMO DESTAQUE
  },
  {
    id: 2,
    name: "Aparelho Intra-auricular Discreto Pro",
    image: "/images/products/product-2.png",
    description:
      "Quase invisível, este modelo oferece alta tecnologia e discrição para perdas leves a moderadas. Adaptação personalizada.",
    slug: "aparelho-intra-auricular-discreto-pro",
    brand: "Oticon",
    type: "Intra-auricular",
    isFeatured: true, // <--- MARCADO COMO DESTAQUE
  },
  {
    id: 3,
    name: "Aparelho Recarregável com IA Connect",
    image: "/images/products/product-3.png",
    description:
      "Liberdade sem troca de bateria e inteligência artificial para adaptação sonora automática em diferentes ambientes.",
    slug: "aparelho-recarregavel-ia-connect",
    brand: "Rexton",
    type: "Recarregável",
    isFeatured: true, // <--- MARCADO COMO DESTAQUE
  },
  {
    id: 4,
    name: "Kit Limpeza Premium para Aparelhos",
    image: "/images/products/product-4.png",
    description:
      "Mantenha seu aparelho em perfeito estado com nosso kit completo de limpeza e manutenção, essencial para durabilidade.",
    slug: "kit-limpeza-premium-aparelhos",
    brand: "FonoBR Acessórios",
    type: "Acessório",
    isFeatured: true, // <--- MARCADO COMO DESTAQUE
  },
  {
    id: 5,
    name: "Aparelho Retroauricular Smart",
    image: "/images/products/product-1.png",
    description:
      "Versão inteligente do retroauricular, com conectividade aprimorada.",
    slug: "aparelho-retroauricular-smart",
    brand: "Sonic Innovation",
    type: "Retroauricular",
    isFeatured: false, // <--- NÃO É DESTAQUE
  },
  {
    id: 6,
    name: "Aparelho Intra-auricular Ultra",
    image: "/images/products/product-2.png",
    description:
      "Aparelho intra-auricular de alto desempenho para todas as situações.",
    slug: "aparelho-intra-auricular-ultra",
    brand: "Danavox",
    type: "Intra-auricular",
    isFeatured: false, // <--- NÃO É DESTAQUE
  },
  {
    id: 7,
    name: "Aparelho Recarregável Compacto",
    image: "/images/products/product-3.png",
    description:
      "Pequeno e recarregável, perfeito para quem busca discrição e praticidade.",
    slug: "aparelho-recarregavel-compacto",
    brand: "Oticon",
    type: "Recarregável",
    isFeatured: false, // <--- NÃO É DESTAQUE
  },
  {
    id: 8,
    name: "Fones de Conectividade Bluetooth",
    image: "/images/products/product-4.png",
    description:
      "Fones para TV e streaming que se conectam diretamente ao seu aparelho auditivo.",
    slug: "fones-conectividade-bluetooth",
    brand: "Argosy",
    type: "Acessório",
    isFeatured: false, // <--- NÃO É DESTAQUE
  },
];
