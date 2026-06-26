import { Breadcrumb } from "@/components/layout/breadcrumb";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "About Us" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">About HRCalculatorHub</h1>
      <p className="text-lg text-muted-foreground mb-6">HRCalculatorHub is a free online platform providing professional HR and payroll calculation tools worldwide.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
      <p className="mb-4">To make HR and payroll calculations accessible, accurate, and easy for everyone.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>15+ free HR and payroll calculator tools</li>
        <li>Accurate calculations based on current tax slabs and labor laws</li>
        <li>Expert guides and articles on HR topics</li>
        <li>Privacy-first approach - no data storage</li>
        <li>Mobile-responsive design for all devices</li>
      </ul>
    </div>
  );
}