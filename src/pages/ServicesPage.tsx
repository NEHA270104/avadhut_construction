import { motion } from "framer-motion";
import { Building2, Droplets, Users, Key, ClipboardList, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "All Types of Civil Work",
    description: "Comprehensive civil construction services including residential, commercial, and industrial buildings. From foundation to finishing, we handle every aspect with precision.",
    features: ["New Construction", "Renovation", "Structural Work", "Interior & Exterior"],
  },
  {
    icon: Droplets,
    title: "Waterproofing Services",
    description: "Professional waterproofing solutions to protect your property from water damage. Using premium materials and proven techniques for lasting protection.",
    features: ["Terrace Waterproofing", "Basement Protection", "Bathroom Waterproofing", "External Walls"],
  },
  {
    icon: Users,
    title: "Labour Works",
    description: "Skilled and reliable workforce for all your construction needs. Our trained professionals ensure quality workmanship on every project.",
    features: ["Skilled Workers", "Supervised Teams", "Flexible Contracts", "Safety Trained"],
  },
  {
    icon: Key,
    title: "Lock & Key Projects",
    description: "Complete turnkey solutions delivering ready-to-use spaces. We manage everything from design to handover, providing hassle-free project completion.",
    features: ["End-to-End Solutions", "Ready Possession", "Quality Assurance", "Timely Completion"],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Expert project oversight ensuring your construction runs smoothly. We coordinate all aspects to deliver on time and within budget.",
    features: ["Planning & Scheduling", "Resource Management", "Quality Control", "Cost Optimization"],
  },
];

const ServicesPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-medium uppercase tracking-wider text-sm">What We Do</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Complete construction solutions tailored to your unique requirements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card p-6 md:p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-5">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Every project is unique. Contact us to discuss your specific requirements 
              and get a tailored solution that fits your needs.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
