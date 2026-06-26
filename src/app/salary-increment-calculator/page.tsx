"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateSalaryIncrement } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "currentSalary", label: "Current Salary ($)", type: "number" as const, placeholder: "50000", defaultValue: "50000" },
  { id: "incrementPercentage", label: "Increment Percentage (%)", type: "number" as const, placeholder: "10", defaultValue: "10" },
];

export default function SalaryIncrementCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ currentSalary: "50000", incrementPercentage: "10" });
  const [results, setResults] = useState<ReturnType<typeof calculateSalaryIncrement>>([]);

  return (
    <CalculatorLayout
      title="Salary Increment Calculator"
      description="Free salary increment calculator. Calculate new salary after a percentage increase."
      h1="Salary Increment Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Salary Increment Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateSalaryIncrement({ currentSalary: Number(values.currentSalary) || 0, incrementPercentage: Number(values.incrementPercentage) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Increase = Current Salary × (Increment % / 100)\nNew Salary = Current Salary + Increase"
      howItWorks="Enter your current salary and increment percentage. The calculator computes the increase amount and new salary."
      faqs={[
        { q: "What is a typical increment percentage?", a: "Annual increments range from 3% to 10% depending on performance and industry." },
        { q: "Is increment calculated on gross salary?", a: "Yes, increments are typically calculated on gross salary." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/salary-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Salary Calculator</Link>
          <Link href="/hourly-wage-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Hourly Wage Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}