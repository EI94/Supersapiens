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
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-accent h-8 w-8 rounded-lg"></div>
              <span className="text-foreground text-xl font-bold">
                Supersapiens
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm">
              Generative AI Gets the Hype — You Get the Cape.
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Integriamo la Generative AI nei tuoi workflow: più velocità, più
              wow, più umani al comando.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-foreground text-sm font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-xs transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Supersapiens. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
