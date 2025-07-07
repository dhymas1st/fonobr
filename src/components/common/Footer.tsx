// src/components/common/Footer.tsx
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      {" "}
      {/* Acessibilidade: role="contentinfo" */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Coluna 1: Texto Institucional */}
        <div>
          <h3 className="text-xl font-bold mb-4">FonoBR</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Com mais de 25 anos de experiência, a FonoBR é especialista na venda
            de aparelhos auditivos, proporcionando qualidade de vida e bem-estar
            através de soluções personalizadas e tecnologia de ponta.
          </p>
        </div>

        {/* Coluna 2: Ligações Principais */}
        <nav aria-label="Ligações do Rodapé">
          {" "}
          {/* Acessibilidade: nav com aria-label */}
          <h3 className="text-xl font-bold mb-4">Ligações Úteis</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-blue-400 transition duration-200 text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aparelhos"
                className="text-gray-300 hover:text-blue-400 transition duration-200 text-sm"
              >
                Aparelhos Auditivos
              </Link>
            </li>
            <li>
              <Link
                href="/perda-auditiva"
                className="text-gray-300 hover:text-blue-400 transition duration-200 text-sm"
              >
                Perda Auditiva
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="text-gray-300 hover:text-blue-400 transition duration-200 text-sm"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-gray-300 hover:text-blue-400 transition duration-200 text-sm"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Coluna 3: Redes Sociais */}
        <div>
          <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com/fonobr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
              aria-label="Facebook da FonoBR"
            >
              <FaFacebookSquare className="h-7 w-7" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/fonobr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
              aria-label="Instagram da FonoBR"
            >
              <FaInstagramSquare className="h-7 w-7" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/company/fonobr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
              aria-label="LinkedIn da FonoBR"
            >
              <FaLinkedinIn className="h-7 w-7" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20FonoBR."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
              aria-label="WhatsApp da FonoBR"
            >
              <SiWhatsapp className="h-7 w-7" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Coluna 4: Contacto e Endereços */}
        <div>
          <h3 className="text-xl font-bold mb-4">Unidades</h3>
          <address className="not-italic mb-6">
            {" "}
            {/* Acessibilidade: tag <address> */}
            <p className="font-semibold mb-1">São Paulo - Matriz</p>
            <p className="text-gray-300 text-sm">Rua Exemplo, 123, Centro</p>
            <p className="text-gray-300 text-sm">São Paulo, SP</p>
            <p className="text-gray-300 text-sm">CEP 00000-000</p>
            <a
              href="tel:+551133334444"
              className="text-gray-300 hover:text-blue-400 transition duration-200 text-sm"
              aria-label="Ligar para telefone da FonoBR Matriz São Paulo"
            >
              (11) 3333-4444
            </a>
            <br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=FonoBR+São+Paulo+Rua+Exemplo,+123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm"
              aria-label="Ver FonoBR Matriz São Paulo no Google Maps"
            >
              Ver no Google Maps
            </a>
          </address>
          <address className="not-italic">
            {" "}
            {/* Outra tag <address> */}
            <p className="font-semibold mb-1">Santo André - Filial</p>
            <p className="text-gray-300 text-sm">Avenida Teste, 456, Bairro</p>
            <p className="text-gray-300 text-sm">Cidade, Santo André, SP</p>
            <p className="text-gray-300 text-sm">CEP 11111-111</p>
            <a
              href="tel:+551155556666"
              className="text-gray-300 hover:text-blue-400 transition duration-200 text-sm"
              aria-label="Ligar para telefone da FonoBR Filial Santo André"
            >
              (11) 5555-6666
            </a>
            <br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=FonoBR+Santo+André+Avenida+Teste,+456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm"
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
