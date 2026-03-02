import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import sdgImage from "@/assets/sdg-goals.webp";

const principles = [
  "Climate Action Plan",
  "SDG Impact",
  "Sustainable Investment Policy",
  "HESI Community Member",
  "Sustainable Procurement Policy",
  "Race to Zero",
  "Green Audit Report",
  "Student Club",
  "Carbon Reduction Strategic Plan",
  "Sustainability Committee",
  "Renewable Energy Club",
];

const GuidingPrinciples = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-display text-foreground font-semibold mb-6">
              A Campus That Breathes Sustainability
            </h3>
            <div className="w-full rounded-2xl overflow-hidden bg-muted shadow-lg border border-border/50 group">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                src={sdgImage}
                alt="UN Sustainable Development Goals"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl md:text-3xl font-display text-primary font-semibold mb-8 text-center">
              Guiding Principles for a Sustainable Campus &amp; Community
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {principles.map((label, i) => (
                <motion.a
                  key={label}
                  href="#"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group flex items-center justify-between px-5 py-4 border border-border rounded-xl hover:border-primary/40 hover:bg-lavender hover:shadow-md transition-all duration-300"
                >
                  <span className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all -translate-x-1 group-hover:translate-x-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
