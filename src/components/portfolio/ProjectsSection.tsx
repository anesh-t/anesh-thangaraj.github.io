import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";

const projects = [
  {
    title: "CFO Assistant – AI-Enabled Analytics & Decision Support",
    award: "GW AI Case Competition – Winners",
    period: "Sep 2025 – Dec 2025",
    description:
      "End-to-end AI platform for CFO-style financial analysis across 5 large-cap companies, integrating structured financial data in PostgreSQL + Pgvector with unstructured SEC filings and a Neo4j knowledge graph.",
    tech: ["Python", "LangChain", "Pgvector", "Neo4j", "FastAPI", "AWS Bedrock", "SageMaker"],
    highlights: [
      "RAG + NL-to-SQL analytics with source-grounded outputs",
      "Reduced manual financial analysis by 50–60%",
      "Schema-aware prompting with confidence thresholds",
    ],
    github: "https://github.com/anesh-t",
  },
  {
    title: "SEC Financial Analytics Data Warehouse & Visualization",
    period: "Oct 2024 – Nov 2024",
    description:
      "Cloud-hosted analytics warehouse on AWS EC2 (PostgreSQL), ingesting and normalizing 480K+ SEC records with ETL transformations and Tableau dashboards.",
    tech: ["AWS EC2", "PostgreSQL", "SQL", "Python", "Tableau"],
    highlights: [
      "Relational schema for historical comparisons and BI consumption",
      "Filing frequency, disclosure patterns, and longitudinal trend analysis",
    ],
    github: "https://github.com/anesh-t",
  },
  {
    title: "FundMate – Internal Copilot + RAG Assistant",
    period: "Jul 2025 – Dec 2025",
    description:
      "Built at the IMF: an LLM + RAG powered internal assistant enabling natural-language access to structured data and 10+ institutional documentation sources.",
    tech: ["RAG", "LLM", "Python", "Power BI", "SQL"],
    highlights: [
      "Reduced manual coordination and information lookup by ~40%",
      "Natural-language queries over institutional docs",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col"
            >
              {project.award && (
                <div className="flex items-center gap-1.5 text-amber text-xs font-semibold mb-3">
                  <Trophy className="w-3.5 h-3.5" />
                  {project.award}
                </div>
              )}
              <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{project.period}</p>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

              <ul className="space-y-1.5 text-xs text-muted-foreground mb-4">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex gap-1.5">
                    <span className="text-accent">✓</span> {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs">
                    {t}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mt-auto"
                >
                  View on GitHub <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
