"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateShiftHours } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "startTime", label: "Start Time (HH:MM, 24h)", type: "text" as const, placeholder: "09:00", defaultValue: "09:00" },
  { id: "endTime", label: "End Time (HH:MM, 24h)", type: "text" as const, placeholder: "17:00", defaultValue: "17:00" },
  { id: "breakTime", label: "Break Time (minutes)", type: "number" as const, placeholder: "30", defaultValue: "30" },
];

export default function ShiftHoursCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ startTime: "09:00", endTime: "17:00", breakTime: "30" });
  const [results, setResults] = useState<ReturnType<typeof calculateShiftHours>>([]);

  return (
    <CalculatorLayout
      title="Shift Hours Calculator - Calculate Work Hours"
      description="Free shift hours calculator. Calculate total hours worked including break time deduction."
      h1="Shift Hours Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Shift Hours Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculateShiftHours({ startTime: values.startTime, endTime: values.endTime, breakTime: Number(values.breakTime) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Total Hours = (End Time - Start Time - Break Time) / 60"
      howItWorks="Enter shift start time, end time (24h), and break duration. The calculator computes total hours worked."
      faqs={[
        { q: "What if my shift crosses midnight?", a: "The calculator handles overnight shifts (e.g., 22:00 to 06:00)." },
        { q: "What time format to use?", a: "24-hour format. 9 AM = 09:00, 5 PM = 17:00." },
      ]}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/overtime-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Overtime Calculator</Link>
          <Link href="/working-days-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Working Days Calculator</Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}