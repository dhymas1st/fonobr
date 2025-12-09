// src/app/(main)/contato/page.tsx
import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  HiOutlinePhone,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineMapPin,
} from "react-icons/hi2"; // Ícones para contacto e mapa

// SEO e Acessibilidade: Metadados específicos para esta página
export const metadata: Metadata = {
  title: "Contacto FonoBR - Unidades em São Paulo e Santo André",
  description:
    "Entre em contacto com a FonoBR em São Paulo e Santo André. Agende a sua consulta, tire dúvidas sobre aparelhos auditivos e receba suporte especializado. Telefone, WhatsApp, E-mail e Endereços.",
  keywords: [
    "contacto FonoBR",
    "telefone FonoBR",
    "whatsapp FonoBR",
    "endereço FonoBR",
    "FonoBR São Paulo",
    "FonoBR Santo André",
    "agendar consulta",
  ],
  openGraph: {
    title: "FonoBR Contato | Fale Conosco em SP e Santo André",
    description:
      "As nossas unidades em São Paulo e Santo André estão prontas para o atender. Descubra como chegar e agende o seu horário com a equipa FonoBR.",
    url: "https://www.fonobr.com.br/contato",
    images: [
      {
        url: "https://www.fonobr.com.br/images/og-contact.jpg", // Crie uma imagem relevante para OG nesta pasta
        width: 1200,
        height: 630,
        alt: "Imagem de contato da FonoBR",
      },
    ],
  },
};

