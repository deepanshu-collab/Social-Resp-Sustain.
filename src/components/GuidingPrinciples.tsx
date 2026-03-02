import { motion } from "framer-motion";
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
    <section className="py-16 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-display text-foreground font-semibold mb-4">
              A Campus That Breathes Sustainability
            </h3>
            <div className="w-full rounded-xl overflow-hidden bg-muted">
              <img
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
            <div className="grid grid-cols-2 gap-4">
              {principles.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="block px-5 py-4 border-2 border-primary/20 rounded hover:border-primary hover:bg-lavender transition-colors group"
                >
                  <span className="font-body text-sm font-semibold text-foreground group-hover:text-primary">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
