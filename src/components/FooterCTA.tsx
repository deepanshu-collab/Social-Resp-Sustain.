import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative bg-primary py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display text-primary-foreground font-semibold mb-4"
        >
          Ready to Begin Your Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary-foreground/70 font-body text-lg mb-10 max-w-xl mx-auto"
        >
          Join BITS Pilani and be part of a community driving sustainable change.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-body font-semibold rounded-xl hover:shadow-xl transition-shadow text-center"
          >
            Apply for BITSAT 2025
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold rounded-xl hover:bg-primary-foreground/10 hover:border-primary-foreground/60 transition-all text-center"
          >
            Download Information Bulletin
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FooterCTA;
