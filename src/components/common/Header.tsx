"use client"; // Necessário no Next.js App Router para usar hooks como useState

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo - Ajuste o caminho da imagem conforme seu projeto */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/logo-fono-br.png"
            alt="Logo Fono BR"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">Início</Link>
          <Link href="aparelhos" className="hover:text-blue-600 transition">Aparelhos Auditivos</Link>
          <Link href="sobre" className="hover:text-blue-600 transition">Sobre</Link>
          <Link href="contato" className="hover:text-blue-600 transition text-blue-600 border border-blue-600 px-4 py-1 rounded-full">Contato</Link>
        </nav>

        {/* Botão Hambúrguer (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Menu Mobile (Dropdown) */}
      <div className={`md:hidden bg-white w-full absolute left-0 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-20 opacity-100' : 'top-[-300px] opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col p-8 space-y-6 text-center border-t border-gray-100">
          <Link href="/" onClick={closeMenu} className="text-gray-900 font-semibold text-lg hover:text-blue-600">Início</Link>
          <Link href="aparelhos" onClick={closeMenu} className="text-gray-900 font-semibold text-lg hover:text-blue-600">Aparelhos Auditivos</Link>
          <Link href="sobre" onClick={closeMenu} className="text-gray-900 font-semibold text-lg hover:text-blue-600">Sobre</Link>
          <Link href="contato" onClick={closeMenu} className="bg-blue-600 text-white font-bold py-3 rounded-md shadow-md">Fale Conosco</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;