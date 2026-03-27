import dividerBg from "@/assets/divider-heartbeat.jpg";
import operatingRoom from "@/assets/operating-room.png";

const SellSection = () => {
  return (
    <section
      id="sell"
      className="relative section-padding bg-cover bg-center"
      style={{ backgroundImage: `url(${dividerBg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Sell Us Your Equipment
            </h2>
            <p className="text-white/85 leading-relaxed mb-8 text-lg" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
              We want to purchase your used medical equipment. We will give you maximum value for your retired, excess, and unused equipment and instrumentation at your facility. Reach out to us to inquire for further details.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-bold text-lg rounded hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </a>
          </div>
          <div className="flex items-center justify-center">
            <img src={operatingRoom} alt="Medical operating room equipment" className="rounded-lg w-full object-cover max-h-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellSection;
