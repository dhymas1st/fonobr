// src/lib/types.ts

/**
 * Interface para um slide da seção Hero.
 */
export interface HeroSlide {
  id: number;
  image: string; // Caminho para a imagem de fundo do slide
  preTitle: string; // Parágrafo introdutório
  title: string; // Título principal
  description: string; // Descrição abaixo do título
  ctaButtonText: string;
  ctaButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

/**
 * Interface para as informações de um Acordeão.
 */
export interface AccordionItem {
  title: string;
  content: string[]; // Array de strings para parágrafos
}

/**
 * Interface para um produto (aparelho auditivo) em destaque, com propriedades detalhadas para a página de produto.
 */
export interface Product {
  id: number;
  name: string; // Título do modelo
  image: string; // Caminho para a imagem principal (quadrada)
  description: string; // Breve descrição
  slug: string; // Slug para a URL
  brand: string; // Marca
  type: string; // Tipo de aparelho
  isFeatured: boolean; // Se está em destaque na Home

  // NOVOS CAMPOS PARA PÁGINA DE DETALHES
  thumbImages: string[]; // Caminhos para as imagens menores da galeria
  techSpecs: {
    // Especificações na coluna da direita
    tecnologia: string;
    conectividade: string;
    recursos: string;
  };
  accordion: {
    informacoes: AccordionItem;
    caracteristicas: AccordionItem;
  };
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
