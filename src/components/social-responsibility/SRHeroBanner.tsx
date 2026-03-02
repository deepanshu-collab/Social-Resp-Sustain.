import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-social-responsibility.jpg";

const SRHeroBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.8]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <motion.img
        style={{ y: imgY }}
        src={heroImage}
        alt="Social Responsibility - building community foundations"
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

      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground font-medium tracking-wide">
            Social Responsibility
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl"
          >
            Empowering communities through education, outreach, and meaningful action.
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

export default SRHeroBanner;
