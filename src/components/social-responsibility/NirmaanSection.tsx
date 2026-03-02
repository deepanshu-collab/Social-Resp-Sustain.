import { motion } from "framer-motion";
import { ExternalLink, Users, School, Sparkles } from "lucide-react";
import nirmaanLogo from "@/assets/nirmaan-1.jpg";
import nirmaanImg2 from "@/assets/nirmaan-2.jpg";

const highlights = [
  {
    icon: Users,
    title: "5 Million+ Lives Impacted",
    desc: "Transforming communities across 26 states and union territories in India over 20 years of service.",
  },
  {
    icon: School,
    title: "7 Empowerment Programs",
    desc: "Holistic Education, Economic Empowerment, Health & Wellbeing, Environment, Rural & Community Development, and Disaster Relief.",
  },
  {
    icon: Sparkles,
    title: "20 Years of Impact",
    desc: "Founded in 2005 by BITS Pilani alumni, pioneering inclusive and sustainable futures nationwide.",
  },
];

const NirmaanSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-green-accent/10 text-green-accent px-4 py-1.5 rounded-full text-sm font-body font-medium mb-4">
            <Users className="w-4 h-4" />
            Student-Led Initiative
          </div>
          <img
            src={nirmaanLogo}
            alt="Nirmaan.org logo"
            className="h-16 md:h-20 mx-auto mb-4 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold mb-3">
            Nirmaan — Building Futures
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            An organisation founded by BITS Pilani students with a passion to
            fulfil their responsibility towards the less privileged people of
            society.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border"
        >
          {/* Hero Image */}
          <div className="overflow-hidden">
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={nirmaanImg2}
              alt="Nirmaan community programme with students"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="p-8 md:p-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-muted-foreground font-body leading-relaxed text-base md:text-lg border-l-4 border-green-accent pl-5 mb-10"
            >
              <strong>Nirmaan Organization</strong>, founded in 2005 by alumni of BITS Pilani, is a pioneering non-profit dedicated to transforming lives and building a more inclusive and sustainable future. Led by Founder and Global CEO Sri Mayur Patnala, Nirmaan has impacted over <strong>5 million lives</strong> across 26 states and union territories in India, marking 20 years of impactful service.
              <br /><br />
              Through our transformative empowerment programs in Holistic Education, Economic Empowerment, Health &amp; Wellbeing, Environment &amp; Sustainability, Rural Development, Community Development, Disaster Relief &amp; Rehabilitation, we create equal opportunities for individuals, regardless of their background, to thrive with dignity, opportunity, and compassion.
            </motion.p>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.1 }}
                  className="bg-lavender rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <h.icon className="w-6 h-6 text-green-accent mb-3" />
                  <h4 className="text-base font-display text-foreground font-semibold mb-2">
                    {h.title}
                  </h4>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Initiatives */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-lavender rounded-xl p-6 border border-border"
            >
              <h4 className="text-lg font-display text-foreground font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">🌱</span> Community Initiatives
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Joy-of-Giving-Week stalls on campus promoting awareness and generosity.",
                  "Eco-friendly Holi celebrations to reduce chemical pollution.",
                  '"Come Be My Teacher" programme — connecting students with mentors.',
                  '"Wish Tree" project where children share their long-term dreams during campus fests.',
                  "Paper presentations at various events to encourage academic participation.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-sm font-body text-muted-foreground leading-relaxed flex gap-2.5"
                  >
                    <span className="text-green-accent mt-0.5 flex-shrink-0 font-bold">
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <a
                href="https://nirmaan.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline transition-colors"
              >
                Visit nirmaan.org
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NirmaanSection;
