"use client";

import { useState } from "react";
import { CalculatorLayout } from "@/components/calculators/calculator-layout";
import { calculateSalary } from "@/lib/calculators";
import Link from "next/link";

const fields = [
  { id: "basicSalary", label: "Basic Salary ($)", type: "number" as const, placeholder: "50000", defaultValue: "50000" },
  { id: "allowances", label: "Allowances ($)", type: "number" as const, placeholder: "5000", defaultValue: "5000" },
  { id: "bonuses", label: "Bonuses ($)", type: "number" as const, placeholder: "2000", defaultValue: "2000" },
  { id: "commission", label: "Commission ($)", type: "number" as const, placeholder: "1000", defaultValue: "1000" },
  { id: "deductions", label: "Deductions ($)", type: "number" as const, placeholder: "3000", defaultValue: "3000" },
];

export default function SalaryCalculator() {
  const [values, setValues] = useState<Record<string, string>>({ basicSalary: "50000", allowances: "5000", bonuses: "2000", commission: "1000", deductions: "3000" });
  const [results, setResults] = useState<ReturnType<typeof calculateSalary>>([]);

  return (
    <>
      <CalculatorLayout
        title="Salary Calculator - Calculate Gross & Net Salary"
        description="Free online salary calculator. Calculate gross salary and net salary after deductions. Includes allowances, bonuses, and commission."
        h1="Salary Calculator"
        breadcrumbItems={[{ label: "Calculators" }, { label: "Salary Calculator" }]}
        fields={fields}
        results={results}
        calculate={() => setResults(calculateSalary({ basicSalary: Number(values.basicSalary) || 0, allowances: Number(values.allowances) || 0, bonuses: Number(values.bonuses) || 0, commission: Number(values.commission) || 0, deductions: Number(values.deductions) || 0 }))}
        onFieldChange={(id, value) => setValues((p) => ({ ...p, [id]: value }))}
        formula="Gross Salary = Basic Salary + Allowances + Bonuses + Commission\nNet Salary = Gross Salary - Deductions"
        howItWorks="Enter your basic salary, allowances, bonuses, commission, and deductions. The calculator computes your gross salary and net take-home pay."
        faqs={[
          { q: "What is gross salary?", a: "Gross salary is the total amount an employee earns before any deductions. It includes basic salary, allowances, bonuses, and commissions." },
          { q: "What is net salary?", a: "Net salary, also known as take-home pay, is the amount an employee receives after all deductions." },
          { q: "What are common salary deductions?", a: "Common deductions include income tax, social security, health insurance, retirement contributions, and loan repayments." },
        ]}
      >
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Example Calculation</h2>
          <div className="bg-muted p-6 rounded-lg">
            <p className="mb-2"><strong>Example:</strong> Basic $50,000, Allowances $5,000, Bonuses $2,000, Commission $1,000, Deductions $3,000:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Gross Salary = $50,000 + $5,000 + $2,000 + $1,000 = <strong>$58,000</strong></li>
              <li>Net Salary = $58,000 - $3,000 = <strong>$55,000</strong></li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/payroll-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Payroll Calculator</Link>
            <Link href="/hourly-wage-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Hourly Wage Calculator</Link>
            <Link href="/salary-increment-calculator" className="text-sm p-3 border rounded-lg hover:border-primary/50">Salary Increment Calculator</Link>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Salary Calculator", url: "https://hrcalculatorspro.com/salary-calculator", applicationCategory: "FinanceApplication", operatingSystem: "Web", description: "Free online salary calculator." }) }} />
      </CalculatorLayout>
    </>
  );
}