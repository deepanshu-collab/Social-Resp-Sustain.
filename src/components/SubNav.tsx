import { motion } from "framer-motion";

const navTabs = [
  "Overview", "The Journey", "Leadership", "Governance",
  "Accolades", "Achievements", "Social Responsibility", "Sustainability", "IQAC"
];

const SubNav = () => {
  return (
    <nav className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <div className="flex items-center gap-1 py-1 min-w-max">
          {navTabs.map((tab) => (
            <a
              key={tab}
              href="#"
              className={`relative px-4 py-3 text-sm font-body font-medium transition-colors whitespace-nowrap rounded-t-md ${
                tab === "Sustainability"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
              {tab === "Sustainability" && (
                <motion.div
                  layoutId="subnav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
