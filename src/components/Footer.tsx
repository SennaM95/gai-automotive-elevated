import { Facebook, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  diensten: [
    { label: 'Onderhoud & Service', href: '#diensten' },
    { label: 'Reparaties', href: '#diensten' },
    { label: 'Tuning & Performance', href: '#diensten' },
    { label: 'APK Keuring', href: '#diensten' },
  ],
  bedrijf: [
    { label: 'Over Ons', href: '#over-ons' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],
  juridisch: [
    { label: 'Algemene Voorwaarden', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-anthracite-dark border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-copper rounded flex items-center justify-center shadow-copper">
                <span className="font-heading font-bold text-xl text-primary-foreground">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-wider text-foreground">GAI</span>
                <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Automotive</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Specialist in onderhoud, reparatie en performance tuning. 
              Vakmanschap en passie voor auto's sinds 2009.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wider mb-6">
              Diensten
            </h4>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wider mb-6">
              Bedrijf
            </h4>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Industrieweg 42</li>
              <li>1234 AB Amsterdam</li>
              <li className="pt-2">
                <a href="tel:+31612345678" className="hover:text-primary transition-colors">
                  +31 6 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@gaiautomotive.nl" className="hover:text-primary transition-colors">
                  info@gaiautomotive.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Gai Automotive. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              {footerLinks.juridisch.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
