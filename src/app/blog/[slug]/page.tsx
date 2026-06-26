import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { blogPosts } from "@/data/blog";
import { AdPlaceholder } from "@/components/layout/ad-placeholder";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      <article>
        <header className="mb-8">
          <span className="text-sm font-medium text-primary uppercase tracking-wide">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By {post.author}</span>
            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </header>
        <AdPlaceholder id="blog-post-top-ad" className="mb-8" />
        <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace("## ", "")}</h2>;
            if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-semibold mt-6 mb-3">{line.replace("### ", "")}</h3>;
            if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) return <li key={i} className="ml-6 mb-1 list-decimal">{line.replace(/^\d+\.\s*/, "")}</li>;
            if (line.startsWith("- ")) return <li key={i} className="ml-6 mb-1 list-disc">{line.replace("- ", "")}</li>;
            if (line.trim() === "") return <br key={i} />;
            if (line.startsWith("**")) {
              const m = line.match(/\*\*(.+?)\*\*(.*)/);
              if (m) return <p key={i} className="mb-2"><strong>{m[1]}</strong>{m[2]}</p>;
            }
            return <p key={i} className="mb-3">{line}</p>;
          })}
        </div>
        <AdPlaceholder id="blog-post-bottom-ad" className="mb-8" />
      </article>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.filter((p) => p.slug !== slug).slice(0, 2).map((r) => (
            <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
              <Card className="h-full"><CardContent className="p-4">
                <h3 className="font-semibold group-hover:text-primary">{r.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{r.description}</p>
              </CardContent></Card>
            </Link>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.description, author: { "@type": "Person", name: post.author }, datePublished: post.publishedAt, publisher: { "@type": "Organization", name: "HRCalculatorHub" } }) }} />
    </div>
  );
}