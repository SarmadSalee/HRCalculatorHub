"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateWorkingDays } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "startDate", label: "Start Date", type: "date" as const, defaultValue: "2025-01-01" },
  { id: "endDate", label: "End Date", type: "date" as const, defaultValue: "2025-01-31" },
];

export default function WorkingDaysCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ startDate: "2025-01-01", endDate: "2025-01-31" });
  const [results, setResults] = useState<ReturnType<typeof calculateWorkingDays>>([]);

  return (
    <CalculatorLayout
      title="Working Days Calculator - Count Business Days"
      description="Free working days calculator. Count business days between two dates excluding weekends."
      h1="Working Days Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Working Days Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateWorkingDays({ startDate: values.startDate, endDate: values.endDate }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Working Days = Total Days in Range - Weekend Days"
      howItWorks="Select start and end dates. The calculator counts days excluding Saturdays and Sundays."
      faqs={[
        { q: "Does this exclude public holidays?", a: "No, only weekends are excluded. Public holidays vary by country." },
        { q: "What is a working day?", a: "Monday through Friday, excluding weekends." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/shift-hours-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Shift Hours Calculator</Link>
          <Link href="/attendance-percentage-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Attendance Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}