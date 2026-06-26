import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },

];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-lg transition-all duration-300">
      <div className="container mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl text-primary hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="HRCalculatorHub"
            width={64}
            height={64}
            className="rounded-lg"
          />
          <span className="hidden bg-gradient-to-r from-primary to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
            HRCalculatorHub
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-350 hover:after:w-full transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}