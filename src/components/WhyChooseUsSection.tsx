import { Clock, DollarSign, Brain, Target, Handshake, Settings2 } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Fast Response Times", desc: "Priority scheduling and rapid deployment for critical service calls." },
  { icon: Brain, title: "Deep Technical Knowledge", desc: "Experienced engineers trained across multiple OEM platforms." },
  { icon: DollarSign, title: "Cost-Effective Solutions", desc: "Significant savings compared to OEM service contracts." },
  { icon: Target, title: "Minimized Downtime", desc: "Efficient diagnostics and repair to keep your systems operational." },
  { icon: Handshake, title: "Hands-On Field Experience", desc: "Years of direct, in-the-field expertise on complex imaging systems." },
  { icon: Settings2, title: "Flexible Service Options", desc: "Customized service plans tailored to your facility's needs and budget." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-black/70 backdrop-blur-sm">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
          Why Choose Us
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl">
          We earn trust through consistent performance, technical competence, and transparent communication.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <r.icon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white mb-1">{r.title}</h3>
                <p className="text-sm text-white/60">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
