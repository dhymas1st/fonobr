// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // --- ADICIONE OU ATUALIZE ESTA SEÇÃO PARA CONFIGURAR O CONTAINER ---
      container: {
        center: true, // Centraliza o container automaticamente
        padding: {
          DEFAULT: "1rem", // Padding padrão para telas pequenas
          sm: "2rem", // Padding para telas pequenas
          lg: "4rem", // Padding para telas grandes
          xl: "5rem", // Padding para telas extra grandes
          "2xl": "6rem", // Padding para telas 2xl
        },
        // Define as larguras máximas para cada breakpoint, garantindo o 7xl
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          // Para garantir que o 'container' realmente chegue ao 'max-w-7xl'
          // no breakpoint 'xl' (que é 1280px), e se você quiser larguras ainda maiores,
          // pode adicionar custom breakpoints como '3xl': '1440px', etc.
        },
      },
      // --- FIM DA SEÇÃO DO CONTAINER ---
      // Adicione as keyframes e animações aqui (serão usadas nas seções)
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
