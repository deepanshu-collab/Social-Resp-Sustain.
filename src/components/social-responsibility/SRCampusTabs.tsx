import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronRight, Leaf } from "lucide-react";
import { srCampuses, srCampusContent, type SRCampusKey } from "./srCampusData";
import campusPilaniMain from "@/assets/campus-pilani-main.jpg";
import campusDubaiMain from "@/assets/campus-dubai-main.jpg";
import campusGoaMain from "@/assets/campus-goa-main.jpg";
import campusHyderabadMain from "@/assets/campus-hyderabad-main.jpg";

const campusImages: Record<SRCampusKey, string> = {
  pilani: campusPilaniMain,
  dubai: campusDubaiMain,
  goa: campusGoaMain,
  hyderabad: campusHyderabadMain,
};

const sectionIcons: Record<string, string> = {
  "Community Outreach & Education": "📚",
  "Empowerment & Campus Cooperatives": "🤝",
  "Charitable Health & Relief Initiatives": "🏥",
  "Environmental Conservation & Awareness": "🌍",
  "Operation Reuse & Sustainability": "♻️",
  "Humanitarian Relief & Educational Outreach": "🎓",
  "Innovation & Economic Empowerment": "💡",
  "Health, Education & Community Welfare": "💛",
  "Rural & Community Development": "🏘️",
  "Health & Environment": "🌿",
  "Social Philanthropy & Student Development": "📣",
};

const SRCampusTabs = () => {
  const [active, setActive] = useState<SRCampusKey>("pilani");
  const data = srCampusContent[active];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 md:px-12 bg-lavender"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-accent/10 text-green-accent px-4 py-1.5 rounded-full text-sm font-body font-medium mb-4"
          >
            <Heart className="w-4 h-4" />
            Our Campuses
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold">
            Social Responsibility Across Campuses
          </h2>
        </div>

        {/* Campus Tab Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {srCampuses.map(({ key, label }, index) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setActive(key)}
              className={`relative px-6 py-3 rounded-xl font-body text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                active === key
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105"
                  : "bg-card text-muted-foreground hover:bg-lavender-deep hover:text-foreground border border-border hover:border-primary/30 hover:shadow-md"
              }`}
            >
              {label}
              {active === key && (
                <motion.div
                  layoutId="srActiveIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-green-accent rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Campus Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border"
          >
            {/* Hero Image */}
            <div className="relative w-full overflow-hidden">
              <motion.img
                key={active + "-img"}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={campusImages[active]}
                alt={data.title}
                className={`w-full h-72 md:h-[420px] object-cover ${active === "pilani" ? "object-top" : ""}`}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent p-8 md:p-12">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-display text-white font-semibold drop-shadow-lg"
                >
                  {data.title}
                </motion.h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-12">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-muted-foreground font-body leading-relaxed mb-10 text-base md:text-lg border-l-4 border-green-accent pl-5"
              >
                {data.intro}
              </motion.p>

              {/* Section Cards Grid */}
              <div className={`grid gap-6 ${data.sections.length === 2 ? "md:grid-cols-2" : data.sections.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
                {data.sections.map((section, sIdx) => (
                  <motion.div
                    key={section.heading}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.2 + sIdx * 0.1 }}
                    className="bg-lavender rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="text-lg font-display text-foreground font-semibold mb-4 flex items-center gap-2">
                      <span className="text-xl">{sectionIcons[section.heading] || "🔹"}</span>
                      {section.heading}
                    </h4>
                    <ul className="space-y-2.5">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm font-body text-muted-foreground leading-relaxed flex gap-2.5"
                        >
                          <span className="text-green-accent mt-0.5 flex-shrink-0 font-bold">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default SRCampusTabs;
