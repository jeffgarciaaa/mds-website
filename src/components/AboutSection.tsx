import ultrasoundMachine from "@/assets/ultrasound-machine.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-black/70 backdrop-blur-sm">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              About MDS
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Medical Device Services was founded in 2018 to meet the growing need for quality ultrasound equipment service in the New York Metro Area. Since then, MDS has expanded and now stocks refurbished ultrasound equipment, parts, and probes at our Gibbstown, NJ headquarters.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              MDS works with doctors, technical schools, clinics, imaging centers, and hospitals — and we're committed to their continued success. We specialize in GE, Philips, Siemens, BK, Mindray, Samsung, Sonosite, and Canon ultrasound platforms.
            </p>
            <p className="text-white/70 leading-relaxed">
              If you need service or maintenance for any ultrasound equipment, we want to be your first — and last call.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={ultrasoundMachine} alt="Ultrasound machine" className="rounded-lg w-full object-cover max-h-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
