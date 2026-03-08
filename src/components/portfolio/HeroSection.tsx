import { motion } from "framer-motion";
import { ArrowDown, Code2, Github, Linkedin, Mail, Terminal, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Floating accent orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-accent backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-accent/30"
            >
              <Sparkles className="w-4 h-4" />
              Open to Opportunities
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display leading-[1.05] mb-6 text-white">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="block font-light italic text-white/90"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="block text-gradient-warm font-bold"
                style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Anesh Thangaraj
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-white/80 mb-3 leading-relaxed max-w-2xl font-sans"
            >
              Business Data Analyst · Applied GenAI & LLM Agents · Analytics Automation & BI
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-base text-white/55 mb-10 max-w-xl leading-relaxed font-sans"
            >
              Turning ambiguous business problems into decision-ready insights.
              <br />
              MS Business Analytics @ GWU · IMF Extern · AWS Certified
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3"
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/anesh-t", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/anesh-t", label: "GitHub" },
                { icon: Mail, href: "mailto:aneshraj14@gmail.com", label: "Email" },
                { icon: Code2, href: "https://www.hackerrank.com/profile/aneshraj14", label: "HackerRank" },
                { icon: Terminal, href: "https://leetcode.com/u/Anesh_T/", label: "LeetCode" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-accent transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
