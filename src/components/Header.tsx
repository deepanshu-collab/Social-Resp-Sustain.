import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  "Overview", "The Journey", "Leadership", "Governance",
  "Accolades", "Achievements", "Social Responsibility", "Sustainability", "IQAC"
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/30">
          <span className="font-display text-primary-foreground text-sm font-bold">BP</span>
        </div>
        <div className="text-primary-foreground">
          <h1 className="text-xl font-bold font-display tracking-wide leading-tight">BITS Pilani</h1>
          <p className="text-xs opacity-80 font-body">Pilani | Dubai | Goa | Hyderabad | Mumbai</p>
          <p className="text-[10px] opacity-60 font-body italic">An Institution of Eminence</p>
        </div>
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-12 h-12 rounded-full border-2 border-primary-foreground/50 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
        aria-label="Menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {menuOpen && (
        <div className="absolute top-full right-6 mt-2 bg-card rounded-lg shadow-xl p-4 min-w-[200px]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors font-body text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
