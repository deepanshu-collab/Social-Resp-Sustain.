import { motion } from "framer-motion";
import { Atom, Fuel, Wind, Recycle, FlaskConical, BrainCircuit, Quote } from "lucide-react";

const researchVerticals = [
  { label: "Hydrogen: Production, Storage, and Utilization", icon: Atom },
  { label: "Biofuels & Renewable Energy: Exploring alternative and greener power sources", icon: Fuel },
  { label: "CCUS: Carbon Capture, Utilization, and Storage", icon: Wind },
  { label: "E-mobility & Circular Economy: Driving sustainable transport and resource efficiency", icon: Recycle },
];

const innovations = [
  "The Hydrogen Valley project",
  "CO₂-to-methanol research",
  "Advanced water electrolysis",
];

const cardHover = {
  scale: 1.03,
  y: -4,
  transition: { type: "spring" as const, stiffness: 300 },
};

const ArcsetSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 md:px-12 bg-lavender overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
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
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            A Centre of Excellence for Sustainable Energy
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-14">
          <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
            BITS Pilani has proudly inaugurated the <strong className="text-foreground">Advanced Research Centre for Sustainable Energy Technologies (ARCSET)</strong>, a multi-campus Centre of Excellence dedicated to solving global energy challenges.
          </p>
          <p className="text-base font-body text-muted-foreground leading-relaxed">
            ARCSET is designed to foster innovation, industry-academic collaboration, and cutting-edge research to provide scalable, affordable solutions for carbon emission reduction, energy security, and equitable access to green energy.
          </p>
        </div>

        {/* Research Verticals */}
        <div className="mb-14">
          <h3 className="text-2xl font-display text-foreground font-semibold mb-6 text-center">
            Key Research Verticals
          </h3>
          <p className="text-sm font-body text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            The center focuses on eight primary areas to accelerate India's journey toward net-zero emissions, including:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {researchVerticals.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={cardHover}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-body text-sm font-medium text-foreground leading-snug">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Innovation & Approach */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display text-foreground font-semibold">
                Innovation & Approach
              </h3>
            </div>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5">
              By partnering with industry leaders, start-ups, and policymakers, ARCSET functions as a premier technology platform. The center leverages advanced tools like molecular modelling, AI-ML, and high-throughput experiments to drive impactful initiatives such as:
            </p>
            <ul className="space-y-3">
              {innovations.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm font-body text-foreground"
                >
                  <div className="w-6 h-6 rounded-md bg-green-accent/10 flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-3.5 h-3.5 text-green-accent" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-display text-foreground font-semibold mb-5">
              Leadership & Vision
            </h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
              The inauguration of ARCSET during BITS Pilani's Diamond Jubilee Year was graced by Chief Guest Padma Bhushan Prof. J. B. Joshi and Guest of Honour Dr. Madhukar Garg, alongside institute leadership who championed the center's vital mission.
            </p>
            <div className="bg-lavender rounded-xl p-6 border-l-4 border-primary relative overflow-hidden">
              <div className="absolute top-2 right-2 text-6xl text-primary/5 font-display">"</div>
              <Quote className="w-5 h-5 text-primary mb-3" />
              <p className="text-sm font-body text-foreground italic leading-relaxed mb-3 relative z-10">
                "ARCSET embodies our dedication to tackling one of the major challenges of our times — global transformation towards sustainable energy. We are driving capacity building and advanced research with industry collaboration to enable these solutions that not only reduce carbon emissions but also ensure equitable access to clean energy resources."
              </p>
              <p className="text-xs font-body text-muted-foreground font-semibold">
                — Prof. Ramgopal Rao, Vice-Chancellor, BITS Pilani
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ArcsetSection;
