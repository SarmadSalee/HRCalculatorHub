import { Breadcrumb } from "@/components/layout/breadcrumb";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">Last updated: January 2025</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
      <p>HRCalculatorHub respects your privacy. We do not collect or store any personal data. All calculations are performed locally in your browser.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">2. Cookies</h2>
      <p>We may use essential cookies for website functionality (e.g., theme preferences). We do not use tracking cookies for advertising.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">3. Third-Party Services</h2>
      <p>We may use Google AdSense for advertisements. Google may use cookies to serve personalized ads. You can opt out via Google Ad Settings.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact</h2>
      <p>Questions? Email us at contact@hrcalculatorspro.com.</p>
    </div>
  );
}