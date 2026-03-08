import { motion } from "framer-motion";
import { Camera, Music, Car, Globe, Dumbbell, UtensilsCrossed, Gamepad2, Instagram, Volleyball, Sparkles, Plane } from "lucide-react";
import lifestyleImage from "@/assets/lifestyle-anesh.jpg";

const fitnessItems = [
  { icon: Dumbbell, label: "Gym & Fitness", emoji: "💪" },
  { icon: Volleyball, label: "Volleyball", emoji: "🏐" },
  { icon: Sparkles, label: "Advanced Yoga", emoji: "🧘" },
  { icon: Gamepad2, label: "Chess", emoji: "♟️" },
];

const passionItems = [
  { icon: UtensilsCrossed, label: "Indian Cuisine", emoji: "🍛" },
  { icon: Music, label: "Tamil Music", emoji: "🎵" },
  { icon: Camera, label: "FPV Drones", emoji: "🚁" },
  { icon: Car, label: "Cars & Drives", emoji: "🏎️" },
  { icon: Globe, label: "Travel", emoji: "✈️" },
];

const BeyondWorkSection = () => (
  <section id="beyond-work" className="py-24 relative overflow-hidden">
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
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 50%, hsl(220 30% 8% / 0.7) 100%)" }}
            />
          </motion.div>

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
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            When I'm not analyzing data or building AI agents, I'm all about staying active and exploring life.
            I love discovering new food spots — especially authentic Indian cuisine — and South Indian (Tamil) music is always on repeat.
          </p>

          {/* Fitness & Sports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(16 84% 70%)" }}>
              🏋️ Fitness & Sports
            </h3>
            <div className="flex flex-wrap gap-2">
              {fitnessItems.map(({ label, emoji }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium cursor-default border"
                  style={{
                    background: "linear-gradient(135deg, hsl(16 84% 62% / 0.12), hsl(16 84% 62% / 0.05))",
                    borderColor: "hsl(16 84% 62% / 0.25)",
                    color: "hsl(16 84% 85%)",
                  }}
                >
                  <span>{emoji}</span> {label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Passions & Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mb-6"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "hsl(200 80% 70%)" }}>
              🎯 Passions & Hobbies
            </h3>
            <div className="flex flex-wrap gap-2">
              {passionItems.map(({ label, emoji }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium cursor-default border"
                  style={{
                    background: "linear-gradient(135deg, hsl(200 80% 55% / 0.12), hsl(200 80% 55% / 0.05))",
                    borderColor: "hsl(200 80% 55% / 0.25)",
                    color: "hsl(200 80% 85%)",
                  }}
                >
                  <span>{emoji}</span> {label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Instagram CTA */}
          <motion.a
            href="https://www.instagram.com/a.n.e.s.h_t/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold shadow-lg transition-shadow hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, hsl(340 75% 55%), hsl(25 90% 55%), hsl(45 90% 55%))",
              color: "white",
              boxShadow: "0 4px 20px hsl(25 90% 55% / 0.3)",
            }}
          >
            <Instagram className="w-5 h-5" />
            Follow my adventures on Instagram
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BeyondWorkSection;
