import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-sustainability-new.jpg";

const butterflies = [
  { x: ["45%", "50%", "42%", "48%", "45%"], y: ["30%", "25%", "32%", "22%", "30%"], duration: 8, delay: 0, size: 16, color: "hsla(45, 90%, 65%, 0.8)" },
  { x: ["55%", "60%", "52%", "58%", "55%"], y: ["20%", "15%", "24%", "18%", "20%"], duration: 10, delay: 1, size: 14, color: "hsla(30, 85%, 60%, 0.7)" },
  { x: ["35%", "30%", "38%", "32%", "35%"], y: ["40%", "35%", "42%", "37%", "40%"], duration: 9, delay: 0.5, size: 12, color: "hsla(50, 80%, 70%, 0.75)" },
  { x: ["65%", "70%", "62%", "68%", "65%"], y: ["35%", "28%", "38%", "30%", "35%"], duration: 11, delay: 2, size: 18, color: "hsla(35, 90%, 55%, 0.7)" },
  { x: ["25%", "28%", "22%", "30%", "25%"], y: ["25%", "20%", "28%", "18%", "25%"], duration: 7, delay: 1.5, size: 10, color: "hsla(40, 85%, 60%, 0.65)" },
];

const FlyingButterfly = ({ x, y, duration, delay, size, color }: typeof butterflies[0]) => (
  <motion.div
    className="absolute z-[5] pointer-events-none"
    animate={{ left: x, top: y }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      animate={{ rotate: [0, 15, -15, 10, 0], scaleY: [1, 0.4, 1, 0.3, 1] }}
      transition={{ duration: 0.6, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 12C9 7 3 3 1 8C-1 13 7 15 12 12Z" fill={color} />
      <path d="M12 12C15 7 21 3 23 8C25 13 17 15 12 12Z" fill={color} />
      <line x1="12" y1="6" x2="12" y2="18" stroke={color} strokeWidth="0.6" />
    </motion.svg>
  </motion.div>
);

const HeroBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.8]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <motion.img
        style={{ y: imgY }}
        src={heroImage}
        alt="Sustainability - hand holding green ecosystem"
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ scale: 1.0 }}
        animate={{ scale: [1.0, 1.08, 1.0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsla(234,40%,25%,0.3) 0%, hsla(234,50%,15%,0.7) 100%)"
        }}
      />

      {/* Animated butterflies */}
      {butterflies.map((b, i) => (
        <FlyingButterfly key={i} {...b} />
      ))}


      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground font-medium tracking-wide">
            Sustainability
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl"
          >
            Building a greener future through innovation, research, and responsible stewardship.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
