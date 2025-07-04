// src/lib/products.ts

// Definindo o tipo para os dados de um produto
export interface Product {
  id: number;
  slug: string; // Adicionado slug para a rota dinâmica
  name: string;
  image: string; // Caminho para a imagem principal do produto
  images?: string[]; // Array de imagens adicionais (galeria)
  description: string; // Descrição curta (para listagem)
  descriptionLong: string; // Descrição detalhada (para página de detalhes)
  features: string[]; // Lista de características/especificações
  benefits: string[]; // Lista de benefícios para o usuário
  categories: string[]; // Categorias do produto (ex: Retroauricular, Recarregável)
  price?: string; // Preço (opcional, pode ser usado internamente)
}

// Dados de todos os produtos (mockados por enquanto)
export const allProducts: Product[] = [
  {
    id: 1,
    slug: "retroauricular-ultra-power",
    name: "Aparelho Retroauricular Ultra Power",
    image: "/images/products/product-1.png",
    images: [
      "/images/products/product-1-detail-1.jpg",
      "/images/products/product-1-detail-2.jpg",
    ], // **Crie estas imagens**
    description:
      "Potência e conforto superiores para perdas auditivas severas. Design ergonômico, ideal para o dia a dia.",
    descriptionLong:
      "O Aparelho Retroauricular Ultra Power é a solução perfeita para perdas auditivas severas e profundas. Com tecnologia de amplificação avançada e design robusto, ele proporciona clareza de fala e conforto excepcionais em todas as situações. Inclui bateria de longa duração e resistência à água.",
    features: [
      "Potência Ultra",
      "Conectividade Bluetooth",
      "Resistente à Água (IP68)",
      "Bateria Recarregável",
      "Supressão de Ruído",
    ],
    benefits: [
      "Ouça em qualquer ambiente",
      "Conecte-se facilmente a dispositivos",
      "Durabilidade e resistência",
      "Liberdade de recarregar",
      "Conversas mais claras",
    ],
    categories: ["Retroauricular", "Potente", "Recarregável"],
    price: "A partir de R$ 3.500",
  },
  {
    id: 2,
    slug: "intra-auricular-discreto-pro",
    name: "Aparelho Intra-auricular Discreto Pro",
    image: "/images/products/product-2.jpg",
    images: [
      "/images/products/product-2-detail-1.jpg",
      "/images/products/product-2-detail-2.jpg",
    ], // **Crie estas imagens**
    description:
      "Quase invisível, este modelo oferece alta tecnologia e discrição para perdas leves a moderadas. Adaptação personalizada.",
    descriptionLong:
      "O Intra-auricular Discreto Pro é ideal para quem busca uma solução auditiva que seja praticamente invisível. Personalizado para se ajustar perfeitamente ao canal auditivo, ele oferece uma experiência sonora natural e discreta, com tecnologia de processamento de som de última geração.",
    features: [
      "Design Invisível",
      "Personalizado para o ouvido",
      "Processamento de Som Avançado",
      "Conforto Máximo",
      "Fácil Manutenção",
    ],
    benefits: [
      "Discrição total",
      "Ajuste perfeito e confortável",
      "Audição natural",
      "Uso sem preocupações",
    ],
    categories: ["Intra-auricular", "Discreto"],
    price: "A partir de R$ 4.200",
  },
  {
    id: 3,
    slug: "recarregavel-ia-connect",
    name: "Aparelho Recarregável com IA Connect",
    image: "/images/products/product-3.jpg",
    images: [
      "/images/products/product-3-detail-1.jpg",
      "/images/products/product-3-detail-2.jpg",
    ], // **Crie estas imagens**
    description:
      "Liberdade sem troca de bateria e inteligência artificial para adaptação sonora automática em diferentes ambientes.",
    descriptionLong:
      "O Aparelho Recarregável com IA Connect redefine a conveniência. Com inteligência artificial, ele se adapta automaticamente a diferentes ambientes sonoros, otimizando sua audição. Sua bateria de longa duração permite um dia inteiro de uso com uma única carga.",
    features: [
      "Inteligência Artificial",
      "Bateria Recarregável Rápida",
      "Conectividade Total",
      "Adaptação Automática de Som",
      "Controle por Aplicativo",
    ],
    benefits: [
      "Audição otimizada em qualquer lugar",
      "Sem preocupação com baterias",
      "Conecte-se a tudo",
      "Controle na palma da mão",
    ],
    categories: ["Recarregável", "IA", "Conectividade"],
    price: "A partir de R$ 5.800",
  },
  {
    id: 4,
    slug: "kit-limpeza-premium",
    name: "Kit Limpeza Premium para Aparelhos",
    image: "/images/products/product-4.jpg",
    images: ["/images/products/product-4-detail-1.jpg"], // **Crie estas imagens**
    description:
      "Mantenha seu aparelho em perfeito estado com nosso kit completo de limpeza e manutenção, essencial para durabilidade.",
    descriptionLong:
      "O Kit Limpeza Premium é essencial para prolongar a vida útil e garantir a performance ideal do seu aparelho auditivo. Inclui spray limpador, escovas, desumidificador e ferramenta multiuso, tudo para uma manutenção eficaz e fácil.",
    features: [
      "Spray Limpador Especializado",
      "Escovas de Limpeza Precisas",
      "Desumidificador Eletrônico",
      "Ferramenta Multiuso",
    ],
    benefits: [
      "Aumenta a durabilidade do aparelho",
      "Mantém a higiene",
      "Previne falhas",
      "Fácil de usar em casa",
    ],
    categories: ["Acessórios", "Manutenção"],
    price: "R$ 150",
  },
  {
    id: 5,
    slug: "conectividade-bluetooth",
    name: "Aparelho Auditivo com Conectividade Bluetooth",
    image: "/images/products/product-5.jpg",
    images: ["/images/products/product-5-detail-1.jpg"],
    description:
      "Conecte-se ao seu smartphone e TV. Streaming de áudio direto para seus aparelhos auditivos. Qualidade de som superior.",
    descriptionLong:
      "Experimente a conveniência do Aparelho Auditivo com Conectividade Bluetooth. Transmita áudio diretamente do seu celular, tablet ou TV. Desfrute de chamadas telefônicas nítidas e uma experiência de áudio imersiva, tudo com controle total através de um aplicativo dedicado.",
    features: [
      "Conectividade Bluetooth 5.0",
      "Streaming de Áudio Direto",
      "Controle via Smartphone",
      "Compatível com iOS e Android",
      "Chamadas Mãos-Livres",
    ],
    benefits: [
      "Interação perfeita com dispositivos",
      "Qualidade de áudio aprimorada",
      "Personalização fácil via app",
      "Liberdade de movimento",
    ],
    categories: ["Conectividade", "Tecnologia"],
    price: "A partir de R$ 4.800",
  },
  {
    id: 6,
    slug: "mini-retroauricular-elegance",
    name: "Mini Retroauricular Elegance",
    image: "/images/products/product-6.jpg",
    images: ["/images/products/product-6-detail-1.jpg"],
    description:
      "Compacto e elegante, oferece alta performance e discrição. Ideal para quem busca um aparelho discreto e potente.",
    descriptionLong:
      "O Mini Retroauricular Elegance é a escolha ideal para quem busca discrição sem comprometer a potência. Seu design ergonômico e tamanho reduzido garantem que ele se ajuste confortavelmente atrás da orelha, oferecendo uma amplificação sonora clara e natural. Perfeito para o uso diário, ele passa quase despercebido.",
    features: [
      "Design Mini",
      "Ultra Discreto",
      "Amplificação Natural",
      "Conforto Ergonômico",
      "Bateria de Longa Duração",
    ],
    benefits: [
      "Visualmente discreto",
      "Áudio claro em todas as situações",
      "Conforto para uso prolongado",
      "Autonomia para o dia todo",
    ],
    categories: ["Retroauricular", "Discreto"],
    price: "A partir de R$ 3.200",
  },
];
