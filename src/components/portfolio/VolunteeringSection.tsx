import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const volunteer = [
  {
    role: "Volunteer Staff – Spring Meetings 2025",
    organization: "International Monetary Fund (IMF)",
    period: "Apr 2025 · 1 month",
    location: "Washington, DC",
    cause: "Economic Empowerment",
    bullets: [
      "Managed front desk operations, greeting visitors, checking registrations, and directing attendees to sessions and events.",
      "Supported attendee registration, information desks, and venue logistics for international delegates and media.",
      "Assisted with event coordination, crowd management, and real-time session support across multiple IMF venues.",
      "Delivered high-quality customer service, addressing visitor inquiries and ensuring smooth operational flow.",
      "Collaborated with staff to uphold event security, emergency readiness, and VIP hospitality standards.",
    ],
  },
];

const VolunteeringSection = () => (
  <section id="volunteering" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Volunteer <span className="text-accent">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-12" />

        <div className="space-y-8">
          {volunteer.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-foreground">{v.role}</h3>
                    <p className="text-accent font-medium text-sm flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5" /> {v.organization}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Cause: {v.cause}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <p>{v.period}</p>
                    <p>{v.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {v.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-accent mt-1.5 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default VolunteeringSection;
