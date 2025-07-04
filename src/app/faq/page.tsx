// src/app/faq/page.tsx
import type { Metadata } from "next";
import AccordionItem from "@/app/components/ui/AccordionItem"; // Importa o componente de acordeão
import Link from "next/link";

// Dados das Perguntas Frequentes
const faqs = [
  {
    question: "O que é perda auditiva e quais são os sinais?",
    answer:
      "A perda auditiva é a diminuição da capacidade de ouvir sons. Os sinais comuns incluem dificuldade em entender conversas em ambientes ruidosos, pedir para as pessoas repetirem o que disseram, aumentar o volume da TV ou rádio excessivamente, e zumbido nos ouvidos.",
  },
  {
    question: "Como escolher o aparelho auditivo ideal para mim?",
    answer:
      "A escolha ideal depende do tipo e grau da sua perda auditiva, do seu estilo de vida, das suas preferências estéticas e do seu orçamento. Nossos fonoaudiólogos especializados podem realizar uma avaliação e indicar as melhores opções personalizadas para você.",
  },
  {
    question: "Os aparelhos auditivos são muito visíveis?",
    answer:
      "Atualmente, existem modelos de aparelhos auditivos extremamente discretos e até invisíveis (intra-auriculares), que se encaixam completamente dentro do canal auditivo. Também há modelos retroauriculares modernos e compactos, disponíveis em diversas cores para combinar com a pele ou cabelo.",
  },
  {
    question: "Quanto custa um aparelho auditivo?",
    answer:
      "O preço de um aparelho auditivo varia amplamente de acordo com a tecnologia, os recursos (como conectividade Bluetooth, inteligência artificial), o modelo e a marca. Oferecemos opções para diversos orçamentos, e você pode entrar em contato para solicitar um orçamento personalizado sem compromisso.",
  },
  {
    question: "Qual o tempo de duração da bateria de um aparelho auditivo?",
    answer:
      "A duração da bateria depende do tipo de aparelho. Aparelhos recarregáveis geralmente duram um dia inteiro de uso com uma única carga. Aparelhos com bateria descartável podem durar de 3 a 10 dias, dependendo do tamanho da bateria e do uso do aparelho.",
  },
  {
    question: "É necessário fazer manutenção no aparelho auditivo?",
    answer:
      "Sim, a manutenção regular é essencial para o bom funcionamento e a longevidade do seu aparelho. Isso inclui limpeza diária, troca de filtros (se aplicável), e visitas periódicas ao fonoaudiólogo para ajustes e revisões. Oferecemos kits de limpeza e suporte completo de manutenção.",
  },
];

// Metadados específicos para a página /faq para SEO
export const metadata: Metadata = {
  title: "Perguntas Frequentes (FAQ) - Aparelhos Auditivos | Fonomax Audição",
  description:
    "Encontre respostas para as perguntas mais frequentes sobre perda auditiva, aparelhos auditivos, escolha, manutenção e serviços da Fonomax Audição.",
  keywords: [
    "FAQ",
    "perguntas frequentes",
    "aparelho auditivo dúvidas",
    "saúde auditiva perguntas",
    "perda auditiva causas",
    "aparelho auditivo preço",
    "manutenção aparelho auditivo",
  ],
  openGraph: {
    title: "FAQ | Fonomax Audição",
    description:
      "Tire suas dúvidas sobre aparelhos auditivos e serviços Fonomax.",
    url: "https://www.fonomax.com.br/faq", // Atualize com a URL real do seu site
    siteName: "Fonomax Audição",
    images: [
      {
        url: "/images/faq-og.jpg", // **Crie esta imagem em public/images/faq-og.jpg**
        width: 1200,
        height: 630,
        alt: "Perguntas Frequentes Fonomax Audição",
      },
    ],
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      {/* Contêiner principal da página com max-w-7xl */}
      <div className="container mx-auto max-w-7xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Perguntas Frequentes (FAQ)
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Encontre respostas para as dúvidas mais comuns sobre aparelhos
          auditivos, perda auditiva e os serviços oferecidos pela Fonomax
          Audição.
        </p>

        {/* Lista de Acordeões */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              // defaultOpen={index === 0} // Opcional: abre o primeiro item por padrão
            />
          ))}
        </div>

        {/* Chamada para ação caso a dúvida não seja respondida */}
        <div className="text-center py-12 bg-blue-100 text-blue-800 rounded-lg shadow-md mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para ajudar. Entre em
            contato conosco!
          </p>
          <Link
            href="/contato"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Fale com um Especialista
          </Link>
        </div>
      </div>
    </div>
  );
}
