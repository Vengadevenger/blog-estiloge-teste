import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  getAdjacentPosts,
  formatPostDate,
} from "@/lib/blog-data";
import ShareButtons from "@/components/blog/ShareButtons";
import CTABanner from "@/components/blog/CTABanner";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://colabola.com.br";

/** Gera as rotas estáticas de todos os posts em build time. */
export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

/** SEO por post: title, description e Open Graph tags. */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const heroImage = post.heroImage || post.image;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${SITE_URL}${heroImage}`, width: 800, height: 400, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${heroImage}`],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post, 3);
  const { previous, next } = getAdjacentPosts(post.slug);
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const heroImage = post.heroImage || post.image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${heroImage}`,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Cola Bola" },
    datePublished: post.date,
    mainEntityOfPage: postUrl,
  };

  return (
    <article className="portal-artigo">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Link
        href={`/blog?categoria=${encodeURIComponent(post.category)}`}
        className="portal-artigo-chapeu"
      >
        {post.category}
      </Link>

      <h1>{post.title}</h1>
      <p className="portal-artigo-deck">{post.excerpt}</p>

      <div className="portal-artigo-byline">
        <div className="portal-artigo-byline-info">
          <p>
            Por <strong>{post.author}</strong>
          </p>
          <p>
            {formatPostDate(post.date)} · {post.readTime} de leitura
          </p>
        </div>
        <ShareButtons title={post.title} url={postUrl} />
      </div>

      <details className="portal-resumo">
        <summary>Ver resumo</summary>
        <p>{post.excerpt}</p>
      </details>

      {heroImage && (
        <figure className="portal-artigo-hero">
          <Image
            src={heroImage}
            alt={post.title}
            width={800}
            height={400}
            priority
            unoptimized={heroImage.endsWith(".svg")}
          />
          <figcaption>{post.title}</figcaption>
        </figure>
      )}

      {/* Conteúdo controlado pela equipe Cola Bola (hoje mock, futuramente Notion) */}
      <div className="portal-artigo-corpo" dangerouslySetInnerHTML={{ __html: post.content }} />

      <CTABanner />

      {relatedPosts.length > 0 && (
        <section className="portal-vejatambem">
          <h2>Veja também</h2>
          <div className="portal-vejatambem-grid">
            {relatedPosts.map((rel) => (
              <Link key={rel.slug} href={`/blog/${rel.slug}`} className="portal-vejatambem-card">
                {rel.image && (
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    width={300}
                    height={200}
                    unoptimized={rel.image.endsWith(".svg")}
                  />
                )}
                <span>{rel.category}</span>
                <strong>{rel.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      )}

      <nav className="portal-adjacentes" aria-label="Post anterior e próximo">
        {previous ? (
          <Link href={`/blog/${previous.slug}`}>
            <span>← Post anterior</span>
            <strong>{previous.title}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/blog/${next.slug}`} className="portal-adjacentes-next">
            <span>Próximo post →</span>
            <strong>{next.title}</strong>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
