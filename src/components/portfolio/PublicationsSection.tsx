import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Eye, Download, TrendingUp, Quote } from "lucide-react";

const metrics = [
  { icon: Quote, value: "26", label: "Citations", gradient: "from-violet-500 to-purple-500" },
  { icon: Eye, value: "9.4k", label: "Views", gradient: "from-blue-500 to-cyan-500" },
  { icon: Download, value: "1.4k", label: "Downloads", gradient: "from-emerald-500 to-teal-500" },
  { icon: TrendingUp, value: "4.7", label: "Impact Factor", gradient: "from-accent to-amber-500" },
  { icon: BookOpen, value: "7.3", label: "CiteScore", gradient: "from-pink-500 to-rose-500" },
];

const PublicationsSection = () => (
  <section id="publications" className="py-20 md:py-28 bg-section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Publications & <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Research</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-12" />

        {/* Publication card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />

          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 text-xs font-bold border border-violet-500/20">
              Peer-Reviewed Journal
            </span>
          </div>

          <h3 className="text-xl font-bold text-foreground mt-4 leading-snug">
            Analyzing Classification and Feature Selection Strategies for Diabetes Prediction across Diverse Diabetes Datasets
          </h3>
          <p className="text-sm text-accent font-semibold mt-2 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Frontiers in Artificial Intelligence · Aug 21, 2024
          </p>

          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-3xl">
            Analyzed ML models (RF, XGB, LR, GB, SVM) for diabetes prediction, achieving precision/recall up to 0.9. Employed LIME, SHAP, Chi-square for critical predictor identification, enhancing model transparency in healthcare decision-making.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Co-authors: Saravana Kumar I J, Rithik R. Ragupathi, Sundaravelan S
          </p>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8">
            {metrics.map((metric) => (
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
            className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold text-sm mt-6"
          >
            Read Full Paper <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Awards */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[
            { emoji: "🏆", title: "Community Choice Award", detail: "Fall 2025 GenAI Case Competition · CFO Intelligence Platform" },
            { emoji: "🏅", title: "GW Business Fellowship Award", detail: "Merit-based · ~$22,000 (35% tuition coverage)" },
          ].map((award, i) => (
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

export default PublicationsSection;
