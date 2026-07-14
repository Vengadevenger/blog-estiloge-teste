"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Cabeçalho do portal: faixa superior, barra azul fixa com menu hambúrguer
 * (gaveta lateral), logo centralizado, busca e CTA de compra.
 */
export default function HeaderPortal({ categories = [] }) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <div className="portal-topbar">
        <div className="portal-topbar-inner">
          <Link href="/">colabola.com.br</Link>
          <Link href="/blog">blog</Link>
          <Link href="/comprar">compre cola bola</Link>
        </div>
      </div>

      <header className="portal-header">
        <div className="portal-header-inner">
          <button
            type="button"
            className="portal-menu-btn"
            onClick={() => setAberto(true)}
            aria-label="Abrir menu"
            aria-expanded={aberto}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
            MENU
          </button>

          <Link href="/blog" className="portal-logo" aria-label="Cola Bola — ir para a página inicial do blog">
            <img
              src="/images/marca/logo-header.svg"
              alt="Cola Bola"
              className="portal-logo-img"
            />
          </Link>

          <div className="portal-header-right">
            <form className="portal-busca" action="/blog" method="GET">
              <input type="search" name="q" placeholder="Buscar" aria-label="Buscar no blog" />
              <button type="submit" aria-label="Buscar">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
              </button>
            </form>
            <Link href="/comprar" className="portal-cta">
              Saiba Mais
            </Link>
          </div>
        </div>
      </header>

      {aberto && (
        <>
          <div className="portal-drawer-overlay" onClick={() => setAberto(false)} />
          <aside className="portal-drawer" aria-label="Menu principal">
            <div className="portal-drawer-header">
              <img
                src="/images/marca/logo-header.svg"
                alt="Cola Bola"
                className="portal-logo-img portal-logo-img-drawer"
              />
              <button type="button" onClick={() => setAberto(false)} aria-label="Fechar menu">
                ✕
              </button>
            </div>
            <nav>
              <Link href="/" onClick={() => setAberto(false)}>início</Link>
              <Link href="/blog" onClick={() => setAberto(false)}>todas as notícias</Link>
              <p className="portal-drawer-titulo">Seções</p>
              {categories.map((c) => (
                <Link
                  key={c.name}
                  href={`/blog?categoria=${encodeURIComponent(c.name)}`}
                  onClick={() => setAberto(false)}
                >
                  {c.name.toLowerCase()}
                </Link>
              ))}
              <p className="portal-drawer-titulo">Produto</p>
              <Link href="/comprar" onClick={() => setAberto(false)}>Saiba Mais</Link>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
