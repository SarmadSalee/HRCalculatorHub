"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateOvertime } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "hourlyRate", label: "Hourly Rate ($)", type: "number" as const, placeholder: "25", defaultValue: "25" },
  { id: "overtimeHours", label: "Overtime Hours", type: "number" as const, placeholder: "10", defaultValue: "10" },
  { id: "multiplier", label: "Multiplier", type: "number" as const, placeholder: "1.5", defaultValue: "1.5" },
];

export default function OvertimeCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ hourlyRate: "25", overtimeHours: "10", multiplier: "1.5" });
  const [results, setResults] = useState<ReturnType<typeof calculateOvertime>>([]);

  return (
    <CalculatorLayout
      title="Overtime Calculator - Calculate Overtime Pay"
      description="Free overtime pay calculator. Compute overtime compensation based on hourly rate, hours, and multiplier."
      h1="Overtime Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Overtime Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateOvertime({ hourlyRate: Number(values.hourlyRate) || 0, overtimeHours: Number(values.overtimeHours) || 0, multiplier: Number(values.multiplier) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Overtime Pay = Hourly Rate × Overtime Hours × Multiplier"
      howItWorks="Enter your hourly rate, overtime hours, and multiplier (typically 1.5x). The calculator computes total overtime pay."
      faqs={[
        { q: "What is the standard overtime multiplier?", a: "1.5x (time-and-a-half) under FLSA. Some employers offer 2x for holidays." },
        { q: "Who is eligible for overtime?", a: "Non-exempt employees under FLSA working over 40 hours per week." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/hourly-wage-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Hourly Wage Calculator</Link>
          <Link href="/shift-hours-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Shift Hours Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}