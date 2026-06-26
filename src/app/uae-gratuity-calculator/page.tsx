"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateGratuity } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "basicSalary", label: "Basic Salary (AED)", type: "number" as const, placeholder: "10000", defaultValue: "10000" },
  { id: "joiningDate", label: "Joining Date", type: "date" as const, defaultValue: "2020-01-01" },
  { id: "leavingDate", label: "Leaving Date", type: "date" as const, defaultValue: "2024-12-31" },
  { id: "contractType", label: "Contract Type", type: "select" as const, defaultValue: "unlimited", options: [
    { value: "limited", label: "Limited Contract" },
    { value: "unlimited", label: "Unlimited Contract" },
  ]},
];

export default function UAEgratuityCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ basicSalary: "10000", joiningDate: "2020-01-01", leavingDate: "2024-12-31", contractType: "unlimited" });
  const [results, setResults] = useState<ReturnType<typeof calculateGratuity>>([]);

  return (
    <CalculatorLayout
      title="UAE Gratuity Calculator - End of Service Benefit"
      description="Free UAE end-of-service gratuity calculator. Calculate gratuity based on basic salary, years of service, and contract type."
      h1="UAE Gratuity Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "UAE Gratuity Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateGratuity({ basicSalary: Number(values.basicSalary) || 0, joiningDate: values.joiningDate, leavingDate: values.leavingDate, contractType: values.contractType as "limited" | "unlimited" }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Gratuity = Daily Wage × Days × Years of Service\nDaily Wage = Basic Salary / 30"
      howItWorks="Enter your basic salary, joining/leaving dates, and contract type. The calculator estimates gratuity per UAE labor law."
      faqs={[
        { q: "Who is eligible for UAE gratuity?", a: "Employees with at least one year of continuous service." },
        { q: "What is the maximum gratuity limit?", a: "Total gratuity cannot exceed two years' (24 months) basic salary." },
        { q: "Is gratuity calculated on basic salary only?", a: "Yes, gratuity is calculated on basic salary, not including allowances." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/uae-tax-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">UAE Tax Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}