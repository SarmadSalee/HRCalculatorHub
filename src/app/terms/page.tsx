import { Breadcrumb } from "@/components/layout/breadcrumb";

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Terms & Conditions" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-muted-foreground mb-4">Last updated: January 2025</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Use of Calculators</h2>
      <p>Our calculators are provided for estimation and educational purposes only. Always consult qualified professionals for official calculations.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">2. Accuracy</h2>
      <p>We do not guarantee that calculations are error-free. Tax laws may change without notice.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">3. Limitation of Liability</h2>
      <p>HRCalculatorHub shall not be liable for any damages arising from the use of our services.</p>
    </div>
  );
}