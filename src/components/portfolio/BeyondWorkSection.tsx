import { motion, useMotionValue, useSpring } from "framer-motion";
import { Camera, Music, Car, Globe, Compass } from "lucide-react";
import { useEffect, useRef } from "react";
import lifestyleImage from "@/assets/lifestyle-anesh.jpg";

const passions = [
  { icon: Car, label: "Road Trips", caption: "Long drives, new cities" },
  { icon: Camera, label: "Photography", caption: "Moments worth keeping" },
  { icon: Globe, label: "Travel", caption: "27 cities and counting" },
  { icon: Music, label: "Music", caption: "Always exploring genres" },
];

const BeyondWorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 30);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 30);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} id="beyond-work" className="py-28 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, hsl(220 30% 6%) 0%, hsl(200 20% 10%) 50%, hsl(220 25% 8%) 100%)" }} />

      {/* Ambient light blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, hsl(16 84% 62% / 0.06), transparent 70%)",
          top: "20%",
          left: "60%",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, hsl(38 92% 60% / 0.05), transparent 70%)",
          bottom: "10%",
          left: "10%",
        }}
      />

      {/* Fine grain texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }} />

      <div className="container relative z-10 max-w-6xl">
        {/* Section header — editorial style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="w-12 h-[1px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(16 84% 62%))" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <Compass className="w-4 h-4" style={{ color: "hsl(16 84% 62%)" }} />
              <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "hsl(16 84% 70%)" }}>
                Off the Clock
              </span>
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
          >
            The Chapters
            <br />
            <span className="font-light italic" style={{ color: "hsl(0 0% 100% / 0.5)" }}>I Don't Code</span>
          </motion.h2>
        </motion.div>

        {/* Main content — asymmetric magazine layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Image — takes 7 cols, offset with parallax */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Film-strip frame accent */}
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] hidden lg:block" style={{ background: "linear-gradient(180deg, transparent, hsl(16 84% 62% / 0.4), hsl(38 92% 60% / 0.3), transparent)" }} />

              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 30px 60px -15px hsl(0 0% 0% / 0.5)" }}
              >
                <img
                  src={lifestyleImage}
                  alt="Anesh — beyond work"
                  className="w-full h-[500px] md:h-[560px] object-cover object-top"
                />
                {/* Cinematic overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, hsl(220 30% 6% / 0.1) 0%, transparent 30%, transparent 60%, hsl(220 30% 6% / 0.6) 100%)",
                }} />

                {/* Bottom caption overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-white/60 text-sm font-mono tracking-wide">
                    "The best ideas find you when you're not looking."
                  </p>
                </motion.div>
              </motion.div>

              {/* Corner accent */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-3xl -z-10"
                style={{
                  border: "1px solid hsl(16 84% 62% / 0.12)",
                  background: "hsl(16 84% 62% / 0.03)",
                }}
                animate={{ rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Passions grid — takes 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:pt-12">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/50 text-base leading-relaxed mb-4 font-sans"
            >
              When the laptop closes, I chase stories — through winding roads, city streets,
              and the right playlist. Curiosity doesn't clock out.
            </motion.p>

            {passions.map(({ icon: Icon, label, caption }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
                whileHover={{ x: 8 }}
                className="group flex items-center gap-5 py-4 px-5 rounded-2xl cursor-default relative overflow-hidden"
                style={{
                  background: "hsl(0 0% 100% / 0.02)",
                  border: "1px solid hsl(0 0% 100% / 0.05)",
                }}
              >
                {/* Hover reveal gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, hsl(16 84% 62% / 0.06), transparent)",
                  }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "hsl(16 84% 62% / 0.08)", border: "1px solid hsl(16 84% 62% / 0.12)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "hsl(16 84% 62%)" }} />
                </div>

                <div className="relative z-10">
                  <h4 className="text-white font-semibold text-sm tracking-wide">{label}</h4>
                  <p className="text-white/35 text-xs mt-0.5">{caption}</p>
                </div>

                {/* Arrow hint on hover */}
                <motion.div
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                  style={{ color: "hsl(16 84% 62% / 0.5)" }}
                >
                  <span className="text-lg">→</span>
                </motion.div>
              </motion.div>
            ))}

            {/* Subtle stat */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-4 pt-4"
              style={{ borderTop: "1px solid hsl(0 0% 100% / 0.05)" }}
            >
              <p className="text-white/25 text-xs font-mono tracking-wider">
                Currently vibing to <span className="text-white/50">Tamil Indie & Lo-fi</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;
