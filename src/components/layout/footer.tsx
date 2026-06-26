import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  calculators: [
    { href: "/salary-calculator", label: "Salary Calculator" },
    { href: "/payroll-calculator", label: "Payroll Calculator" },
    { href: "/pakistan-tax-calculator", label: "Pakistan Tax Calculator" },
    { href: "/uae-tax-calculator", label: "UAE Tax Calculator" },
    { href: "/us-tax-calculator", label: "US Tax Calculator" },
    { href: "/uae-gratuity-calculator", label: "UAE Gratuity Calculator" },
    { href: "/overtime-calculator", label: "Overtime Calculator" },
  ],
  pages: [
    { href: "/about", label: "About Us" },

    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/sitemap", label: "Sitemap" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="HRCalculatorHub"
                width={64}
                height={64}
                className="rounded-lg"
              />
              <span className="font-bold text-xl text-primary">HRCalculatorHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free professional HR and payroll calculation tools for HR managers, payroll officers, and employees worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Calculators</h4>
            <ul className="space-y-2">
              {footerLinks.calculators.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="footer-ad" className="mt-8 p-4 bg-muted rounded-lg text-center text-sm text-muted-foreground">
          Advertisement - Footer
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} HRCalculatorHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}