import Image from "next/image";
import Link from "next/link";
import { formatPostDate } from "@/lib/blog-data";

/**
 * Blocos da listagem do portal (estilo home de portal esportivo):
 * carrossel de últimas, mosaico de destaques, feed vertical e sidebar.
 * Tudo server component — zero JS no cliente.
 */

/** Carrossel horizontal com as últimas notícias (chapéu + título). */
export function CarrosselUltimas({ posts }) {
  if (!posts.length) return null;
  return (
    <div className="portal-carrossel">
      <div className="portal-carrossel-inner">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="portal-carrossel-card">
            <span className="portal-carrossel-chapeu">{post.category}</span>
            <span className="portal-carrossel-titulo">{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Mosaico de destaque: 2 posts com foto grande e manchete sobreposta. */
export function DestaquesMosaico({ posts }) {
  if (posts.length < 1) return null;
  return (
    <div className="portal-mosaico">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="portal-destaque">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            width={640}
            height={360}
            priority
            unoptimized={(post.heroImage || post.image).endsWith(".svg")}
          />
          <div className="portal-destaque-conteudo">
            <span className="portal-destaque-chapeu">{post.category}</span>
            <h2 className="portal-destaque-titulo">{post.title}</h2>
            <p className="portal-destaque-sub">{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

/** Card horizontal do feed: imagem à esquerda, chapéu, título e meta. */
export function FeedItem({ post }) {
  return (
    <article className="portal-feed-item">
      <Link href={`/blog/${post.slug}`} className="portal-feed-img">
        <Image
          src={post.image}
          alt={post.title}
          width={300}
          height={200}
          unoptimized={post.image.endsWith(".svg")}
        />
      </Link>
      <div>
        <p className="portal-feed-chapeu">{post.category.toLowerCase()}</p>
        <h2 className="portal-feed-headline">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="portal-feed-sub">{post.excerpt}</p>
        <p className="portal-feed-meta">
          {formatPostDate(post.date)} — Em {post.category}
        </p>
      </div>
    </article>
  );
}

/** Sidebar: mais lidos + CTA do produto + seções. */
export function SidebarPortal({ maisLidos, categories }) {
  return (
    <aside className="portal-sidebar">
      <div className="portal-widget">
        <h3 className="portal-widget-titulo">Mais lidos</h3>
        {/* ponytail: sem dados de audiência ainda — usa os posts mais recentes;
            trocar pela ordenação por cliques do GSC quando a Fase 3 estiver conectada */}
        <ol className="portal-maislidos">
          {maisLidos.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <span>{post.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <Link href="/comprar" className="portal-ad" aria-label="Cola Bola — conserte bolas furadas em minutos. Saiba mais.">
        <span className="portal-ad-quadro">
          <span className="portal-ad-marca">
            COLA
            <Image
              src="/images/marca/logo-bola-escura.png"
              alt=""
              width={120}
              height={120}
              className="portal-ad-marca-bola"
            />
            BOLA
          </span>
          <Image
            src="/images/marca/frasco-cola-bola.png"
            alt="Frasco de Cola Bola"
            width={320}
            height={340}
            className="portal-ad-frasco"
          />
          <span className="portal-ad-tagline">
            conserte bolas furadas em <em>minutos</em>
          </span>
          <span className="portal-ad-btn">
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
          </span>
          <span className="portal-ad-legal">USO EXCLUSIVO PARA BOLAS ESPORTIVAS.</span>
        </span>
      </Link>

      <div className="portal-widget">
        <h3 className="portal-widget-titulo">Seções</h3>
        <ul className="portal-widget-categorias">
          {categories.map((c) => (
            <li key={c.name}>
              <Link href={`/blog?categoria=${encodeURIComponent(c.name)}`}>
                {c.name} ({c.count})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
