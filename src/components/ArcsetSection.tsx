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

const ArcsetSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 md:px-12 bg-lavender"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-primary font-semibold mb-4">
            BITS Pilani Launches ARCSET
          </h2>
          <p className="text-lg font-display text-foreground font-medium">
            A Centre of Excellence for Sustainable Energy
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-base font-body text-muted-foreground leading-relaxed mb-4">
            BITS Pilani has proudly inaugurated the <strong className="text-foreground">Advanced Research Centre for Sustainable Energy Technologies (ARCSET)</strong>, a multi-campus Centre of Excellence dedicated to solving global energy challenges.
          </p>
          <p className="text-base font-body text-muted-foreground leading-relaxed">
            ARCSET is designed to foster innovation, industry-academic collaboration, and cutting-edge research to provide scalable, affordable solutions for carbon emission reduction, energy security, and equitable access to green energy.
          </p>
        </div>

        {/* Research Verticals */}
        <div className="mb-12">
          <h3 className="text-2xl font-display text-foreground font-semibold mb-6 text-center">
            Key Research Verticals
          </h3>
          <p className="text-sm font-body text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            The center focuses on eight primary areas to accelerate India's journey toward net-zero emissions, including:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchVerticals.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-body text-sm font-medium text-foreground leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation & Approach */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <BrainCircuit className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-display text-foreground font-semibold">
                Innovation & Approach
              </h3>
            </div>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
              By partnering with industry leaders, start-ups, and policymakers, ARCSET functions as a premier technology platform. The center leverages advanced tools like molecular modelling, AI-ML, and high-throughput experiments to drive impactful initiatives such as:
            </p>
            <ul className="space-y-2">
              {innovations.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-body text-foreground">
                  <FlaskConical className="w-4 h-4 text-green-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-display text-foreground font-semibold mb-4">
              Leadership & Vision
            </h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
              The inauguration of ARCSET during BITS Pilani's Diamond Jubilee Year was graced by Chief Guest Padma Bhushan Prof. J. B. Joshi and Guest of Honour Dr. Madhukar Garg, alongside institute leadership who championed the center's vital mission.
            </p>
            <div className="bg-lavender rounded-lg p-5 border-l-4 border-primary">
              <Quote className="w-5 h-5 text-primary mb-2" />
              <p className="text-sm font-body text-foreground italic leading-relaxed mb-3">
                "ARCSET embodies our dedication to tackling one of the major challenges of our times — global transformation towards sustainable energy. We are driving capacity building and advanced research with industry collaboration to enable these solutions that not only reduce carbon emissions but also ensure equitable access to clean energy resources."
              </p>
              <p className="text-xs font-body text-muted-foreground font-semibold">
                — Prof. Ramgopal Rao, Vice-Chancellor, BITS Pilani
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ArcsetSection;
