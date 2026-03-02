import { motion } from "framer-motion";
import buildingImage from "@/assets/sr-building-blocks.webp";

const SRIntroSection = () => {
  return (
    <section className="bg-lavender py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold leading-tight mb-6">
            Building the foundation of change
          </h2>
          <p className="text-base font-body text-muted-foreground leading-relaxed">
            At BITS Pilani, we understand that when roots are grounded in strong
            values, the branches grow with confidence and remain steadfast.
            Following that principle, BITS across all its campuses conducts several
            initiatives and activities to raise awareness of societal issues, helping
            students understand how their contributions can add to the collective
            impact. At BITS Pilani, being socially responsible runs parallel with
            academic excellence. BITS' students, faculty, and alumni have initiated
            and nurtured impactful organisations and societies dedicated to
            community development, education, entrepreneurship, sustainability,
            and welfare.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img
              src={buildingImage}
              alt="Building blocks representing foundation of social change"
              className="w-full h-80 object-cover bg-muted"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-accent/10 rounded-2xl -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default SRIntroSection;
