const modalities = [
  { name: "Diagnostic Ultrasound", desc: "General, OB/GYN, abdominal & vascular imaging systems" },
  { name: "Cardiac / Echo", desc: "Echocardiography and cardiac ultrasound platforms" },
  { name: "Point-of-Care (POCUS)", desc: "Portable and bedside ultrasound units" },
  { name: "Shared Service Systems", desc: "Multi-transducer shared service platforms" },
  { name: "Ultrasound Probes", desc: "Probe repair, testing, and replacement across all types" },
  { name: "Refurbished Equipment", desc: "Quality-tested refurbished systems, probes & parts in stock" },
];

const ModalitiesSection = () => {
  return (
    <section id="modalities" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
          Equipment We Service
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Specialized exclusively in ultrasound — we know this equipment inside and out.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {modalities.map((m) => (
            <div
              key={m.name}
              className="border rounded-lg p-5 hover:border-accent/50 transition-colors"
            >
              <h3 className="font-semibold mb-1 text-foreground">
                {m.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;
