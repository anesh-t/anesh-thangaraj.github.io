import { motion } from "framer-motion";
import { Database, Brain, Cloud, BarChart3, Code, Users } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Analytics & BI",
    color: "from-blue-500 to-cyan-500",
    skills: ["Advanced SQL (PostgreSQL, MySQL)", "Tableau", "Power BI", "Excel (Advanced Modeling)", "KPI Design", "Dashboard Storytelling"],
  },
  {
    icon: Database,
    title: "Data & Statistics",
    color: "from-emerald-500 to-teal-500",
    skills: ["Data Cleaning & EDA", "Hypothesis Testing", "Regression Interpretation", "A/B Testing", "Forecasting (ARIMA)", "Data Validation"],
  },
  {
    icon: Code,
    title: "Programming",
    color: "from-violet-500 to-purple-500",
    skills: ["Python (Pandas, NumPy, Scikit-learn)", "R Programming", "Stata", "Git/GitHub", "FastAPI", "Jupyter"],
  },
  {
    icon: Brain,
    title: "AI & GenAI",
    color: "from-accent to-rose-500",
    skills: ["RAG", "Text-to-SQL / NL-to-SQL", "LangChain / LangGraph", "Prompt Engineering", "Pgvector / ChromaDB / Pinecone", "Neo4j Knowledge Graphs"],
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    color: "from-amber-500 to-orange-500",
    skills: ["AWS (Bedrock, SageMaker, S3, EC2)", "Azure (SQL DB, Data Factory)", "ETL Pipelines", "Schema Design", "API Ingestion", "Monitoring & Logging"],
  },
  {
    icon: Users,
    title: "Business Skills",
    color: "from-pink-500 to-rose-500",
    skills: ["Requirements Gathering (BRDs)", "SOPs", "Stakeholder Communication", "Executive Reporting", "Analytics Presentations", "Agile (Jira/Trello)"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 md:py-28 bg-section-teal relative overflow-hidden">
    <BackgroundShapes variant="triangles" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Core <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ icon: Icon, title, skills, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
              <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs border border-border hover:bg-accent/10 hover:text-accent transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
