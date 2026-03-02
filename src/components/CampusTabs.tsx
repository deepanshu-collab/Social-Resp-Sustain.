import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Leaf, ChevronRight } from "lucide-react";
import campusPilaniMain from "@/assets/campus-pilani-main.jpg";
import campusDubaiMain from "@/assets/campus-dubai-main.jpg";
import campusGoaMain from "@/assets/campus-goa-main.jpg";
import campusHyderabadMain from "@/assets/campus-hyderabad-main.jpg";
import campusPilaniExtra1 from "@/assets/campus-pilani-extra1.jpg";
import campusPilaniExtra2 from "@/assets/campus-pilani-extra2.jpg";
import campusDubaiExtra1 from "@/assets/campus-dubai-extra1.jpg";
import campusDubaiExtra2 from "@/assets/campus-dubai-extra2.jpg";
import campusDubaiExtra3 from "@/assets/campus-dubai-extra3.jpg";
import campusGoaExtra1 from "@/assets/campus-goa-extra1.jpg";
import campusGoaExtra2 from "@/assets/campus-goa-extra2.jpg";
import campusHyderabadExtra1 from "@/assets/campus-hyderabad-extra1.jpg";
import campusHyderabadExtra2 from "@/assets/campus-hyderabad-extra2.jpg";
import campusExtra2 from "@/assets/campus-extra-2.jpg";
import { campuses, campusContent, type CampusKey } from "@/components/campus/campusData";

const campusImages: Record<CampusKey, string> = {
  pilani: campusPilaniMain,
  dubai: campusDubaiMain,
  goa: campusGoaMain,
  hyderabad: campusHyderabadMain,
};

const campusGallery: Record<CampusKey, string[]> = {
  pilani: [campusPilaniExtra1],
  dubai: [campusDubaiExtra1, campusDubaiExtra2, campusDubaiExtra3],
  goa: [campusGoaExtra1, campusGoaExtra2],
  hyderabad: [campusHyderabadExtra1, campusHyderabadExtra2, campusExtra2],
};

const galleryLabels: Record<CampusKey, string[]> = {
  pilani: ["Rooftop Solar Power Plant Installation"],
  dubai: ["LED Lighting Systems", "Book Reuse & Paper Conservation", "Waste Segregation & Recycling"],
  goa: ["Solar Water Heaters & Green Campus", "Sewage Treatment Plant"],
  hyderabad: ["Solar Hot Water Systems", "Solar Street Lights & Green Corridors", "Waste Management & Recycling Centre"],
};

const sectionIcons: Record<string, string> = {
  "Energy Conservation": "⚡",
  "Water Conservation": "💧",
  "Recycling": "♻️",
  "Transportation": "🚲",
  "Irrigation": "🌿",
  "LED Energy Savings": "💡",
  "Food Wastage Awareness": "🍃",
  "Recycling & Reuse": "♻️",
  "Awareness Initiatives": "📢",
  "Green Initiatives": "🌱",
  "Waste Management": "🗑️",
};

const CampusTabs = () => {
  const [active, setActive] = useState<CampusKey>("pilani");
  const data = campusContent[active];
  const gallery = campusGallery[active];
  const labels = galleryLabels[active];

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
            <Leaf className="w-4 h-4" />
            Our Campuses
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold">
            Sustainability Initiatives Across Campuses
          </h2>
        </div>

        {/* Campus Tab Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {campuses.map(({ key, label }, index) => (
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
              <MapPin className="w-4 h-4" />
              {label}
              {active === key && (
                <motion.div
                  layoutId="activeIndicator"
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
            <div className="relative w-full overflow-hidden bg-foreground/5">
              <motion.img
                key={active + "-img"}
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                src={campusImages[active]}
                alt={data.title}
                className={`w-full h-64 md:h-[400px] ${active === "pilani" ? "object-contain" : "object-cover object-center"}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
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

              {/* Gallery */}
              {gallery.length > 0 && (
                <div className="mb-10">
                  <h4 className="text-lg font-display text-foreground font-semibold mb-5 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-green-accent" />
                    Campus Sustainability Infrastructure
                  </h4>
                  <div className={`grid gap-5 ${
                    gallery.length === 1 ? "grid-cols-1" :
                    gallery.length === 3 ? "grid-cols-1 md:grid-cols-3" :
                    "grid-cols-1 md:grid-cols-2"
                  }`}>
                    {gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                        className="rounded-xl overflow-hidden border border-border shadow-lg group hover:shadow-xl transition-shadow duration-500"
                      >
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img
                            src={img}
                            alt={labels[i] || `${data.title} sustainability`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="px-4 py-3 bg-lavender border-t border-border">
                          <p className="text-sm font-body font-semibold text-foreground/80 flex items-center gap-2">
                            <Leaf className="w-3.5 h-3.5 text-green-accent flex-shrink-0" />
                            {labels[i] || "Sustainability Initiative"}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6">
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

export default CampusTabs;
