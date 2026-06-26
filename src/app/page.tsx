import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AdPlaceholder } from "@/components/layout/ad-placeholder";
import {
  DollarSign,
  Briefcase,
  Receipt,
  Percent,
  Building2,
  Coins,
  Clock,
  CalendarCheck,
  Wallet,
  CalendarRange,
  Hourglass,
  Sun,
  TrendingUp,
  Activity,
  FileText,
  CheckCircle2,
  Compass,
  ShieldCheck,
  Smartphone,
  BookOpen,
  RefreshCw,
  Sparkles
} from "lucide-react";

const calculators = [
  { href: "/salary-calculator", title: "Salary Calculator", desc: "Calculate gross and net salary including allowances, bonuses, and deductions.", icon: DollarSign, color: "text-blue-500 bg-blue-500/10 dark:text-blue-400 dark:bg-blue-950/30" },
  { href: "/payroll-calculator", title: "Payroll Calculator", desc: "Compute total payroll cost including salary, overtime, bonuses, and taxes.", icon: Briefcase, color: "text-amber-500 bg-amber-500/10 dark:text-amber-400 dark:bg-amber-950/30" },
  { href: "/pakistan-tax-calculator", title: "Pakistan Tax Calculator", desc: "Calculate income tax based on Pakistan's tax slabs and brackets.", icon: Receipt, color: "text-emerald-500 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-950/30" },
  { href: "/uae-tax-calculator", title: "UAE Tax Calculator", desc: "Understand UAE's zero personal income tax and payroll deductions.", icon: Percent, color: "text-indigo-500 bg-indigo-500/10 dark:text-indigo-400 dark:bg-indigo-950/30" },
  { href: "/us-tax-calculator", title: "US Federal Tax Calculator", desc: "Estimate federal income tax based on salary, state, and filing status.", icon: Building2, color: "text-rose-500 bg-rose-500/10 dark:text-rose-400 dark:bg-rose-950/30" },
  { href: "/uae-gratuity-calculator", title: "UAE Gratuity Calculator", desc: "Calculate end-of-service gratuity for UAE employees.", icon: Coins, color: "text-purple-500 bg-purple-500/10 dark:text-purple-400 dark:bg-purple-950/30" },
  { href: "/overtime-calculator", title: "Overtime Calculator", desc: "Compute overtime pay based on hourly rate, hours, and multiplier.", icon: Clock, color: "text-cyan-500 bg-cyan-500/10 dark:text-cyan-400 dark:bg-cyan-950/30" },
  { href: "/attendance-percentage-calculator", title: "Attendance Calculator", desc: "Calculate attendance percentage from present and absent days.", icon: CalendarCheck, color: "text-orange-500 bg-orange-500/10 dark:text-orange-400 dark:bg-orange-950/30" },
  { href: "/leave-encashment-calculator", title: "Leave Encashment Calculator", desc: "Calculate the monetary value of unused leave days.", icon: Wallet, color: "text-teal-500 bg-teal-500/10 dark:text-teal-400 dark:bg-teal-950/30" },
  { href: "/working-days-calculator", title: "Working Days Calculator", desc: "Count working days between two dates, excluding weekends.", icon: CalendarRange, color: "text-violet-500 bg-violet-500/10 dark:text-violet-400 dark:bg-violet-950/30" },
  { href: "/shift-hours-calculator", title: "Shift Hours Calculator", desc: "Calculate total hours worked in a shift including break time.", icon: Hourglass, color: "text-pink-500 bg-pink-500/10 dark:text-pink-400 dark:bg-pink-950/30" },
  { href: "/annual-leave-calculator", title: "Annual Leave Calculator", desc: "Calculate accrued annual leave balance based on employment duration.", icon: Sun, color: "text-yellow-500 bg-yellow-500/10 dark:text-yellow-400 dark:bg-yellow-950/30" },
  { href: "/salary-increment-calculator", title: "Salary Increment Calculator", desc: "Calculate new salary after a percentage increase.", icon: TrendingUp, color: "text-emerald-500 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-950/30" },
  { href: "/hourly-wage-calculator", title: "Hourly Wage Calculator", desc: "Convert monthly salary to hourly wage rate.", icon: Activity, color: "text-sky-500 bg-sky-500/10 dark:text-sky-400 dark:bg-sky-950/30" },
  { href: "/notice-period-calculator", title: "Notice Period Calculator", desc: "Calculate last working day based on resignation date and notice period.", icon: FileText, color: "text-indigo-500 bg-indigo-500/10 dark:text-indigo-400 dark:bg-indigo-950/30" },
];

