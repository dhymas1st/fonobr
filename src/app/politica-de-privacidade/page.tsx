// src/app/politica-de-privacidade/page.tsx
import type { Metadata } from "next";

// Metadados específicos para a página /politica-de-privacidade para SEO
export const metadata: Metadata = {
  title: "Política de Privacidade | Fonomax Audição",
  description:
    "Leia a política de privacidade da Fonomax Audição e entenda como seus dados pessoais são coletados, usados e protegidos.",
  keywords: [
    "política de privacidade",
    "LGPD",
    "dados pessoais",
    "privacidade",
    "Fonomax Audição",
    "cookies",
  ],
  openGraph: {
    title: "Política de Privacidade | Fonomax Audição",
    description: "Entenda como protegemos seus dados pessoais.",
    url: "https://www.fonomax.com.br/politica-de-privacidade", // Atualize com a URL real do seu site
    siteName: "Fonomax Audição",
    images: [
      {
        url: "/images/privacidade-og.jpg", // **Crie esta imagem em public/images/privacidade-og.jpg**
        width: 1200,
        height: 630,
        alt: "Política de Privacidade Fonomax Audição",
      },
    ],
    type: "website",
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      {/* Seção de Título da Página */}
      <section className="py-12 bg-blue-700 text-white text-center">
        <div className="container mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Política de Privacidade
          </h1>
          <p className="text-lg md:text-xl">
            Última atualização: 20 de Junho de 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6 text-gray-700 leading-relaxed text-base md:text-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            1. Introdução
          </h2>
          <p className="mb-4">
            A FonoBR está comprometida em proteger a privacidade e os dados
            pessoais de nossos usuários. Esta Política de Privacidade descreve
            como coletamos, usamos e compartilhamos suas informações pessoais
            quando você visita nosso site www.fonobr.com.br.
          </p>
          <p className="mb-4">
            Ao utilizar nosso site e serviços, você concorda com a coleta e uso
            de informações de acordo com esta política.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            2. Coleta de Informações Pessoais
          </h2>
          <p className="mb-4">
            Coletamos diversos tipos de informações para várias finalidades, a
            fim de fornecer e melhorar nosso serviço para você.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-6">
            2.1. Dados Pessoais
          </h3>
          <p className="mb-4">
            Ao utilizar nosso Serviço, podemos solicitar que você nos forneça
            certas informações de identificação pessoal que podem ser usadas
            para contatá-lo ou identificá-lo. As informações de identificação
            pessoal podem incluir, mas não estão limitadas a:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Nome e Sobrenome</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Endereço, Estado, Província, CEP, Cidade</li>
            <li>Dados de uso</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-6">
            2.2. Dados de Uso
          </h3>
          <p className="mb-4">
            Também podemos coletar informações sobre como o Serviço é acessado e
            usado "Dados de Uso". Esses Dados de Uso podem incluir informações
            como o endereço de protocolo de internet do seu computador por
            exemplo, endereço IP, tipo de navegador, versão do navegador, as
            páginas do nosso Serviço que você visita, a hora e a data da sua
            visita, o tempo gasto nessas páginas, identificadores exclusivos de
            dispositivo e outros dados de diagnóstico.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-6">
            2.3. Rastreamento de Cookies e Dados
          </h3>
          <p className="mb-4">
            Utilizamos cookies e tecnologias de rastreamento semelhantes para
            rastrear a atividade em nosso Serviço e manter certas informações.
            Cookies são arquivos com pequena quantidade de dados que podem
            incluir um identificador exclusivo anônimo. Os cookies são enviados
            para o seu navegador de um site e armazenados no seu dispositivo. As
            tecnologias de rastreamento também usadas são beacons, tags e
            scripts para coletar e rastrear informações e para melhorar e
            analisar nosso Serviço.
          </p>
          <p className="mb-4">
            Você pode instruir seu navegador a recusar todos os cookies ou a
            indicar quando um cookie está sendo enviado. No entanto, se você não
            aceitar cookies, talvez não consiga usar algumas partes do nosso
            Serviço.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            3. Uso de Dados
          </h2>
          <p className="mb-4">
            A Fonomax Audição usa os dados coletados para diversas finalidades:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Para fornecer e manter nosso Serviço</li>
            <li>Para notificá-lo sobre alterações em nosso Serviço</li>
            <li>
              Para permitir que você participe de recursos interativos de nosso
              Serviço quando optar por fazê-lo
            </li>
            <li>Para fornecer suporte ao cliente</li>
            <li>
              Para coletar análises ou informações valiosas para que possamos
              melhorar nosso Serviço
            </li>
            <li>Para monitorar o uso do nosso Serviço</li>
            <li>Para detectar, prevenir e resolver problemas técnicos</li>
            <li>
              Para contatá-lo com newsletters, materiais de marketing ou
              promocionais e outras informações que possam ser do seu interesse.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            4. Compartilhamento de Dados
          </h2>
          <p className="mb-4">
            Podemos compartilhar suas informações pessoais com terceiros apenas
            quando for necessário para fornecer nossos serviços, cumprir
            obrigações legais, proteger nossos direitos ou com o seu
            consentimento explícito. Não vendemos ou alugamos suas informações
            pessoais a terceiros.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            5. Segurança dos Dados
          </h2>
          <p className="mb-4">
            A segurança dos seus dados é importante para nós, mas lembre-se de
            que nenhum método de transmissão pela Internet ou método de
            armazenamento eletrônico é 100% seguro. Embora nos esforcemos para
            usar meios comercialmente aceitáveis para proteger seus Dados
            Pessoais, não podemos garantir sua segurança absoluta.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            6. Seus Direitos LGPD
          </h2>
          <p className="mb-4">
            De acordo com a Lei Geral de Proteção de Dados LGPD - Lei nº
            13.709/2018, você possui direitos sobre seus dados pessoais,
            incluindo:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>
              Anonimização, bloqueio ou eliminação de dados desnecessários;
            </li>
            <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
            <li>
              Eliminação dos dados pessoais tratados com o consentimento do
              titular;
            </li>
            <li>
              Informação das entidades públicas e privadas com as quais o
              controlador realizou uso compartilhado de dados;
            </li>
            <li>
              Informação sobre a possibilidade de não fornecer consentimento e
              sobre as consequências da negativa;
            </li>
            <li>Revogação do consentimento.</li>
          </ul>
          <p className="mb-4">
            Para exercer seus direitos, entre em contato conosco pelos canais
            indicados nesta Política.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            7. Links para Outros Sites
          </h2>
          <p className="mb-4">
            Nosso Serviço pode conter links para outros sites que não são
            operados por nós. Se você clicar em um link de terceiros, você será
            direcionado para o site desse terceiro. Aconselhamos vivamente que
            reveja a Política de Privacidade de todos os sites que você visita.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">
            8. Contato
          </h2>
          <p className="mb-4">
            Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato conosco através do nosso formulário ou pelo e-mail:{" "}
            <a
              href="mailto:suporte@fonobr.com.br"
              className="text-blue-600 hover:underline"
            >
              suporte@fonomax.com.br
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
