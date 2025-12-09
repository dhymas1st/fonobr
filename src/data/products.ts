// src/data/products.ts
import { Product } from "@/lib/types";

export const productsData: Product[] = [
  // --- PRODUTOS NUEAR (STARKEY) ---
  {
    id: 1,
    name: "Aparelho Auditivo IIC NuEar (Starkey) | 100% Invisível",
    image: "/images/products/nuear/nuear-iic-invisivel-1.png", // PLACEHOLDER
    description:
      "Descubra a máxima discrição em tecnologia auditiva com o Aparelho Auditivo NuEar IIC NW. Este modelo é completamente invisível, se encaixa profundamente no canal auditivo e desaparece de vista. Perfeito para quem busca discrição total e simplicidade, sem conectividade sem fio.",
    slug: "nu-ear-iic-invisivel-nao-sem-fio",
    brand: "NuEar (Starkey)",
    type: "IIC - Invisível no Canal",
    isFeatured: true,

    // GALERIA DE IMAGENS: (Verifique se todos estes 4 ficheiros existem em public/images/products/)
    thumbImages: [
      "/images/products/nuear/nuear-iic-invisivel-1.png",
      "/images/products/nuear/nuear-iic-invisivel-2.png",
      "/images/products/nuear/nuear-iic-invisivel-3.png",
      "/images/products/nuear/nuear-iic-invisivel-4.png",
      "/images/products/nuear/nuear-iic-invisivel-5.png",
    ],

    // ESPECIFICAÇÕES PARA COLUNA DA DIREITA
    techSpecs: {
      tecnologia: "NuEar Processamento Digital Avançado",
      conectividade: "Não Sem Fio (Non-Wireless - Foco na discrição)",
      recursos:
        "Supressão de Microfonia, Controle de Ruído Ambiental, Design 100% invisível",
    },

    // CONTEÚDO DO ACORDEÃO
    accordion: {
      informacoes: {
        title: "Informações do Produto",
        content: [
          "O NuEar IIC NW é a escolha ideal para quem prioriza a estética e a simplicidade. Focado em ser o menor e mais discreto aparelho possível, sem a complexidade de conexão com aplicativos de smartphone ou acessórios de streaming.",
          "O que significa 'NW' (Non-Wireless)? Este aparelho não possui conectividade Bluetooth, priorizando o tamanho e a discrição máxima.",
        ],
      },
      caracteristicas: {
        title: "Principais Características",
        content: [
          "Design 100% Invisível: Modelo IIC (Invisível no Canal) posicionado na segunda curva do canal auditivo.",
          "Foco na Simplicidade: Operação fácil e sem necessidade de gerenciar aplicativos.",
          "Qualidade NuEar/Starkey: Tecnologia avançada focada na clareza da fala e som natural.",
        ],
      },
    },
  },
  {
    id: 2,
    name: "Aparelho Auditivo NuEar CIC 10 NW (Starkey)",
    image: "/images/products/nuear/nuear-cic-10-nw-1.png", // PLACEHOLDER
    description:
      "Aparelho Completamente no Canal (CIC) com bateria tamanho 10, que oferece extrema discrição e um ajuste sob medida. Utiliza bateria descartável e foca na simplicidade de uso sem conectividade sem fio.",
    slug: "nuear-cic-10-nw",
    brand: "NuEar (Starkey)",
    type: "CIC - Completamente no Canal",
    isFeatured: false,
    thumbImages: [
      "/images/products/nuear/nuear-cic-10-nw-1.png",
      "/images/products/nuear/nuear-cic-10-nw-2.png",
      "/images/products/nuear/nuear-cic-10-nw-3.png",
      "/images/products/nuear/nuear-cic-10-nw-4.png",
      "/images/products/nuear/nuear-cic-10-nw-5.png",
    ],
    techSpecs: {
      tecnologia: "NuEar Processamento Digital",
      conectividade: "Não Sem Fio (Non-Wireless)",
      recursos: "Utiliza Bateria 10, Design Discreto, Controle de Ruído",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto",
        content: [
          "O CIC 10 é um dos menores modelos disponíveis, ideal para perdas auditivas leves a moderadas que priorizam a estética.",
          "Feito sob medida para um conforto e ajuste seguro.",
        ],
      },
      caracteristicas: {
        title: "Principais Características",
        content: [
          "Discreto e Personalizado: Fica dentro do canal auditivo, quase invisível.",
          "Simplicidade: Operação fácil sem a complexidade de aplicativos ou streaming.",
          "Bateria 10: Usa a menor bateria descartável disponível, otimizando o tamanho.",
        ],
      },
    },
  },
  {
    id: 3,
    name: "Aparelho Auditivo ITC R NuEar NXG AI | Discreto, Inteligente e Recarregável",
    image: "/images/products/nuear/nuear-itc-r-nxg-ai-1.png", // PLACEHOLDER
    description:
      "Modelo Intra-Canal (ITC) recarregável e discreto com a avançada Inteligência Artificial (AI) da linha NXG. Oferece alta performance, conectividade sem fio e monitoramento de bem-estar.",
    slug: "nuear-itc-r-nxg-ai",
    brand: "NuEar (Starkey)",
    type: "ITC - No Canal (Recarregável)",
    isFeatured: true,
    thumbImages: [
      "/images/products/nuear/nuear-itc-r-nxg-ai-1.png",
      "/images/products/nuear/nuear-itc-r-nxg-ai-2.png",
      "/images/products/nuear/nuear-itc-r-nxg-ai-3.png",
      "/images/products/nuear/nuear-itc-r-nxg-ai-4.png",
      "/images/products/nuear/nuear-itc-r-nxg-ai-5.png",
    ],
    techSpecs: {
      tecnologia: "NXG AI (Inteligência Artificial Starkey)",
      conectividade: "Bluetooth (Streaming e App My Starkey)",
      recursos: "Recarregável (R), Monitoramento de Saúde, Edge Mode+",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto",
        content: [
          "O ITC R NXG AI combina a discrição do design intra-auricular com a conveniência de uma bateria de íon-lítio recarregável de longa duração.",
          "A tecnologia AI imita o cérebro, processando sons para uma audição mais natural e reduzindo o esforço de escuta.",
        ],
      },
      caracteristicas: {
        title: "Principais Características",
        content: [
          "Inteligência Artificial: Otimiza o som automaticamente em ambientes complexos.",
          "Recarregável: Bateria de longa duração para o dia todo.",
          "Monitoramento de Bem-Estar: Monitora atividades físicas e engajamento social (via app).",
        ],
      },
    },
  },
  {
    id: 4,
    name: "Aparelho Auditivo ITE R NuEar NXG AI | Potente, Recarregável e Fácil de Manusear",
    image: "/images/products/nuear/nuear-ite-r-nxg-ai-1.png", // PLACEHOLDER
    description:
      "Modelo No Pavilhão (ITE) recarregável da linha NXG AI. Oferece maior potência e facilidade de manuseio devido ao seu tamanho ligeiramente maior, ideal para perdas auditivas moderadas a severas.",
    slug: "nuear-ite-r-nxg-ai",
    brand: "NuEar (Starkey)",
    type: "ITE - No Pavilhão (Recarregável)",
    isFeatured: false,
    thumbImages: [
      "/images/products/nuear/nuear-ite-r-nxg-ai-1.png",
      "/images/products/nuear/nuear-ite-r-nxg-ai-2.png",
      "/images/products/nuear/nuear-ite-r-nxg-ai-3.png",
      "/images/products/nuear/nuear-ite-r-nxg-ai-4.png",
      "/images/products/nuear/nuear-ite-r-nxg-ai-5.png",
    ],
    techSpecs: {
      tecnologia: "NXG AI (Inteligência Artificial Starkey)",
      conectividade: "Bluetooth (Streaming e App My Starkey)",
      recursos: "Recarregável (R), Maior Potência, Fácil de Manusear",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto",
        content: [
          "O ITE R é um modelo personalizado que preenche parte do pavilhão auditivo, proporcionando mais espaço para um alto-falante potente e uma bateria recarregável robusta.",
          "Perfeito para usuários que precisam de mais força sonora e valorizam a facilidade de inserção e remoção.",
        ],
      },
      caracteristicas: {
        title: "Principais Características",
        content: [
          "Potência Elevada: Indicado para perdas auditivas que requerem maior amplificação.",
          "Conforto e Manuseio: Design que facilita o uso diário, especialmente para quem tem problemas de destreza.",
          "Inteligência Artificial: Som adaptativo e personalizado em tempo real.",
        ],
      },
    },
  },
  {
    id: 5,
    name: "Aparelho Auditivo mRIC R NuEar NXG AI | Mini, Recarregável e Inteligente",
    image: "/images/products/nuear/nuear-mric-r-nxg-ai-1.png", // PLACEHOLDER
    description:
      "Aparelho Mini Receptor no Canal (mRIC) recarregável e altamente discreto. Combina a conveniência da recarregabilidade com a potência da Inteligência Artificial da NuEar NXG.",
    slug: "nuear-mric-r-nxg-ai",
    brand: "NuEar (Starkey)",
    type: "mRIC - Mini Receptor no Canal (Recarregável)",
    isFeatured: true,
    thumbImages: [
      "/images/products/nuear/nuear-mric-r-nxg-ai-1.png",
      "/images/products/nuear/nuear-mric-r-nxg-ai-2.png",
      "/images/products/nuear/nuear-mric-r-nxg-ai-3.png",
      "/images/products/nuear/nuear-mric-r-nxg-ai-4.png",
      "/images/products/nuear/nuear-mric-r-nxg-ai-5.png",
      "/images/products/nuear/nuear-mric-r-nxg-ai-6.png",
    ],
    techSpecs: {
      tecnologia: "NXG AI (Inteligência Artificial Starkey)",
      conectividade: "Bluetooth (Streaming e App My Starkey)",
      recursos: "Recarregável (R), Design Mini, IP68 (Resistente à Água)",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto",
        content: [
          "O mRIC R é o modelo Receiver-in-Canal mais compacto, ficando discretamente atrás da orelha, conectado ao canal por um tubo fino.",
          "É ideal para usuários que querem um aparelho quase invisível com a funcionalidade completa da conectividade e recarregabilidade.",
        ],
      },
      caracteristicas: {
        title: "Principais Características",
        content: [
          "Mini Design RIC: Extremamente discreto e leve.",
          "Recarga Rápida: Oferece energia para o dia todo com uma única carga.",
          "Inteligência Artificial: Som otimizado para o ambiente e acompanhamento de saúde.",
        ],
      },
    },
  },
  {
    id: 6,
    name: "Aparelho Auditivo RIC RT NuEar NXG AI | Recarregável com Bobina Telefônica",
    image: "/images/products/nuear/nuear-ric-rt-nxg-ai-1.png", // PLACEHOLDER
    description:
      "Modelo Receptor no Canal (RIC) recarregável com bobina telefônica (T) da linha NXG AI. Combina a potência e a conectividade com a funcionalidade da bobina para ambientes públicos.",
    slug: "nuear-ric-rt-nxg-ai",
    brand: "NuEar (Starkey)",
    type: "RIC - Receptor no Canal (Recarregável/Bobina)",
    isFeatured: false,
    thumbImages: [
      "/images/products/nuear/nuear-ric-rt-nxg-ai-1.png",
      "/images/products/nuear/nuear-ric-rt-nxg-ai-2.png",
      "/images/products/nuear/nuear-ric-rt-nxg-ai-3.png",
      "/images/products/nuear/nuear-ric-rt-nxg-ai-4.png",
      "/images/products/nuear/nuear-ric-rt-nxg-ai-5.png",
    ],
    techSpecs: {
      tecnologia: "NXG AI (Inteligência Artificial Starkey)",
      conectividade: "Bluetooth (Streaming) e Bobina Telefônica (T)",
      recursos:
        "Recarregável (R), Bobina Telefônica, Ajustes Remotos (TeleHear)",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto",
        content: [
          "O RIC RT é um modelo completo, ideal para usuários com estilo de vida ativo que se beneficiam tanto da conectividade Bluetooth quanto da bobina telefônica (T-Coil) em teatros, igrejas e locais públicos equipados com sistemas de loop.",
          "A bobina telefônica capta sinais magnéticos, oferecendo um som claro diretamente no aparelho, eliminando ruído de fundo.",
        ],
      },
      caracteristicas: {
        title: "Principais Características",
        content: [
          "Bobina Telefônica: Melhora a escuta em locais públicos com sistema de loop.",
          "Recarregável e Potente: Bateria de íon-lítio de longa duração.",
          "Inteligência Artificial: Processamento sonoro que se adapta ao seu ambiente.",
        ],
      },
    },
  },

  // --- NOVO PRODUTO REXTON ---
  {
    id: 7,
    name: "Rexton BICORE SLIM RIC | Design Fino, Recarregável e Conectado",
    image: "/images/products/rexton/rexton-bicore-slim-ric-1.png", // PLACEHOLDER: CRIE ESTE FICHEIRO!
    description:
      "O BiCore Slim RIC da Rexton combina um design elegante e fino (Slim) com a avançada plataforma BiCore, focada em clareza de fala superior e excelente conectividade. É recarregável, discreto e durável.",
    slug: "rexton-bicore-slim-ric",
    brand: "Rexton",
    type: "Slim RIC - Receptor no Canal Fino (Recarregável)",
    isFeatured: true,
    thumbImages: [
      "/images/products/rexton/rexton-bicore-slim-ric-1.png",
      "/images/products/rexton/rexton-bicore-slim-ric-2.png",
      "/images/products/rexton/rexton-bicore-slim-ric-3.png",
    ],
    techSpecs: {
      tecnologia: "Processamento BiCore (Augmented Xperience)",
      conectividade: "Bluetooth (Streaming Direto iOS e Android), App Rexton",
      recursos:
        "Design Slim, Recarregável (até 20h), Speech Preservation Technology",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto Rexton BiCore Slim RIC",
        content: [
          "O BiCore Slim RIC é ideal para quem busca um aparelho poderoso, mas que se encaixe de forma discreta e moderna, como um fone de ouvido de última geração.",
          "A tecnologia BiCore processa a fala e o ruído separadamente, garantindo que o som da sua voz seja natural (My Voice 2.0) e a fala dos outros seja nítida, mesmo em ambientes desafiadores.",
        ],
      },
      caracteristicas: {
        title: "Principais Características",
        content: [
          "Design Slim Elegante: Formato fino e ergonômico que se encaixa confortavelmente atrás da orelha.",
          "Recarregabilidade: Bateria de íon-lítio com autonomia de até 20 horas (sem streaming) ou 17 horas (com 5h de streaming).",
          "Conectividade Universal: Streaming de áudio direto de smartphones iOS e Android.",
          "Tecnologia Speech Preservation: Enfatiza os sons da fala, removendo ruídos indesejados para foco total na conversa.",
        ],
      },
    },
  },
  {
    id: 8,
    name: "Rexton REACH IX-CIC LI | Invisível, Recarregável e Potente",
    image: "/images/products/rexton/rexton-reach-ix-cic-li-1.png", // PLACEHOLDER
    description:
      "O Rexton Reach iX CIC-Li é um aparelho completamente no canal (CIC) recarregável (Li). Combina discrição máxima com alta potência e a tecnologia Rexton Reach iX para um som claro e conectado.",
    slug: "rexton-reach-ix-cic-li",
    brand: "Rexton",
    type: "CIC - Completamente no Canal (Recarregável)",
    isFeatured: true,
    thumbImages: [
      "/images/products/rexton/rexton-reach-ix-cic-li-1.png",
      "/images/products/rexton/rexton-reach-ix-cic-li-2.png",
      "/images/products/rexton/rexton-reach-ix-cic-li-3.png",
      "/images/products/rexton/rexton-reach-ix-cic-li-4.png",
      "/images/products/rexton/rexton-reach-ix-cic-li-5.png",
    ],
    techSpecs: {
      tecnologia: "Reach iX Plataforma Rexton",
      conectividade: "Bluetooth (Via App/Acessórios), Ajustes Remotos",
      recursos:
        "Recarregável Li-ion, Design CIC, Estabilizador de Voz e Som Ambiente",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto Rexton",
        content: [
          "O CIC-Li é um dos poucos aparelhos intra-auriculares completamente recarregáveis, oferecendo a discrição de um CIC com a conveniência de não precisar trocar a bateria.",
          "A plataforma Reach iX utiliza o processamento de som para oferecer clareza da fala e uma gestão de ruído eficiente.",
        ],
      },
      caracteristicas: {
        title: "Principais Características Rexton",
        content: [
          "Invisível e Recarregável: Combinação ideal de discrição CIC com bateria de íon-lítio.",
          "Tecnologia Rexton Reach iX: Oferece som natural e focado na fala.",
          "Carregador Portátil: Permite cargas rápidas e extras sem a necessidade de tomada.",
        ],
      },
    },
  },
  {
    id: 9,
    name: "Sonic Radiant | Tecnologia Radian para Som Natural e Conectado",
    image: "/images/products/sonic/sonic-radiant-1.png", // PLACEHOLDER
    description:
      "A linha Sonic Radiant utiliza a tecnologia Radian para processar o som com foco na clareza, proporcionando uma audição mais natural e com alta capacidade de streaming direto (iOS e Android).",
    slug: "sonic-radiant",
    brand: "Sonic",
    type: "RIC (Receptor no Canal)",
    isFeatured: true,
    thumbImages: ["/images/products/sonic/sonic-radiant-1.png"],
    techSpecs: {
      tecnologia: "Plataforma Radian",
      conectividade: "Streaming Direto (iOS e Android), Controle via App",
      recursos:
        "Otimizador de Fala, Gerenciamento de Ruído, Opção Recarregável",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto Sonic",
        content: [
          "A Sonic Radiant é projetada para responder rapidamente, localizando e filtrando sons de qualquer lugar ao seu redor para facilitar a escuta, reduzindo o esforço do cérebro.",
          "Disponível em modelos a pilha e recarregáveis (miniRITE T R).",
        ],
      },
      caracteristicas: {
        title: "Principais Características Sonic",
        content: [
          "Processamento Radian: Foco em som natural e excelente clareza de fala.",
          "Conectividade Universal: Streaming direto para a maioria dos smartphones.",
          "Design Compacto: Disponível em um formato RIC discreto e moderno.",
        ],
      },
    },
  },
  {
    id: 10,
    name: "Argosy Modelo V (Vista V) | Tecnologia Automática e Bluetooth",
    image: "/images/products/argosy/argosy-vista-v-1.png", // PLACEHOLDER
    description:
      "A linha Argosy Vista V se ajusta automaticamente ao ambiente sonoro em tempo real. Oferece tecnologia de ponta para aprimorar os sons desejados e minimizar o ruído de fundo, com conectividade direta via Bluetooth.",
    slug: "argosy-modelo-v",
    brand: "Argosy",
    type: "RIC (Receptor no Canal) e BTE (Retroauricular)",
    isFeatured: false,
    thumbImages: ["/images/products/argosy/argosy-vista-v-1.png"],
    techSpecs: {
      tecnologia: "Plataforma Vista V",
      conectividade: "Bluetooth (Conectividade Direta)",
      recursos:
        "Ajuste Automático do Ambiente, Gerenciamento de Ruído Avançado, Opções Recarregáveis",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto Argosy",
        content: [
          "O Vista V permite que os usuários permaneçam confortavelmente nas conversas em diversos ambientes de escuta, com menos esforço auditivo.",
          "Sua capacidade de adaptação garante uma transição suave entre ambientes silenciosos e ruidosos.",
        ],
      },
      caracteristicas: {
        title: "Principais Características Argosy",
        content: [
          "Adaptação Automática: Se ajusta ao ambiente sem intervenção manual do usuário.",
          "Conectividade Direta: Streaming de áudio e chamadas telefônicas.",
          "Qualidade Sonora Superior: Foco na clareza em situações desafiadoras.",
        ],
      },
    },
  },
  {
    id: 11,
    name: "Danavox Boreal | Clareza e Conectividade para o Dia a Dia",
    image: "/images/products/danavox/danavox-boreal-1.png", // PLACEHOLDER
    description:
      "O Danavox Boreal é um aparelho auditivo com tecnologia avançada de redução de ruído (GN), projetado para máxima clareza da fala e adaptabilidade automática. Oferece conectividade sem fio superior e bateria recarregável opcional.",
    slug: "danavox-boreal",
    brand: "Danavox",
    type: "RIE (Receptor no Ouvido) e BTE (Retroauricular)",
    isFeatured: true,
    thumbImages: ["/images/products/danavox/danavox-boreal-1.png"],
    techSpecs: {
      tecnologia: "Tecnologia Boreal (GN)",
      conectividade: "Conectividade Sem Fio Direta (Smartphones)",
      recursos:
        "Redução de Ruído Avançada, Adaptabilidade Automática, Recarregável Opcional",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto Danavox",
        content: [
          "O Boreal se destaca por sua capacidade de filtrar ruídos indesejados, melhorando a qualidade do som, especialmente em ambientes complexos.",
          "Parte da família GN, oferece soluções robustas e confiáveis para diversos graus de perda auditiva.",
        ],
      },
      caracteristicas: {
        title: "Principais Características Danavox",
        content: [
          "Tecnologia de Redução de Ruído: Foco total na compreensão da fala.",
          "Adaptabilidade: Ajusta o aparelho em tempo real às condições ambientais.",
          "Conectividade: Streaming de áudio e chamadas telefônicas diretas para os aparelhos.",
        ],
      },
    },
  },
  {
    id: 12,
    name: "Oticon More | Ouvir com o Cérebro com Deep Neural Network (DNN)",
    image: "/images/products/oticon/oticon-more.png", // PLACEHOLDER
    description:
      "O Oticon More é um aparelho auditivo revolucionário que usa a Deep Neural Network (DNN) para auxiliar o cérebro a processar e organizar sons do mundo real, oferecendo uma experiência sonora mais completa e natural. É recarregável (MiniRITE R).",
    slug: "oticon-more",
    brand: "Oticon",
    type: "MiniRITE R (Recarregável)",
    isFeatured: true,
    thumbImages: ["/images/products/oticon/oticon-more.png"],
    techSpecs: {
      tecnologia: "Deep Neural Network (DNN), MoreSound Intelligence",
      conectividade:
        "Bluetooth (Transmissão Direta iOS/Android), Bobina de Indução",
      recursos: "Recarregável Li-ion, IP68, Botão Duplo de Controle",
    },
    accordion: {
      informacoes: {
        title: "Informações do Produto Oticon",
        content: [
          "Treinado com 12 milhões de cenas sonoras do mundo real, o Oticon More equilibra o ambiente sonoro, permitindo que o cérebro acesse mais informações importantes com menos esforço, resultando em menos fadiga mental.",
          "Focado na redução do esforço de escuta e na melhoria da compreensão da fala.",
        ],
      },
      caracteristicas: {
        title: "Principais Características Oticon",
        content: [
          "Tecnologia DNN: Processamento de som de última geração que imita a forma como o cérebro ouve.",
          "Recarregável: Bateria de íon-lítio de longa duração.",
          "Conectividade Completa: Streaming direto e bobina de indução integrada (em algumas variantes).",
        ],
      },
    },
  },
];
