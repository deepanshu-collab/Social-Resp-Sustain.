import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import campusGoa from "@/assets/campus-goa.webp";
import campusDubai from "@/assets/campus-dubai.jpg";
import campusPilani from "@/assets/campus-pilani.webp";

type CampusKey = "goa" | "dubai" | "pilani";

const campuses: { key: CampusKey; label: string }[] = [
  { key: "goa", label: "KK Birla Goa Campus" },
  { key: "dubai", label: "Dubai Campus" },
  { key: "pilani", label: "Pilani Campus" },
];

const campusImages: Record<CampusKey, string> = {
  goa: campusGoa,
  dubai: campusDubai,
  pilani: campusPilani,
};

const campusContent: Record<CampusKey, { title: string; intro: string; sections: { heading: string; items: string[] }[] }> = {
  goa: {
    title: "Goa Campus: Leading the Way in Energy, Water & Eco-Friendly Practices",
    intro: "The campus is steadily moving towards sustainability in electricity and water usage. Water conservation and systematic distribution of portable water supply are managed and monitored efficiently. Water used by campus residents is treated scientifically and recycled for use on campus. Campus had aimed to reduce its dependence on conventional power. In this regard, solar power plants and energy-saving fixtures have been introduced and installed on the campus. The campus maintains lush green gardens with a rich collection of flora and fauna. Every year, during the monsoon, tree-plantation drives are conducted with the help of students.",
    sections: [
      {
        heading: "Energy Conservation",
        items: [
          "Over 60 solar water heaters, each with a capacity of 500 litres, are provided at all 20 hostels, which accommodate 3500+ students.",
          "Approximately 40 standalone solar-powered streetlights are installed on the campus, estimated to save around 2,600 kW of electricity annually.",
          "Approximately 85% of the campus's streetlights (275 total) are connected to an off-grid solar power plant producing 19 kW per day, saving around 41,000 kW annually.",
          "Since 2016, hostels, residential quarters, and buildings have been equipped with LED fixtures to reduce energy consumption.",
          "Existing CFL, tube lights and other fixtures are being replaced with energy-saving LED fixtures in a phased manner.",
          "Plans to install on-grid solar power systems ranging from 50 to 100 kW to enhance renewable energy usage.",
        ],
      },
      {
        heading: "Water Conservation",
        items: [
          "Five groundwater recharge points across campus for monsoon surface runoff percolation.",
          "All overhead tanks and water coolers equipped with floats, sensors, and shut-off mechanisms.",
          "Pressurised water tanks fitted with actuated valves to prevent overflow.",
        ],
      },
      {
        heading: "Transportation",
        items: [
          "Transportation is very limited on campus. 3500+ students are not permitted to use private transport inside the campus.",
          "Students are encouraged to use public transport for local movement outside the campus.",
          "Students use covered corridors to walk from hostels to the academic block.",
        ],
      },
      {
        heading: "Recycling",
        items: [
          "Sewage Treatment Plant (600 cumecs capacity) operates 24/7 to treat sewage.",
          "STP-treated water supplied to flush tanks and recycled for maintaining lush green gardens.",
          "Sludge from STP transferred to drying bed and used as manure.",
          "Domestic waste segregated at source into dry, wet, and medical waste streams.",
          "Biogas plant and composter treat 1 ton of wet waste per day.",
          "Dry waste segregated and handed to GSPCB-approved vendor for recycling.",
          "All garden waste composted and converted into manure.",
        ],
      },
    ],
  },
  dubai: {
    title: "Dubai Campus: Awareness & Conservation",
    intro: "Campus is steadily moving towards sustainability in electricity, water & use of natural resources. Water conservation and systematic distribution of potable water supply are managed and monitored efficiently.",
    sections: [
      {
        heading: "LED Energy Savings",
        items: [
          "By replacing conventional bulbs with LED lighting systems, BPDC saved 129,121 W.",
          "Carbon intensity of electricity production in UAE is 0.42 kg CO₂/kWh — saving 54.23 kg CO₂ per hour.",
        ],
      },
      {
        heading: "Food Wastage Awareness",
        items: [
          "Food wastage increases carbon footprint — wasted food in landfills produces methane more potent than CO₂.",
          "About 6%-8% of human-caused greenhouse gas emissions could be reduced by stopping food waste.",
          "Creating awareness is the first step towards bringing about change.",
        ],
      },
      {
        heading: "Recycling & Reuse",
        items: [
          "Designated bins for recyclable materials across campus interior and exterior buildings.",
          "Recyclable materials collected and deposited in the Municipal recycling centre.",
          "Annual donation drives for used clothes via Emirates Red Crescent.",
          "The Book Room provides used textbooks to reduce paper consumption and fossil fuel impact.",
          "Usable papers from exam booklets collected and made into scribbling pads for students and staff.",
        ],
      },
      {
        heading: "Awareness Initiatives",
        items: [
          "Annual Earth Day celebrations every April 22nd.",
          "Energy and water conservation awareness messages displayed across campus.",
          "Students created paper bags from newspapers as plastic-free alternatives for campus shops.",
        ],
      },
    ],
  },
  pilani: {
    title: "BITS Pilani - Zero Discharge Campus",
    intro: "BITS Pilani is steadily moving towards sustainability in electricity, water & use of natural resources, taking us closer to our aim of becoming a zero-discharge campus. Solar power plants and energy-saving fixtures have been introduced. Water is treated scientifically and recycled for flushing systems & horticulture. Battery-operated vehicles are being introduced and 5000+ students are encouraged to use cycles and public transportation.",
    sections: [
      {
        heading: "Energy Conservation",
        items: [
          "949.12 kWp of on-grid rooftop solar power plants installed and commissioned.",
          "26 standalone solar-powered street lights saving ~990 kW annually.",
          "80 of 495 street lights connected to off-grid solar plants (18.5 kW/day), saving ~6,753 kW annually.",
          "All 495 campus street lights are LED type with LDR-based auto on/off control.",
          "28 solar-powered car parking stands for 56 vehicles.",
          "Newly renovated hostel toilets and exhaust fans controlled with motion sensors.",
        ],
      },
      {
        heading: "Water Conservation",
        items: [
          "Six groundwater recharge points across campus for monsoon runoff percolation.",
          "All tanks equipped with floats, sensors, and actuator valves to prevent overflow.",
          "Insulation on water storage tanks to guard against extreme temperatures.",
          "VFD-based hydro pneumatic system and low-flow fixtures.",
          "STP treated water (BOD < 10 ppm, COD < 50 ppm) used for HVAC cooling, flushing, and irrigation.",
        ],
      },
      {
        heading: "Irrigation",
        items: [
          "Irrigation water for landscape sourced from in-house STP meeting governing requirements.",
          "Enables maintenance of lush green gardens across campus.",
        ],
      },
      {
        heading: "Recycling",
        items: [
          "Domestic waste segregated at source into dry and wet waste.",
          "2-ton-per-day organic waste processing plant on campus.",
          "Biogas from plant stored and used to generate electricity with a Biogas Generator.",
          "Plant by-product is organic manure used as soil improver.",
          "Two STPs (1 MLD & 1.5 MLD) operating round the clock.",
          "STP-treated water supplied to flush tanks through dedicated network.",
          "Sludge transferred to drying bed and used as manure.",
        ],
      },
    ],
  },
};

const CampusTabs = () => {
  const [active, setActive] = useState<CampusKey>("goa");
  const data = campusContent[active];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 md:px-12 bg-lavender"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold mb-8 text-center">
          Sustainability Initiatives Across Campuses
        </h2>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {campuses.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-3 rounded-full font-body text-sm font-medium transition-all ${
                active === key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-lavender-deep border border-border"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="w-full h-64 md:h-80 overflow-hidden bg-muted flex items-center justify-center">
              <img
                src={campusImages[active]}
                alt={data.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-display text-foreground font-semibold mb-4">
                {data.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                {data.intro}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {data.sections.map((section) => (
                  <div key={section.heading}>
                    <h4 className="text-lg font-display text-foreground font-semibold mb-3 border-b border-border pb-2">
                      {section.heading}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-sm font-body text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-green-accent mt-1 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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
