import { motion } from "framer-motion";
import { Instagram, ArrowRight, ExternalLink } from "lucide-react";

// Import actual project photos
import work1 from "@/assets/work/work-1.jpeg";
import work2 from "@/assets/work/work-2.jpeg";
import work3 from "@/assets/work/work-3.jpeg";
import work4 from "@/assets/work/work-4.jpeg";
import work5 from "@/assets/work/work-5.jpeg";
import work6 from "@/assets/work/work-6.jpeg";
import work7 from "@/assets/work/work-7.jpeg";
import work8 from "@/assets/work/work-8.jpeg";
import work9 from "@/assets/work/work-9.jpeg";
import work10 from "@/assets/work/work-10.jpeg";
import work11 from "@/assets/work/work-11.jpeg";
import work12 from "@/assets/work/work-12.jpeg";

const galleryImages = [
  { id: 1, src: work1, title: "Industrial Structure", category: "Construction" },
  { id: 2, src: work2, title: "Wall Repair Work", category: "Civil Work" },
  { id: 3, src: work3, title: "Concrete Cutting", category: "Labour Work" },
  { id: 4, src: work4, title: "Terrace Waterproofing", category: "Waterproofing" },
  { id: 5, src: work5, title: "Column Construction", category: "Civil Work" },
  { id: 6, src: work6, title: "Foundation Work", category: "Civil Work" },
  { id: 7, src: work7, title: "Industrial Flooring", category: "Finishing" },
  { id: 8, src: work8, title: "Roof Waterproofing", category: "Waterproofing" },
  { id: 9, src: work9, title: "Plastering Work", category: "Finishing" },
  { id: 10, src: work10, title: "Building Construction", category: "Civil Work" },
  { id: 11, src: work11, title: "Pipe Installation", category: "Civil Work" },
  { id: 12, src: work12, title: "Brick Laying Work", category: "Labour Work" },
];

const OurWorkPage = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Our Work
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              A showcase of our completed projects and craftsmanship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="gallery-item aspect-square group"
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-primary-foreground font-semibold text-sm md:text-base">{image.title}</p>
                  <p className="text-primary-foreground/70 text-xs md:text-sm">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary 
                          flex items-center justify-center">
              <Instagram className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Want to See More Photos?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Follow us on Instagram for the latest project updates, behind-the-scenes content, 
              and more of our completed works.
            </p>
            <a
              href="https://instagram.com/avadhut_construction_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              @avadhut_construction_
              <ExternalLink className="w-4 h-4" />
            </a>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Let's create something amazing together
            </p>
            <a href="/contact" className="btn-accent inline-flex items-center gap-2">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default OurWorkPage;
