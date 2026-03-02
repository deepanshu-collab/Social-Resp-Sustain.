export type SRCampusKey = "goa" | "pilani" | "dubai";

export const srCampuses: { key: SRCampusKey; label: string }[] = [
  { key: "goa", label: "Goa Campus" },
  { key: "pilani", label: "Pilani Campus" },
  { key: "dubai", label: "Dubai Campus" },
];

export interface SRCampusContent {
  title: string;
  intro: string;
  sections: { heading: string; items: string[] }[];
}

export const srCampusContent: Record<SRCampusKey, SRCampusContent> = {
  goa: {
    title: "BITS Pilani, K K Birla Goa Campus",
    intro:
      "BITS Pilani K K Birla Goa Campus actively promotes social responsibility through student-driven initiatives, community outreach, and welfare activities that create a lasting positive impact on society.",
    sections: [
      {
        heading: "Community Outreach",
        items: [
          "Nirmaan — a student-run organisation focused on education and community welfare for underprivileged sections of society.",
          "Regular blood donation drives and health awareness campaigns in collaboration with local hospitals.",
          "Student volunteers conduct teaching programmes at local government schools and orphanages.",
        ],
      },
      {
        heading: "Social Welfare Initiatives",
        items: [
          "Annual collection and distribution drives for clothing, books, and essentials to nearby villages.",
          "Awareness campaigns on hygiene, digital literacy, and environmental conservation for local communities.",
          "Collaboration with NGOs for disaster relief efforts and rehabilitation programmes.",
        ],
      },
    ],
  },
  pilani: {
    title: "BITS Pilani, Pilani Campus",
    intro:
      "BITS Pilani Pilani Campus has a rich tradition of social engagement, with multiple student organisations and faculty-led programmes dedicated to uplifting communities in and around Pilani.",
    sections: [
      {
        heading: "Education & Empowerment",
        items: [
          "Nirmaan chapter at Pilani runs adult literacy programmes, career guidance workshops, and free tuition for village children.",
          "Centre for Entrepreneurial Leadership (CEL) supports social entrepreneurship ventures by students.",
          "Faculty-led research projects addressing rural healthcare, clean water, and sustainable agriculture.",
        ],
      },
      {
        heading: "Community Development",
        items: [
          "Annual cultural and sports events open to the local community, fostering town-gown relationships.",
          "Student-led blood donation camps, tree plantation drives, and Swachh Bharat campaigns.",
          "Partnerships with local self-help groups and cooperatives for skill development and livelihood training.",
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
        heading: "Student-Led Impact",
        items: [
          "Active student clubs organise charity fundraisers, food drives, and volunteering events throughout the year.",
          "Collaborations with Dubai-based NGOs for community service and youth mentorship programmes.",
          "Cultural exchange and inclusion events that celebrate diversity and promote social harmony.",
        ],
      },
      {
        heading: "Outreach & Awareness",
        items: [
          "Mental health awareness campaigns and peer counselling support systems on campus.",
          "Environmental awareness drives including beach clean-ups and sustainability workshops.",
          "Donation drives for clothing, school supplies, and essentials benefitting workers' welfare initiatives.",
        ],
      },
    ],
  },
};
