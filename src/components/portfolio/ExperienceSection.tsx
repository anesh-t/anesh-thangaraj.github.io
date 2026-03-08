import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import logoImf from "@/assets/logo-imf.png";
import logoGwu from "@/assets/logo-gwu.png";
import logoThangam from "@/assets/logo-thangam.png";
import logoVit from "@/assets/logo-vit.png";

const experiences = [
  {
    role: "Extern – Secretary's Department (SEC)",
    company: "International Monetary Fund (IMF)",
    period: "Jul 2025 – Dec 2025",
    location: "Washington, DC",
    logo: logoImf,
    color: "from-blue-500 to-cyan-500",
    bullets: [
      "Built Power BI dashboards and Excel trackers for multi-year planning and Annual/Spring Meetings, improving reporting accuracy by 30%.",
      "Developed SQL-based validation workflows (completeness checks, conflict detection, reconciliation) to reduce scheduling/approval errors.",
      "Created FundMate, an internal Copilot + RAG knowledge assistant, reducing manual coordination by ~40%.",
      "Designed live monitoring dashboards tracking meeting schedules, delegate participation, and operational metrics for leadership.",
    ],
  },
  {
    role: "Graduate Teaching Assistant – Visualization for Analytics",
    company: "George Washington University",
    period: "Jan 2025 – Apr 2025",
    location: "Washington, DC",
    logo: logoGwu,
    color: "from-indigo-500 to-violet-500",
    bullets: [
      "Delivered hands-on guidance for graduate-level analytics coursework using Tableau for 40+ students.",
      "Evaluated student dashboards using Tableau and Python (Pandas) to verify KPI relevance and insight clarity.",
    ],
  },
  {
    role: "Business Analyst Intern – Requirements & Process Optimization",
    company: "Thangam Auto Finance (Thangam Groups)",
    period: "Sep 2021 – Jun 2023",
    location: "Tirupur, India",
    logo: logoThangam,
    color: "from-emerald-500 to-teal-500",
    bullets: [
      "Designed SQL-driven Tableau and Excel dashboards for a $5M+ loan portfolio with visibility into delinquency trends and approval status.",
      "Engineered data validation and reconciliation workflows improving reporting accuracy by 20% and reducing loan cycle time by 25%.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Vellore Institute of Technology",
    period: "Feb 2023 – May 2024",
    location: "Vellore, India",
    logo: logoVit,
    color: "from-rose-500 to-pink-500",
    bullets: [
      "Contributed to published research on ML-based diabetes prediction in Frontiers in Artificial Intelligence (2024).",
      "Applied Explainable AI techniques (LIME, SHAP) to interpret model decisions and highlight key risk factors.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 md:py-28 bg-section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Work <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experience</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/20 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline logo */}
                <div className="absolute left-0 top-4 w-16 h-16 rounded-2xl bg-card border border-border shadow-card hidden md:flex items-center justify-center overflow-hidden">
                  <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all relative overflow-hidden"
                >
                  {/* Color accent */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color}`} />

                  {/* Mobile logo */}
                  <div className="flex md:hidden items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                      <img src={exp.logo} alt={exp.company} className="w-7 h-7 object-contain" />
                    </div>
                    <div>
                      <p className="text-accent font-semibold text-sm">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">{exp.role}</h3>
                      <p className="text-accent font-medium text-sm hidden md:flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" /> {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <p className="font-medium">{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-accent mt-1 shrink-0 text-lg leading-none">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
