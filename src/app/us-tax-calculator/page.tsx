"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateUSTax } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "salary", label: "Annual Salary ($)", type: "number" as const, placeholder: "75000", defaultValue: "75000" },
  { id: "state", label: "State", type: "select" as const, defaultValue: "california", options: [
    { value: "california", label: "California" },
    { value: "texas", label: "Texas" },
    { value: "new-york", label: "New York" },
    { value: "florida", label: "Florida" },
    { value: "other", label: "Other" },
  ]},
  { id: "filingStatus", label: "Filing Status", type: "select" as const, defaultValue: "single", options: [
    { value: "single", label: "Single" },
    { value: "married", label: "Married Filing Jointly" },
  ]},
];

export default function USTaxCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ salary: "75000", state: "california", filingStatus: "single" });
  const [results, setResults] = useState<ReturnType<typeof calculateUSTax>>([]);

  return (
    <CalculatorLayout
      title="US Tax Calculator - Federal Income Tax Estimator"
      description="Free US federal income tax calculator. Estimate your federal tax based on salary, state, and filing status."
      h1="US Federal Tax Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "US Tax Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateUSTax({ salary: Number(values.salary) || 0, state: values.state, filingStatus: values.filingStatus }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Taxable Income = Salary - Standard Deduction\nStandard Deduction (2025): $14,600 (Single) / $29,200 (Married)"
      howItWorks="Enter your annual salary, state, and filing status. The calculator estimates federal income tax using progressive tax brackets."
      faqs={[
        { q: "What is the standard deduction for 2025?", a: "$14,600 for single filers, $29,200 for married filing jointly." },
        { q: "Does this include state tax?", a: "This estimates federal income tax only. State taxes vary and are not included." },
        { q: "Is this accurate for filing?", a: "This is an estimate only. Consult a tax professional for your actual tax return." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Example Calculation</h2>
        <div className="bg-muted p-6 rounded-lg">
          <p><strong>Single filer, $75,000 salary:</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Taxable Income = $75,000 - $14,600 = $60,400</li>
            <li>Estimated Federal Tax: <strong>~$8,341</strong></li>
          </ul>
        </div>
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