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
  "https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre os serviços da FonoBR.";

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
            Com mais de 25 anos de experiência...
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
                Contacto
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
              href="https://instagram.com/fonobr"
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
            <p className="font-semibold mb-1">São Paulo - Matriz</p>
            <p className="text-gray-300 text-sm">Rua Exemplo, 123, Centro</p>
            <a
              href="tel:+551133334444"
              className="text-gray-300 hover:text-blue-400 text-sm"
            >
              (11) 3333-4444
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
