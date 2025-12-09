import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { SiWhatsapp } from "react-icons/si"; // Importamos o ícone do WhatsApp

// Metadados específicos para as rotas neste grupo
export const metadata = {
  title: "FonoBR - Aparelhos Auditivos e Soluções para Perda Auditiva",
  description:
    "Há mais de 25 anos, a FonoBR é especialista em aparelhos auditivos. Unidades em São Paulo e Santo André.",
};

// Dados do botão (pode ser movido para constants.ts no futuro)
const WHATSAPP_LINK =
  "https://wa.me/5511913501313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20FonoBR.";

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

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Abrir chat do WhatsApp para contato direto com a FonoBR"
      >
        <SiWhatsapp className="h-8 w-8 text-white" aria-hidden="true" />
      </a>
      {/* FIM DO BOTÃO WHATSAPP */}
    </>
  );
}
