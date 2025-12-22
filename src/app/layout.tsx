import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FonoBR - Aparelhos Auditivos e Soluções para Perda Auditiva",
    template: "%s | FonoBR",
  },
  description:
    "Há mais de 25 anos, a FonoBR é especialista na venda de aparelhos auditivos e soluções para perda auditiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17807510318"
      />

      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17807510318');

            // FUNÇÃO DE CONVERSÃO DO GOOGLE ADS
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank'); // Abre o WhatsApp em nova aba
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17807510318/bnOWCNvKh9UbEK6WpKtC',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion; // Garante acesso global
          `,
        }}
      />

      <body className={`antialiased font-sans`}>
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
