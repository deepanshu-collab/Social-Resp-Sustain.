import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const navTabs = [
  "Overview", "The Journey", "Leadership", "Governance",
  "Accolades", "Achievements", "Social Responsibility", "Sustainability", "IQAC"
];

const tabRoutes: Record<string, string> = {
  "Sustainability": "/",
  "Social Responsibility": "/social-responsibility",
};

interface SubNavProps {
  activeTab?: string;
}

const SubNav = ({ activeTab = "Sustainability" }: SubNavProps) => {
  const navigate = useNavigate();

  const handleClick = (tab: string) => {
    const route = tabRoutes[tab];
    if (route) navigate(route);
  };

  return (
    <nav className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <div className="flex items-center gap-1 py-1 min-w-max">
          {navTabs.map((tab) => {
            const isActive = tab === activeTab;
            const hasRoute = !!tabRoutes[tab];
            return (
              <button
                key={tab}
                onClick={() => handleClick(tab)}
                className={`relative px-4 py-3 text-sm font-body font-medium transition-colors whitespace-nowrap rounded-t-md ${
                  isActive
                    ? "text-primary"
                    : hasRoute
                    ? "text-muted-foreground hover:text-foreground cursor-pointer"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="subnav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
