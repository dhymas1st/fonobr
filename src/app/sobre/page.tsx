// src/app/sobre/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link"; // Caso precise de links internos

// Metadados específicos para a página /sobre para SEO
export const metadata: Metadata = {
  title: "Sobre Nós - Fonomax Audição | Nossa Missão e Valores",
  description:
    "Conheça a Fonomax Audição, nossa história, missão de conectar pessoas com o mundo dos sons e o compromisso com a excelência no atendimento e tecnologia em aparelhos auditivos.",
  keywords: [
    "sobre nós",
    "Fonomax Audição",
    "missão",
    "valores",
    "equipe",
    "história",
    "aparelhos auditivos São Paulo",
  ],
  openGraph: {
    title: "Sobre a Fonomax Audição",
    description:
      "Nossa história de dedicação à saúde auditiva e compromisso com a sua audição em São Paulo.",
    url: "https://www.fonomax.com.br/sobre", // Atualize com a URL real do seu site
    siteName: "Fonomax Audição",
    images: [
      {
        url: "/images/sobre-nos-og.jpg", // **Crie esta imagem em public/images/sobre-nos-og.jpg**
        width: 1200,
        height: 630,
        alt: "Fonomax Audição - Nossa Equipe",
      },
    ],
    type: "website",
  },
};

export default function SobreNosPage() {
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      {/* Contêiner principal da página com max-w-7xl */}
      <div className="container mx-auto max-w-7xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Conheça a Fonomax Audição
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Desde 20XX, a Fonomax Audição tem se dedicado a transformar vidas
          através da excelência em soluções auditivas.
        </p>

        {/* Seção de Missão e Visão */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
          <div className="md:w-1/2">
            <Image
              src="/images/missao-visao.jpg" // **Crie esta imagem em public/images/missao-visao.jpg**
              alt="Pessoas colaborando e com tecnologia"
              width={600} // Ajuste conforme a imagem real
              height={400} // Ajuste conforme a imagem real
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority // Se for uma imagem acima da dobra
            />
          </div>
          <div className="md:w-1/2 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossa Missão
            </h2>
            <p className="mb-6">
              Nossa missão na Fonomax Audição é **reabilitar a conexão das
              pessoas com o mundo dos sons**, proporcionando não apenas soluções
              auditivas de ponta, mas também um atendimento humanizado e suporte
              contínuo que transformam a qualidade de vida de nossos clientes.
              Acreditamos que ouvir bem é essencial para viver plenamente.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossa Visão
            </h2>
            <p>
              Ser reconhecida como a principal referência em saúde auditiva no
              Estado de São Paulo, inovando constantemente e democratizando o
              acesso a aparelhos auditivos de alta tecnologia e serviços
              especializados.
            </p>
          </div>
        </div>

        {/* Seção de Valores */}
        <div className="bg-blue-100 p-8 rounded-lg shadow-inner text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-blue-700">
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">🤝</span>{" "}
              {/* Placeholder para ícone */}
              <h3 className="text-xl font-semibold mb-2">Comprometimento</h3>
              <p className="text-sm">Com a sua saúde auditiva e bem-estar.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">💡</span>{" "}
              {/* Placeholder para ícone */}
              <h3 className="text-xl font-semibold mb-2">Inovação</h3>
              <p className="text-sm">
                Buscando sempre as melhores tecnologias do mercado.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">❤️</span>{" "}
              {/* Placeholder para ícone */}
              <h3 className="text-xl font-semibold mb-2">Humanização</h3>
              <p className="text-sm">Atendimento empático e personalizado.</p>
            </div>
          </div>
        </div>

        {/* Chamada para Ação Final */}
        <div className="text-center py-12 bg-blue-700 text-white rounded-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Recomeçar a Ouvir?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Agende uma avaliação gratuita com nossos especialistas e dê o
            primeiro passo para uma vida sonora mais rica.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Agende Sua Consulta
          </Link>
        </div>
      </div>
    </div>
  );
}
