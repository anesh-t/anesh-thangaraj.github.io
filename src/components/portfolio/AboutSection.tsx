import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, BookOpen, Globe, Briefcase } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const highlights = [
  { icon: Briefcase, label: "IMF Extern", sub: "Decision Support & BI", color: "from-primary to-emerald-500" },
  { icon: GraduationCap, label: "MS Business Analytics", sub: "GWU · 3.74/4.0", color: "from-indigo-500 to-violet-500" },
  { icon: Award, label: "GW Fellowship", sub: "$22K Merit Award", color: "from-amber-500 to-orange-500" },
  { icon: BookOpen, label: "Published Research", sub: "Frontiers in AI · 26 Citations", color: "from-accent to-rose-500" },
];

const languages = [
  { lang: "English", level: "Full Professional" },
  { lang: "French", level: "Limited Working" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
      <img src={aboutBg} alt="" className="w-full h-full object-cover" />
    </div>

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          About <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-8" />

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed font-sans">
            <p className="text-lg font-medium text-foreground">
              Business Data Analyst at the intersection of core analytics and applied GenAI — turning ambiguous problems into decision-ready insights.
            </p>
            <p>
              At the <strong className="text-foreground">IMF</strong>, I built Power BI dashboards, SQL validation workflows, and <strong className="text-foreground">FundMate</strong> — an internal Copilot + RAG assistant that cut manual coordination by ~40%. I also volunteered at the <strong className="text-foreground">IMF Spring Meetings 2025</strong>, supporting operations for international delegates.
            </p>
            <p>
              I hold a <strong className="text-foreground">B.Tech in CS</strong> from VIT and an <strong className="text-foreground">MS in Business Analytics</strong> from George Washington University (Jan 2026). My published research on ML-based diabetes prediction in <strong className="text-foreground">Frontiers in AI</strong> has 26 citations and 1.4k+ downloads.
            </p>

            {/* Languages */}
            <div className="flex items-center gap-4 pt-2">
              <Globe className="w-5 h-5 text-accent shrink-0" />
              <div className="flex gap-2">
                {languages.map(({ lang, level }) => (
                  <span key={lang} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                    {lang} · {level}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
              <MapPin className="w-3.5 h-3.5" /> Arlington, VA · Open to Relocate
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, sub, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all overflow-hidden"
              >
                {/* Gradient accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
                <Icon className="w-7 h-7 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-sm text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-1">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
