import ultrasoundImg from "@/assets/ultrasound-closeup.png";

const oems = [
  "GE Healthcare",
  "Philips Healthcare",
  "Siemens Healthineers",
  "BK Medical",
  "Mindray",
  "Samsung Medison",
  "Sonosite",
  "Canon Medical",
];

const OEMSection = () => {
  return (
    <section id="oem" className="section-padding bg-black/70 backdrop-blur-sm">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Equipment We Service
            </h2>
            <p className="text-white/60 mb-8">
              Hands-on experience with the industry's leading ultrasound manufacturers.
              As an independent provider, we deliver the same technical expertise at a fraction of
              OEM contract pricing — without compromising quality or safety.
            </p>

            <div className="flex flex-wrap gap-3">
              {oems.map((oem) => (
                <span
                  key={oem}
                  className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded"
                >
                  {oem}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={ultrasoundImg} alt="Ultrasound equipment" className="rounded-lg w-full object-cover max-h-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OEMSection;
