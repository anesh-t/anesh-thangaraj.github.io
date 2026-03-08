import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";
import volunteerImg from "@/assets/volunteer-imf.jpg";
import logoImf from "@/assets/logo-imf.png";

const volunteer = [
  {
    role: "Volunteer Staff – Spring Meetings 2025",
    organization: "International Monetary Fund (IMF)",
    period: "Apr 2025 · 1 month",
    location: "Washington, DC",
    cause: "Economic Empowerment",
    bullets: [
      "Managed front desk operations, greeting visitors, checking registrations, and directing attendees to sessions.",
      "Supported attendee registration, information desks, and venue logistics for international delegates and media.",
      "Assisted with event coordination, crowd management, and real-time session support across multiple IMF venues.",
      "Delivered high-quality customer service, addressing visitor inquiries and ensuring smooth operational flow.",
      "Collaborated with staff to uphold event security, emergency readiness, and VIP hospitality standards.",
    ],
  },
];

const VolunteeringSection = () => (
  <section id="volunteering" className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
    <BackgroundShapes variant="waves" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Volunteer <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experience</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-12" />

        {volunteer.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -3 }}
            className="rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all overflow-hidden"
          >
            {/* Event image banner */}
            <div className="relative h-48 md:h-56 overflow-hidden group/banner">
              <motion.img
                src={volunteerImg}
                alt="IMF Spring Meetings"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-6 flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 rounded-xl bg-card/90 backdrop-blur-md border border-border flex items-center justify-center"
                >
                  <img src={logoImf} alt="IMF" className="w-14 h-14 object-contain" />
                </motion.div>
                <div>
                  <a href="https://www.linkedin.com/posts/anesh-t_imf-springmeetings2025-businessanalytics-ugcPost-7322686988120113152-jPbd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLgq_gB5geiRrJOyPnTiCbtDlCNZYds1p8" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground text-lg hover:text-accent transition-colors inline-flex items-center gap-1.5">{v.organization} <ExternalLink className="w-3.5 h-3.5" /></a>
                  <p className="text-sm text-accent font-medium flex items-center gap-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <Heart className="w-3.5 h-3.5" />
                    </motion.div>
                    {v.cause}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <h3 className="font-bold text-foreground text-lg">{v.role}</h3>
                <div className="text-right text-xs text-muted-foreground">
                  <p className="font-medium">{v.period}</p>
                  <p>{v.location}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {v.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.08 }}
                    className="flex gap-2"
                  >
                    <span className="text-accent mt-1 shrink-0 text-lg leading-none">•</span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default VolunteeringSection;
