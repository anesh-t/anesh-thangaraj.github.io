import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, BookOpen } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "MS Business Analytics", sub: "GWU · 3.74/4.0" },
  { icon: Award, label: "GW Business Fellowship", sub: "Merit Award" },
  { icon: BookOpen, label: "Published Researcher", sub: "Frontiers in AI (2024)" },
  { icon: MapPin, label: "Washington, DC", sub: "Open to Relocate" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-8" />

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a Business Data Analyst working at the intersection of core analytics and applied GenAI, focused on turning ambiguous business problems into decision-ready insights. My work combines strong foundations in data analysis, visualization, and business process optimization with hands-on experience building LLM-enabled analytics and AI agents.
            </p>
            <p>
              At the <strong className="text-foreground">International Monetary Fund</strong>, I built Power BI dashboards, SQL-based validation workflows, and created FundMate — an internal Copilot + RAG knowledge assistant that reduced manual coordination by ~40%.
            </p>
            <p>
              I hold a <strong className="text-foreground">B.Tech in Computer Science</strong> from VIT and am completing my <strong className="text-foreground">MS in Business Analytics</strong> at George Washington University. My published research on ML-based diabetes prediction appeared in Frontiers in Artificial Intelligence (2024).
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, sub }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                className="p-5 rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all"
              >
                <Icon className="w-6 h-6 text-accent mb-3" />
                <p className="font-semibold text-sm text-foreground">{label}</p>
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
