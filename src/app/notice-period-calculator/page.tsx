"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateNoticePeriod } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "resignationDate", label: "Resignation Date", type: "date" as const, defaultValue: new Date().toISOString().split("T")[0] },
  { id: "noticePeriodDays", label: "Notice Period (days)", type: "number" as const, placeholder: "30", defaultValue: "30" },
];

export default function NoticePeriodCalculator() {
  const [values, setValues] = useState<Record<string, string>>({
    resignationDate: new Date().toISOString().split("T")[0],
    noticePeriodDays: "30",
  });
  const [results, setResults] = useState<ReturnType<typeof calculateNoticePeriod>>([]);

  return (
    <CalculatorLayout
      title="Notice Period Calculator - Calculate Last Working Day"
      description="Free notice period calculator. Calculate last working day based on resignation date and notice period."
      h1="Notice Period Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Notice Period Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateNoticePeriod({ resignationDate: values.resignationDate, noticePeriodDays: Number(values.noticePeriodDays) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Last Working Day = Resignation Date + Notice Period (Days)"
      howItWorks="Enter your resignation date and notice period in days. The calculator determines your last working day."
      faqs={[
        { q: "What is a typical notice period?", a: "30 to 90 days depending on contract and local labor laws." },
        { q: "Does the notice period include weekends?", a: "Yes, calculated in calendar days." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/working-days-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Working Days Calculator</Link>
          <Link href="/leave-encashment-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Leave Encashment Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}