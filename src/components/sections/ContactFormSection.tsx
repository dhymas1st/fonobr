"use client";

import React from "react";
import Image from "next/image";
import {
  HiOutlinePhone,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineUser, // Para o campo Nome
  HiOutlineEnvelope, // Para o campo E-mail
  HiOutlinePencil, // Para o campo Mensagem
} from "react-icons/hi2";

const ContactFormSection: React.FC = () => {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzjqkzd"; // <--- SEU ENDPOINT REAL AQUI!

  return (
    <section
      className="relative py-32 min-h-[600px] flex items-center overflow-hidden" // Aumentado min-h para melhor visualização
      aria-labelledby="contact-heading"
    >
      {/* Imagem de fundo da secção inteira */}
      <Image
        src="/images/bg-oldmen-phone.png" // Caminho para a imagem que você forneceu
        alt="Homem idoso a usar um telefone, simbolizando comunicação"
        layout="fill"
        objectFit="cover" // A imagem cobre a secção inteira
        quality={80}
        className="z-0"
        priority
      />

      {/* Camada de opacidade com degradê linear: azul claro à esquerda, azul escuro à direita */}
      {/* Ajuste as cores do degradê conforme a paleta de tons de azul desejada */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/60 to-gray-800/100 z-10"></div>

      {/* Conteúdo principal da secção (texto e formulário) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Texto Convidativo e Botões de Contacto Direto */}
          <div>
            <h2
              id="contact-heading"
              className="text-3xl md:text-5xl font-bold mb-12"
            >
              Desvende um mundo de sons com a{" "}
              <span className="text-green-700">Fono</span>
              <span className="text-yellow-400">BR</span>!
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Peça um orçamento sem compromisso ou agende um bate-papo exclusivo
              com nossos especialistas. Juntos, vamos entender sua necessidade e
              desenhar a solução perfeita para você. Se preferir um contato mais
              rápido, utilize os nossos canais diretos:
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              {/* Botão Ligar Agora - Cor de fundo branca, texto azul */}
              <a
                href="tel:+5511999999999" // Substitua pelo número de telefone real
                className="flex items-center justify-center bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 text-lg"
                aria-label="Ligar agora para a FonoBR"
              >
                <HiOutlinePhone className="h-6 w-6 mr-3" aria-hidden="true" />
                Ligar agora
              </a>

              {/* Botão WhatsApp - Cor de fundo do rodapé (gray-800), texto branco */}
              <a
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20aparelhos%20auditivos." // Substitua pelo número de WhatsApp real e mensagem pré-preenchida
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 text-lg"
                aria-label="Enviar mensagem para FonoBR via WhatsApp"
              >
                <HiOutlineChatBubbleBottomCenterText
                  className="h-6 w-6 mr-3"
                  aria-hidden="true"
                />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Coluna Direita: Formulário de Contacto */}
          {/* Fundo transparente para o formulário */}
          <div className="p-8">
            {" "}
            {/* Fundo semi-transparente para o formulário */}
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-6"
            >
              {/* Campo Nome com ícone e borda inferior */}
              <div className="relative">
                <label htmlFor="name" className="sr-only">
                  Seu Nome
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineUser
                    className="h-6 w-6 text-gray-300"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:border-white transition duration-200"
                  aria-required="true"
                />
              </div>

              {/* Campos E-mail e Telefone lado a lado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Campo E-mail com ícone e borda inferior */}
                <div className="relative">
                  <label htmlFor="email" className="sr-only">
                    Seu E-mail
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineEnvelope
                      className="h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    placeholder="Seu e-mail"
                    required
                    className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:border-white transition duration-200"
                    aria-required="true"
                  />
                </div>

                {/* Campo Telefone com ícone e borda inferior */}
                <div className="relative">
                  <label htmlFor="phone" className="sr-only">
                    Seu Telefone
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlinePhone
                      className="h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Seu telefone"
                    required
                    className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:border-white transition duration-200"
                    aria-required="true"
                    pattern="[0-9]{2}\s?[0-9]{4,5}-?[0-9]{4}"
                    title="Formato: XX XXXXX-XXXX ou XX XXXX-XXXX (com ou sem espaço/hífen)"
                  />
                </div>
              </div>

              {/* Campo Mensagem com ícone e borda inferior */}
              <div className="relative">
                <label htmlFor="message" className="sr-only">
                  Sua Mensagem
                </label>
                <div className="absolute top-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                  {" "}
                  {/* Ajustado para textarea */}
                  <HiOutlinePencil
                    className="h-6 w-6 text-gray-300"
                    aria-hidden="true"
                  />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Sua mensagem"
                  className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:border-white transition duration-200 resize-y"
                  aria-label="Campo de mensagem"
                ></textarea>
              </div>

              {/* Botão de Envio - Retangular, cor do rodapé, texto branco */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"
                  aria-label="Enviar formulário de contacto"
                >
                  Enviar Mensagem
                </button>
              </div>

              {/* Texto informativo LGPD - Abaixo do botão, cor do rodapé */}
              <p className="text-sm text-white leading-relaxed mt-4">
                {" "}
                {/* Ajustado para text-center e mt-4 */}
                De acordo com as leis 12.965/2014 e 13.709/2018, autorizo a
                FonoBR enviar comunicações por e-mail, ou qualquer outro meio e
                concordo com a sua política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
