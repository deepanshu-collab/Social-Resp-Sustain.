import { motion } from "framer-motion";
import campusImage from "@/assets/campus-pilani.webp";

const stats = [
  { value: "4", label: "Campuses" },
  { value: "100+", label: "Green Initiatives" },
  { value: "50%", label: "Energy from Solar" },
];

const IntroSection = () => {
  return (
    <section className="bg-lavender py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-accent/10 text-green-accent px-3 py-1 rounded-full text-xs font-body font-semibold mb-4 tracking-wide uppercase"
          >
            Our Commitment
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold leading-tight mb-6">
            Driving Sustainability Across Our Campuses
          </h2>
          <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
            At BITS Pilani, we are deeply committed to fostering a culture of
            sustainability and environmental consciousness. This bold vision is our
            response to the urgent need to address climate change and its potential
            impact on the environment and society.
          </p>

          {/* Stats row */}
          <div className="flex gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-xs font-body text-muted-foreground mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
              src={campusImage}
              alt="BITS Pilani Campus with clock tower"
              className="w-full h-80 object-contain bg-muted"
              loading="lazy"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-accent/10 rounded-2xl -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
