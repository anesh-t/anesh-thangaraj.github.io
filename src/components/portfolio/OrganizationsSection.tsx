import { motion } from "framer-motion";
import { Users, ExternalLink } from "lucide-react";
import logoGwu from "@/assets/logo-gwu.png";
import logoVit from "@/assets/logo-vit.png";

const organizations = [
  {
    role: "Executive Vice President (Operations & Analytics)",
    organization: "GWU Graduate Consulting Club",
    institution: "The George Washington University School of Business",
    period: "Jan 2025 – Dec 2025",
    location: "Washington, DC",
    url: "https://www.linkedin.com/company/gwbusiness/",
    logo: logoGwu,
    color: "from-indigo-500 to-blue-500",
    bullets: [
      "Led end-to-end operations for consulting workshops, case events, and speaker sessions (150+ attendees).",
      "Coordinated speakers, alumni, logistics, and execution with minimal oversight.",
      "Designed tracking and reporting workflows (Excel, dashboards) to analyze attendance and engagement trends.",
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
    logo: logoVit,
    color: "from-rose-500 to-pink-500",
    bullets: [
      "Contributed to social impact and entrepreneurship initiatives over 3+ years at VIT.",
    ],
  },
];

const OrganizationsSection = () => (
  <section id="organizations" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Clubs & <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Organizations</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {organizations.map((org, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${org.color}`} />

              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden shrink-0">
                  <img src={org.logo} alt={org.organization} className="w-9 h-9 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">{org.role}</h3>
                  <p className="text-accent font-semibold text-sm flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> {org.organization}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{org.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-muted-foreground">
                <span className="font-medium">{org.period}</span>
                <span>·</span>
                <span>{org.location}</span>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> LinkedIn
                </a>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {org.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-accent mt-1 shrink-0 text-lg leading-none">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default OrganizationsSection;
