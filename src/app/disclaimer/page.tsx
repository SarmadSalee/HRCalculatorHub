import { Breadcrumb } from "@/components/layout/breadcrumb";

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Disclaimer" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Disclaimer</h1>
      <p className="mb-4">The information and calculators on HRCalculatorHub are for general informational purposes only. They do not constitute professional financial, tax, legal, or HR advice.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">No Professional Advice</h2>
      <p>Always consult qualified professionals for advice specific to your situation.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Accuracy</h2>
      <p>Tax laws and labor regulations may change. We do not warrant complete accuracy of all information.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
      <p>HRCalculatorHub shall not be held liable for any losses arising from use of our tools or content.</p>
    </div>
  );
}