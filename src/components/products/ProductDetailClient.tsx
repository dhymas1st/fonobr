"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HiOutlineArrowLeft,
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi2";
import { Product } from "@/lib/types";
import { productsData } from "@/data"; // Usado para produtos relacionados

// Componente que lida com o estado da Galeria e Acordeão
const ProductDetailClient: React.FC<{ initialProduct: Product }> = ({
  initialProduct,
}) => {
  const product = initialProduct;

  // Estado para a galeria de imagens
  const [mainImageIndex, setMainImageIndex] = useState(0);

  // Estado para o acordeão (usa 'informacoes' ou 'caracteristicas' como chave ativa)
  const [activeAccordion, setActiveAccordion] = useState<string>("informacoes");

  // Certifica-se de que a imagem principal existe
  const mainImageSrc = product.thumbImages[mainImageIndex] || product.image;

  // Renderiza o conteúdo do acordeão (para DRY)
  const renderAccordionContent = (key: "informacoes" | "caracteristicas") => {
    const item = product.accordion[key];
    if (!item) return <p className="text-gray-600">Conteúdo não disponível.</p>;

    return (
      <div className="text-gray-700 space-y-4">
        {/* Título da Aba: Oculto visualmente, mas útil para leitores de tela */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 sr-only">
          {item.title}
        </h3>
        {item.content.map((p, index) => (
          <p key={index} className="text-lg leading-relaxed flex items-start">
            {/* Ícone para as características */}
            {key === "caracteristicas" && (
              <HiOutlineCheckCircle
                className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
            )}
            {p}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      {/* 1. SECÇÃO PRINCIPAL (IMAGEM E SPECS) */}
      <section className="py-16" aria-labelledby="product-detail-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* BOTÃO VOLTAR */}
          <Link
            href="/aparelhos"
            className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-8 transition-colors duration-200"
            aria-label="Voltar para a lista de aparelhos"
          >
            <HiOutlineArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
            Voltar para Aparelhos
          </Link>

          {/* GALERIA E DETALHES */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Coluna 1: Imagem Principal e Thumbs */}
            <div className="w-full">
              {/* Imagem Principal (Quadrada) */}
              <div className="relative w-full aspect-square mb-4 shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={mainImageSrc}
                  alt={`Imagem principal do aparelho ${product.name}`}
                  fill
                  objectFit="contain"
                  className="p-2" // Adiciona um pequeno padding para imagens do tipo 'contain'
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Slider de Thumbs (Horizontal) */}
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.thumbImages.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImageIndex(index)}
                    aria-label={`Ver miniatura da imagem ${index + 1}`}
                    className={`flex-shrink-0 w-20 h-20 relative rounded-md overflow-hidden transition-all duration-200 border-2 ${
                      index === mainImageIndex
                        ? "border-blue-600 shadow-md"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <Image
                      src={thumb}
                      alt={`Miniatura ${index + 1} do aparelho ${product.name}`}
                      fill
                      objectFit="cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Coluna 2: Detalhes, Especificações e CTA */}
            <div className="flex-grow text-center md:text-left">
              <h1
                id="product-detail-heading"
                className="text-3xl font-extrabold text-sky-950 mb-4"
              >
                {product.name}
              </h1>

              <p className="text-xl font-semibold text-gray-700 mb-6 leading-relaxed border-b pb-4">
                {product.description}
              </p>

              {/* Especificações Técnicas (Specs) */}
              <div className="space-y-4 mb-8 text-gray-800">
                <p className="text-xl font-semibold">
                  Marca:{" "}
                  <span className="font-normal text-sky-950">
                    {product.brand}
                  </span>
                </p>
                <p className="text-xl font-semibold">
                  Tipo:{" "}
                  <span className="font-normal text-sky-950">
                    {product.type}
                  </span>
                </p>
                <p className="text-xl font-semibold">
                  Tecnologia:{" "}
                  <span className="font-normal text-gray-700">
                    {product.techSpecs.tecnologia}
                  </span>
                </p>
                <p className="text-xl font-semibold">
                  Conectividade:{" "}
                  <span className="font-normal text-gray-700">
                    {product.techSpecs.conectividade}
                  </span>
                </p>
                <p className="text-xl font-semibold">
                  Recursos:{" "}
                  <span className="font-normal text-gray-700">
                    {product.techSpecs.recursos}
                  </span>
                </p>
              </div>

              {/* CTA (Chamada para Ação) */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Interessado neste aparelho?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Agende uma consulta gratuita para um teste e descubra como o
                  **{product.name}** pode transformar a sua audição.
                </p>
                <Link
                  href="/contato"
                  className="inline-block bg-sky-700 hover:bg-sky-900 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
                  aria-label={`Agendar consulta para ${product.name}`}
                >
                  Agende a Sua Consulta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECÇÃO DE INFORMAÇÕES TÉCNICAS (ACORDEÃO) */}
      <section className="py-16 bg-white" aria-labelledby="product-info-tabs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="product-info-tabs"
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            Informações Detalhadas do Produto
          </h2>

          {/* Controle do Acordeão/Tabs */}
          <div className="flex mb-8 border-b border-gray-300">
            {["informacoes", "caracteristicas"].map((key) => (
              <button
                key={key}
                onClick={() => setActiveAccordion(key)}
                className={`py-3 px-6 text-xl font-semibold transition-colors duration-200 flex items-center ${
                  activeAccordion === key
                    ? "text-blue-700 border-b-4 border-blue-700"
                    : "text-gray-500 hover:text-gray-700 border-b-4 border-transparent"
                }`}
                aria-controls={`panel-${key}`}
                aria-expanded={activeAccordion === key}
              >
                {key === "informacoes"
                  ? "Informações do Produto"
                  : "Principais Características"}
                {activeAccordion === key ? (
                  <HiOutlineChevronUp
                    className="h-5 w-5 ml-2"
                    aria-hidden="true"
                  />
                ) : (
                  <HiOutlineChevronDown
                    className="h-5 w-5 ml-2"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Painel de Conteúdo do Acordeão */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
            <div
              id="panel-informacoes"
              hidden={activeAccordion !== "informacoes"}
            >
              {renderAccordionContent("informacoes")}
            </div>
            <div
              id="panel-caracteristicas"
              hidden={activeAccordion !== "caracteristicas"}
            >
              {renderAccordionContent("caracteristicas")}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECÇÃO DE PRODUTOS RELACIONADOS (MANTIDA) */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Explore Outros Aparelhos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData
              .filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/aparelhos/${relatedProduct.slug}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center border border-gray-200"
                  aria-label={`Ver detalhes do aparelho ${relatedProduct.name}`}
                >
                  <div className="relative w-full h-32 mb-3">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      objectFit="contain"
                      className="rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {relatedProduct.brand}
                  </p>
                  <span className="mt-3 text-blue-700 font-medium hover:underline">
                    Ver Detalhes
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
