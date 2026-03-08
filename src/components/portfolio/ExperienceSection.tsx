import { motion } from "framer-motion";
import { Briefcase, Heart, Users } from "lucide-react";

const experiences = [
  {
    role: "Extern – Secretary's Department (SEC)",
    company: "International Monetary Fund (IMF)",
    period: "Jul 2025 – Dec 2025",
    location: "Washington, DC",
    icon: Briefcase,
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
    icon: Briefcase,
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
    icon: Briefcase,
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
    icon: Briefcase,
    bullets: [
      "Contributed to published research on ML-based diabetes prediction in Frontiers in Artificial Intelligence (2024).",
      "Applied Explainable AI techniques (LIME, SHAP) to interpret model decisions and highlight key risk factors.",
    ],
  },
];
const ExperienceSection = () => (
  <section id="experience" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Work <span className="text-accent">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative md:pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-muted hidden md:block" />

                  <div className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-foreground">{exp.role}</h3>
                        <p className="text-accent font-medium text-sm flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5" /> {exp.company}
                        </p>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-accent mt-1.5 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
