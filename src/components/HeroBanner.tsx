import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-sustainability-new.jpg";

const butterflyPaths = [
  { startX: "10%", startY: "60%", endX: "85%", endY: "15%", duration: 12, delay: 0, size: 18 },
  { startX: "90%", startY: "70%", endX: "20%", endY: "20%", duration: 15, delay: 1.5, size: 14 },
  { startX: "30%", startY: "80%", endX: "70%", endY: "10%", duration: 10, delay: 0.8, size: 20 },
  { startX: "60%", startY: "75%", endX: "15%", endY: "25%", duration: 14, delay: 2.5, size: 16 },
  { startX: "50%", startY: "65%", endX: "90%", endY: "30%", duration: 11, delay: 3, size: 12 },
  { startX: "75%", startY: "85%", endX: "40%", endY: "5%", duration: 13, delay: 1, size: 15 },
];

const Butterfly = ({ startX, startY, endX, endY, duration, delay, size }: typeof butterflyPaths[0]) => (
  <motion.div
    className="absolute z-10 pointer-events-none"
    style={{ left: startX, top: startY }}
    animate={{
      left: [startX, `${parseFloat(endX) * 0.5}%`, endX, startX],
      top: [startY, `${parseFloat(endY) + 20}%`, endY, startY],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      animate={{ rotate: [0, 10, -10, 5, 0], scaleY: [1, 0.6, 1, 0.5, 1] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Left wing */}
      <motion.path
        d="M12 12C10 8 4 4 2 8C0 12 6 14 12 12Z"
        fill="hsla(0, 0%, 100%, 0.7)"
      />
      {/* Right wing */}
      <motion.path
        d="M12 12C14 8 20 4 22 8C24 12 18 14 12 12Z"
        fill="hsla(0, 0%, 100%, 0.6)"
      />
      {/* Body */}
      <line x1="12" y1="6" x2="12" y2="18" stroke="hsla(0, 0%, 100%, 0.8)" strokeWidth="0.8" />
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
        className="absolute inset-0 w-full h-full object-cover object-center scale-110"
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

      {/* Flying butterflies */}
      {butterflyPaths.map((b, i) => (
        <Butterfly key={i} {...b} />
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
