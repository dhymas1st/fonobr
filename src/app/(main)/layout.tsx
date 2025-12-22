"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_LINK =
  "https://wa.me/5511913501313?text=Olá, gostaria de conversar sobre aparelhos auditivos.";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />

      {/* BOTÃO FLUTUANTE COM TRACKING */}
      <button
        onClick={() => {
          if (
            typeof window !== "undefined" &&
            (window as any).gtag_report_conversion
          ) {
            (window as any).gtag_report_conversion(WHATSAPP_LINK);
          } else {
            window.open(WHATSAPP_LINK, "_blank");
          }
        }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Abrir chat do WhatsApp"
      >
        <SiWhatsapp className="h-8 w-8 text-white" aria-hidden="true" />
      </button>
    </>
  );
}
