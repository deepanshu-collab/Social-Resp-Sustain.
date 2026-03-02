import { motion } from "framer-motion";

const FooterCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-primary py-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display text-primary-foreground font-semibold mb-8">
          Ready to Begin Your Journey?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary font-body font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Apply for BITSAT 2025
          </a>
          <a
            href="#"
            className="inline-block px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-body font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-center"
          >
            Download Information Bulletin
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default FooterCTA;
