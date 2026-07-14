import Image from "next/image";
import Link from "next/link";

/**
 * CTA de fim de artigo — versão em produção no teste-blog-ponytail
 * (PR #1 "Redesign end-of-article CTA with brand palette").
 */
export default function CTABanner() {
  return (
    <div className="blog-post-cta">
      <div className="blog-post-cta-art">
        <Image
          src="/images/blog/super-cola-bola-conserto.webp"
          alt="Bola de futebol furada ao lado do frasco Super Cola Bola"
          width={320}
          height={340}
          className="blog-post-cta-image"
        />
        <span className="blog-post-cta-badge">
          <b>2</b>min
        </span>
        <span className="blog-post-cta-tag">Super Cola Bola</span>
      </div>
      <div className="blog-post-cta-body">
        <span className="blog-post-cta-kicker">Bola vazando não cancela jogo</span>
        <h3>
          Bola <mark>furada</mark> de novo?
        </h3>
        <p>Consertar em casa é mais rápido e mais barato do que comprar outra.</p>
        <Link href="/comprar" className="blog-post-cta-btn">
          Saiba Mais
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
