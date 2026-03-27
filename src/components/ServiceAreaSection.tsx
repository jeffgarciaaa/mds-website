import { MapPin } from "lucide-react";

const states = ["New Jersey", "New York", "Pennsylvania", "Connecticut", "Delaware", "Maryland"];

const ServiceAreaSection = () => {
  return (
    <section className="section-padding bg-black/70 backdrop-blur-sm">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
          Service Area
        </h2>
        <div className="flex items-start gap-3 max-w-xl mb-6">
          <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
          <p className="text-white/60 leading-relaxed">
            Based out of <span className="text-white font-medium">Gibbstown, NJ</span>, we service facilities across the tri-state area and beyond. Contact us to confirm coverage in your area.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {states.map((state) => (
            <span key={state} className="px-4 py-2 border border-white/20 rounded text-sm font-medium text-white">
              {state}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
