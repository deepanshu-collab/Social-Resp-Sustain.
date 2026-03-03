import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  chapterTabs,
  chapterContent,
  type ChapterKey,
} from "./nirmaanChaptersData";


const NirmaanChapters = () => {
  const [active, setActive] = useState<ChapterKey>("pilani");
  const data = chapterContent[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="mt-12"
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-display text-foreground font-semibold">
          Nirmaan Student Chapters
        </h3>
        <p className="text-muted-foreground font-body max-w-xl mx-auto mt-2 text-sm">
          Explore campus-specific projects and initiatives led by student
          volunteers across BITS Pilani campuses.
        </p>
      </div>

      {/* Chapter Tabs */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {chapterTabs.map(({ key, label }, index) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              onClick={() => setActive(key)}
              className={`relative px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                active === key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                  : "bg-lavender text-muted-foreground hover:bg-lavender-deep hover:text-foreground border border-border hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              {label}
              {label}
              {active === key && (
                <motion.div
                  layoutId="chapterActiveIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-green-accent rounded-full"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Chapter Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-lavender rounded-2xl p-6 md:p-8 border border-border"
        >
          {/* Chapter Intro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6"
          >
            <h4 className="text-lg font-display text-foreground font-semibold mb-2 flex items-center gap-2">
              <span className="text-xl">📍</span> {data.label}
            </h4>
            <p className="text-sm font-body text-muted-foreground leading-relaxed border-l-3 border-green-accent pl-4">
              {data.intro}
            </p>
          </motion.div>

          {/* Project Cards Grid */}
          <div
            className={`grid gap-4 ${
              data.projects.length <= 3
                ? "md:grid-cols-2 lg:grid-cols-3"
                : data.projects.length <= 6
                ? "md:grid-cols-2 lg:grid-cols-3"
                : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            {data.projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.15 + idx * 0.05,
                }}
                className="bg-card rounded-xl p-5 border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-green-accent font-bold text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                    ›
                  </span>
                  <div>
                    <h5 className="text-sm font-display text-foreground font-semibold mb-1.5 group-hover:text-primary transition-colors">
                      {project.name}
                    </h5>
                    <p className="text-xs font-body text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default NirmaanChapters;
