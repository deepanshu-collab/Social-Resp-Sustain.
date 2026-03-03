export type ChapterKey = "pilani" | "goa" | "hyderabad";

export interface ChapterProject {
  name: string;
  description: string;
}

export interface ChapterData {
  label: string;
  intro: string;
  projects: ChapterProject[];
}

export const chapterTabs: { key: ChapterKey; label: string }[] = [
  { key: "pilani", label: "Pilani" },
  { key: "goa", label: "Goa" },
  { key: "hyderabad", label: "Hyderabad" },
];

export const chapterContent: Record<ChapterKey, ChapterData> = {
  pilani: {
    label: "Pilani Chapter",
    intro:
      "Nirmaan BITS Pilani Chapter, the birthplace of changemakers since 2005, runs eleven dynamic projects across education, women's empowerment, and community development — all driven by dedicated student volunteers.",
    projects: [
      {
        name: "School Adoption Program (SAP)",
        description:
          "Improving government schools at the foundational level with infrastructure, academics, and student development — achieving a 100% pass rate for 10th-grade board exams.",
      },
      {
        name: "Shiksha Ki Ore (SKO)",
        description:
          "Providing quality education to children in rural areas near BITS Pilani, enrolling 15+ children in formal schooling with mentorship and library programmes.",
      },
      {
        name: "Gyaan Bodh Baas",
        description:
          "Supporting primary education and moral development of children in Baas village and Shahi School through regular visits and educational assistance.",
      },
      {
        name: "Pilani Ki Pathshala (PKP)",
        description:
          "Enhancing well-being of children in Mungda Basti through education, financial assistance, and long-term support via Pranyas and scholarships.",
      },
      {
        name: "Project Unnati",
        description:
          "Empowering women in Pilani with skills training — including stitching, organic Holi colours, and Paper Mache products — to achieve financial independence.",
      },
      {
        name: "Swayamshakti",
        description:
          "Training rural women in needlework, weaving, embroidery, and decorative arts with vocational certification and festive product sales.",
      },
      {
        name: "Pragati",
        description:
          "Instilling self-confidence in rural women through embroidery training, awareness talks, and plans for online purchase and delivery options.",
      },
      {
        name: "Participatory Community Development (PCD)",
        description:
          "Fostering community growth — installing sanitary pad vending machines, improving waste management, and addressing infrastructure needs.",
      },
      {
        name: "Project Udaan",
        description:
          "Empowering youth with employment opportunities, RSCIT tests, scholarships, ITI exam preparation, and collaborations with local companies.",
      },
      {
        name: "Project Utkarsh",
        description:
          "Preventing school dropouts among underprivileged students by providing faculty-funded scholarships to sustain their academic journeys.",
      },
      {
        name: "Project Disha",
        description:
          "Career guidance for high school students with detailed job opportunity insights and personalised one-on-one mentorship sessions.",
      },
    ],
  },
  goa: {
    label: "Goa Chapter",
    intro:
      "Established in 2007, Nirmaan Goa Chapter is a dynamic force of 250+ student volunteers from BITS Pilani K K Birla Goa Campus — excelling in education, employment, healthcare, and community development for 17 years.",
    projects: [
      {
        name: "Women Empowerment Operations",
        description:
          "Collaborating with women from Birla slums to form Self-Help Groups, producing 85 kg of Holi colours and 1,500 Diwali items — empowering 40+ women towards financial independence.",
      },
      {
        name: "Projects Disha & Shiksha",
        description:
          "Preparing children from Lamani and Zari slums for Jawahar Navodaya Vidyalaya (JNV) exams with 30+ successful selections to date.",
      },
      {
        name: "Teach Zari & Project Lamani",
        description:
          "Providing regular educational support to 80+ children with campus outings, cultural celebrations, and enrichment events like Happy Streets and Eduspark.",
      },
      {
        name: "Health Vertical",
        description:
          "Organising comprehensive check-up camps for 70+ individuals, dental camps for 55+, menstrual health sessions, and on-campus blood donation drives.",
      },
      {
        name: "Udaan — Sports Fest",
        description:
          "One of the largest sports fests for the differently abled in Goa, featuring 8 sports with 150+ participants from 6 special schools in collaboration with Special Olympics Bharat.",
      },
      {
        name: "Project Saksham",
        description:
          "A ₹10 lakh+ initiative with United Way Mumbai providing vocational and entrepreneurship training to 60+ unemployed women from Varca and Zuari Nagar.",
      },
    ],
  },
  hyderabad: {
    label: "Hyderabad Chapter",
    intro:
      "The Nirmaan Hyderabad Chapter at BITS Pilani Hyderabad Campus drives impactful community engagement through flagship events, education programmes, and outreach — united by the passion for 'the rise of a great nation'.",
    projects: [
      {
        name: "Manthan — NGO Conference",
        description:
          "Nirmaan's flagship event bringing 10+ NGOs together to discuss real-time problem solutions as a student body — restarted offline after three years with its 7th edition.",
      },
      {
        name: "Project Parishkaar",
        description:
          "A special project tutoring children of campus staff, catering to around 20 students each semester — enriching both volunteers and kids.",
      },
      {
        name: "Letter of Joy",
        description:
          "A heartwarming initiative delivering around 650 handwritten letters, spreading joy and generating tremendous enthusiasm from the general body.",
      },
      {
        name: "Digital Literacy Workshop",
        description:
          "Bringing together campus workers to explore online safety and digital advancements through engaging, informative workshop sessions.",
      },
      {
        name: "Ignite — Social Fest",
        description:
          "A vibrant 3-day celebration providing impoverished children from orphanages with workshops in arts, science, sports, career guidance, and performances by musicians and magicians.",
      },
    ],
  },
};
