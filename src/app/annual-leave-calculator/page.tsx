"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateAnnualLeave } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "leaveEarnedPerMonth", label: "Leave Earned Per Month (days)", type: "number" as const, placeholder: "2.5", defaultValue: "2.5" },
  { id: "employmentDuration", label: "Employment Duration (months)", type: "number" as const, placeholder: "12", defaultValue: "12" },
];

export default function AnnualLeaveCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ leaveEarnedPerMonth: "2.5", employmentDuration: "12" });
  const [results, setResults] = useState<ReturnType<typeof calculateAnnualLeave>>([]);

  return (
    <CalculatorLayout
      title="Annual Leave Calculator - Calculate Leave Balance"
      description="Free annual leave calculator. Calculate accrued annual leave balance based on monthly leave entitlement."
      h1="Annual Leave Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Annual Leave Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateAnnualLeave({ leaveEarnedPerMonth: Number(values.leaveEarnedPerMonth) || 0, employmentDuration: Number(values.employmentDuration) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Total Leave = Leave Per Month × Months of Service"
      howItWorks="Enter leave days earned per month and employment duration. The calculator computes total leave balance."
      faqs={[
        { q: "How many leave days per year is standard?", a: "Typically 20-30 working days per year depending on country and company." },
        { q: "Can unused leave be carried forward?", a: "Depends on company policy and local labor laws." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/leave-encashment-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Leave Encashment Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}