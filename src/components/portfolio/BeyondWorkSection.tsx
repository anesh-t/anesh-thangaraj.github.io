import { motion } from "framer-motion";
import { Camera, Music, Car, Globe, MapPin, Heart } from "lucide-react";
import lifestyleImage from "@/assets/lifestyle-anesh.jpg";

const passions = [
  { icon: Car, label: "Road Trips", caption: "Long drives, new cities", emoji: "🚗" },
  { icon: Camera, label: "Photography", caption: "Moments worth keeping", emoji: "📸" },
  { icon: Globe, label: "Travel", caption: "27 cities and counting", emoji: "✈️" },
  { icon: Music, label: "Music", caption: "Always exploring genres", emoji: "🎵" },
];

const BeyondWorkSection = () => {
  return (
    <section id="beyond-work" className="py-28 relative overflow-hidden">
      {/* Warm paper-like background — distinct from the dark professional sections */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(170deg, hsl(30 40% 96%) 0%, hsl(25 35% 93%) 40%, hsl(20 30% 95%) 100%)",
      }} />

      {/* Subtle paper texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
      }} />

      {/* Decorative tape strips */}
      <motion.div
        className="absolute top-16 right-[15%] w-20 h-8 -rotate-12 rounded-sm opacity-20"
        style={{ background: "hsl(38 70% 70%)" }}
        initial={{ opacity: 0, rotate: -20 }}
        whileInView={{ opacity: 0.2, rotate: -12 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-24 left-[10%] w-16 h-7 rotate-6 rounded-sm opacity-15"
        style={{ background: "hsl(16 60% 75%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
      />

      <div className="container relative z-10 max-w-6xl">
        {/* Section header — handwritten feel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "hsl(16 84% 62% / 0.08)",
              border: "1px dashed hsl(16 84% 62% / 0.3)",
            }}
          >
            <Heart className="w-4 h-4" style={{ color: "hsl(16 84% 62%)" }} />
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "hsl(16 84% 55%)" }}>
              Life Beyond Code
            </span>
          </motion.div>
          <h2
            className="text-4xl md:text-5xl font-display font-bold leading-tight"
            style={{ color: "hsl(220 25% 15%)" }}
          >
            When I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic" style={{ color: "hsl(16 84% 55%)" }}>Not Debugging</span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-3 -z-0 rounded-sm"
                style={{ background: "hsl(38 92% 50% / 0.2)" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "hsl(220 15% 45%)" }}>
            Curiosity doesn't clock out — here's what fuels me off-screen.
          </p>
        </motion.div>

        {/* Main layout — polaroid photo + passion cards */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Polaroid-style photo */}
          <motion.div
            initial={{ opacity: 0, rotate: -3, y: 40 }}
            whileInView={{ opacity: 1, rotate: -2, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto lg:mx-0"
          >
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative p-4 pb-16 rounded-md max-w-md"
              style={{
                background: "hsl(0 0% 100%)",
                boxShadow: "0 8px 40px -8px hsl(220 25% 10% / 0.12), 0 2px 8px hsl(220 25% 10% / 0.06)",
              }}
            >
              <div className="relative rounded-sm overflow-hidden">
                <img
                  src={lifestyleImage}
                  alt="Anesh — beyond work"
                  className="w-full h-[380px] md:h-[420px] object-cover object-top"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 60%, hsl(30 40% 20% / 0.15) 100%)",
                }} />
              </div>

              {/* Handwritten-style caption */}
              <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                <p className="font-display italic text-base" style={{ color: "hsl(220 15% 35%)" }}>
                  "The best ideas find you when you're not looking."
                </p>
              </div>

              {/* Corner pin decoration */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full"
                style={{
                  background: "linear-gradient(135deg, hsl(16 84% 62%), hsl(16 84% 52%))",
                  boxShadow: "0 2px 6px hsl(16 84% 62% / 0.3)",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, hsl(38 92% 50%), hsl(38 80% 45%))",
                  boxShadow: "0 2px 6px hsl(38 92% 50% / 0.3)",
                }}
              />
            </motion.div>

            {/* Scattered small element behind */}
            <motion.div
              className="absolute -z-10 -bottom-6 -right-6 w-32 h-40 rounded-md rotate-6"
              style={{
                background: "hsl(200 20% 94%)",
                boxShadow: "0 4px 20px hsl(220 25% 10% / 0.06)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute -z-10 -top-4 -left-4 w-28 h-36 rounded-md -rotate-6"
              style={{
                background: "hsl(30 30% 95%)",
                boxShadow: "0 4px 20px hsl(220 25% 10% / 0.04)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Passion cards — stacked, warm tones */}
          <div className="flex flex-col gap-4">
            {passions.map(({ icon: Icon, label, caption, emoji }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group flex items-center gap-5 py-5 px-6 rounded-2xl cursor-default relative overflow-hidden"
                style={{
                  background: "hsl(0 0% 100% / 0.7)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid hsl(220 20% 90%)",
                  boxShadow: "0 2px 12px hsl(220 25% 10% / 0.04)",
                }}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: "linear-gradient(135deg, hsl(16 84% 62% / 0.04), hsl(38 92% 50% / 0.03))",
                  }}
                />

                {/* Emoji badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: "linear-gradient(135deg, hsl(16 84% 62% / 0.08), hsl(38 92% 50% / 0.06))",
                    border: "1px solid hsl(16 84% 62% / 0.12)",
                  }}
                >
                  {emoji}
                </div>

                <div className="relative z-10 flex-1">
                  <h4 className="font-semibold text-sm tracking-wide" style={{ color: "hsl(220 25% 15%)" }}>
                    {label}
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: "hsl(220 15% 55%)" }}>{caption}</p>
                </div>

                {/* Arrow on hover */}
                <motion.span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 text-sm"
                  style={{ color: "hsl(16 84% 62% / 0.6)" }}
                >
                  →
                </motion.span>
              </motion.div>
            ))}

            {/* Current vibe tag */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-4 flex items-center gap-3 px-5 py-3 rounded-full self-start"
              style={{
                background: "hsl(0 0% 100% / 0.5)",
                border: "1px dashed hsl(220 20% 85%)",
              }}
            >
              <MapPin className="w-3.5 h-3.5" style={{ color: "hsl(16 84% 62%)" }} />
              <p className="text-xs font-mono tracking-wider" style={{ color: "hsl(220 15% 45%)" }}>
                Currently vibing to{" "}
                <span className="font-medium" style={{ color: "hsl(220 25% 25%)" }}>Tamil Indie & Lo-fi</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;
