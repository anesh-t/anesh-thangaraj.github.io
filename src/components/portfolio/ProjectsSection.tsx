import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Trophy, ChevronDown, ChevronUp, Github } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";
import projectCfo from "@/assets/project-cfo-assistant.jpg";
import projectSec from "@/assets/project-sec-analytics.jpg";
import projectFundmate from "@/assets/project-fundmate.jpg";

interface Project {
  title: string;
  award?: string;
  period?: string;
  image?: string;
  description: string;
  tech: string[];
  highlights?: string[];
  github?: string;
  featured?: boolean;
}

const featuredProjects: Project[] = [
  {
    title: "CFO Intelligence Platform – AI Decision Agent",
    award: "Community Choice Award – GW GenAI Competition",
    period: "Sep 2025 – Dec 2025",
    image: projectCfo,
    featured: true,
    description: "AI-powered decision intelligence agent for non-technical business users enabling natural-language financial analysis, peer benchmarking, and macroeconomic context.",
    tech: ["Python", "LangChain", "LangGraph", "Neo4j", "Pgvector", "FastAPI", "AWS Bedrock", "RAG", "Text-to-SQL"],
    highlights: [
      "Community Choice Award – judged by Capital One, EY, FI Consulting, Mizuho",
      "Orchestrates RAG, Text-to-SQL, and agentic workflows for client-ready insights",
      "Team: Carissa Paul, Rachel Aska, Isheanesu Chiworeso, Anesh Thangaraj",
    ],
    github: "https://github.com/anesh-t/FinSight-Executive-AI-Intelligent-Financial-Analysis-Agent",
  },
  {
    title: "SEC Financial Analytics Data Warehouse & Visualization",
    period: "Oct 2024 – Nov 2024",
    image: projectSec,
    featured: true,
    description: "Cloud-hosted analytics warehouse on AWS EC2 (PostgreSQL), ingesting and normalizing 480K+ SEC records with ETL transformations and Tableau dashboards.",
    tech: ["AWS EC2", "PostgreSQL", "SQL", "Python", "Tableau"],
    highlights: [
      "Relational schema for historical comparisons and BI consumption",
      "Filing frequency, disclosure patterns, and longitudinal trend analysis",
    ],
    github: "https://github.com/anesh-t/SEC-Financial-Data-Modeling-Visualization",
  },
  {
    title: "FundMate – Internal Copilot + RAG Assistant (IMF)",
    period: "Jul 2025 – Dec 2025",
    image: projectFundmate,
    featured: true,
    description: "Built at the IMF: an LLM + RAG powered internal assistant enabling natural-language access to structured data and 10+ institutional documentation sources.",
    tech: ["RAG", "LLM", "Python", "Power BI", "SQL"],
    highlights: [
      "Reduced manual coordination and information lookup by ~40%",
      "Natural-language queries over institutional docs",
    ],
  },
];

