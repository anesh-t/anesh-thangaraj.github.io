import { motion } from "framer-motion";
import { Users, ExternalLink } from "lucide-react";

const organizations = [
  {
    role: "Executive Vice President (Operations & Analytics)",
    organization: "GWU Graduate Consulting Club",
    institution: "The George Washington University School of Business",
    period: "Jan 2025 – Dec 2025",
    location: "Washington, DC",
    url: "https://www.linkedin.com/company/gwbusiness/",
    bullets: [
      "Led end-to-end operations for consulting workshops, case events, and speaker sessions (150+ attendees).",
      "Coordinated speakers, alumni, logistics, and execution with minimal oversight.",
      "Designed tracking and reporting workflows (Excel, dashboards) to analyze attendance, engagement trends, and operational bottlenecks.",
      "Partnered with industry professionals and alumni to facilitate networking, mentorship, and panel discussions.",
    ],
  },
  {
    role: "Core Committee Member",
    organization: "Center for Social and Entrepreneurship Development (CSED)",
    institution: "Vellore Institute of Technology",
    period: "Jan 2021 – Feb 2024",
    location: "Vellore, India",
    url: "https://www.linkedin.com/school/400138/",
    bullets: [
      "Contributed to social impact and entrepreneurship initiatives over 3+ years at VIT.",
    ],
  },
];

const OrganizationsSection = () => (
  <section id="organizations" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Clubs & <span className="text-accent">Organizations</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-12" />

        <div className="space-y-8">
          {organizations.map((org, i) => (
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
                    <h3 className="font-bold text-foreground">{org.role}</h3>
                    <p className="text-accent font-medium text-sm flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> {org.organization}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{org.institution}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <p>{org.period}</p>
                    <p>{org.location}</p>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline mt-1"
                    >
                      <ExternalLink className="w-3 h-3" /> LinkedIn
                    </a>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {org.bullets.map((b, j) => (
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

export default OrganizationsSection;
