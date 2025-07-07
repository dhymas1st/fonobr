// src/lib/types.ts

/**
 * Interface para um slide da seção Hero.
 */
export interface HeroSlide {
  id: number;
  image: string;
  preTitle: string;
  title: string;
  description: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

/**
 * Interface para um produto (aparelho auditivo) em destaque, com propriedades para filtragem e slug.
 */
export interface Product {
  id: number;
  name: string; // Título do modelo
  image: string; // Caminho para a imagem do produto em public/images/products/
  description: string; // Descrição curta
  slug: string; // Slug para a URL (ex: "aparelho-retroauricular-ultra-power")
  brand: string; // Marca do aparelho (ex: "Sonic Innovation", "Oticon")
  type: string; // Tipo de aparelho (ex: "Retroauricular", "Intra-auricular", "Recarregável")
  isFeatured: boolean; // <--- NOVA PROPRIEDADE: Indica se o produto está em destaque
}

/**
 * Interface para um diferencial da empresa na seção "Por que escolher a FonoBR?".
 */
export interface Advantage {
  id: number;
  icon: React.ElementType; // Tipo para componentes de ícone (react-icons)
  title: string; // Título do diferencial
  description: string; // Descrição curta do diferencial
}

/**
 * Interface para uma marca parceira.
 */
export interface Brand {
  id: number;
  name: string; // Nome da marca
  logo: string; // Caminho para o logótipo da marca
}
