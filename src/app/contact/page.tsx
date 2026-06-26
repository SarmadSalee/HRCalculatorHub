import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Contact" }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8">Have questions or feedback? We would love to hear from you.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card><CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
          <div className="space-y-4">
            <div><label className="block text-sm font-medium mb-1">Name</label><input type="text" className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="Your name" /></div>
            <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="your@email.com" /></div>
            <div><label className="block text-sm font-medium mb-1">Message</label><textarea className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" rows={5} placeholder="Your message" /></div>
            <button className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Send Message</button>
          </div>
        </CardContent></Card>
        <Card><CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-muted-foreground"><strong className="text-foreground">Email:</strong> contact@hrcalculatorspro.com</p>
          <p className="text-muted-foreground mt-2"><strong className="text-foreground">Response Time:</strong> Within 24-48 hours</p>
        </CardContent></Card>
      </div>
    </div>
  );
}