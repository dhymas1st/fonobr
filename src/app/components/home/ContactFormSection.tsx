// src/components/home/ContactFormSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Importar os ícones específicos para os campos do formulário
import { Phone, MessageSquareText, User, Mail, Smartphone } from "lucide-react";

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário enviados:", formData);
    alert("Formulário enviado com sucesso! Em breve entraremos em contato.");
    setFormData({ name: "", email: "", whatsapp: "" });
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-32 flex items-center justify-center overflow-hidden min-h-[600px]">
      {/* Imagem de fundo */}
      <Image
        src="/images/contact-bg.jpg"
        alt="Pessoa ao telefone ou em consulta de audição"
        fill
        objectFit="cover"
        quality={80}
        className="z-0 opacity-40"
        priority
      />
      {/* Overlay com degradê */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      {/* Contêiner principal da seção com max-w-7xl */}
      <div className="container mx-auto max-w-7xl px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Div com o texto de convite (Lado Esquerdo) */}
          <div className="md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Pronto para uma Audição Melhor?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              Preencha o formulário e um de nossos especialistas entrará em
              contato para oferecer a melhor solução auditiva para você. Ou, se
              preferir, utilize nossos outros canais de comunicação:
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="tel:+5511987654321"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                aria-label="Ligar para Fonomax Audição"
              >
                <Phone size={20} className="mr-2" /> Ligar Agora
              </Link>
              <Link
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                aria-label="Enviar mensagem WhatsApp para Fonomax Audição"
              >
                <MessageSquareText size={20} className="mr-2" /> WhatsApp
              </Link>
            </div>
          </div>

          {/* Div com o formulário (Lado Direito) */}
          {/* Largura mínima de 600px em telas grandes */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-xl w-full max-w-md lg:max-w-[600px]">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Fale Conosco
            </h3>
            <form onSubmit={handleSubmit}>
              {/* Campo Nome com ícone */}
              <div className="mb-4 relative">
                <label htmlFor="name" className="sr-only">
                  {" "}
                  {/* sr-only para ocultar visualmente */}
                  Nome Completo
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  // Aumentar padding-left para o ícone
                  className="shadow appearance-none border rounded w-full py-3 pl-10 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  required
                />
              </div>

              {/* Campo Email com ícone */}
              <div className="mb-4 relative">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seuemail@exemplo.com"
                  className="shadow appearance-none border rounded w-full py-3 pl-10 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  required
                />
              </div>

              {/* Campo WhatsApp com ícone */}
              <div className="mb-6 relative">
                <label htmlFor="whatsapp" className="sr-only">
                  WhatsApp (com DDD)
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Smartphone size={20} className="text-gray-400" />{" "}
                  {/* Ícone de smartphone */}
                </div>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(11) 9XXXX-XXXX"
                  className="shadow appearance-none border rounded w-full py-3 pl-10 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  required
                />
              </div>

              {/* Botão Enviar com cor de fundo do Footer */}
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md w-full transition-colors duration-300 focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>

              {/* Texto da LGPD alinhado à esquerda */}
              <p className="text-gray-600 text-xs mt-4 text-left">
                {" "}
                {/* Alterado de text-center para text-left */}
                De acordo com as leis 12.965/2014 e 13.709/2018, autorizo a
                FonoMaxBR enviar comunicações por e-mail, ou qualquer outro meio
                e concordo com a sua política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
