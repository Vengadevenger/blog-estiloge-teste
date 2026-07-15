import "@/styles/blog.css";
import "@/styles/portal.css";
import { Open_Sans, Playfair_Display } from "next/font/google";
import { getAllCategories } from "@/lib/blog-data";
import HeaderPortal from "@/components/portal/HeaderPortal";
import FooterPortal from "@/components/portal/FooterPortal";

// Fonte do portal inteiro, como o ge
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Serifa do anúncio editorial da sidebar (via variável CSS --fonte-serif)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--fonte-serif",
});

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
    <div className={`portal ${openSans.className} ${playfair.variable}`}>
      <HeaderPortal categories={categories} />
      <main>{children}</main>
      <FooterPortal categories={categories} />
    </div>
  );
}
