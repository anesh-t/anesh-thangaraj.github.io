import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
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
    honors: [],
    coursework: [
      "Data Structures & Algorithms", "Object-Oriented Programming",
      "Database Systems", "Operating Systems", "Computer Networks",
      "Artificial Intelligence", "Software Engineering", "Probability & Statistics",
    ],
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 md:py-28 bg-background relative overflow-hidden">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all overflow-hidden"
            >
              {/* Color accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`} />

              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="shrink-0 w-24 h-24 rounded-2xl bg-muted border border-border flex items-center justify-center overflow-hidden">
                  <img src={edu.logo} alt={edu.school} className="object-contain" style={{ width: '4.5rem', height: '4.5rem' }} />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{edu.degree}</h3>
                    <p className="text-base text-accent font-semibold">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.department}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {edu.location}
                      </span>
                      {edu.gpa && (
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>

                  {edu.honors.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.honors.map((honor, j) => (
                        <div key={j} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber/10 text-amber text-xs font-semibold border border-amber/20">
                          🏆 {honor}
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-accent" /> Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                        >
                          {course}
                        </span>
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
