// src/components/common/Header.tsx
import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2"; // Ícone de menu hamburguer dos Heroicons v2 via react-icons

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex justify-between items-center h-16"
          aria-label="Navegação Principal"
        >
          {/* Logótipo da FonoBR */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-700"
              aria-label="Página Inicial da FonoBR"
            >
              FonoBR
            </Link>
          </div>

          {/* Navegação principal (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/aparelhos"
                className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Aparelhos Auditivos {/* <--- ESTA LIGAÇÃO */}
              </Link>
              <Link
                href="/perda-auditiva"
                className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Perda Auditiva
              </Link>
              <Link
                href="/sobre"
                className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Sobre Nós
              </Link>
              <Link
                href="/contato"
                className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Menu Hamburguer (Mobile) */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false" // Este estado será controlado por JavaScript
              aria-label="Abrir menu principal"
            >
              <HiOutlineBars3 className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* Menu móvel (será implementado com lógica de estado posteriormente) */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Ligações do menu móvel aqui */}
        </div>
      </div>
    </header>
  );
};

export default Header;