const ContactPage: React.FC = () => {
  // Endpoint do Formspree para o formulário principal da página de contacto
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzjqkzd"; // <--- SEU ENDPOINT REAL AQUI!

  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="contact-main-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          id="contact-main-heading"
          className="text-4xl md:text-5xl font-extrabold text-center text-[#1d3f66] mb-8"
        >
          Fale Conosco
        </h1>

        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Temos duas unidades para melhor o atender: uma matriz em São Paulo e
          uma filial em Santo André. Escolha a forma de contacto que for mais
          conveniente para si.
        </p>

        {/* Secção de Unidades e Contactos Diretos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Unidade São Paulo - Matriz */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <HiOutlineMapPin
                className="h-8 w-8 text-[#1d3f66] mr-3"
                aria-hidden="true"
              />
              São Paulo - Matriz
            </h2>
            <address className="not-italic text-gray-700 text-lg leading-relaxed mb-6">
              Rua Exemplo, 123, Centro
              <br />
              Bairro, São Paulo, SP
              <br />
              CEP 00000-000
            </address>
            <div className="space-y-4">
              <p className="flex items-center text-gray-800 text-lg">
                <HiOutlinePhone
                  className="h-6 w-6 text-green-600 mr-3"
                  aria-hidden="true"
                />
                Telefone:{" "}
                <a
                  href="tel:+551133334444"
                  className="ml-2 text-[#1d3f66] hover:underline transition duration-200"
                  aria-label="Ligar para telefone da FonoBR Matriz São Paulo"
                >
                  (11) 3333-4444
                </a>
              </p>
              <p className="flex items-center text-gray-800 text-lg">
                <HiOutlineChatBubbleBottomCenterText
                  className="h-6 w-6 text-green-600 mr-3"
                  aria-hidden="true"
                />
                WhatsApp:{" "}
                <a
                  href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20contacto%20com%20a%20Matriz%20de%20São%20Paulo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-[#1d3f66] hover:underline transition duration-200"
                  aria-label="Enviar mensagem para FonoBR Matriz de São Paulo via WhatsApp"
                >
                  (11) 99999-9999
                </a>
              </p>
              <p className="flex items-center text-gray-800 text-lg">
                E-mail:{" "}
                <a
                  href="mailto:contacto.sp@fonobr.com.br"
                  className="ml-2 text-[#1d3f66] hover:underline transition duration-200"
                  aria-label="Enviar e-mail para FonoBR Matriz de São Paulo"
                >
                  contato@fonobr.com.br
                </a>
              </p>
            </div>
            {/* Mapa Google Maps (placeholder) */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner flex items-center justify-center text-gray-500">
              {/* Substitua por um iframe real do Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15312.345678901234!2d-46.6333096!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a35e4e5e49%3A0x6b8d9e6e5a6b7c8d!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da FonoBR Matriz em São Paulo no Google Maps"
                tabIndex={0}
                aria-label="Mapa da localização da FonoBR Matriz em São Paulo"
              ></iframe>
            </div>
          </div>

          {/* Unidade Santo André - Filial */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <HiOutlineMapPin
                className="h-8 w-8 text-[#1d3f66] mr-3"
                aria-hidden="true"
              />
              Santo André - Filial
            </h2>
            <address className="not-italic text-gray-700 text-lg leading-relaxed mb-6">
              Avenida Teste, 456, Bairro
              <br />
              Cidade, Santo André, SP
              <br />
              CEP 11111-111
            </address>
            <div className="space-y-4">
              <p className="flex items-center text-gray-800 text-lg">
                <HiOutlinePhone
                  className="h-6 w-6 text-green-600 mr-3"
                  aria-hidden="true"
                />
                Telefone:{" "}
                <a
                  href="tel:+551155556666"
                  className="ml-2 text-[#1d3f66] hover:underline transition duration-200"
                  aria-label="Ligar para telefone da FonoBR Filial Santo André"
                >
                  (11) 5555-6666
                </a>
              </p>
              <p className="flex items-center text-gray-800 text-lg">
                <HiOutlineChatBubbleBottomCenterText
                  className="h-6 w-6 text-green-600 mr-3"
                  aria-hidden="true"
                />
                WhatsApp:{" "}
                <a
                  href="https://wa.me/5511988888888?text=Olá,%20gostaria%20de%20contacto%20com%20a%20Filial%20de%20Santo%20André."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-[#1d3f66] hover:underline transition duration-200"
                  aria-label="Enviar mensagem para FonoBR Filial de Santo André via WhatsApp"
                >
                  (11) 98888-8888
                </a>
              </p>
              <p className="flex items-center text-gray-800 text-lg">
                E-mail:{" "}
                <a
                  href="mailto:contacto.sa@fonobr.com.br"
                  className="ml-2 text-[#1d3f66] hover:underline transition duration-200"
                  aria-label="Enviar e-mail para FonoBR Filial de Santo André"
                >
                  contato@fonobr.com.br
                </a>
              </p>
            </div>
            {/* Mapa Google Maps (placeholder) */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner flex items-center justify-center text-gray-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15312.345678901234!2d-46.6333096!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a35e4e5e49%3A0x6b8d9e6e5a6b7c8d!2sSanto%20Andr%C3%A9%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da FonoBR Filial em Santo André no Google Maps"
                tabIndex={0}
                aria-label="Mapa da localização da FonoBR Filial em Santo André"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Formulário de Contacto (Reutilizado da Home, mas aqui em secção completa) */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Envie-nos uma Mensagem
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Se preferir, preencha o formulário abaixo e retornaremos o seu
            contacto o mais breve possível.
          </p>
          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="space-y-6 max-w-xl mx-auto"
          >
            <div>
              <label
                htmlFor="full-name"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Nome Completo: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Seu nome completo"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#1d3f66] focus:border-blue-900 transition duration-200 text-gray-900 placeholder-gray-500"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                E-mail: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="_replyto"
                placeholder="seu.email@exemplo.com"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#1d3f66] focus:border-blue-900 transition duration-200 text-gray-900 placeholder-gray-500"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Telefone: <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="contact-phone"
                placeholder="(XX) XXXXX-XXXX"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#1d3f66] focus:border-blue-900 transition duration-200 text-gray-900 placeholder-gray-500"
                aria-required="true"
                pattern="[0-9]{2}\s?[0-9]{4,5}-?[0-9]{4}"
                title="Formato: XX XXXXX-XXXX ou XX XXXX-XXXX (com ou sem espaço/hífen)"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Sua Mensagem:
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Digite sua mensagem aqui..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#1d3f66] focus:border-blue-900 transition duration-200 text-gray-900 placeholder-gray-500 resize-y"
                aria-label="Campo de mensagem"
              ></textarea>
            </div>
            <div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                De acordo com as leis 12.965/2014 e 13.709/2018, autorizo a
                FonoBR enviar comunicações por e-mail, ou qualquer outro meio e
                concordo com a sua política de privacidade.
              </p>
              <button
                type="submit"
                className="w-full bg-[#1d3f66] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                aria-label="Enviar formulário de contacto"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
