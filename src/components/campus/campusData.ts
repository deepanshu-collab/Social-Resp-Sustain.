export type CampusKey = "pilani" | "dubai" | "goa" | "hyderabad";

export const campuses: { key: CampusKey; label: string }[] = [
  { key: "pilani", label: "Pilani Campus" },
  { key: "dubai", label: "Dubai Campus" },
  { key: "goa", label: "KK Birla Goa Campus" },
  { key: "hyderabad", label: "Hyderabad Campus" },
];

export const campusContent: Record<
  CampusKey,
  { title: string; intro: string; sections: { heading: string; items: string[] }[] }
> = {
  pilani: {
    title: "BITS Pilani, Pilani Campus",
    intro:
      "BITS Pilani Pilani Campus is moving toward a zero-discharge model through large-scale solar adoption, LED and smart lighting, water recycling, recharge systems, and efficient fixtures. The campus has also significantly enhanced its green cover and biodiversity with over 11,750 new plants, a dedicated Peacock Preservation Project, environmental education initiatives, and regular campus hygiene drives.",
    sections: [
      {
        heading: "Energy Conservation",
        items: [
          "The campus has installed 949.12 KWp of on-grid rooftop solar power plants.",
          "It features numerous standalone and off-grid solar-powered street lights. All 495 street light fixtures on campus are LED and use Light Dependent Resistor (LDR) sensors to automatically turn on and off based on sunlight intensity.",
          "The campus features solar-powered car parking stands capable of accommodating 56 four-wheelers.",
        ],
      },
      {
        heading: "Water & Waste Management",
        items: [
          "The campus has created six groundwater recharge points to capture surface runoff during the monsoon season.",
          "Water distribution is optimized using Variable Frequency Drive (VFD) based hydro-pneumatic systems and low-flow fixtures.",
          "A 2 Ton per day organic waste processing plant treats wet waste to produce organic manure and biogas, which is stored and used to generate electric power.",
          "Two Sewage Treatment Plants (1 MLD and 1.5 MLD) operate around the clock to treat domestic sewage. The treated effluent is reused for HVAC cooling tower makeup, toilet flushing, and landscape irrigation.",
        ],
      },
      {
        heading: "Campus-Wide Plantation & Biodiversity",
        items: [
          "Over the past decade, the campus has planted more than 11,750 new plants, significantly enhancing green cover and biodiversity. Ceremonial tree plantations are regularly organized during guest visits to reinforce the campus's green identity.",
          "Initiated in 2017 and funded by the BITS Pilani 1997 Alumni batch, the Peacock Preservation Project developed a 4,602.26 sq. m. protected area, planted approximately 250 trees, and created a pond to revive the local peacock population and support native bird species.",
        ],
      },
      {
        heading: "Environmental Education & Campus Hygiene",
        items: [
          "The Horticulture Department hosts an annual Interschool Gardening Competition for local BET schools to foster eco-awareness among the youth. The campus also promotes plant literacy by installing informational naming boards for various species in the South Park.",
          "The institute conducts regular fogging and fumigation drives during the monsoon months in residential and hostel areas to control mosquito populations and maintain a safe, eco-friendly environment.",
        ],
      },
    ],
  },
  dubai: {
    title: "BITS Pilani, Dubai Campus",
    intro:
      "BITS Pilani Dubai Campus is advancing sustainability through energy efficiency, recycling, resource conservation, and awareness initiatives. The campus promotes responsible consumption by running drives on food wastage, energy and water conservation, and Earth Day/Earth Hour participation, while significantly reducing electricity use through LED lighting that cuts carbon emissions. Recycling systems collect paper and materials for municipal processing, textbooks are reused through a book-sharing system, and usable exam papers are repurposed into pads. Donation drives for clothes, promotion of biodegradable paper bags, and student-led environmental activities further support waste reduction and community engagement, reflecting a holistic approach to lowering the campus's environmental footprint.",
    sections: [
      {
        heading: "Environmental Conservation & Awareness",
        items: [
          "Earth Day & Earth Hour: Actively celebrated by planting saplings, organizing online awareness events, and turning off non-essential campus lights to support global environmental movements.",
          "Awareness Drives: Posters across the campus and dining halls encourage energy and water conservation while highlighting the environmental impact of food wastage.",
        ],
      },
      {
        heading: "Operation Reuse & Sustainability",
        items: [
          "Paper Bags: Students hand-made biodegradable bags from newspapers and donated them to the campus Mini Mart and Canteen to combat plastic use.",
          "Cloth Donation: The Social and Environment Club annually collects clothes and bedding for donation to the Emirates Red Crescent.",
          "The Book Room: Used textbooks are made available for students to borrow, reducing the ecological footprint of printed books.",
          "Recycled Pads: Usable papers from old exam booklets are repurposed into scribbling pads for students and faculty.",
        ],
      },
      {
        heading: "Energy Management & Awareness",
        items: [
          "The campus replaced conventional bulbs with LED lighting systems, successfully saving 129,121 W and reducing CO₂ emissions by 54.23 kg every hour.",
          "The campus actively campaigns against food wastage to lower its greenhouse gas emissions and carbon footprint.",
          "The campus observes Earth Hour by turning off non-essential lights to raise environmental awareness and supports Earth Day by planting saplings.",
        ],
      },
      {
        heading: "Recycling & Circular Economy",
        items: [
          "Designated recycling bins are located throughout the campus, and recyclable materials are processed at the Dubai Recycling Centre.",
          "Through an initiative called \"The Book Room,\" students can borrow used textbooks rather than purchasing new ones to reduce the ecological impact of printed materials.",
          "Usable paper from old exam booklets is repurposed into scribbling pads for students and staff.",
          "To reduce plastic consumption, students created biodegradable paper bags from newspapers for use in the campus Mini Mart and canteen.",
        ],
      },
      {
        heading: "Green Campus & Plantation",
        items: [
          "Environmental sustainability was encouraged through a Tree Plantation Drive on campus. Students and staff contributed to creating a greener campus and spreading awareness about ecological responsibility.",
        ],
      },
    ],
  },
  goa: {
    title: "BITS Pilani, KK Birla Goa Campus",
    intro:
      "BITS Pilani KK Birla Goa Campus is advancing sustainability through renewable energy adoption, water conservation, recycling, and eco-friendly campus practices. The campus promotes solar water heating, solar street lighting, LED retrofits, and planned on-grid solar expansion to reduce conventional power use, while groundwater recharge systems, automated tank controls, and reuse of treated sewage water support efficient water management. Private vehicles are restricted to limit emissions, and green mobility is encouraged through walking corridors and public transport. Waste is segregated and processed via biogas, composting, and recycling systems, with treated sludge and garden waste reused as manure. Student initiatives such as tree plantations, clean-up drives, wildlife awareness, and sustainability events further strengthen environmental responsibility and community participation across the campus.",
    sections: [
      {
        heading: "Energy Efficiency",
        items: [
          "The campus has an installed solar power capacity of 1.45 MWp, generating approximately 20 lakh units of electricity annually and reducing CO₂ emissions by nearly 1,700 tons per year. Over 60 solar water heaters (500 liters each) provide hot water to all 20 student hostels.",
          "Energy consumption has been minimized through the installation of thousands of LED lights, BLDC ceiling fans, limit switches, and occupancy sensors.",
          "An Energy Management System (EMS) and a Building Management System (BMS) are used for real-time monitoring and to automate the air handling units based on classroom schedules.",
        ],
      },
      {
        heading: "Water Conservation & Ecosystem Management",
        items: [
          "The campus utilizes water-saving aerators (yielding a 20–30% reduction in usage) and push-type self-closing taps in washbasins. A 600 cumec Sewage Treatment Plant treats domestic wastewater, and the resulting treated water is used for flushing networks and landscaping.",
          "Wet waste is treated daily in a 1 TPD biogas plant and composter, converting it into garden manure. Dry waste is baled using a 5HP machine and handed over to authorized recyclers.",
          "A total of 150 trees were planted in collaboration with the Goa Forest Department to strengthen the campus's green cover and climate-resilient micro-ecosystem.",
        ],
      },
    ],
  },
  hyderabad: {
    title: "BITS Pilani, Hyderabad Campus",
    intro:
      "BITS Pilani Hyderabad Campus promotes sustainability through integrated initiatives in renewable energy, water conservation, waste management, and green campus development. The campus uses large-scale rooftop solar systems, solar street lights, solar hot water units, LED lighting, timers, and motion sensors to reduce electricity consumption, while rainwater harvesting pits, aerators, push taps, waterless urinals, and reuse of treated water for flushing and gardening support efficient water management. Waste is segregated into dry, wet, and e-waste, with wet waste converted into manure and food waste processed in a biodigester for future energy use. Tree plantation drives under the Haritha Haram scheme and a dedicated herbal garden further strengthen biodiversity and environmental awareness, reflecting a comprehensive approach toward a greener and resource-efficient campus.",
    sections: [
      {
        heading: "Renewable Energy",
        items: [
          "Rooftop solar power systems with a capacity of approximately 1.5 MW have been installed across academic and hostel blocks, generating nearly 1.75 lakh units of electricity per month. The campus utilizes 50 solar street lights and solar hot water systems in all hostels to reduce reliance on conventional electricity.",
          "Power consumption is actively reduced via LED tube lights, automatic street light timers, and washroom motion sensors.",
        ],
      },
      {
        heading: "Water Conservation & Greening",
        items: [
          "To improve groundwater levels, the campus relies on seven conventional recharge pits and three injection-type recharge pits.",
          "Water usage is optimized through the installation of washbasin aerators (saving 25–30%), push-type taps, and around 50 waterless urinals.",
          "Treated water is actively used for flushing in high-rise towers and irrigating campus gardens.",
          "Food waste from campus messes is treated in a biodigester plant, while a dedicated yard segregates dry, wet, and e-waste.",
          "Under the Haritha Haram scheme, roughly 200 trees are planted annually, and the Department of Pharmacy maintains a dedicated herbal garden.",
        ],
      },
    ],
  },
};
