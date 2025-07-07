// src/data/advantages.ts
import { Advantage } from "@/lib/types";
// Importe os ícones Heroicons v2 (hi2) através do react-icons.
// Usamos as versões 'Outline' para consistência, que são geralmente as mais comuns.
import {
  HiOutlineCheckCircle,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineHandRaised,
} from "react-icons/hi2";

export const advantagesData: Advantage[] = [
  {
    id: 1,
    icon: HiOutlineCheckCircle, // Corrigido para HiOutlineCheckCircle
    title: "Qualidade Comprovada",
    description:
      "Mais de 25 anos de experiência e milhares de clientes satisfeitos.",
  },
  {
    id: 2,
    icon: HiOutlineUsers, // Corrigido para HiOutlineUsers
    title: "Atendimento Personalizado",
    description:
      "Nossa equipa dedicada oferece suporte e acompanhamento individualizado.",
  },
  {
    id: 3,
    icon: HiOutlineShieldCheck, // Corrigido para HiOutlineShieldCheck
    title: "Garantia e Suporte",
    description:
      "Oferecemos garantia estendida e suporte técnico completo para todos os aparelhos.",
  },
  {
    id: 4,
    icon: HiOutlineHandRaised, // Corrigido para HiOutlineHandRaised
    title: "Tecnologia Avançada",
    description:
      "Trabalhamos com as marcas mais renomadas e aparelhos de última geração.",
  },
];
