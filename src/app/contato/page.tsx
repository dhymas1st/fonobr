// src/app/contato/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageSquareText } from "lucide-react"; // Ícones para endereço, telefone, e-mail
import ContactFormSection from "@/app/components/home/ContactFormSection"; // Reutilizando o componente de formulário

// Metadados específicos para a página /contato para SEO
export const metadata: Metadata = {
  title: "Contato - Fale com a Fonomax Audição em São Paulo",
  description:
    "Entre em contato com a Fonomax Audição. Telefone, WhatsApp, e-mail, endereço e formulário de contato. Estamos prontos para atender você em São Paulo.",
  keywords: [
    "contato",
    "fale conosco",
    "telefone Fonomax",
    "WhatsApp Fonomax",
    "endereço Fonomax",
    "aparelhos auditivos São Paulo contato",
    "formulário de contato",
    "mapa",
  ],
  openGraph: {
    title: "Fale Conosco | Fonomax Audição",
    description:
      "Entre em contato e agende sua avaliação gratuita com nossos especialistas.",
    url: "https://www.fonomax.com.br/contato", // Atualize com a URL real do seu site
    siteName: "Fonomax Audição",
    images: [
      {
        url: "/images/contato-og.jpg", // **Crie esta imagem em public/images/contato-og.jpg**
        width: 1200,
        height: 630,
        alt: "Fonomax Audição - Nossos Contatos",
      },
    ],
    type: "website",
  },
};

export default function ContatoPage() {
  return (
    <div className="bg-gray-50">
      {/* Seção de Título da Página de Contato */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fale Conosco</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Estamos prontos para atender você e encontrar a melhor solução para
            sua saúde auditiva. Utilize nossos canais de comunicação ou preencha
            o formulário abaixo.
          </p>
        </div>
      </section>

      {/* Reutiliza o componente ContactFormSection */}
      <ContactFormSection />

      {/* Seção de Informações de Contato Adicionais e Mapa */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Informações de Contato Detalhadas */}
            <div className="flex flex-col justify-center text-gray-700">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nossos Canais
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Localização:
                </h3>
                <p className="flex items-center mb-2">
                  <MapPin
                    size={20}
                    className="mr-3 text-blue-600 flex-shrink-0"
                  />
                  Rua da Audição, 123 - Centro, São Paulo - SP, CEP 01234-567
                </p>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Rua+da+Audição,+123,+São+Paulo" // Link para o Google Maps
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="text-sm">Ver no Mapa</span>
                </Link>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Telefone e WhatsApp:
                </h3>
                <p className="flex items-center mb-2">
                  <Phone
                    size={20}
                    className="mr-3 text-blue-600 flex-shrink-0"
                  />
                  <a href="tel:+5511987654321" className="hover:underline">
                    (11) 98765-4321
                  </a>{" "}
                  (Atendimento)
                </p>
                <p className="flex items-center">
                  <MessageSquareText
                    size={20}
                    className="mr-3 text-green-600 flex-shrink-0"
                  />
                  <a
                    href="https://wa.me/5511987654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    (11) 98765-4321
                  </a>{" "}
                  (WhatsApp)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Email:
                </h3>
                <p className="flex items-center">
                  <Mail
                    size={20}
                    className="mr-3 text-blue-600 flex-shrink-0"
                  />
                  <a
                    href="mailto:contato@fonomax.com.br"
                    className="hover:underline"
                  >
                    contato@fonomax.com.br
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Horário de Atendimento:
                </h3>
                <p>Segunda a Sexta: 09:00 - 18:00</p>
                <p>Sábado: 09:00 - 13:00</p>
              </div>
            </div>

            {/* Mapa Incorporado (Embed) */}
            <div className="w-full h-80 md:h-[450px] rounded-lg shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9038234676575!2d-46.73359688538356!3d-23.57022218467451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a7620a8d43%3A0x6b8d9a2a7a40c6c7!2sRua%20da%20Consola%C3%A7%C3%A3o%2C%20123%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001302-000!5e0!3m2!1spt-BR!2sbr!4v1689258202022!5m2!1spt-BR!2sbr" // Substitua este URL pelo embed real do Google Maps
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Fonomax Audição no Google Maps" // Acessibilidade
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
