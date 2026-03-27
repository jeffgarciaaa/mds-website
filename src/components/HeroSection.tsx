import { Phone, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center pt-16">
      <div className="relative z-10 container-narrow px-4 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            Ultrasound Equipment Service, Sales, and Rentals
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
            Specialized ultrasound service for doctors, clinics, imaging centers, and hospitals.
            Fast response. Expert technicians. Your first — and last call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Request Service
            </a>
            <a
              href="tel:+19083350440"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-white/80 text-sm" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            <a href="tel:+19083350440" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              (908) 335-0440
            </a>
            <a href="mailto:service@meddevicesrvs.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              service@meddevicesrvs.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
