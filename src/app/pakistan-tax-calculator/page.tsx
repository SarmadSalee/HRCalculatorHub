"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculatePakistanTax } from "@/lib/calculators";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const fields = [
  { id: "monthlySalary", label: "Monthly Salary (PKR)", type: "number" as const, placeholder: "100000", defaultValue: "100000" },
  { id: "annualSalary", label: "Annual Salary (PKR, optional)", type: "number" as const, placeholder: "1200000" },
];

export default function PakistanTaxCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ monthlySalary: "100000", annualSalary: "" });
  const [results, setResults] = useState<ReturnType<typeof calculatePakistanTax>["results"]>([]);
  const [taxSlabs, setTaxSlabs] = useState<ReturnType<typeof calculatePakistanTax>["taxSlabs"]>([]);

  return (
    <CalculatorLayout
      title="Pakistan Tax Calculator - Calculate Income Tax 2025"
      description="Free Pakistan income tax calculator. Calculate monthly and annual tax based on FBR tax slabs. Get your effective tax rate instantly."
      h1="Pakistan Income Tax Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Pakistan Tax Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => {
        const r = calculatePakistanTax({ monthlySalary: Number(values.monthlySalary) || 0, annualSalary: Number(values.annualSalary) || 0 });
        setResults(r.results);
        setTaxSlabs(r.taxSlabs);
      }}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Tax = Sum of (Taxable Amount in Each Slab × Slab Rate)\nEffective Tax Rate = (Total Tax / Annual Income) × 100"
      howItWorks="Enter your monthly or annual salary. The calculator applies Pakistan's progressive tax slabs to determine your tax liability."
      faqs={[
        { q: "What are the current Pakistan tax slabs?", a: "Pakistan uses progressive tax: 0% up to PKR 600k, 5% up to PKR 1.2M, 15% up to PKR 2.2M, 25% up to PKR 3.2M, 30% up to PKR 4.1M, 35% above PKR 4.1M." },
        { q: "Is tax calculated on monthly or annual income?", a: "Income tax in Pakistan is calculated on annual income. Monthly tax = Annual Tax / 12." },
        { q: "What is taxable income?", a: "Taxable income is your total annual income after applicable deductions and exemptions." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tax Slab Table</h2>
        <Card>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Income Range (PKR)</th>
                    <th className="text-left py-2 pr-4">Rate</th>
                    <th className="text-left py-2">Your Tax</th>
                  </tr>
                </thead>
                <tbody>
                  {taxSlabs.length > 0 ? taxSlabs.map((slab, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-2 pr-4">{slab.min.toLocaleString()} - {slab.max === Infinity ? "Above" : slab.max.toLocaleString()}</td>
                      <td className="py-2 pr-4">{(slab.rate * 100)}%</td>
                      <td className="py-2">PKR {slab.tax.toFixed(2)}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={3} className="py-2 text-muted-foreground">Calculate to see breakdown</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/salary-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Salary Calculator</Link>
          <Link href="/payroll-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Payroll Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}