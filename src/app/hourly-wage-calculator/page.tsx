"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateHourlyWage } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "monthlySalary", label: "Monthly Salary ($)", type: "number" as const, placeholder: "5000", defaultValue: "5000" },
  { id: "workingHours", label: "Monthly Working Hours", type: "number" as const, placeholder: "173", defaultValue: "173" },
];

export default function HourlyWageCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ monthlySalary: "5000", workingHours: "173" });
  const [results, setResults] = useState<ReturnType<typeof calculateHourlyWage>>([]);

  return (
    <CalculatorLayout
      title="Hourly Wage Calculator - Convert Salary to Hourly Rate"
      description="Free hourly wage calculator. Convert monthly salary to hourly wage rate based on working hours."
      h1="Hourly Wage Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Hourly Wage Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateHourlyWage({ monthlySalary: Number(values.monthlySalary) || 0, workingHours: Number(values.workingHours) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Hourly Wage = Monthly Salary / Monthly Working Hours"
      howItWorks="Enter your monthly salary and working hours to calculate your hourly wage rate."
      faqs={[
        { q: "What are standard monthly working hours?", a: "Typically 173 hours (40 hrs/week × 52 weeks / 12 months)." },
        { q: "Can I use this for freelancing?", a: "Yes, freelancers can use it to determine hourly rates based on desired income." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/salary-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Salary Calculator</Link>
          <Link href="/overtime-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Overtime Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}