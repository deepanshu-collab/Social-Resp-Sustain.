import { Menu } from "lucide-react";
import { useState } from "react";
import bitsLogo from "@/assets/bits-logo.jpeg";

const navItems = [
  "Overview", "The Journey", "Leadership", "Governance",
  "Accolades", "Achievements", "Social Responsibility", "Sustainability", "IQAC"
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4">
      <div className="flex items-center gap-3">
        <img src={bitsLogo} alt="BITS Pilani Logo" className="h-14 w-auto" />
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
