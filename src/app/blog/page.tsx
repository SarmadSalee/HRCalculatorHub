import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { blogPosts } from "@/data/blog";
import { AdPlaceholder } from "@/components/layout/ad-placeholder";

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Blog" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">HR & Payroll Blog</h1>
      <p className="text-lg text-muted-foreground mb-8">Expert guides, tutorials, and resources for HR professionals and employees.</p>
      <AdPlaceholder id="blog-top-ad" className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wide">{post.category}</span>
                <h2 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <AdPlaceholder id="blog-bottom-ad" className="mb-8" />
    </div>
  );
}