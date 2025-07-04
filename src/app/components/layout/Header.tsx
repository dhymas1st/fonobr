// src/components/layout/Header.tsx
import Link from "next/link";
import Image from "next/image";
// Importe o ícone de menu do Lucide React para mobile
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12 fixed w-full z-50 top-0">
      {/* Navegação principal, que se beneficiará da config 'container' global */}
      <nav className="container max-w-7xl mx-auto flex justify-between items-center">
        {/* Logotipo ou Nome do Site */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label="Página Inicial da Sua Audição Online"
        >
          {/* Ícone de orelha simples ou logo da Fonomax */}
          <span className="text-2xl font-bold text-blue-700">👂</span>
          <span className="text-xl md:text-2xl font-bold text-gray-800">
            Fonomax Audição
          </span>
          {/* Exemplo de uso de imagem de logo se preferir: */}
          {/* <Image
            src="/images/logo.png" // Crie esta imagem em public/images/logo.png
            alt="Logo Fonomax Audição"
            width={150} // Ajuste conforme o tamanho do seu logo
            height={40} // Ajuste conforme o tamanho do seu logo
            priority // Ajuda a carregar o logo rapidamente
          /> */}
        </Link>

        {/* Navegação Principal para Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/aparelhos"
              className="text-gray-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              Aparelhos
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="text-gray-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Botão de Menu para Mobile usando Lucide React */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-700"
          aria-label="Abrir menu de navegação" // Para acessibilidade
        >
          <Menu size={28} /> {/* Ícone de menu do Lucide React */}
        </button>
      </nav>
    </header>
  );
};

export default Header;
