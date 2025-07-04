import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

// Definição de metadados para SEO e Acessibilidade
export const metadata: Metadata = {
  title: {
    default: "Fonomax Audição - Aparelhos Auditivos em São Paulo",
    template: "%s | Fonomax Audição",
  },
  description:
    "Encontre os melhores aparelhos auditivos em São Paulo. Soluções personalizadas, tecnologia de ponta e atendimento especializado para sua perda auditiva. Reconecte-se com o mundo dos sons.",
  keywords: [
    "aparelho auditivo",
    "perda auditiva",
    "audição",
    "São Paulo",
    "comprar aparelho auditivo online",
    "clínica auditiva SP",
    "fonoaudiologia",
    "aparelho de surdez",
    "audiometria",
    "saúde auditiva",
    "aparelhos invisíveis",
    "aparelhos recarregáveis",
    "melhor aparelho auditivo",
    "preço aparelho auditivo",
  ],
  authors: [{ name: "Fonomax Audição" }],
  creator: "4Rank", // Opcional: seu nome ou nome da agência
  publisher: "FonoBR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "FonoBR - Aparelhos Auditivos",
    description:
      "Soluções personalizadas e tecnologia de ponta para sua audição em São Paulo. Reconecte-se com a vida!",
    url: "https://www.fonobr.com.br",
    siteName: "FonoBR",
    images: [
      {
        url: "https://www.fonobr.com.br/images/og-image.jpg", // **Crie esta imagem em public/images/og-image.jpg (1200x630px)**
        width: 1200,
        height: 630,
        alt: "Aparelhos Auditivos de Alta Qualidade FonoBR",
      },
      {
        url: "https://www.fonobr.com.br/images/og-image-alt.jpg", // Imagem alternativa
        width: 800,
        height: 600,
        alt: "Consultoria Especializada em Audição",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fonobr",
    creator: "@fonobr",
    images: "https://www.fonobr.com.br/images/twitter-card.jpg", // **Crie esta imagem em public/images/twitter-card.jpg**
  },
  // Adicione mais meta tags conforme necessário (ex: theme-color, application-name)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* Definindo o idioma principal do seu site para acessibilidade e SEO */}
      <body
        className={`${inter.className} flex flex-col min-h-screen antialiased`}
      >
        <Header />
        {/* O padding-top compensa a altura do Header fixo para o conteúdo não ficar por baixo */}
        <main className="flex-grow pt-[64px]">
          {children}{" "}
          {/* Aqui é onde o conteúdo das suas páginas será renderizado */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
