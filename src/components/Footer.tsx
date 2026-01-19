import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const services = [
  "All Types of Civil Work",
  "Waterproofing Services",
  "Labour Works",
  "Lock & Key Projects",
  "Project Management",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* What We Can Do For You Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-bold mb-6"
            >
              What We Can Do For You
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-medium
                           hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Avadhut Construction"
                className="h-16 w-auto rounded bg-white p-2"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              From concept to creation, we bring your construction dreams to life with 
              precision, quality, and dedication. Your trusted partner for all civil work needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Our Work", path: "/our-work" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9322255104"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    9322255104<br />9423086104
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:avadhutconstruction104@gmail.com"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="break-all">avadhutconstruction104@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/avadhut_construction_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  <span>@avadhut_construction_</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Adinath Nagar, Pune–Nashik Highway,<br />
                  Bhosari, Pune – 39
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Avadhut Construction. All rights reserved. | Concept to Creation…
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
