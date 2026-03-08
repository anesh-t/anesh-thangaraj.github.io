import { motion } from "framer-motion";
import { Camera, Music, Car, Globe } from "lucide-react";
import lifestyleImage from "@/assets/lifestyle-anesh.jpg";

const interests = [
  { icon: Car, label: "Cars & Drives" },
  { icon: Camera, label: "Photography" },
  { icon: Globe, label: "Travel" },
  { icon: Music, label: "Music" },
];

const BeyondWorkSection = () => (
  <section id="beyond-work" className="py-24 relative overflow-hidden">
    {/* Subtle background */}
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 25% 10%) 0%, hsl(220 30% 8%) 100%)" }} />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
          style={{ background: "hsl(16 84% 62% / 0.1)", color: "hsl(16 84% 70%)", border: "1px solid hsl(16 84% 62% / 0.2)" }}
        >
          Beyond Work
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          Life Outside the <span style={{ color: "hsl(16 84% 62%)" }}>Terminal</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Lifestyle Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative rounded-2xl overflow-hidden border cursor-pointer"
            style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
          >
            <img
              src={lifestyleImage}
              alt="Anesh beyond work"
              className="w-full h-[420px] object-cover object-top"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 50%, hsl(220 30% 8% / 0.7) 100%)" }}
            />
          </motion.div>

          {/* Decorative accent */}
          <motion.div
            className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl -z-10"
            style={{ background: "hsl(16 84% 62% / 0.15)", border: "1px solid hsl(16 84% 62% / 0.2)" }}
            animate={{ rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            When I'm not analyzing data or building AI agents, you'll find me behind the wheel exploring new roads,
            capturing moments through my camera, or discovering hidden gems in new cities. I believe the best insights
            come from living a full, curious life.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {interests.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-default"
                style={{
                  background: "hsl(0 0% 100% / 0.03)",
                  borderColor: "hsl(0 0% 100% / 0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(16 84% 62% / 0.12)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "hsl(16 84% 62%)" }} />
                </div>
                <span className="text-white/80 text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BeyondWorkSection;
