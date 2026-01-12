"use client"; // <--- ADICIONADO: Necessário para eventos de clique

import React from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_LINK =
  "https://wa.me/5511913501313?text=Olá, gostaria de saber mais sobre os serviços da FonoBR.";

const Footer: React.FC = () => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (
      typeof window !== "undefined" &&
      (window as any).gtag_report_conversion
    ) {
      (window as any).gtag_report_conversion(WHATSAPP_LINK);
    } else {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <footer
      className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">FonoBR</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Com mais de 25 anos de experiência, a FonoBR é especialista na venda
            de aparelhos auditivos, proporcionando qualidade de vida e bem-estar
            através de soluções personalizadas e tecnologia de ponta.
          </p>
        </div>

        <nav aria-label="Ligações do Rodapé">
          <h3 className="text-xl font-bold mb-4">Ligações Úteis</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-blue-400 text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aparelhos"
                className="text-gray-300 hover:text-blue-400 text-sm"
              >
                Aparelhos Auditivos
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-gray-300 hover:text-blue-400 text-sm"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com/fonobr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaFacebookSquare className="h-7 w-7" />
            </a>
            <a
              href="https://instagram.com/fono_br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaInstagramSquare className="h-7 w-7" />
            </a>

            {/* ÍCONE WHATSAPP COM TRACKING */}
            <button
              onClick={handleWhatsAppClick}
              className="text-gray-300 hover:text-green-400 transition duration-200"
              aria-label="WhatsApp da FonoBR"
            >
              <SiWhatsapp className="h-7 w-7" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Unidades</h3>
          <address className="not-italic mb-6">
            {" "}
            {/* Acessibilidade: tag <address> */}
            <p className="font-semibold mb-1">São Paulo - Matriz</p>
            <p className="text-gray-300 text-base">
              R. Afonso Sardinha, 95 - Sala 22
            </p>
            <p className="text-gray-300 text-base">Lapa, São Paulo - SP</p>
            <a
              href="tel:+551133334444"
              className="text-gray-300 hover:text-blue-400 transition duration-200 text-base"
              aria-label="Ligar para telefone da FonoBR Matriz São Paulo"
            >
              (11) 91350-1313
            </a>
            <br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=FonoBR+São+Paulo+R.+Afonso+Sardinha,+95+-+Sala+22,+Lapa,+São+Paulo+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-base"
              aria-label="Ver FonoBR Matriz São Paulo no Google Maps"
            >
              Ver no Google Maps
            </a>
          </address>
          <address className="not-italic">
            <p className="font-semibold mb-1">Santo André - Filial</p>
            <p className="text-gray-300 text-base">R. Pôrto Alegre, 485.</p>
            <p className="text-gray-300 text-base">
              Vila Santa Teresa, Santo André - SP
            </p>
            <a
              href="tel:+551155556666"
              className="text-gray-300 hover:text-blue-400 transition duration-200 text-base"
              aria-label="Ligar para telefone da FonoBR Filial Santo André"
            >
              (11) 91355-8470
            </a>
            <br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=FonoBR+Santo+André+R.+Pôrto+Alegre,+485,+Vila+Santa+Teresa,+Santo+André+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-base"
              aria-label="Ver FonoBR Filial Santo André no Google Maps"
            >
              Ver no Google Maps
            </a>
          </address>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-8">
        © {new Date().getFullYear()} FonoBR. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
