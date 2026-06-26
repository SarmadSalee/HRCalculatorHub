"use client";

import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { AdPlaceholder } from "@/components/layout/ad-placeholder";
import type { CalculatorResult } from "@/types";

interface CalculatorField {
  id: string;
  label: string;
  type: "number" | "text" | "date" | "select";
  placeholder?: string;
  options?: { value: string; label: string }[];
  defaultValue?: string;
}

interface CalculatorPageProps {
  title: string;
  description: string;
  h1: string;
  breadcrumbItems: { label: string; href?: string }[];
  fields: CalculatorField[];
  results: CalculatorResult[];
  calculate: () => void;
  onFieldChange: (id: string, value: string) => void;
  formula?: string;
  howItWorks?: string;
  faqs?: { q: string; a: string }[];
  children?: ReactNode;
}

export function CalculatorLayout({
  title,
  h1,
  breadcrumbItems,
  fields,
  results,
  calculate,
  onFieldChange,
  formula,
  howItWorks,
  faqs,
  children,
}: CalculatorPageProps) {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://hrcalculatorspro.com/" },
              ...breadcrumbItems
                .filter((b) => b.href)
                .map((b, i) => ({
                  "@type": "ListItem",
                  position: i + 2,
                  name: b.label,
                  item: `https://hrcalculatorspro.com${b.href}`,
                })),
              {
                "@type": "ListItem",
                position: breadcrumbItems.filter((b) => b.href).length + 2,
                name: title,
                item: `https://hrcalculatorspro.com${breadcrumbItems[breadcrumbItems.length - 1]?.href || ""}`,
              },
            ],
          }),
        }}
      />
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
        {h1}
      </h1>

      <AdPlaceholder id={`top-ad-${title.toLowerCase().replace(/\s+/g, "-")}`} className="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="glass-card border border-border/40 shadow-xl shadow-slate-200/5 hover:border-primary/20 transition-all duration-300">
          <CardContent className="premium-card-padding">
            <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
              <div className="w-2.5 h-6 bg-primary rounded-full" />
              <h2 className="text-xl font-bold tracking-tight">Enter Your Details</h2>
            </div>
            <div className="space-y-5">
              {fields.map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <Label htmlFor={field.id} className="text-sm font-semibold tracking-wide text-foreground/80">{field.label}</Label>
                  {field.type === "select" ? (
                    <Select
                      id={field.id}
                      options={field.options || []}
                      defaultValue={field.defaultValue}
                      onChange={(e) => onFieldChange(field.id, e.target.value)}
                      className="w-full"
                    />
                  ) : (
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      defaultValue={field.defaultValue}
                      onChange={(e) => onFieldChange(field.id, e.target.value)}
                      className="w-full"
                    />
                  )}
                </div>
              ))}
              <Button onClick={calculate} className="w-full mt-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 cursor-pointer transition-all duration-200 py-6 text-base font-semibold">
                Calculate Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/40 shadow-xl shadow-slate-200/5 hover:border-primary/20 transition-all duration-300">
          <CardContent className="premium-card-padding">
            <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
              <div className="w-2.5 h-6 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold tracking-tight">Calculation Results</h2>
            </div>
            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((r, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-4 rounded-xl transition-all duration-200 ${
                      r.highlight
                        ? "bg-primary/10 border-2 border-primary/25 shadow-sm scale-[1.02]"
                        : "bg-muted/50 border border-border/20"
                    }`}
                  >
                    <span className={`font-semibold ${r.highlight ? "text-primary" : "text-foreground/95"}`}>{r.label}</span>
                    <span className={r.highlight ? "text-primary font-extrabold text-xl tracking-tight" : "font-bold text-foreground"}>{r.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-border/60 rounded-2xl bg-muted/10">
                <p className="text-muted-foreground font-medium max-w-xs">Enter your details and click **Calculate Now** to see the results.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <AdPlaceholder id={`mid-ad-${title.toLowerCase().replace(/\s+/g, "-")}`} className="mb-8" />

      {formula && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Calculation Formula</h2>
          <Card className="border border-border/40">
            <CardContent className="p-6 bg-muted/20">
              <pre className="font-mono text-sm bg-muted/50 p-5 rounded-xl border border-border/40 overflow-x-auto whitespace-pre-wrap leading-relaxed text-foreground/80">{formula}</pre>
            </CardContent>
          </Card>
        </section>
      )}

      {howItWorks && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">How It Works</h2>
          <Card className="border border-border/40">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">{howItWorks}</p>
            </CardContent>
          </Card>
        </section>
      )}

      {children}

      {faqs && faqs.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-border/60 rounded-xl bg-card overflow-hidden transition-all duration-300 open:shadow-md">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold hover:bg-muted/40 rounded-xl transition-colors select-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/10 pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
          {faqs.length > 0 && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              }}
            />
          )}
        </section>
      )}

      <AdPlaceholder id={`bottom-ad-${title.toLowerCase().replace(/\s+/g, "-")}`} className="mb-8" />
    </div>
  );
}