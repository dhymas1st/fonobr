// src/data/heroSlides.ts
import { HeroSlide } from "@/lib/types"; // Importa a interface HeroSlide

export const heroSlidesData: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero-bg.jpg", // Certifique-se que esta imagem existe em public/images/
    preTitle: "Bem-vindo ao Futuro da Audição",
    title: "Sua Conexão com o Mundo, Renovada.",
    description:
      "Descubra a liberdade de ouvir com clareza. Oferecemos as mais avançadas soluções em aparelhos auditivos, com tecnologia e suporte personalizados para você em São Paulo.",
    ctaButtonText: "Conheça Nossos Aparelhos",
    ctaButtonLink: "/aparelhos",
    secondaryButtonText: "Agende uma Consulta",
    secondaryButtonLink: "/contato",
  },
  /*{
    id: 2,
    image: "/images/hero-bg.jpg", // Pode usar imagens diferentes aqui se tiver
    preTitle: "Tecnologia que Transforma",
    title: "Experiências Sonoras Inesquecíveis.",
    description:
      "Dos modelos mais discretos aos mais potentes, nossos aparelhos auditivos são cuidadosamente selecionados para proporcionar a melhor qualidade de som e conforto, adaptados ao seu estilo de vida.",
    ctaButtonText: "Explore os Modelos",
    ctaButtonLink: "/aparelhos",
    secondaryButtonText: "Como Escolher?",
    secondaryButtonLink: "/blog/como-escolher-aparelho-auditivo",
  },
  {
    id: 3,
    image: "/images/hero-bg.jpg", // Pode usar imagens diferentes aqui se tiver
    preTitle: "Cuidado e Suporte Contínuos",
    title: "Sua Jornada Auditiva Acompanhada.",
    description:
      "Nossa equipa de fonoaudiólogos especializados em São Paulo está pronta para oferecer um atendimento humanizado, desde a avaliação inicial até o suporte pós-venda, garantindo sua plena satisfação.",
    ctaButtonText: "Fale com um Especialista",
    ctaButtonLink: "/contato",
    secondaryButtonText: "Sobre Nossa Equipa",
    secondaryButtonLink: "/sobre",
  },*/
];
