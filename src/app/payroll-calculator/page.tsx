"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculatePayroll } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "salary", label: "Base Salary ($)", type: "number" as const, placeholder: "50000", defaultValue: "50000" },
  { id: "overtime", label: "Overtime ($)", type: "number" as const, placeholder: "5000", defaultValue: "5000" },
  { id: "bonus", label: "Bonus ($)", type: "number" as const, placeholder: "3000", defaultValue: "3000" },
  { id: "tax", label: "Tax Withheld ($)", type: "number" as const, placeholder: "8000", defaultValue: "8000" },
  { id: "deductions", label: "Other Deductions ($)", type: "number" as const, placeholder: "2000", defaultValue: "2000" },
];

export default function PayrollCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ salary: "50000", overtime: "5000", bonus: "3000", tax: "8000", deductions: "2000" });
  const [results, setResults] = useState<ReturnType<typeof calculatePayroll>>([]);

  return (
    <CalculatorLayout
      title="Payroll Calculator - Calculate Net Payroll & Total Cost"
      description="Free online payroll calculator. Compute net payroll and total payroll cost including salary, overtime, bonuses, and deductions."
      h1="Payroll Calculator"
      breadcrumbItems={[{ label: "Calculators" }, { label: "Payroll Calculator" }]}
      fields={fields}
      results={results}
      calculate={() => setResults(calculatePayroll({ salary: Number(values.salary) || 0, overtime: Number(values.overtime) || 0, bonus: Number(values.bonus) || 0, tax: Number(values.tax) || 0, deductions: Number(values.deductions) || 0 }))}
      onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
      formula="Total Payroll Cost = Salary + Overtime + Bonus\nNet Payroll = Total Payroll Cost - Tax - Deductions"
      howItWorks="Enter base salary, overtime, bonuses, tax withholdings, and deductions. The calculator computes total payroll cost and net pay."
      faqs={[
        { q: "What is included in payroll cost?", a: "Total payroll cost includes base salary, overtime, bonuses, employer taxes, and benefits." },
        { q: "How is net payroll different from gross payroll?", a: "Gross payroll is total cost before deductions. Net payroll is what the employee receives." },
        { q: "What are common payroll deductions?", a: "Common deductions include income tax, social security, Medicare, health insurance, and retirement contributions." },
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