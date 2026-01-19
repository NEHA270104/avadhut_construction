import { motion } from "framer-motion";
import { ClipboardCheck, Hammer, Eye, CheckCircle, FileSearch, Lightbulb } from "lucide-react";

const workSteps = [
  {
    icon: Lightbulb,
    title: "Consultation",
    description: "We begin with understanding your vision, requirements, and budget to create a tailored plan.",
  },
  {
    icon: FileSearch,
    title: "Planning & Design",
    description: "Detailed blueprints and project timelines are developed with precision and care.",
  },
  {
    icon: ClipboardCheck,
    title: "Approval & Permits",
    description: "We handle all necessary documentation and regulatory approvals for your project.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description: "Our skilled team brings the plan to life with quality materials and craftsmanship.",
  },
  {
    icon: Eye,
    title: "Quality Control",
    description: "Rigorous inspections at every stage ensure the highest standards are maintained.",
  },
  {
    icon: CheckCircle,
    title: "Handover",
    description: "Final walkthrough and delivery of your completed project, ready for use.",
  },
];

const AboutPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-medium uppercase tracking-wider text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Who We Are
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Concept to Creation — Building your dreams with precision, quality, and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-heading">Avadhut Construction</h2>
              <div className="space-y-6 text-lg text-muted-foreground mt-6">
                <p>
                  Avadhut Construction is a trusted name in the civil construction industry, 
                  committed to transforming your architectural dreams into reality. We specialize 
                  in delivering comprehensive construction solutions that combine innovation, 
                  quality, and reliability.
                </p>
                <p>
                  Our approach is rooted in meticulous planning and flawless execution. From the 
                  initial concept to the final creation, every step of our process is designed 
                  to ensure your complete satisfaction. We believe that great construction isn't 
                  just about building structures — it's about building trust.
                </p>
                <p>
                  Whether it's civil works, waterproofing solutions, labour contracting, or 
                  complete project management, we bring the same level of dedication and 
                  expertise to every project, big or small.
                </p>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mb-20"
            >
              {[
                { title: "Quality First", desc: "We never compromise on materials or workmanship" },
                { title: "Timely Delivery", desc: "Your project completed on schedule, every time" },
                { title: "Client Focus", desc: "Your satisfaction is our ultimate measure of success" },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 rounded-xl bg-secondary"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Our Process</span>
            <h2 className="section-heading mt-2">How We Work</h2>
            <p className="section-subheading">
              A systematic approach to delivering excellence from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="service-card p-8 rounded-xl h-full">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
