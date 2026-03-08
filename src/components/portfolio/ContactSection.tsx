import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code2, Terminal } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Let's <span className="text-accent">Connect</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-8 mx-auto" />
        <p className="text-primary-foreground/80 mb-10 text-lg">
          I'm actively looking for full-time opportunities in Business Analytics, Data Analytics, and Applied GenAI. Let's talk!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { icon: Mail, label: "aneshraj14@gmail.com", href: "mailto:aneshraj14@gmail.com" },
            { icon: Phone, label: "(571) 237-8970", href: "tel:+15712378970" },
            { icon: MapPin, label: "Arlington, VA (Open to Relocate)", href: "#" },
            { icon: Linkedin, label: "linkedin.com/in/anesh-t", href: "https://linkedin.com/in/anesh-t" },
            { icon: Code2, label: "HackerRank Profile", href: "https://www.hackerrank.com/profile/aneshraj14" },
            { icon: Terminal, label: "LeetCode Profile", href: "https://leetcode.com/u/Anesh_T/" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Icon className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-left">{label}</span>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="/resume_anesh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-coral-hover transition-colors"
          >
            Download Resume <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/anesh-t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
