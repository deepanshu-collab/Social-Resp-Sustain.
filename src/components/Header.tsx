import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import bitsLogo from "@/assets/bits-logo.jpeg";

const navItems = [
  "Overview", "The Journey", "Leadership", "Governance",
  "Accolades", "Achievements", "Social Responsibility", "Sustainability", "IQAC"
];

const navRoutes: Record<string, string> = {
  "Sustainability": "/",
  "Social Responsibility": "/social-responsibility",
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname === "/social-responsibility") return "Social Responsibility";
    return "Sustainability";
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-lg shadow-lg border-b border-border/50"
          : ""
      }`}
    >
      <motion.div
        className="flex items-center gap-3"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={bitsLogo} alt="BITS Pilani Logo" className="h-14 w-auto rounded-md" />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => setMenuOpen(!menuOpen)}
        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
          scrolled
            ? "border-primary/30 text-foreground hover:bg-primary/10"
            : "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
        }`}
        aria-label="Menu"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-6 mt-2 bg-card/95 backdrop-blur-xl rounded-xl shadow-2xl border border-border/50 p-3 min-w-[220px]"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => {
                  const route = navRoutes[item];
                  if (route) {
                    navigate(route);
                    setMenuOpen(false);
                  }
                }}
                className={`block w-full text-left px-4 py-2.5 rounded-lg transition-all font-body text-sm ${
                  item === getActiveTab()
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-foreground hover:bg-muted hover:translate-x-1"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
