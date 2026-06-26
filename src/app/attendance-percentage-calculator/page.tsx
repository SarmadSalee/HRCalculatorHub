"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateAttendance } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "presentDays", label: "Present Days", type: "number" as const, placeholder: "22", defaultValue: "22" },
  { id: "absentDays", label: "Absent Days", type: "number" as const, placeholder: "3", defaultValue: "3" },
  { id: "totalDays", label: "Total Days (optional)", type: "number" as const, placeholder: "25" },
];

export default function AttendanceCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ presentDays: "22", absentDays: "3", totalDays: "" });
  const [results, setResults] = useState<ReturnType<typeof calculateAttendance>>([]);

  return (
    <CalculatorLayout
      title="Attendance Percentage Calculator"
      description="Free attendance percentage calculator. Calculate attendance rate from present and absent days."
      h1="Attendance Percentage Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Attendance Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateAttendance({ presentDays: Number(values.presentDays) || 0, absentDays: Number(values.absentDays) || 0, totalDays: Number(values.totalDays) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Attendance Percentage = (Present Days / Total Days) × 100"
      howItWorks="Enter present days and absent days. The calculator computes your attendance percentage."
      faqs={[
        { q: "What is a good attendance percentage?", a: "Most organizations expect 95% or higher." },
        { q: "How is attendance percentage used?", a: "For performance reviews, bonus eligibility, and compliance." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/working-days-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Working Days Calculator</Link>
          <Link href="/annual-leave-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Annual Leave Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}