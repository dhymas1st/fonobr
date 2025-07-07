// src/components/home/HeroSection.tsx
"use client"; // Necessário para usar React Hooks como useState

import React, { useState, useEffect } from "react"; // Adicionado useEffect para autoplay
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ícones de seta do Lucide React

// Importe os dados mocados da Hero Section
import { heroSlidesData } from "@/data";

const HeroSection: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = heroSlidesData[currentSlideIndex];

  // Lógica para avançar o slide automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % heroSlidesData.length
      );
    }, 5000); // Altera o slide a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [heroSlidesData.length]); // Dependência para garantir que o intervalo seja reiniciado se o número de slides mudar

  const goToNextSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex + 1) % heroSlidesData.length
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) =>
        (prevIndex - 1 + heroSlidesData.length) % heroSlidesData.length
    );
  };

  return (
    // Secção com fundo azul escuro, altura ajustável e centralização de conteúdo
    <section
      className="relative bg-blue-900 min-h-[500px] max-h-[740px] h-screen flex items-center overflow-hidden"
      aria-label="Carrossel de Destaques da FonoBR"
    >
      {/* Imagem de fundo com opacidade e z-index 0 */}
      <Image
        src={currentSlide.image} // Utiliza a imagem do slide atual
        alt={`Fundo do destaque: ${currentSlide.title}`} // Alt text descritivo para cada slide
        fill
        objectFit="cover"
        quality={90}
        className="z-0 opacity-40 transition-opacity duration-700 ease-in-out"
        priority
        aria-hidden="true" // Oculta a imagem de leitores de ecrã se o texto do slide já a descreve
      />
      {/* Overlay com opacidade controlada por RGBA e z-index 10 */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/50 to-transparent" // Degradê de preto sólido para transparente
      ></div>

      {/* Conteúdo do slide (texto e botões) com z-index 20 */}
      <div className="container mx-auto max-w-7xl px-6 relative z-20 text-white flex flex-col justify-center h-full pb-20 md:pb-0">
        <div className="text-left animate-fade-in-left">
          {/* Primeiro parágrafo: 16px */}
          <p className="text-base mb-4 sm:mb-2 md:mb-4">
            {currentSlide.preTitle}
          </p>

          {/* Título principal: 64px */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8 max-w-4xl drop-shadow-lg">
            {currentSlide.title}
          </h1>

          {/* Parágrafo de descrição com max-width de 700px */}
          <p className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 max-w-[700px] opacity-95">
            {currentSlide.description}
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16 md:mb-20">
            <Link
              href={currentSlide.ctaButtonLink}
              className="inline-block bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-75"
              aria-label={currentSlide.ctaButtonText} // Acessibilidade: aria-label
            >
              {currentSlide.ctaButtonText}
            </Link>
            <Link
              href={currentSlide.secondaryButtonLink}
              className="inline-block bg-transparent border border-white hover:bg-white hover:text-blue-800 text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-75"
              aria-label={currentSlide.secondaryButtonText} // Acessibilidade: aria-label
            >
              {currentSlide.secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Contêiner para setas e pontinhos - centralizado e empilhado, com z-index 30 */}
      <div className="absolute bottom-8 w-full flex flex-col items-center z-30">
        {/* Setinhas para controlo do slider usando Lucide React */}
        <div className="flex space-x-6 mb-4">
          <button
            onClick={goToPrevSlide}
            aria-label="Slide anterior"
            className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
          >
            <ChevronLeft size={48} strokeWidth={2} />
          </button>
          <button
            onClick={goToNextSlide}
            aria-label="Próximo slide"
            className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-2"
          >
            <ChevronRight size={48} strokeWidth={2} />
          </button>
        </div>

        {/* Indicadores de slide (pontinhos) */}
        <div className="flex space-x-2">
          {heroSlidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              aria-label={`Ir para slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlideIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