const otherProjects: Project[] = [
  { title: "FinSight Executive AI – Intelligent Financial Analysis Agent", description: "CFO-style financial analysis agent leveraging AI for intelligent executive-level insights.", tech: ["Python", "AI", "LLM"], github: "https://github.com/anesh-t/FinSight-Executive-AI-Intelligent-Financial-Analysis-Agent" },
  { title: "Applied Econometrics – IMF-Style Analysis", description: "Applied econometric exercises using Stata including regression, IV, time-series, and discrete choice models.", tech: ["Stata", "Econometrics"], github: "https://github.com/anesh-t/applied-econometrics-imf-style-analysis" },
  { title: "Opportunity Atlas – Upward Mobility in Cherry Hill, NJ", description: "Neighborhood-level analysis of upward mobility using Raj Chetty's Opportunity Atlas dataset.", tech: ["Stata", "Data Analysis"], github: "https://github.com/anesh-t/Opportunity-Atlas-Upward-Mobility-in-Cherry-Hill-NJ" },
  { title: "Diabetes Prediction with Explainable AI", description: "Published research analyzing classification and feature selection strategies with explainable AI.", tech: ["Python", "ML", "XAI"], github: "https://github.com/anesh-t/Diabetes_Prediction_with_Feature_Selection_and_Explainable_AI" },
  { title: "Financial Client Attrition Forecasting System", description: "Predictive model to forecast banking client churn, enabling proactive retention strategies.", tech: ["Python", "ML", "Jupyter"], github: "https://github.com/anesh-t/Financial-Client-Attrition-Forecasting-System" },
  { title: "Capital Bikeshare Forecasting – Cost-Based Optimization", description: "Comparing predictive models for bike-sharing demand forecasting with cost-based optimization.", tech: ["Python", "ML", "Jupyter"], github: "https://github.com/anesh-t/Capital-Bikeshare-Forecasting-Comparing-Predictive-Models-and-Cost-Based-Optimization" },
  { title: "SEC 10-K Risk Factor Title Extraction", description: "Automated extraction of Item 1A Risk Factor titles from SEC 10-K filings.", tech: ["Python", "NLP"], github: "https://github.com/anesh-t/SEC-10-K-Risk-Factor-Title-Extraction" },
  { title: "Red Brand Canners – LP Optimization Case Study", description: "Operations Research linear programming case study with optimization code.", tech: ["Python", "OR", "LP"], github: "https://github.com/anesh-t/Red-Brand-Canners-Optimization-Workshop-An-Operations-Research-Linear-Programming-Case-Study" },
  { title: "Big Data Pipeline – U.S. Political Donation Insights", description: "Apache Spark pipeline on AWS for U.S. Federal Committee donation analysis.", tech: ["Spark", "AWS", "Big Data"], github: "https://github.com/anesh-t/Big-Data-Pipeline-for-U.S.-Political-Donation-Insights-Using-Apache-Spark" },
  { title: "Predicting Urban Mobility – Capital Bikeshare", description: "Supervised ML pipeline using Capital Bikeshare data with regression and classification.", tech: ["Python", "ML", "Jupyter"], github: "https://github.com/anesh-t/Predicting-Urban-Mobility-with-Capital-Bikeshare-Data-A-Supervised-Learning-Approach" },
  { title: "Walmart Revenue Forecasting & Pricing Optimization", description: "Data-driven pricing optimization using R — customer segmentation and predictive modeling.", tech: ["R", "ML", "Marketing"], github: "https://github.com/anesh-t/Rollback-Reimagined-Revenue-Forecasting-and-Pricing-Optimization-at-Walmart" },
];

const FeaturedCard = ({ project, i }: { project: Project; i: number }) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.15 }}
    whileHover={{ y: -6 }}
    className="group rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col overflow-hidden"
  >
    {project.image && (
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        {project.award && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 text-amber bg-card/90 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-full border border-amber/20">
            <Trophy className="w-3.5 h-3.5" />
            {project.award}
          </div>
        )}
      </div>
    )}
    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            {project.title}
          </a>
        ) : project.title}
      </h3>
      {project.period && (
        <p className="text-xs text-muted-foreground mb-3">{project.period}</p>
      )}
      <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
      {project.highlights && (
        <ul className="space-y-1.5 text-xs text-muted-foreground mb-4">
          {project.highlights.map((h, j) => (
            <li key={j} className="flex gap-1.5">
              <span className="text-accent font-bold">✓</span> {h}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
            {t}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mt-auto font-medium"
        >
          <Github className="w-3.5 h-3.5" /> View on GitHub
        </a>
      )}
    </div>
  </motion.div>
);

const CompactCard = ({ project, i }: { project: Project; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.05 }}
    whileHover={{ y: -3 }}
    className="group rounded-xl bg-card border border-border p-5 hover:shadow-card-hover transition-all flex flex-col"
  >
    <h3 className="font-semibold text-sm text-foreground mb-2 group-hover:text-accent transition-colors">
      {project.github ? (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
          {project.title}
        </a>
      ) : project.title}
    </h3>
    <p className="text-xs text-muted-foreground mb-3 flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-1.5 mb-3">
      {project.tech.map((t) => (
        <span key={t} className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[11px] border border-border">
          {t}
        </span>
      ))}
    </div>
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline mt-auto"
      >
        <Github className="w-3 h-3" /> GitHub
      </a>
    )}
  </motion.div>
);

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
      <BackgroundShapes variant="blobs" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Featured <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-warm rounded-full mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, i) => (
              <FeaturedCard key={i} project={project} i={i} />
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
              More <span className="text-accent">Projects</span>
            </h3>
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline font-medium"
            >
              {showAll ? "Show less" : `Show all (${otherProjects.length})`}
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(showAll ? otherProjects : otherProjects.slice(0, 6)).map((project, i) => (
                <CompactCard key={project.title} project={project} i={i} />
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
