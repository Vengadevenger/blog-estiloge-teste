import Link from "next/link";
import { getAllPosts, getPaginatedPosts, buildBlogPageHref } from "@/lib/blog-data";
import Pagination from "@/components/blog/Pagination";
import {
  CarrosselUltimas,
  DestaquesMosaico,
  FeedItem,
  SidebarPortal,
} from "@/components/portal/PortalHome";
import { getAllCategories } from "@/lib/blog-data";

export const metadata = {
  title: "Blog",
  description:
    "Dicas, novidades e conteúdo sobre futebol, vôlei, basquete e manutenção de bolas esportivas. Pelo time da Cola Bola.",
};

export default async function BlogListingPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const category = resolvedParams?.categoria || null;
  const query = resolvedParams?.q || null;
  const comFiltro = Boolean(category || query);

  const { posts, currentPage, totalPages, totalPosts } = getPaginatedPosts({
    page: 1,
    category,
    query,
  });

  const todas = getAllPosts();
  const categories = getAllCategories();
  // Sem filtro: os 2 primeiros viram manchete (mosaico); o feed lista o resto —
  // ou todos, enquanto o blog tiver poucos posts (evita feed vazio)
  const destaques = comFiltro ? [] : posts.slice(0, 2);
  const feed = comFiltro || posts.length <= 4 ? posts : posts.slice(2);

  return (
    <>
      {!comFiltro && <CarrosselUltimas posts={todas.slice(0, 8)} />}

      <div className="portal-main">
        {comFiltro && (
          <div className="portal-filtro-info">
            <span>
              {totalPosts} resultado(s)
              {category && <> na seção <strong>{category}</strong></>}
              {query && <> para <strong>&quot;{query}&quot;</strong></>}
            </span>
            <Link href="/blog">Limpar filtro ✕</Link>
          </div>
        )}

        {!comFiltro && <DestaquesMosaico posts={destaques} />}

        <div className="portal-corpo">
          <section aria-label="Últimas notícias">
            <h2 className="portal-feed-titulo">Últimas notícias</h2>
            {feed.map((post) => (
              <FeedItem key={post.slug} post={post} />
            ))}
            {feed.length === 0 && <p>Nenhum post encontrado.</p>}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              buildHref={(page) => buildBlogPageHref(page, resolvedParams)}
            />
          </section>

          <SidebarPortal maisLidos={todas.slice(0, 5)} categories={categories} />
        </div>
      </div>
    </>
  );
}
