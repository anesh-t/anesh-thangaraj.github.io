import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, ExternalLink, ShieldCheck } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";
import logoGwu from "@/assets/logo-gwu.png";
import logoVit from "@/assets/logo-vit.png";

const education = [
  {
    degree: "Master of Science, Business Analytics",
    school: "George Washington University",
    department: "School of Business",
    period: "Aug 2024 – Jan 2026",
    location: "Washington, DC",
    gpa: "3.74 / 4.0",
    logo: logoGwu,
    color: "from-indigo-500 to-blue-500",
    link: "https://registrar.gwu.edu/cecredentials-validation",
    credential: "Credential ID CeDiD:26K2LV6AADJT  •  Name: AN",
    honors: [
      "GW Business Fellowship Award — Merit-based, ~$22,000 (35% tuition)",
      "Community Choice Award – Fall 2025 GenAI Case Competition",
    ],
    coursework: [
      "Machine Learning", "Data Warehousing", "Visualization for Analytics",
      "Statistical Modeling", "Database Management (SQL)", "Business Process Analytics",
      "Cloud Computing (AWS)", "Applied GenAI & LLM Agents",
    ],
  },
  {
    degree: "Bachelor of Technology, Computer Science & Engineering",
    school: "Vellore Institute of Technology",
    department: "School of Computer Science and Engineering",
    period: "Aug 2020 – Jun 2024",
    location: "Vellore, India",
    logo: logoVit,
    color: "from-rose-500 to-pink-500",
    link: "https://www.linkedin.com/in/anesh-t/",
    credential: null,
    honors: [],
    coursework: [
      "Data Structures & Algorithms", "Object-Oriented Programming",
      "Database Systems", "Operating Systems", "Computer Networks",
      "Artificial Intelligence", "Software Engineering", "Probability & Statistics",
    ],
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 md:py-28 bg-section-cool relative overflow-hidden">
    <BackgroundShapes variant="rings" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Education</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-12" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all overflow-hidden"
            >
              {/* Color accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color} transition-all duration-300 group-hover:h-1.5`} />

              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="shrink-0 w-24 h-24 rounded-2xl bg-muted border border-border flex items-center justify-center overflow-hidden cursor-pointer"
                >
                  <img src={edu.logo} alt={edu.school} className="object-contain" style={{ width: '4.5rem', height: '4.5rem' }} />
                </motion.div>

                <div className="flex-1 space-y-4">
                  <div>
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 inline-flex items-center gap-1.5 hover:underline cursor-pointer">
                      {edu.degree} <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-base text-accent font-semibold hover:underline inline-flex items-center gap-1">{edu.school}</a>
                    <p className="text-sm text-muted-foreground">{edu.department}</p>
                    {edu.credential && (
                      <a href={edu.link} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors cursor-pointer">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {edu.credential}
                      </a>
                    )}
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {edu.period}
                      </motion.span>
                      <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {edu.location}
                      </motion.span>
                      {edu.gpa && (
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20"
                        >
                          GPA: {edu.gpa}
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {edu.honors.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.honors.map((honor, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + j * 0.15 }}
                          whileHover={{ scale: 1.03, y: -1 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber/10 text-amber text-xs font-semibold border border-amber/20"
                        >
                          🏆 {honor}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring" }}>
                        <BookOpen className="w-4 h-4 text-accent" />
                      </motion.div>
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <motion.span
                          key={course}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.04 }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
