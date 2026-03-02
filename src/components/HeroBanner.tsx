import { motion } from "framer-motion";
import heroImage from "@/assets/hero-sustainability-new.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src={heroImage}
        alt="Sustainability - hand holding green ecosystem"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsla(234,40%,25%,0.35) 0%, hsla(234,50%,15%,0.65) 100%)"
        }}
      />
      <div className="relative z-10 flex items-end h-full px-6 md:px-12 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground font-medium tracking-wide"
        >
          Sustainability
        </motion.h2>
      </div>
    </section>
  );
};

export default HeroBanner;
