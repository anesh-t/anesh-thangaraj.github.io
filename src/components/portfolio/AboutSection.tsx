import { motion } from "framer-motion";
import { MapPin, Globe, Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

const tags = ["Data Analytics", "Business Intelligence", "AI-Driven Decision Systems"];

const stats = [
  { icon: Briefcase, value: "IMF", label: "Extern · Decision Support" },
  { icon: GraduationCap, value: "3.74", label: "GPA · MS @ GWU" },
  { icon: Award, value: "$22K", label: "GW Fellowship" },
  { icon: BookOpen, value: "26", label: "Citations · Frontiers in AI" },
];

const languages = [
  { lang: "English", level: "Full Professional" },
  { lang: "French", level: "Limited Working" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-section-warm relative overflow-hidden">
    <BackgroundShapes variant="circles" />
    <div className="container relative z-10 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          About{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Me
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-10" />

        <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
          Hi, I'm Anesh Thangaraj.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border"
              style={{
                background: "hsl(16 84% 62% / 0.1)",
                borderColor: "hsl(16 84% 62% / 0.25)",
                color: "hsl(16 84% 65%)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Inline stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
            >
              <Icon className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">{value}</p>
                <p className="text-[11px] text-muted-foreground leading-tight">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Body copy */}
        <div className="space-y-4 text-muted-foreground leading-relaxed font-sans">
          <p>
            I'm a <strong className="text-foreground">Business Data Analyst</strong> focused on
            turning complex, ambiguous problems into clear, decision-ready insights.
          </p>
          <p>
            My work sits at the intersection of{" "}
            <strong className="text-foreground">data analytics, operations, and applied AI</strong>.
            I enjoy building systems that help teams understand what is happening, why it is
            happening, and what actions they should take next.
          </p>
          <p>
            During my time at the{" "}
            <strong className="text-foreground">International Monetary Fund</strong>, I developed{" "}
            <strong className="text-foreground">Power BI dashboards and analytics workflows</strong>{" "}
            that helped teams monitor operational KPIs and improve coordination across large-scale
            global meetings. I also built <strong className="text-foreground">FundMate</strong>, an
            internal <strong className="text-foreground">AI-powered knowledge assistant</strong>{" "}
            designed to simplify access to documentation and reduce manual coordination.
          </p>
          <p>
            I hold a{" "}
            <strong className="text-foreground">B.Tech in Computer Science from VIT</strong> and am
            completing my{" "}
            <strong className="text-foreground">
              Master's in Business Analytics at The George Washington University
            </strong>
            . My projects range from{" "}
            <strong className="text-foreground">SQL-driven data warehouses</strong> and Tableau
            dashboards to{" "}
            <strong className="text-foreground">AI-enabled analytics systems</strong> that combine
            structured data with real-world decision workflows.
          </p>
          <p>
            More broadly, I'm interested in how{" "}
            <strong className="text-foreground">analytics and AI</strong> can help organizations make
            faster, clearer, and more informed decisions.
          </p>
        </div>

        {/* Footer meta */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-accent shrink-0" />
            {languages.map(({ lang, level }) => (
              <span
                key={lang}
                className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border"
              >
                {lang} · {level}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 shrink-0" /> Arlington, VA · Open to Relocate
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
