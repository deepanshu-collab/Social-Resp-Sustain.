import { motion } from "framer-motion";
import { Atom, FlaskConical, Quote } from "lucide-react";

const verticals = [
  "Hydrogen: Production, Storage, and Utilization",
  "Biofuels & Renewable Energy: Exploring alternative and greener power sources",
  "CCUS: Carbon Capture, Utilization, and Storage",
  "E-mobility & Circular Economy: Driving sustainable transport and resource efficiency",
];

const innovations = [
  "The Hydrogen Valley project",
  "CO₂-to-methanol research",
  "Advanced water electrolysis",
];

const ArcsetSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 md:px-12 bg-lavender overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-body font-medium mb-4"
          >
            <Atom className="w-4 h-4" />
            Research Excellence
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold mb-4">
            BITS Pilani Launches ARCSET
          </h2>
          <p className="text-base font-body text-muted-foreground">
            A Centre of Excellence for Sustainable Energy
          </p>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
            BITS Pilani has proudly inaugurated the{" "}
            <strong className="text-foreground">
              Advanced Research Centre for Sustainable Energy Technologies (ARCSET)
            </strong>
            , a multi-campus Centre of Excellence dedicated to solving global energy challenges through innovation, industry-academic collaboration, and cutting-edge research.
          </p>
        </motion.div>

        {/* Research Verticals */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-xl font-display text-foreground font-semibold mb-5">
            Key Research Verticals
          </h3>
          <ul className="space-y-3">
            {verticals.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm font-body text-muted-foreground leading-relaxed">
                <span className="text-primary mt-0.5 flex-shrink-0 font-bold">›</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Innovation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <h3 className="text-xl font-display text-foreground font-semibold mb-3">
            Innovation & Approach
          </h3>
          <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5">
            Partnering with industry leaders, start-ups, and policymakers, ARCSET leverages molecular modelling, AI-ML, and high-throughput experiments to drive initiatives such as:
          </p>
          <ul className="space-y-2.5">
            {innovations.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-body text-foreground">
                <div className="w-5 h-5 rounded bg-green-accent/10 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-3 h-3 text-green-accent" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-l-4 border-primary pl-6 relative"
        >
          <Quote className="w-5 h-5 text-primary/30 absolute -top-1 -left-1" />
          <p className="text-sm font-body text-foreground italic leading-relaxed mb-2">
            "ARCSET embodies our dedication to tackling one of the major challenges of our times — global transformation towards sustainable energy."
          </p>
          <p className="text-xs font-body text-muted-foreground font-semibold">
            — Prof. Ramgopal Rao, Vice-Chancellor, BITS Pilani
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ArcsetSection;
