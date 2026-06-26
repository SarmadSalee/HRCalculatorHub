import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blog";

const calcLinks = [
  { href: "/salary-calculator", title: "Salary Calculator" },
  { href: "/payroll-calculator", title: "Payroll Calculator" },
  { href: "/pakistan-tax-calculator", title: "Pakistan Tax Calculator" },
  { href: "/uae-tax-calculator", title: "UAE Tax Calculator" },
  { href: "/us-tax-calculator", title: "US Tax Calculator" },
  { href: "/uae-gratuity-calculator", title: "UAE Gratuity Calculator" },
  { href: "/overtime-calculator", title: "Overtime Calculator" },
  { href: "/attendance-percentage-calculator", title: "Attendance Calculator" },
  { href: "/leave-encashment-calculator", title: "Leave Encashment Calculator" },
  { href: "/working-days-calculator", title: "Working Days Calculator" },
  { href: "/shift-hours-calculator", title: "Shift Hours Calculator" },
  { href: "/annual-leave-calculator", title: "Annual Leave Calculator" },
  { href: "/salary-increment-calculator", title: "Salary Increment Calculator" },
  { href: "/hourly-wage-calculator", title: "Hourly Wage Calculator" },
  { href: "/notice-period-calculator", title: "Notice Period Calculator" },
];

const pageLinks = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About Us" },
  { href: "/contact", title: "Contact" },
  { href: "/faq", title: "FAQ" },
  { href: "/blog", title: "Blog" },
  { href: "/privacy-policy", title: "Privacy Policy" },
  { href: "/terms", title: "Terms & Conditions" },
  { href: "/disclaimer", title: "Disclaimer" },
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Sitemap" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Sitemap</h1>
      <p className="text-lg text-muted-foreground mb-8">Complete site index. Browse all tools, articles, and pages.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card><CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Pages</h2>
          <ul className="space-y-2">{pageLinks.map((l) => <li key={l.href}><Link href={l.href} className="text-primary hover:underline text-sm">{l.title}</Link></li>)}</ul>
        </CardContent></Card>
        <Card><CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Calculators</h2>
          <ul className="space-y-2">{calcLinks.map((l) => <li key={l.href}><Link href={l.href} className="text-primary hover:underline text-sm">{l.title}</Link></li>)}</ul>
        </CardContent></Card>
        <Card><CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Blog Articles</h2>
          <ul className="space-y-2">{blogPosts.map((p) => <li key={p.slug}><Link href={`/blog/${p.slug}`} className="text-primary hover:underline text-sm">{p.title}</Link></li>)}</ul>
        </CardContent></Card>
      </div>
    </div>
  );
}