// src/components/sections/ContactFormSection.tsx
import React from "react";
// Removida a importação de Link, pois não é utilizada neste componente.
// import Link from 'next/link';
import {
  HiOutlinePhone,
  HiOutlineChatBubbleBottomCenterText,
} from "react-icons/hi2";

const ContactFormSection: React.FC = () => {
  // O endpoint do Formspree deve ser uma string.
  // Certifique-se de que este é o seu endpoint REAL do Formspree.
  // Exemplo: https://formspree.io/f/SEU_CODIGO_UNICO
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzjqkzd"; // <--- SEU ENDPOINT REAL AQUI!

  return (
    <section className="py-16 bg-blue-50" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Fale Connosco
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Texto Convidativo e Botões de Contacto Direto */}
          <div className="text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Tem alguma dúvida sobre os nossos aparelhos auditivos ou serviços?
              Preencha o formulário ao lado e a nossa equipa especializada
              entrará em contacto consigo o mais breve possível. Se preferir um
              contacto mais rápido, utilize os nossos canais diretos:
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              {/* Botão Ligar Agora */}
              <a
                href="tel:+5511999999999" // Substitua pelo número de telefone real
                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-lg"
                aria-label="Ligar agora para a FonoBR"
              >
                <HiOutlinePhone className="h-6 w-6 mr-3" aria-hidden="true" />
                Ligar agora
              </a>

              {/* Botão WhatsApp */}
              <a
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20aparelhos%20auditivos." // Substitua pelo número de WhatsApp real e mensagem pré-preenchida
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-lg"
                aria-label="Enviar mensagem para FonoBR via WhatsApp"
              >
                <HiOutlineChatBubbleBottomCenterText
                  className="h-6 w-6 mr-3"
                  aria-hidden="true"
                />
                WhatsApp
              </a>
            </div>

            {/* Texto informativo LGPD */}
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              De acordo com as leis 12.965/2014 e 13.709/2018, autorizo a FonoBR
              enviar comunicações por e-mail, ou qualquer outro meio e concordo
              com a sua política de privacidade.
            </p>
          </div>

          {/* Coluna Direita: Formulário de Contacto */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            {/* O atributo 'action' agora aponta para a constante FORMSPREE_ENDPOINT */}
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-6"
            >
              {/* Campo Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-800 text-sm font-semibold mb-2"
                >
                  Nome Completo: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // O 'name' é crucial para o Formspree identificar o campo
                  placeholder="Seu nome completo"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500"
                  aria-required="true"
                />
              </div>

              {/* Campo E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 text-sm font-semibold mb-2"
                >
                  E-mail: <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="_replyto" // Use '_replyto' para que o Formspree defina o remetente como o email do utilizador
                  placeholder="seu.email@exemplo.com"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500"
                  aria-required="true"
                />
              </div>

              {/* Campo Telefone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-800 text-sm font-semibold mb-2"
                >
                  Telefone: <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone" // O 'name' é crucial para o Formspree identificar o campo
                  placeholder="(XX) XXXXX-XXXX"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500"
                  aria-required="true"
                  pattern="[0-9]{2}\s?[0-9]{4,5}-?[0-9]{4}"
                  title="Formato: XX XXXXX-XXXX ou XX XXXX-XXXX (com ou sem espaço/hífen)"
                />
              </div>

              {/* Campo Mensagem (Adicionado se não estava antes) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-800 text-sm font-semibold mb-2"
                >
                  Sua Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message" // O 'name' é crucial para o Formspree identificar o campo
                  rows={5}
                  placeholder="Digite sua mensagem aqui..."
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500 resize-y"
                  aria-label="Campo de mensagem"
                ></textarea>
              </div>

              {/* Botão de Envio */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                  aria-label="Enviar formulário de contacto"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
