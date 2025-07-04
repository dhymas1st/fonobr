// src/components/ui/AccordionItem.tsx
"use client"; // Necessário para usar useState

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Ícones para indicar estado (aberto/fechado)

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean; // Opcional: para que alguns itens possam começar abertos
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800">
        <button
          onClick={toggleAccordion}
          className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          aria-expanded={isOpen} // Atributo de acessibilidade: indica se está expandido
          aria-controls={`accordion-content-${question.replace(/\s/g, "-")}`} // Id para o conteúdo
          id={`accordion-header-${question.replace(/\s/g, "-")}`} // Id para o cabeçalho
        >
          <span>{question}</span>
          {isOpen ? (
            <ChevronUp size={24} className="text-blue-600 ml-4 flex-shrink-0" />
          ) : (
            <ChevronDown
              size={24}
              className="text-gray-500 ml-4 flex-shrink-0"
            />
          )}
        </button>
      </h3>
      <div
        id={`accordion-content-${question.replace(/\s/g, "-")}`}
        role="region" // Atributo de acessibilidade: define a região do acordeão
        aria-labelledby={`accordion-header-${question.replace(/\s/g, "-")}`} // Associa ao cabeçalho
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 py-4 px-6"
            : "max-h-0 opacity-0 px-6" // max-h-screen é um truque para transição de altura desconhecida
        }`}
      >
        <p className="text-gray-700 pb-4">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
