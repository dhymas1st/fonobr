// src/app/(main)/layout.tsx
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

// Você pode adicionar metadados específicos para as rotas neste grupo
export const metadata = {
  title: "FonoBR - Aparelhos Auditivos e Soluções para Perda Auditiva",
  description:
    "Há mais de 25 anos, a FonoBR é especialista em aparelhos auditivos. Unidades em São Paulo e Santo André.",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
      {/* Fragmento para envolver os componentes */}
      <Header />
      <main className="pt-16">
        {" "}
        {/* Adiciona padding-top para o conteúdo não ficar por baixo do header fixo */}
        {children}{" "}
        {/* Aqui é onde o conteúdo das páginas (page.tsx) será renderizado */}
      </main>
      <Footer />
    </>
  );
}
