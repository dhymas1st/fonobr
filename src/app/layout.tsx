import type { Metadata } from "next";
import Script from "next/script"; // Importamos o componente Script
import { Inter } from "next/font/google";

import "./globals.css";

// Configuração da fonte Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // SEO: Título padrão para o site
  title: {
    default: "FonoBR - Aparelhos Auditivos e Soluções para Perda Auditiva",
    template: "%s | FonoBR",
  },
  // SEO: Meta descrição
  description:
    "Há mais de 25 anos, a FonoBR é especialista na venda de aparelhos auditivos e soluções para perda auditiva. Oferecemos atendimento humanizado e tecnologia de ponta em São Paulo e Santo André.",
  // ... (Outros metadados omitidos por brevidade)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      {/* 1. SCRIPT EXTERNO (gtag.js) - Carrega o script de forma assíncrona */}
      <Script
        strategy="afterInteractive" // Carrega o script após a página ser interativa
        src="https://www.googletagmanager.com/gtag/js?id=AW-17807510318"
      />

      {/* 2. SCRIPT INLINE - Inicializa o DataLayer e a Tag de Configuração */}
      <Script
        id="google-ads-config"
        strategy="afterInteractive" // Mantém a mesma estratégia para garantir a ordem
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17807510318');
          `,
        }}
      />

      <body className={`antialiased font-sans`}>
        {/* Acessibilidade: "Skip link" */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:p-3 focus:rounded-lg focus:shadow-lg focus:text-blue-700"
        >
          Pular para o conteúdo principal
        </a>

        {children}
      </body>
    </html>
  );
}
