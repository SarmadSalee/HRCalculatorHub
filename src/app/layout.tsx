import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "HRCalculatorHub - Free HR & Payroll Calculator Tools",
    template: "%s | HRCalculatorHub",
  },
  description:
    "Free professional HR and payroll calculator tools. Calculate salary, payroll, tax, gratuity, overtime, leave encashment, and more. Trusted by HR professionals worldwide.",
  keywords: [
    "HR calculator",
    "payroll calculator",
    "salary calculator",
    "tax calculator",
    "gratuity calculator",
    "overtime calculator",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "HRCalculatorHub",
    title: "HRCalculatorHub - Free HR & Payroll Calculator Tools",
    description:
      "Free professional HR and payroll calculator tools. Calculate salary, payroll, tax, gratuity, overtime, and more.",
    url: "https://hrcalculatorspro.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HRCalculatorHub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HRCalculatorHub - Free HR & Payroll Calculator Tools",
    description:
      "Free professional HR and payroll calculator tools.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://hrcalculatorspro.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "HRCalculatorHub",
              url: "https://hrcalculatorspro.com",
              description: "Free professional HR and payroll calculator tools.",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}