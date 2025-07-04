// src/app/termos-de-uso/page.tsx
import type { Metadata } from "next";

// Metadados específicos para a página /termos-de-uso para SEO
export const metadata: Metadata = {
  title: "Termos de Uso | Fonomax Audição",
  description:
    "Leia os termos de uso e condições para utilização do site e serviços da Fonomax Audição.",
  keywords: [
    "termos de uso",
    "condições",
    "regras",
    "site",
    "serviços",
    "Fonomax Audição",
  ],
  openGraph: {
    title: "Termos de Uso | Fonomax Audição",
    description: "Navegue pelas condições de uso do nosso site.",
    url: "https://www.fonomax.com.br/termos-de-uso", // Atualize com a URL real do seu site
    siteName: "Fonomax Audição",
    images: [
      {
        url: "/images/termos-og.jpg", // **Crie esta imagem em public/images/termos-og.jpg**
        width: 1200,
        height: 630,
        alt: "Termos de Uso Fonomax Audição",
      },
    ],
    type: "website",
  },
};

export default function TermosDeUsoPage() {
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      {/* Seção de Título da Página */}
      <section className="py-12 bg-blue-700 text-white text-center">
        <div className="container mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Termos de Uso</h1>
          <p className="text-lg md:text-xl">
            Última atualização: 20 de Junho de 2025
          </p>
        </div>
      </section>

      {/* Conteúdo dos Termos de Uso */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6 text-gray-700 leading-relaxed text-base md:text-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            1. Aceitação dos Termos
          </h2>
          <p className="mb-4">
            Ao acessar e usar o website da Fonomax Audição "o Site", você
            concorda em cumprir e estar vinculado a estes Termos de Uso e a
            todas as leis e regulamentos aplicáveis. Se você não concordar com
            estes termos, por favor, não utilize o Site.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            2. Modificações dos Termos
          </h2>
          <p className="mb-4">
            A Fonomax Audição reserva-se o direito de revisar e alterar estes
            Termos de Uso a qualquer momento, sem aviso prévio. Ao usar este
            Site, você concorda em ficar vinculado à versão atual destes Termos
            de Uso. É sua responsabilidade verificar periodicamente as
            modificações.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            3. Uso do Site
          </h2>
          <p className="mb-4">
            Você concorda em usar o Site apenas para fins lícitos e de maneira
            que não infrinja os direitos de, nem restrinja ou iniba o uso e o
            desfrute do Site por terceiros. Comportamentos proibidos incluem
            assediar ou causar aflição ou inconveniência a qualquer pessoa,
            transmitir conteúdo obsceno ou ofensivo ou interromper o fluxo
            normal de diálogo dentro do Site.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Você não deve usar o Site de forma a causar, ou que possa causar,
              danos ao Site ou desvalorização do desempenho, disponibilidade ou
              acessibilidade do Site.
            </li>
            <li>
              Você não deve usar o Site de forma ilícita, ilegal, fraudulenta ou
              prejudicial, ou em conexão com qualquer finalidade ou atividade
              ilícita, ilegal, fraudulenta ou prejudicial.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            4. Propriedade Intelectual
          </h2>
          <p className="mb-4">
            Todo o conteúdo presente no Site, incluindo, mas não se limitando a
            textos, gráficos, logotipos, ícones, imagens, clipes de áudio,
            downloads digitais, compilações de dados e software, é propriedade
            da Fonomax Audição ou de seus provedores de conteúdo e é protegido
            pelas leis de direitos autorais internacionais.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            5. Isenção de Responsabilidade
          </h2>
          <p className="mb-4">
            As informações neste Site são fornecidas "como estão" e "conforme
            disponíveis". A Fonomax Audição não faz representações ou garantias
            de qualquer tipo, expressas ou implícitas, quanto à operação deste
            Site ou às informações, conteúdo, materiais ou produtos incluídos
            neste Site.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            6. Limitação de Responsabilidade
          </h2>
          <p className="mb-4">
            A Fonomax Audição não será responsável por quaisquer danos de
            qualquer tipo decorrentes do uso deste Site, incluindo, mas não se
            limitando a danos diretos, indiretos, incidentais, punitivos e
            consequenciais.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            7. Links para Sites de Terceiros
          </h2>
          <p className="mb-4">
            Este Site pode conter links para sites de terceiros que não são de
            propriedade ou controlados pela Fonomax Audição. Não temos controle
            sobre e não assumimos responsabilidade pelo conteúdo, políticas de
            privacidade ou práticas de quaisquer sites de terceiros.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            8. Legislação Aplicável
          </h2>
          <p className="mb-4">
            Estes Termos de Uso serão regidos e interpretados de acordo com as
            leis da República Federativa do Brasil, sem levar em consideração
            seus conflitos de disposições legais.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            9. Contato
          </h2>
          <p className="mb-4">
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em
            contato conosco através do nosso formulário ou pelo e-mail:{" "}
            <a
              href="mailto:contato@fonomax.com.br"
              className="text-blue-600 hover:underline"
            >
              suporte@fonobr.com.br
            </a>
            .
          </p>
          <p className="mt-8 text-sm text-gray-500">
            FonoBR, 2025. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </div>
  );
}
