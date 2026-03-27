import { Wrench, ShieldCheck, Network, MonitorSmartphone, Package, Truck, HeartPulse, DollarSign } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Ultrasound Repairs",
    description: "System-wide hardware and software repairs for all major ultrasound platforms. We diagnose and repair systems quickly to minimize your downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Preventative Maintenance",
    description: "Scheduled PM programs to extend equipment life, maintain image quality, and keep you compliant with regulatory standards.",
  },
  {
    icon: Network,
    title: "Networking & PACS Setup",
    description: "Fully set up and integrate your ultrasound machine with PACS image storage and worklist servers for seamless connectivity at your facility.",
  },
  {
    icon: HeartPulse,
    title: "Service Contracts",
    description: "Flexible service agreements tailored to your facility's needs and budget — a cost-effective alternative to OEM contracts.",
  },
  {
    icon: DollarSign,
    title: "Equipment Sales",
    description: "Buy and sell refurbished ultrasound machines, probes, and parts. Quality-tested inventory stocked at our Gibbstown, NJ headquarters.",
  },
  {
    icon: MonitorSmartphone,
    title: "Technical Support",
    description: "Remote and on-site technical support for troubleshooting, software issues, and operational guidance across all major platforms.",
  },
  {
    icon: Package,
    title: "Equipment Rental",
    description: "Month-to-month ultrasound equipment rental for facilities that need flexible, short-term coverage without a long-term commitment.",
  },
  {
    icon: Truck,
    title: "Relocation & Disposal",
    description: "Professional medical equipment relocation, and responsible purchase or disposal of all old and retired medical equipment.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-black/70 backdrop-blur-sm">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl">
          Full-service ultrasound support from repair and maintenance to sales, rentals, and equipment relocation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-accent/50 transition-colors"
            >
              <service.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
