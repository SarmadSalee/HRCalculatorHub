"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateUAETax } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "salary", label: "Monthly Salary (AED)", type: "number" as const, placeholder: "15000", defaultValue: "15000" },
];

export default function UAETaxCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ salary: "15000" });
  const [results, setResults] = useState<ReturnType<typeof calculateUAETax>>([]);

  return (
    <CalculatorLayout
      title="UAE Tax Calculator - No Personal Income Tax in UAE"
      description="UAE has zero personal income tax. Use our calculator to understand payroll deductions in the UAE."
      h1="UAE Tax Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "UAE Tax Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateUAETax({ salary: Number(values.salary) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Personal Income Tax = 0% (No tax in UAE)"
      howItWorks="The UAE does not impose personal income tax. Enter your salary to see your tax-free income and other applicable deductions."
      faqs={[
        { q: "Is there personal income tax in UAE?", a: "No, the UAE does not impose personal income tax. Salaries are completely tax-free." },
        { q: "Are there any payroll deductions in UAE?", a: "For UAE nationals, social security (GOSI) contributions are mandatory at 5% employee and 12.5% employer." },
        { q: "Do expatriates pay tax in UAE?", a: "Expatriates do not pay personal income tax but may be taxed in their home country." },
      ]}
    >
      <section className="mb-8">
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-6 rounded-lg">
          <p className="font-semibold text-green-800 dark:text-green-200">The UAE has zero personal income tax. Your salary is completely tax-free.</p>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/uae-gratuity-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">UAE Gratuity Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}