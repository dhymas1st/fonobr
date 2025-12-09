// src/app/(main)/perda-auditiva/page.tsx
import type { Metadata } from "next"; // Importar Metadata para tipagem
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Para imagens ilustrativas se necessário
import {
  HiOutlineLightBulb,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
} from "react-icons/hi2"; // Ícones para ilustrar secções

// SEO e Acessibilidade: Metadados específicos para esta página
export const metadata: Metadata = {
  title: "Perda Auditiva - Causas, Tipos e Soluções",
  description:
    "Entenda a perda auditiva: as suas causas, diferentes tipos e como a FonoBR oferece diagnósticos precisos e as melhores soluções para melhorar a sua audição. Agende uma avaliação gratuita.",
  keywords: [
    "perda auditiva",
    "tipos de perda auditiva",
    "causas perda auditiva",
    "sintomas perda auditiva",
    "diagnóstico auditivo",
    "soluções auditivas",
    "fonoaudiologia",
    "FonoBR",
  ],
  openGraph: {
    title: "Perda Auditiva: Tudo o que Precisa de Saber | FonoBR",
    description:
      "Informações completas sobre perda auditiva, desde os primeiros sinais até as opções de tratamento e aparelhos. Conte com a FonoBR para o guiar.",
    url: "https://www.fonobr.com.br/perda-auditiva",
    images: [
      {
        url: "https://www.fonobr.com.br/images/og-perda-auditiva.jpg", // Crie uma imagem relevante para OG nesta pasta
        width: 1200,
        height: 630,
        alt: "Imagem ilustrativa sobre perda auditiva",
      },
    ],
  },
};

const PerdaAuditivaPage: React.FC = () => {
  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="perda-auditiva-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          id="perda-auditiva-heading"
          className="text-4xl md:text-5xl font-extrabold text-center text-[#1d3f66] mb-8"
        >
          Entenda a Perda Auditiva
        </h1>

        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          A perda auditiva pode impactar significativamente a qualidade de vida,
          mas entender as suas causas e tipos é o primeiro passo para encontrar
          a solução adequada. Saiba mais sobre este tema importante.
        </p>

        {/* Secção 1: O que é Perda Auditiva? */}
        <div className="bg-white p-8 rounded-lg shadow-xl mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            O que é e como reconhecer?
          </h2>
          <div className="md:flex md:items-center md:space-x-8">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                A perda auditiva, também conhecida como deficiência auditiva ou
                hipoacusia, refere-se à diminuição da capacidade de ouvir sons.
                Pode variar de leve a profunda e afetar um ou ambos os ouvidos.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Os sinais podem ser subtis no início, como dificuldade em
                acompanhar conversas em ambientes barulhentos, precisar de
                aumentar o volume da TV, pedir para as pessoas repetirem o que
                disseram, ou sentir que os outros murmuram.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Se você ou alguém que você conhece apresenta esses sintomas, é
                fundamental procurar ajuda especializada.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Pode adicionar uma imagem aqui se tiver, ex: */}
              <Image
                src="/images/understanding-hearing-loss.jpg"
                alt="Pessoa com dificuldade de ouvir"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Secção 2: Tipos de Perda Auditiva */}
        <div className="bg-white p-8 rounded-lg shadow-xl mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Tipos Comuns de Perda Auditiva
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tipo 1: Condutiva */}
            <div className="p-6 bg-blue-50 rounded-lg">
              <HiOutlineLightBulb
                className="h-10 w-10 text-[#1d3f66] mb-4 mx-auto md:mx-0"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">
                Perda Auditiva Condutiva
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Ocorre quando há um problema na transmissão do som do ouvido
                externo ou médio para o ouvido interno. Causas comuns incluem
                acúmulo de cera, infeções no ouvido, perfuração do tímpano ou
                otosclerose. Muitas vezes, pode ser tratada clinicamente ou
                cirurgicamente.
              </p>
            </div>
            {/* Tipo 2: Neurossensorial */}
            <div className="p-6 bg-blue-50 rounded-lg">
              <HiOutlineChatBubbleLeftRight
                className="h-10 w-10 text-[#1d3f66] mb-4 mx-auto md:mx-0"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">
                Perda Auditiva Neurossensorial
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Resulta de danos nas células ciliadas do ouvido interno (cóclea)
                ou no nervo auditivo. É o tipo mais comum de perda auditiva
                permanente, frequentemente causada pelo envelhecimento,
                exposição a ruídos altos, genética ou uso de certos
                medicamentos. Aparelhos auditivos são o tratamento mais comum.
              </p>
            </div>
            {/* Tipo 3: Mista */}
            <div className="p-6 bg-blue-50 rounded-lg md:col-span-2">
              {" "}
              {/* Ocupa as duas colunas em md e acima */}
              <HiOutlineUserGroup
                className="h-10 w-10 text-[#1d3f66] mb-4 mx-auto"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Perda Auditiva Mista
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                É uma combinação dos tipos condutiva e neurossensorial,
                significando que há problemas tanto no ouvido externo/médio
                quanto no ouvido interno ou nervo auditivo. O tratamento
                dependerá da proporção de cada componente da perda.
              </p>
            </div>
          </div>
        </div>

        {/* CTA para agendar consulta */}
        <div className="text-center mt-16 p-8 bg-[#1d3f66] text-white rounded-lg shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Suspeita de Perda Auditiva?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Não ignore os sinais. Agende uma avaliação auditiva gratuita com os
            nossos fonoaudiólogos. Um diagnóstico preciso é o primeiro passo
            para uma vida com mais qualidade auditiva.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white hover:bg-gray-100 text-[#1d3f66] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-75"
            aria-label="Agendar uma avaliação auditiva gratuita"
          >
            Agende a Sua Avaliação
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PerdaAuditivaPage;
