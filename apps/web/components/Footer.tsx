import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About", href: "/manifesto" },
    { name: "Services", href: "/services" },
    { name: "Cases", href: "/cases" },
    { name: "Crew", href: "/crew" },
  ],
  resources: [
    { name: "Signals", href: "/signals" },
    { name: "Playground", href: "/playground" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { name: "LinkedIn", href: "https://linkedin.com/company/supersapiens" },
    { name: "Twitter", href: "https://twitter.com/supersapiens_ai" },
    { name: "GitHub", href: "https://github.com/supersapiens" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-accent"></div>
              <span className="text-xl font-bold text-foreground">
                Supersapiens
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Generative AI Gets the Hype — You Get the Cape.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Integriamo la Generative AI nei tuoi workflow: più velocità, più
              wow, più umani al comando.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Supersapiens. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 