const benefits = [
  { title: "Free to Use", desc: "All calculator tools are completely free with no registration required.", icon: CheckCircle2, color: "text-emerald-500" },
  { title: "Accurate Results", desc: "Our calculators use up-to-date tax slabs and labor law regulations.", icon: Compass, color: "text-blue-500" },
  { title: "Privacy First", desc: "No data is stored or shared. Your calculations stay on your device.", icon: ShieldCheck, color: "text-purple-500" },
  { title: "Mobile Friendly", desc: "Responsive design works on all devices - desktop, tablet, and mobile.", icon: Smartphone, color: "text-pink-500" },
  { title: "Expert Resources", desc: "Access HR guides, articles, and best practices alongside our tools.", icon: BookOpen, color: "text-amber-500" },
  { title: "Regular Updates", desc: "Tax rates and labor laws are updated regularly to ensure accuracy.", icon: RefreshCw, color: "text-cyan-500" },
];

const faqs = [
  { q: "Are these HR calculators free to use?", a: "Yes, all calculators on HRCalculatorHub are completely free with no registration or payment required." },
  { q: "How accurate are the tax calculations?", a: "Our tax calculators use the latest tax slab rates. For official tax filing, consult a qualified tax professional." },
  { q: "Do you store my calculation data?", a: "No. All calculations are performed in your browser. We do not store, share, or transmit your data." },
  { q: "Can I use these calculators for payroll processing?", a: "These tools are designed for estimation and educational purposes. For official payroll, use certified payroll software." },
  { q: "How often are the tax slabs updated?", a: "We update our calculators whenever tax authorities announce new rates. Check our blog for update announcements." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-dot-pattern py-24 border-b border-border/40">
        {/* Background gradient glow blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/20 dark:bg-primary-900/15 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary-400/10 dark:bg-secondary-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary px-3.5 py-1 rounded-full text-xs font-semibold mb-6 animate-pulse">
            <Sparkles className="h-3.5 w-3.5" />
            Empowering HR Teams Worldwide
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-primary-600 dark:to-primary-400 bg-clip-text text-transparent leading-tight">
            Free HR & Payroll Calculators
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Calculate salary, payroll, gratuity, overtime, tax, attendance, leave encashment, and working hours using free professional HR tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#calculators">
              <Button size="lg" className="shadow-lg shadow-primary/25 cursor-pointer">
                Start Calculating
              </Button>
            </Link>
            <Link href="/sitemap">
              <Button variant="outline" size="lg" className="cursor-pointer">
                Explore All Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AdPlaceholder id="top-banner-ad" className="my-8 container mx-auto max-w-7xl px-4" />

      <section id="calculators" className="py-20 container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">Featured Calculators</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Choose from our comprehensive suite of HR and payroll calculator tools designed for professionals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => {
            const CalcIcon = calc.icon;
            return (
              <Link key={calc.href} href={calc.href} className="group">
                <Card className="h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary/40 glass-card">
                  <CardHeader className="pb-3 flex flex-row items-center gap-4">
                    <div className={`p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 ${calc.color}`}>
                      <CalcIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{calc.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{calc.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border/30">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">Why Use HRCalculatorHub?</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Trusted by HR professionals worldwide for accurate and reliable calculations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const BenefitIcon = benefit.icon;
              return (
                <Card key={i} className="border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`mb-4 p-3 rounded-full bg-background border border-border/30 shadow-sm ${benefit.color}`}>
                      <BenefitIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-border/60 rounded-xl bg-card overflow-hidden transition-all duration-300 open:shadow-md">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold hover:bg-muted/40 rounded-xl transition-colors select-none">
                {faq.q}
                <svg className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/10 pt-3">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      <AdPlaceholder id="in-content-ad" className="my-8 container mx-auto max-w-7xl px-4" />

      <section className="py-20 bg-muted/30 border-t border-border/30">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">Latest HR Articles</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Stay informed with our expert guides and resources.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/blog/how-to-calculate-salary-in-pakistan", title: "How to Calculate Salary in Pakistan", desc: "Complete guide to salary calculation including tax deductions." },
              { href: "/blog/payroll-processing-guide", title: "Payroll Processing Guide", desc: "Step-by-step guide to processing payroll." },
              { href: "/blog/what-is-leave-encashment", title: "What Is Leave Encashment", desc: "Understanding leave encashment rules." },
              { href: "/blog/how-uae-gratuity-is-calculated", title: "How UAE Gratuity Is Calculated", desc: "UAE end-of-service gratuity explained." },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="group">
                <Card className="h-full border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
                  <CardContent className="p-6">
                    <span className="text-xs font-semibold text-primary/75 tracking-wider uppercase mb-3 block">Article</span>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{article.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog"><Button variant="outline" className="cursor-pointer">View All Articles</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Related HR Tools & Resources</h2>
        <p className="text-muted-foreground text-center mb-12">Explore our complete collection of HR and payroll tools.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {calculators.map((calc) => (
            <Link key={calc.href} href={calc.href} className="text-sm text-center font-medium p-4 border border-border/60 bg-card rounded-xl hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-200">
              {calc.title}
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}