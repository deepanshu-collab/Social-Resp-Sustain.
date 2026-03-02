import { useState } from "react";
import campusGoa from "@/assets/campus-goa.jpg";
import campusDubai from "@/assets/campus-dubai.jpg";
import campusPilani from "@/assets/campus-pilani.jpg";

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
    intro: "The campus is steadily moving towards sustainability in electricity and water usage. Water conservation and systematic distribution of portable water supply are managed and monitored efficiently.",
    sections: [
      {
        heading: "Energy Conservation",
        items: [
          "Over 60 solar water heaters, each with a capacity of 500 litres, provided at all 20 hostels.",
          "Approximately 40 standalone solar-powered streetlights installed on campus.",
          "85% of streetlights connected to an off-grid solar power plant producing 19 kW per day.",
          "Hostels and buildings equipped with LED fixtures since 2016.",
        ],
      },
      {
        heading: "Water Conservation",
        items: [
          "Five groundwater recharge points across campus.",
          "All overhead tanks equipped with floats, sensors, and shut-off mechanisms.",
          "Actuated valves on pressurised water tanks to prevent overflow.",
        ],
      },
      {
        heading: "Recycling",
        items: [
          "Sewage Treatment Plant (600 cumecs) operates 24/7.",
          "STP-treated water supplied to flush tanks and used for garden maintenance.",
          "Biogas plant and composter treat 1 ton of wet waste per day.",
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
          "Replacing conventional bulbs with LED saved 129,121 W.",
          "Saving 54.23 kg CO₂ per hour through energy-efficient lighting.",
        ],
      },
      {
        heading: "Recycling & Reuse",
        items: [
          "Designated bins for recyclable materials across campus.",
          "Annual donation drives for used clothes via Emirates Red Crescent.",
          "The Book Room provides used textbooks to reduce paper consumption.",
        ],
      },
      {
        heading: "Awareness Initiatives",
        items: [
          "Food wastage awareness campaigns to reduce carbon footprint.",
          "Annual Earth Day celebrations.",
          "Energy and water conservation messages displayed across campus.",
          "Students created paper bags as plastic-free alternatives.",
        ],
      },
    ],
  },
  pilani: {
    title: "BITS Pilani - Zero Discharge Campus",
    intro: "BITS Pilani is steadily moving towards sustainability in electricity, water & use of natural resources, taking us closer to our aim of becoming a zero-discharge campus.",
    sections: [
      {
        heading: "Energy Conservation",
        items: [
          "949.12 kWp of on-grid rooftop solar power plants installed.",
          "26 standalone solar-powered street lights saving ~990 kW annually.",
          "80 of 495 street lights connected to off-grid solar plants (18.5 kW/day).",
          "All 495 campus street lights are LED type with LDR-based auto control.",
          "28 solar-powered car parking stands for 56 vehicles.",
        ],
      },
      {
        heading: "Water Conservation",
        items: [
          "Six groundwater recharge points across campus.",
          "All tanks equipped with floats, sensors, and actuator valves.",
          "VFD-based hydro pneumatic system and low-flow fixtures.",
          "STP treated water used for HVAC, flushing, and irrigation.",
        ],
      },
      {
        heading: "Recycling",
        items: [
          "2-ton-per-day organic waste processing plant on campus.",
          "Biogas from plant used to generate electricity.",
          "Two STPs (1 MLD & 1.5 MLD) operating round the clock.",
          "Domestic waste segregated at source into dry and wet waste.",
        ],
      },
    ],
  },
};

const CampusTabs = () => {
  const [active, setActive] = useState<CampusKey>("goa");
  const data = campusContent[active];

  return (
    <section className="py-16 px-6 md:px-12 bg-lavender">
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

        <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
          <img
            src={campusImages[active]}
            alt={data.title}
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-display text-foreground font-semibold mb-4">
              {data.title}
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {data.intro}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default CampusTabs;
