import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  getAllPosts,
  getAllCategories,
  getPaginatedPosts,
  buildBlogPageHref,
} from "@/lib/blog-data";
import Pagination from "@/components/blog/Pagination";
import { FeedItem, SidebarPortal } from "@/components/portal/PortalHome";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  return {
    title: `Blog — Página ${resolvedParams.page}`,
    description: "Dicas, novidades e conteúdo sobre futebol, vôlei, basquete e manutenção de bolas esportivas.",
  };
}

export default async function BlogPaginatedPage({ params, searchParams }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const pageNumber = Number(resolvedParams.page);
  if (!Number.isInteger(pageNumber) || pageNumber < 1) {
    notFound();
  }
  if (pageNumber === 1) {
    redirect("/blog");
  }

  const category = resolvedSearchParams?.categoria || null;
  const query = resolvedSearchParams?.q || null;

  const { posts, currentPage, totalPages, totalPosts } = getPaginatedPosts({
    page: pageNumber,
    category,
    query,
  });

  if (pageNumber > totalPages) {
    notFound();
  }

  return (
    <div className="portal-main">
      <div className="portal-filtro-info">
        <span>
          Página {currentPage} de {totalPages} — {totalPosts} post(s)
          {category && <> na seção <strong>{category}</strong></>}
          {query && <> para <strong>&quot;{query}&quot;</strong></>}
        </span>
        <Link href="/blog">← Voltar ao início</Link>
      </div>

      <div className="portal-corpo">
        <section aria-label="Notícias">
          <h2 className="portal-feed-titulo">Últimas notícias</h2>
          {posts.map((post) => (
            <FeedItem key={post.slug} post={post} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            buildHref={(page) => buildBlogPageHref(page, resolvedSearchParams)}
          />
        </section>

        <SidebarPortal maisLidos={getAllPosts().slice(0, 5)} categories={getAllCategories()} />
      </div>
    </div>
  );
}
