import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import mdsLogo from "@/assets/mds-logo-clean.svg";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Equipment", href: "#oem" },
    { label: "Sell", href: "#sell" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 shadow-sm" style={{ overflow: 'visible' }}>
      <div className="container-narrow flex items-center justify-between px-4 md:px-8" style={{ height: '80px' }}>
        <a href="#" className="flex items-center" style={{ marginTop: '10px' }}>
          <img src={mdsLogo} alt="Medical Device Services" style={{ height: '160px', width: 'auto' }} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-sm">
          <a href="tel:+19083350440" className="flex items-center gap-1.5 text-accent font-medium">
            <Phone className="w-4 h-4" />
            (908) 335-0440
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/90 border-b border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-accent py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+19083350440" className="flex items-center gap-1.5 text-accent font-medium text-sm pt-2 border-t border-white/10">
              <Phone className="w-4 h-4" />
              (908) 335-0440
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
