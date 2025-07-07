// src/app/(main)/sobre/page.tsx
import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineLightBulb,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
} from "react-icons/hi2"; // Ícones para ilustrar secções

// SEO e Acessibilidade: Metadados específicos para esta página
export const metadata: Metadata = {
  title: "Sobre Nós - FonoBR: 25 Anos de Experiência em Audição",
  description:
    "Conheça a FonoBR: mais de 25 anos de dedicação à saúde auditiva em São Paulo e Santo André. A nossa história, missão, valores e a equipa de fonoaudiólogos especializados que transforma vidas.",
  keywords: [
    "FonoBR",
    "sobre nós",
    "história",
    "missão",
    "valores",
    "equipa",
    "fonoaudiologia",
    "aparelhos auditivos São Paulo",
    "aparelhos auditivos Santo André",
    "25 anos",
  ],
  openGraph: {
    title: "A Nossa História | FonoBR",
    description:
      "Saiba mais sobre a FonoBR, líder em soluções auditivas com mais de duas décadas de experiência e um compromisso inabalável com a qualidade de vida dos seus clientes.",
    url: "https://www.fonobr.com.br/sobre",
    images: [
      {
        url: "https://www.fonobr.com.br/images/og-about-us.jpg", // Crie uma imagem relevante para OG nesta pasta
        width: 1200,
        height: 630,
        alt: "Equipa FonoBR sorridente",
      },
    ],
  },
};

const SobrePage: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="about-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          id="about-us-heading"
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-8"
        >
          A Nossa História e Compromisso
        </h1>

        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Com mais de 25 anos de dedicação e inovação, a FonoBR transformou a
          vida de milhares de pessoas, restaurando a alegria de ouvir e de se
          conectar com o mundo.
        </p>

        {/* Secção: A Nossa Trajetória */}
        <div className="bg-white p-8 rounded-lg shadow-xl mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Uma Trajetória de Sucesso e Cuidado
          </h2>
          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/images/fono-history.jpg" // Imagem ilustrativa da história
                alt="Fonoaudiólogo a atender paciente em ambiente moderno"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
              <p className="mb-4">
                Fundada em [Ano de Fundação, ex: 1998], a FonoBR nasceu com o
                propósito de oferecer soluções auditivas de excelência e um
                atendimento verdadeiramente humano. Ao longo de mais de duas
                décadas, consolidámos a nossa presença no mercado, tornando-nos
                referência em saúde auditiva em São Paulo e Santo André.
              </p>
              <p className="mb-4">
                O nosso crescimento é reflexo da paixão em fazer a diferença,
                investindo constantemente em tecnologia de ponta, capacitação da
                nossa equipa e, acima de tudo, na escuta ativa das necessidades
                de cada cliente.
              </p>
              <p>
                Acreditamos que ouvir bem é viver plenamente, e é isso que nos
                impulsiona todos os dias.
              </p>
            </div>
          </div>
        </div>

        {/* Secção: A Nossa Missão, Visão e Valores */}
        <div className="bg-white p-8 rounded-lg shadow-xl mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Missão, Visão e Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <HiOutlineLightBulb
                className="h-12 w-12 text-blue-600 mb-4"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Missão
              </h3>
              <p className="text-gray-700 text-base text-center">
                Proporcionar a melhor experiência auditiva, com soluções
                personalizadas e atendimento humano, garantindo qualidade de
                vida e bem-estar.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <HiOutlineChatBubbleLeftRight
                className="h-12 w-12 text-blue-600 mb-4"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Visão
              </h3>
              <p className="text-gray-700 text-base text-center">
                Ser reconhecida como a principal referência em saúde auditiva no
                Brasil, inovando sempre em tecnologia e excelência no cuidado.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <HiOutlineUserGroup
                className="h-12 w-12 text-blue-600 mb-4"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Valores
              </h3>
              <p className="text-gray-700 text-base text-center">
                Empatia, Excelência, Inovação, Ética e Compromisso.
              </p>
            </div>
          </div>
        </div>

        {/* Secção: A Nossa Equipa (Exemplo simplificado) */}
        <div className="bg-white p-8 rounded-lg shadow-xl mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            A Nossa Equipa de Especialistas
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Contamos com uma equipa de fonoaudiólogos altamente qualificados e
            apaixonados por audição, prontos para oferecer um atendimento
            personalizado e as melhores soluções para si.
          </p>
          {/* Poderia ser um carrossel de fotos da equipa ou uma grelha de perfis */}
          <div className="flex justify-center flex-wrap gap-8">
            {/* Exemplo de card de membro da equipa */}
            <div className="text-center">
              <Image
                src="/images/team-member-1.jpg" // Imagem de um membro da equipa
                alt="Foto da Fonoaudióloga Ana Paula"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 shadow-md"
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Ana Paula S. Dantas
              </h4>
              <p className="text-sm text-gray-600">Fonoaudióloga Responsável</p>
            </div>
            {/* Adicione mais membros da equipa conforme necessário */}
          </div>
        </div>

        {/* CTA para agendar consulta */}
        <div className="text-center mt-16 p-8 bg-blue-600 text-white rounded-lg shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Venha Conhecer a FonoBR!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            As nossas unidades em São Paulo e Santo André estão de portas
            abertas para si. Agende uma visita ou entre em contacto para mais
            informações.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-75"
            aria-label="Agendar uma visita ou entrar em contacto"
          >
            Fale Connosco
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SobrePage;
