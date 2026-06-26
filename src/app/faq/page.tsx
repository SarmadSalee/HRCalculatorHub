import { Breadcrumb } from "@/components/layout/breadcrumb";
import { AdPlaceholder } from "@/components/layout/ad-placeholder";

const faqs = [
  { q: "Are all calculators free?", a: "Yes, every calculator is completely free with no registration required." },
  { q: "How accurate are the calculations?", a: "We use the latest tax slab rates and labor law regulations. Verify with professionals for official use." },
  { q: "Do you store my data?", a: "No. All calculations are local. We do not store or share your information." },
  { q: "Which countries are supported?", a: "We offer calculators for Pakistan, UAE, and US tax systems. Salary calculators work globally." },
  { q: "How is UAE gratuity calculated?", a: "Based on basic salary, years of service, and contract type per UAE labor law." },
  { q: "What is the standard overtime rate?", a: "1.5x under FLSA. Rates vary by country." },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-lg text-muted-foreground mb-8">Find answers to common questions about our HR calculators.</p>
      <AdPlaceholder id="faq-top-ad" className="mb-8" />
      <div className="space-y-4 mb-12">
        {faqs.map((faq, i) => (
          <details key={i} className="group border border-border rounded-lg">
            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium hover:bg-muted/50 rounded-lg transition-colors">
              {faq.q}
              <svg className="w-5 h-5 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </summary>
            <div className="p-4 pt-0 text-sm text-muted-foreground">{faq.a}</div>
          </details>
        ))}
      </div>
      <AdPlaceholder id="faq-bottom-ad" className="mb-8" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    </div>
  );
}