const navTabs = [
  "Overview", "The Journey", "Leadership", "Governance",
  "Accolades", "Achievements", "Social Responsibility", "Sustainability", "IQAC"
];

const SubNav = () => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <div className="flex items-center gap-1 py-1 min-w-max">
          {navTabs.map((tab) => (
            <a
              key={tab}
              href="#"
              className={`px-4 py-3 text-sm font-body font-medium transition-colors whitespace-nowrap rounded-t-md ${
                tab === "Sustainability"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
