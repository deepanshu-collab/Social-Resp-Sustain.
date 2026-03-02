export type SRCampusKey = "pilani" | "dubai" | "goa" | "hyderabad";

export const srCampuses: { key: SRCampusKey; label: string }[] = [
  { key: "pilani", label: "Pilani Campus" },
  { key: "dubai", label: "Dubai Campus" },
  { key: "goa", label: "KK Birla Goa Campus" },
  { key: "hyderabad", label: "Hyderabad Campus" },
];

export interface SRCampusContent {
  title: string;
  intro: string;
  sections: { heading: string; items: string[] }[];
}

export const srCampusContent: Record<SRCampusKey, SRCampusContent> = {
  pilani: {
    title: "BITS Pilani, Pilani Campus",
    intro:
      "BITS Pilani Pilani Campus has a rich tradition of social engagement through student organisations, faculty-led programmes, educational support, community health initiatives, youth empowerment, pandemic relief, and animal welfare programmes that create lasting impact on society.",
    sections: [
      {
        heading: "Community Outreach & Education",
        items: [
          "Nirmaan: Initiated in February 2005 by BITSians, this student-led NGO is committed to a poverty-free, knowledge-powered, and economically empowered nation. It provides education and livelihood opportunities for underprivileged people.",
          "NSS Pilani: Composed of enthusiastic volunteers and teachers, NSS focuses on comprehensive and sustainable models for community development, making students responsible citizens dedicated to improving the country.",
        ],
      },
      {
        heading: "Empowerment & Campus Cooperatives",
        items: [
          "Pilani Innovation and Entrepreneurship Development Society (PIEDS): Its core agenda is to inspire, nurture, grow, and bring startups and social innovations to reality.",
          "BITS Alumni Trust Initiative: Fosters community development in and around Pilani by providing an ecosystem for skill training, job creation, health, education, entrepreneurship, and women's rights.",
          "Society for Student Mess Services (SSMS): A student-run body managing the financial and operational affairs of 7 messes and 1 all-night canteen, employing nearly 200 mess workers for over 3,500 students.",
        ],
      },
      {
        heading: "Educational Support & Scholarships",
        items: [
          "The institute distributed over ₹23.31 crores in Ph.D. fellowships and M.E. stipends in FY 2024-25 to 1,069 research and postgraduate students.",
          "Between 2016 and 2025, merit and need-based scholarships empowered over 19,000 students (2,031 girls and 17,539 boys).",
        ],
      },
      {
        heading: "Community Health & Wellness",
        items: [
          "Regular free health check-up camps are organized for nearby villages and campus support staff, benefiting over 1,500 individuals with consultations and free medicines. Dedicated camps include a Dental Checkup Camp serving over 85 workers and a Cervical Cancer Awareness Programme hosted in collaboration with Max Hospital.",
          "Between 2019 and 2025, campus blood donation drives collected 3,415 units of blood in partnership with local hospitals and NGOs. The campus also hosts annual Yoga Camps and wellness drives.",
        ],
      },
      {
        heading: "NSS Outreach & Youth Empowerment",
        items: [
          "The NSS has engaged more than 2,000 beneficiaries through literacy programs, rural computer literacy drives, and social awareness campaigns focusing on mental health, menstrual hygiene, and nutrition.",
          "The Young Entrepreneurs Bootcamp (YEB) provides students from grades 9–12 across India with hands-on workshops in innovation, design thinking, and business planning, mentoring 314 school students between 2022 and 2025.",
        ],
      },
      {
        heading: "COVID-19 Relief & Animal Welfare",
        items: [
          "During the pandemic, the campus established isolation centres, facilitated free vaccination drives, donated 10 oxygen concentrators and 4 ventilators to local hospitals, distributed ~1,500 dry ration packets and ~2,500 cooked meals, and awarded ₹10,000 each to 75 frontline \"Corona Warriors\".",
          "The Animal Welfare Committee runs an Animal Birth Control (ABC) and feeding program, providing daily food and medical care for approximately 225 campus dogs, and has successfully neutered, vaccinated, and microchipped 144 dogs.",
        ],
      },
    ],
  },
  dubai: {
    title: "BITS Pilani, Dubai Campus",
    intro:
      "BITS Pilani Dubai Campus nurtures a culture of giving back through student organisations, community service programmes, and collaborations that extend the institution's impact beyond the classroom.",
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
        heading: "Humanitarian Relief & Educational Outreach",
        items: [
          "Students actively engage in relief efforts, such as gathering essential materials for earthquake-affected families in Afghanistan. Health initiatives include campus-wide blood donation camps and Flu Vaccination Drives.",
          "The campus conducts hands-on AI and Machine Learning workshops for local schools to spark early interest in technology, alongside Spoken English classes for facility management staff.",
        ],
      },
    ],
  },
  goa: {
    title: "BITS Pilani, KK Birla Goa Campus",
    intro:
      "BITS Pilani KK Birla Goa Campus actively promotes social responsibility through student-driven initiatives, community outreach, innovation support, and welfare activities that create a lasting positive impact on society.",
    sections: [
      {
        heading: "Innovation & Economic Empowerment",
        items: [
          "BITS Goa Innovation, Incubation & Entrepreneurship Society (BGIIES): Registered in February 2020, the society promotes innovation and entrepreneurship education, establishing Business Incubators to support innovation-based startups.",
          "Self-Help Groups: Campus initiatives train women in local slums to create and market sustainable handicrafts (like eco-friendly Holi colors), fostering their financial independence.",
        ],
      },
      {
        heading: "Health, Education & Community Welfare",
        items: [
          "Medical Outreach: Free eye check-up camps distributing subsidized spectacles, alongside breast cancer awareness and screening camps for nearby communities.",
          "Inclusivity: The flagship \"Udaan\" sports festival provides a platform for differently-abled children. Volunteers support education of adopted slum children and donate occupational therapy equipment to special schools.",
          "Campus Harmony: Traditions like the \"Meal of Joy\" and mess worker sports championships celebrate housekeeping, security, and mess staff.",
        ],
      },
    ],
  },
  hyderabad: {
    title: "BITS Pilani, Hyderabad Campus",
    intro:
      "BITS Pilani Hyderabad Campus drives social impact through its NSS unit of 300 active volunteers, village adoption programmes, health campaigns, environmental drives, and student mentorship initiatives under the motto \"NOT ME BUT YOU.\"",
    sections: [
      {
        heading: "Rural & Community Development",
        items: [
          "Village Adoption: Volunteers have adopted three local villages to petition grievances, improve school infrastructure, and provide basic education, hygiene, career guidance, and financial information.",
          "Women's Empowerment: Every Deepavali, volunteers partner with Nirmaan to train unemployed village women in candle making, helping to market the candles and instill entrepreneurial confidence.",
        ],
      },
      {
        heading: "Health & Environment",
        items: [
          "Blood Donation: Conducts a bi-annual blood donation drive with the Red Cross, collecting over 1,500 units of blood since its inception.",
          "Green Cover & Waste: The campus has planted over 7,000 saplings with an impressive 80% survival rate. Volunteers educate neighbouring schools on making eco-friendly clay idols and conduct regular safe waste disposal drives.",
        ],
      },
      {
        heading: "Social Philanthropy & Student Development",
        items: [
          "Orphanage & Relief Outreach: Through the Prathiba initiative, volunteers visit orphanages to educate and provide stationery. The Sahara Initiative runs a door-to-door drive collecting clothing, blankets, and books for hundreds of street children.",
          "Mentorship & Leadership: Over 137 volunteers form a peer support structure in the \"Be A Mentor\" program. Faculty designs an \"Effective Leadership Program\" to develop public speaking, professional ethics, and social responsibility.",
        ],
      },
    ],
  },
};
