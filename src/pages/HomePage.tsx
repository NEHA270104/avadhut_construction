import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Droplets, Users, KeyRound, ClipboardList } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const services = [
  { icon: Building2, title: "Civil Work", desc: "Complete construction solutions from foundation to finishing, including RCC work, plastering, and structural development." },
  { icon: Droplets, title: "Waterproofing", desc: "Long-lasting protection for terraces, basements, and walls using premium waterproofing materials and techniques." },
  { icon: Users, title: "Labour Works", desc: "Skilled and experienced workforce for all types of construction, renovation, and maintenance projects." },
  { icon: KeyRound, title: "Lock & Key", desc: "Comprehensive security solutions including door locks, safety systems, and key management services." },
  { icon: ClipboardList, title: "Project Management", desc: "End-to-end project oversight ensuring timely delivery, quality control, and budget management." },
];

const HomePage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              AVADHUT CONSTRUCTION
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-widest text-accent mb-8">
              Concept to Creation…
            </p>
            <p className="max-w-2xl mx-auto text-lg text-primary-foreground/90 mb-10">
              Building dreams with precision and excellence. Your trusted partner for 
              comprehensive civil construction, waterproofing, and project management services in Pune.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-accent inline-flex items-center justify-center gap-2">
                Explore Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary border-primary-foreground text-primary-foreground 
                                             hover:bg-primary-foreground hover:text-primary inline-flex items-center justify-center">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium uppercase tracking-wider text-sm">About Us</span>
              <h2 className="section-heading mt-2">
                Building Excellence Since Day One
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Avadhut Construction brings your vision to life with meticulous planning, 
                superior execution, and unwavering commitment to quality. We handle every 
                project from concept to creation with the expertise and dedication it deserves.
              </p>
              <ul className="space-y-3 mb-8">
                {["Quality-driven construction", "Expert project management", "Reliable and timely delivery"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={heroImage}
                  alt="Our Construction Work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold font-display">100%</p>
                <p className="text-sm opacity-80">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Our Services</span>
            <h2 className="section-heading mt-2">What We Offer</h2>
            <p className="section-subheading">
              Comprehensive construction solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Let's build something extraordinary together. Contact us today for a free consultation.
            </p>
            <Link
              to="/contact"
              className="btn-accent inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
