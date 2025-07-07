// src/app/(main)/aparelhos/page.tsx
"use client"; // Necessário para usar useState e useMemo

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { productsData } from "@/data"; // Reutilizamos os dados de produtos

// Metadados para esta página.
// Como este é um Client Component, a metadata não pode ser exportada diretamente daqui.
// Ela será herdada do layout pai ou definida em um Server Component wrapper, se necessário.
// Para este projeto, o título e descrição serão tratados pelo RootLayout.tsx com o template.

const AparelhosPage: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>(""); // Para filtro por modelo/nome

  // Extrair opções únicas de marcas e tipos dos dados
  const availableBrands = useMemo(() => {
    const brands = new Set<string>(productsData.map((p) => p.brand));
    return ["all", ...Array.from(brands).sort()]; // 'all' + marcas ordenadas
  }, []);

  const availableTypes = useMemo(() => {
    const types = new Set<string>(productsData.map((p) => p.type));
    return ["all", ...Array.from(types).sort()]; // 'all' + tipos ordenados
  }, []);

  // Lógica de filtragem usando useMemo para performance
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesBrand =
        selectedBrand === "all" || product.brand === selectedBrand;
      const matchesType =
        selectedType === "all" || product.type === selectedType;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()); // Busca no nome e descrição

      return matchesBrand && matchesType && matchesSearch;
    });
  }, [selectedBrand, selectedType, searchTerm]); // Recalcula quando os filtros mudam

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="aparelhos-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          id="aparelhos-heading"
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-8"
        >
          Os Nossos Aparelhos Auditivos
        </h1>

        <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
          Na FonoBR, oferecemos uma ampla gama de aparelhos auditivos de última
          geração, desenvolvidos com tecnologia avançada para proporcionar
          clareza e conforto. Encontre o modelo perfeito que se adapta às suas
          necessidades e estilo de vida.
        </p>

        {/* CONTROLES DE FILTRO */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Filtro por Marca */}
          <div className="w-full md:w-auto">
            <label
              htmlFor="brand-filter"
              className="block text-gray-700 text-sm font-semibold mb-2 text-left"
            >
              Filtrar por Marca:
            </label>
            <select
              id="brand-filter"
              className="block w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              aria-label="Selecionar marca do aparelho"
            >
              <option value="all">Todas as Marcas</option>
              {availableBrands
                .filter((brand) => brand !== "all")
                .map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>

          {/* Filtro por Tipo */}
          <div className="w-full md:w-auto">
            <label
              htmlFor="type-filter"
              className="block text-gray-700 text-sm font-semibold mb-2 text-left"
            >
              Filtrar por Tipo:
            </label>
            <select
              id="type-filter"
              className="block w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              aria-label="Selecionar tipo do aparelho"
            >
              <option value="all">Todos os Tipos</option>
              {availableTypes
                .filter((type) => type !== "all")
                .map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
            </select>
          </div>

          {/* Campo de Busca por Modelo/Nome */}
          <div className="w-full md:w-auto md:flex-grow">
            <label
              htmlFor="search-filter"
              className="block text-gray-700 text-sm font-semibold mb-2 text-left"
            >
              Pesquisar por Modelo:
            </label>
            <input
              type="text"
              id="search-filter"
              placeholder="Ex: Ultra Power"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
              aria-label="Pesquisar aparelho por nome ou descrição"
            />
          </div>
        </div>

        {/* LISTA DE PRODUTOS FILTRADOS */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center border border-gray-200"
                tabIndex={0}
                role="article"
                aria-label={`Detalhes do aparelho ${product.name}`}
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    objectFit="contain"
                    className="rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                <h3
                  className="text-xl font-semibold text-gray-900 mb-2 truncate w-full px-2"
                  title={product.name}
                >
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow text-center">
                  {product.description}
                </p>

                <div className="text-xs text-gray-500 mt-2">
                  <p>
                    Marca: <span className="font-medium">{product.brand}</span>
                  </p>
                  <p>
                    Tipo: <span className="font-medium">{product.type}</span>
                  </p>
                </div>

                <Link
                  href={`/aparelhos/${product.slug}`}
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md text-base transition-colors duration-200 transform w-full text-center mt-4"
                  aria-label={`Ver mais sobre ${product.name}`}
                >
                  Ver Detalhes
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg py-10">
            Nenhum aparelho encontrado com os filtros selecionados.
          </div>
        )}

        {/* CTA para agendar consulta */}
        <div className="text-center mt-16 p-8 bg-blue-600 text-white rounded-lg shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Não sabe qual aparelho é o ideal para si?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Agende uma consulta gratuita com os nossos especialistas em
            fonoaudiologia e descubra a melhor solução para a sua saúde
            auditiva.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-75"
            aria-label="Agendar uma consulta gratuita"
          >
            Agende a Sua Consulta Gratuita
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AparelhosPage;
