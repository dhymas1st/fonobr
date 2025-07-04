// src/components/layout/Footer.tsx
import Link from "next/link";
// Você pode importar ícones do Lucide React para redes sociais aqui, se quiser
// import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-6 md:px-12">
      {/* Container principal do footer, que se beneficiará da config 'container' global */}
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Seção 1: Sobre Nós */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Fonomax Audição</h3>
          <p className="text-sm">
            Oferecemos os melhores aparelhos auditivos para você reconectar-se
            com o mundo. Qualidade, tecnologia e suporte especializado em São
            Paulo.
          </p>
        </div>

        {/* Seção 2: Links Rápidos */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/aparelhos"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Nossos Aparelhos
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/politica-de-privacidade"
                className="hover:text-blue-400"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:text-blue-400">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>

        {/* Seção 3: Contato */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Fale Conosco</h3>
          <p className="text-sm mb-2">
            Email:{" "}
            <a
              href="mailto:contato@fonomax.com.br"
              className="hover:text-blue-400"
            >
              contato@fonomax.com.br
            </a>
          </p>
          <p className="text-sm mb-2">
            Telefone:{" "}
            <a href="tel:+5511987654321" className="hover:text-blue-400">
              (11) 98765-4321
            </a>{" "}
            (WhatsApp)
          </p>
          <p className="text-sm">
            Endereço: Rua da Audição, 123 - Centro, São Paulo - SP
          </p>
          {/* Links para Redes Sociais com Lucide React (exemplo) */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400" aria-label="Facebook">
              {/* <Facebook size={24} /> */} Fb
            </a>
            <a href="#" className="hover:text-blue-400" aria-label="Instagram">
              {/* <Instagram size={24} /> */} Ig
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        &copy; {currentYear} Fonomax Audição. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
