import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Code2, Github, Linkedin, Mail, Terminal, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import profileImage from "@/assets/profile-anesh.jpg";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/anesh-t", label: "LinkedIn", color: "hsl(210 80% 55%)" },
  { icon: Github, href: "https://github.com/anesh-t", label: "GitHub", color: "hsl(0 0% 80%)" },
  { icon: Mail, href: "mailto:aneshraj14@gmail.com", label: "Email", color: "hsl(16 84% 62%)" },
  { icon: Code2, href: "https://www.hackerrank.com/profile/aneshraj14", label: "HackerRank", color: "hsl(142 71% 45%)" },
  { icon: Terminal, href: "https://leetcode.com/u/Anesh_T/", label: "LeetCode", color: "hsl(38 92% 55%)" },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 15);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 15);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 30% 8%) 0%, hsl(220 25% 14%) 40%, hsl(180 20% 12%) 100%)" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cursor-following gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle, hsl(16 84% 62% / 0.12), transparent 70%)",
          top: "10%",
          right: "10%",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle, hsl(180 33% 30% / 0.15), transparent 70%)",
          bottom: "5%",
          left: "5%",
        }}
      />

      {/* Floating particles - more of them */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            background: i % 3 === 0 ? "hsl(16 84% 62% / 0.5)" : i % 3 === 1 ? "hsl(180 33% 50% / 0.4)" : "hsl(38 92% 60% / 0.4)",
            top: `${10 + i * 8}%`,
            left: `${5 + i * 9}%`,
          }}
          animate={{
            y: [0, -20 - i * 5, 0],
            x: [0, (i % 2 === 0 ? 10 : -10), 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.4, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Badge with shimmer */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8 border relative overflow-hidden"
                style={{
                  background: "hsl(16 84% 62% / 0.1)",
                  borderColor: "hsl(16 84% 62% / 0.3)",
                  color: "hsl(16 84% 70%)",
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(16 84% 62% / 0.3), transparent)" }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 2 }}
                />
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                Open to Opportunities
              </motion.span>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-display leading-[1.05] mb-6 text-white">
                <motion.span
                  initial={{ opacity: 0, x: -30, rotateX: 40 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  className="block font-light italic text-white/90"
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.9, type: "spring", stiffness: 100 }}
                  className="block font-bold"
                  style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%), hsl(16 84% 62%))", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  <motion.span
                    className="inline-block"
                    animate={{ backgroundPosition: ["0% center", "200% center"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%), hsl(16 84% 70%), hsl(38 92% 60%))", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    Anesh Thangaraj
                  </motion.span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-lg md:text-xl text-white/80 mb-3 leading-relaxed max-w-2xl font-sans"
              >
                Business Data Analyst · Applied GenAI & LLM Agents · Analytics Automation & BI
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="text-base text-white/45 mb-10 max-w-xl leading-relaxed font-sans"
              >
                Turning ambiguous business problems into decision-ready insights.
                <br />
                MS Business Analytics @ GWU · IMF Extern · AWS Certified
              </motion.p>

              {/* Social links - enhanced with individual stagger and glow */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }, idx) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.3 + idx * 0.12, type: "spring", stiffness: 200, damping: 12 }}
                    whileHover={{
                      scale: 1.2,
                      y: -6,
                      boxShadow: `0 8px 25px -5px ${color.replace(")", " / 0.4)")}`,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl border flex items-center justify-center transition-colors duration-300 group/social relative overflow-hidden"
                    style={{
                      borderColor: "hsl(0 0% 100% / 0.1)",
                      background: "hsl(0 0% 100% / 0.04)",
                      backdropFilter: "blur(12px)",
                    }}
                    aria-label={label}
                  >
                    {/* Hover background fill */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"
                      style={{ background: `${color.replace(")", " / 0.15)")}` }}
                    />
                    <Icon className="w-5 h-5 text-white relative z-10 group-hover/social:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile Image - enhanced entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.3, type: "spring", stiffness: 80, damping: 15 }}
            className="relative flex-shrink-0"
          >
            {/* Glowing ring behind image - enhanced */}
            <motion.div
              className="absolute -inset-6 rounded-full blur-3xl"
              style={{ background: "linear-gradient(135deg, hsl(16 84% 62% / 0.35), hsl(38 92% 60% / 0.25), hsl(180 33% 50% / 0.25))" }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />

            {/* Decorative rotating ring */}
            <motion.div
              className="absolute -inset-8 rounded-full border border-dashed"
              style={{ borderColor: "hsl(16 84% 62% / 0.2)" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />

            {/* Second counter-rotating ring */}
            <motion.div
              className="absolute -inset-12 rounded-full border border-dotted"
              style={{ borderColor: "hsl(38 92% 60% / 0.12)" }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            />

            {/* Image container with hover */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 cursor-pointer"
              style={{ borderColor: "hsl(16 84% 62% / 0.4)" }}
            >
              <img
                src={profileImage}
                alt="Anesh Thangaraj"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(180deg, transparent 60%, hsl(220 30% 8% / 0.4) 100%)" }} />
            </motion.div>

            {/* Floating accent dots - more dynamic */}
            <motion.div
              className="absolute -top-3 -right-3 w-5 h-5 rounded-full"
              style={{ background: "hsl(16 84% 62%)", boxShadow: "0 0 15px hsl(16 84% 62% / 0.5)" }}
              animate={{ y: [0, -12, 0], x: [0, 5, 0], opacity: [0.6, 1, 0.6], scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-4 -left-4 w-4 h-4 rounded-full"
              style={{ background: "hsl(38 92% 60%)", boxShadow: "0 0 12px hsl(38 92% 60% / 0.4)" }}
              animate={{ y: [0, 8, 0], x: [0, -4, 0], opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 -right-5 w-3 h-3 rounded-full"
              style={{ background: "hsl(180 33% 50%)", boxShadow: "0 0 10px hsl(180 33% 50% / 0.4)" }}
              animate={{ y: [0, -6, 6, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - enhanced */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-accent transition-colors group/scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        aria-label="Scroll down"
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1 mb-2 mx-auto"
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-current"
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
        <ArrowDown className="w-4 h-4 mx-auto" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
