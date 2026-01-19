import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin, Clock, Send } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    details: ["9322255104", "9423086104"],
    link: "tel:9322255104",
    linkText: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["avadhutconstruction104@gmail.com"],
    link: "mailto:avadhutconstruction104@gmail.com",
    linkText: "Send Email",
  },
  {
    icon: Instagram,
    title: "Instagram",
    details: ["@avadhut_construction_"],
    link: "https://instagram.com/avadhut_construction_",
    linkText: "Follow Us",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Open All Days"],
    link: null,
    linkText: null,
  },
];

const ContactPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Looking for a quotation? Let's build your vision together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <Send className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium text-sm">We'd love to hear from you</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you have a question about our services, need a quotation, or want to discuss 
              a project, we're here to help. Mail us your requirements and let's start building 
              your dream together.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="contact-card text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                {card.details.map((detail) => (
                  <p key={detail} className="text-muted-foreground text-sm break-all">
                    {detail}
                  </p>
                ))}
                {card.link && (
                  <a
                    href={card.link}
                    target={card.link.startsWith("http") ? "_blank" : undefined}
                    rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block mt-3 text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                  >
                    {card.linkText} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Location Info */}
              <div className="service-card p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      Adinath Nagar, Pune–Nashik Highway,<br />
                      Bhosari, Pune – 411039
                    </p>
                  </div>
                </div>
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-foreground font-medium flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    Open All Days
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    We're available 7 days a week for your convenience
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] lg:h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.582723391694!2d73.8289!3d18.6321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzU1LjYiTiA3M8KwNDknNDQuMCJF!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Avadhut Construction Location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Send us an email with your project details and we'll get back to you with a quotation.
            </p>
            <a
              href="mailto:avadhutconstruction104@gmail.com?subject=Project%20Inquiry&body=Hello%20Avadhut%20Construction,%0A%0AI%20am%20interested%20in%20your%20services.%0A%0AProject%20Details:%0A%0A"
              className="btn-accent inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
