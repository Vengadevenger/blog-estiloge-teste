import "@/styles/blog.css";
import "@/styles/portal.css";
import { getAllCategories } from "@/lib/blog-data";
import HeaderPortal from "@/components/portal/HeaderPortal";
import FooterPortal from "@/components/portal/FooterPortal";

export const metadata = {
  title: {
    default: "Blog Cola Bola — Dicas para Cuidar do Seu Equipamento Esportivo",
    template: "%s | Blog Cola Bola",
  },
  description:
    "Dicas, novidades e conteúdo sobre futebol, vôlei, basquete e manutenção de bolas esportivas. Pelo time da Cola Bola.",
};

/**
 * Layout do portal (seção /blog): header fixo com gaveta de seções,
 * conteúdo e rodapé — estilo portal de notícias esportivas.
 */
export default function BlogLayout({ children }) {
  const categories = getAllCategories();

  return (
    <div className="portal">
      <HeaderPortal categories={categories} />
      <main>{children}</main>
      <FooterPortal categories={categories} />
    </div>
  );
}
