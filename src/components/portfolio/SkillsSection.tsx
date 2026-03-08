import { motion } from "framer-motion";
import { Database, Brain, Cloud, BarChart3, Code, Users } from "lucide-react";

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
  <section id="skills" className="py-20 md:py-28 bg-background">
    <div className="container">
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

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />

          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-accent" />
            <h3 className="font-bold text-foreground text-lg">Published Research</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground leading-snug">
                Analyzing Classification and Feature Selection Strategies for Diabetes Prediction across Diverse Diabetes Datasets
              </h4>
              <p className="text-sm text-accent font-semibold mt-1">
                Frontiers in Artificial Intelligence · Aug 21, 2024
              </p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Analyzed ML models (RF, XGB, LR, GB, SVM) for diabetes prediction, achieving precision/recall up to 0.9. Employed LIME, SHAP, Chi-square for critical predictor identification, enhancing model transparency in healthcare decision-making.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Co-authors: Saravana Kumar I J, Rithik R. Ragupathi, Sundaravelan S
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { icon: Quote, value: "26", label: "Citations", gradient: "from-violet-500 to-purple-500" },
                { icon: Eye, value: "9.4k", label: "Views", gradient: "from-blue-500 to-cyan-500" },
                { icon: Download, value: "1.4k", label: "Downloads", gradient: "from-emerald-500 to-teal-500" },
                { icon: TrendingUp, value: "4.7", label: "Impact Factor", gradient: "from-accent to-amber-500" },
                { icon: BookOpen, value: "7.3", label: "CiteScore", gradient: "from-pink-500 to-rose-500" },
              ].map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ scale: 1.05 }}
                  className="relative flex flex-col items-center p-4 rounded-xl bg-muted border border-border text-center overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${metric.gradient}`} />
                  <metric.icon className="w-4 h-4 text-accent mb-2" />
                  <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                  <span className="text-xs text-muted-foreground">{metric.label}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2024.1421751/full"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold text-sm"
            >
              Read Full Paper <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Awards */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
              <div className="flex gap-3 items-start">
                <span className="text-2xl shrink-0">{award.emoji}</span>
                <div>
                  <p className="font-bold text-foreground">{award.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{award.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
