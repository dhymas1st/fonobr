// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importamos a fonte Inter

import "./globals.css";

// Configuração da fonte Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Definimos uma variável CSS para fácil uso no Tailwind
  display: "swap", // Otimiza o carregamento da fonte (melhora LCP)
});

export const metadata: Metadata = {
  // SEO: Título padrão para o site, descritivo e com palavras-chave
  title: {
    default: "FonoBR - Aparelhos Auditivos e Soluções para Perda Auditiva",
    template: "%s | FonoBR", // Para títulos de páginas específicas
  },
  // SEO: Meta descrição rica em palavras-chave e convidativa
  description:
    "Há mais de 25 anos, a FonoBR é especialista na venda de aparelhos auditivos e soluções para perda auditiva. Oferecemos atendimento humanizado e tecnologia de ponta em São Paulo e Santo André.",
  // SEO: Palavras-chave relevantes
  keywords: [
    "aparelhos auditivos",
    "perda auditiva",
    "fonoaudiologia",
    "saúde auditiva",
    "FonoBR",
    "São Paulo",
    "Santo André",
    "deficiência auditiva",
    "soluções auditivas",
  ],
  // SEO: Open Graph para compartilhamento em redes sociais
  openGraph: {
    title: "FonoBR - Aparelhos Auditivos e Soluções para Perda Auditiva",
    description:
      "Encontre os melhores aparelhos auditivos e suporte especializado na FonoBR. Há mais de 25 anos transformando vidas com soluções auditivas em São Paulo e Santo André.",
    url: "https://www.fonobr.com.br", // Substitua pela URL real do seu site
    siteName: "FonoBR",
    images: [
      {
        url: "https://www.fonobr.com.br/images/og-image.jpg", // Imagem para compartilhamento (crie uma imagem em public/images)
        width: 1200,
        height: 630,
        alt: "FonoBR - Aparelhos Auditivos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  // SEO: Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "FonoBR - Aparelhos Auditivos e Soluções para Perda Auditiva",
    description:
      "Soluções auditivas personalizadas e atendimento humanizado na FonoBR. Transforme sua audição!",
    images: ["https://www.fonobr.com.br/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ESTAS SÃO AS ÚNICAS TAGS <html> E <body> DO PROJETO.
    // Acessibilidade: `lang="pt-BR"` no elemento <html> é fundamental.
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className={`antialiased font-sans`}>
        {/* Acessibilidade: "Skip link" para usuários de teclado/leitores de tela. */}
        {/* Permite pular a navegação repetitiva do cabeçalho. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:p-3 focus:rounded-lg focus:shadow-lg focus:text-blue-700"
        >
          Pular para o conteúdo principal
        </a>
        {children}{" "}
        {/* Aqui é onde o conteúdo de todos os layouts e páginas será renderizado. */}
      </body>
    </html>
  );
}
