import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    facility: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mjgabdll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", facility: "", phone: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please call us directly at (908) 335-0440.");
      }
    } catch {
      alert("Something went wrong. Please call us directly at (908) 335-0440.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-black/80 backdrop-blur-sm">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Request Service or Consultation
            </h2>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Reach out to discuss your service needs. We respond to all inquiries promptly.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+19083350440"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                (908) 335-0440
              </a>
              <a
                href="mailto:service@meddevicesrvs.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                service@meddevicesrvs.com
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span>222 West Broad St, Gibbstown, NJ 08027</span>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
              <CheckCircle className="w-16 h-16 text-accent" />
              <h3 className="text-xl font-heading font-bold text-primary-foreground">Thank You!</h3>
              <p className="text-primary-foreground/70">
                We've received your inquiry and will respond promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent text-sm"
                />
                <input
                  type="text"
                  placeholder="Facility Name"
                  maxLength={100}
                  value={formData.facility}
                  onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent text-sm"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent text-sm"
                />
              </div>
              <textarea
                placeholder="Describe your service needs..."
                rows={4}
                required
                maxLength={1000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent text-sm resize-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
