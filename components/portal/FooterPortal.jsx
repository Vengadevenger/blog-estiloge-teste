import Link from "next/link";

/** Rodapé do portal. */
export default function FooterPortal({ categories = [] }) {
  return (
    <footer className="portal-footer">
      <div className="portal-footer-inner">
        <div className="portal-footer-marca">
          <img
            src="/images/marca/logo-header.svg"
            alt="Cola Bola"
            className="portal-footer-logo"
          />
          <p>Conserto de bolas esportivas em casa, em menos de 2 minutos.</p>
        </div>
        <nav aria-label="Links do rodapé">
          <Link href="/">Início</Link>
          <Link href="/blog">Notícias</Link>
          {categories.map((c) => (
            <Link key={c.name} href={`/blog?categoria=${encodeURIComponent(c.name)}`}>
              {c.name}
            </Link>
          ))}
          <Link href="/comprar">Comprar</Link>
        </nav>
      </div>
      <div className="portal-footer-base">
        © {new Date().getFullYear()} Cola Bola — todos os direitos reservados.
      </div>
    </footer>
  );
}
