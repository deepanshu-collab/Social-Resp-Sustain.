import { FileText, Globe, Leaf, Shield, BookOpen, Users, BarChart3, Award, ClipboardList } from "lucide-react";
import sdgImage from "@/assets/sdg-goals.webp";

const principles = [
  { label: "Climate Action Plan", icon: Leaf },
  { label: "SDG Impact", icon: Globe },
  { label: "Sustainable Investment Policy", icon: BarChart3 },
  { label: "HESI Community Member", icon: Users },
  { label: "Sustainable Procurement Policy", icon: Shield },
  { label: "Race to Zero", icon: Award },
  { label: "Green Audit Report", icon: FileText },
  { label: "Anti-Bribery & Anti-Corruption Policy", icon: Shield },
  { label: "Code of Ethics", icon: BookOpen },
  { label: "Student Club", icon: Users },
  { label: "Minutes", icon: ClipboardList },
  { label: "Carbon Reduction Strategic Plan", icon: Leaf },
];

const GuidingPrinciples = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-display text-foreground font-semibold mb-4">
              A Campus That Breathes Sustainability
            </h3>
            <div className="w-full rounded-xl overflow-hidden bg-muted">
              <img
                src={sdgImage}
                alt="UN Sustainable Development Goals"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-display text-foreground font-semibold mb-6">
              Guiding Principles for a Sustainable Campus & Community
            </h3>
            <div className="space-y-2">
              {principles.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-lavender transition-colors group"
                >
                  <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-body text-sm font-semibold text-accent group-hover:underline">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
