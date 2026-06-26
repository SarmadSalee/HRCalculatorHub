"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateLeaveEncashment } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "salary", label: "Monthly Salary ($)", type: "number" as const, placeholder: "5000", defaultValue: "5000" },
  { id: "unusedLeaveDays", label: "Unused Leave Days", type: "number" as const, placeholder: "10", defaultValue: "10" },
];

export default function LeaveEncashmentCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ salary: "5000", unusedLeaveDays: "10" });
  const [results, setResults] = useState<ReturnType<typeof calculateLeaveEncashment>>([]);

  return (
    <CalculatorLayout
      title="Leave Encashment Calculator"
      description="Free leave encashment calculator. Calculate monetary value of unused leave days based on salary."
      h1="Leave Encashment Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Leave Encashment Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateLeaveEncashment({ salary: Number(values.salary) || 0, unusedLeaveDays: Number(values.unusedLeaveDays) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Daily Rate = Monthly Salary / 30\nEncashment Amount = Daily Rate × Unused Leave Days"
      howItWorks="Enter your monthly salary and unused leave days. The calculator computes the encashment amount."
      faqs={[
        { q: "What is leave encashment?", a: "Monetary compensation for unused leave days upon resignation or retirement." },
        { q: "How is it calculated?", a: "Monthly salary divided by 30 gives daily rate, multiplied by unused days." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/annual-leave-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Annual Leave Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}