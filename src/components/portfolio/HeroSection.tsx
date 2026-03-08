import { motion } from "framer-motion";
import { ArrowDown, Code2, Github, Linkedin, Mail, Terminal } from "lucide-react";
import heroImage from "@/assets/hero-dogs.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-accent/20 text-accent backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-accent/40 tracking-wider uppercase">
              Open to Opportunities
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-[1.1] mb-6 text-white">
              <span className="font-light italic">Hi, I'm</span>
              <br />
              <span className="text-accent font-bold">Anesh Thangaraj</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-4 leading-relaxed max-w-2xl">
              Business Data Analyst · Applied GenAI & LLM Agents · Analytics Automation & BI
            </p>
            <p className="text-base text-white/60 mb-8 max-w-xl leading-relaxed">
              Turning ambiguous business problems into decision-ready insights. MS Business Analytics @ GWU | IMF Extern | AWS Certified.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mb-12">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/anesh-t", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/anesh-t", label: "GitHub" },
                { icon: Mail, href: "mailto:aneshraj14@gmail.com", label: "Email" },
                { icon: Code2, href: "https://www.hackerrank.com/profile/aneshraj14", label: "HackerRank" },
                { icon: Terminal, href: "https://leetcode.com/u/Anesh_T/", label: "LeetCode" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-accent transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
