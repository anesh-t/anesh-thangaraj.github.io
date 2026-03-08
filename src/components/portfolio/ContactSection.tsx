import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code2, Terminal, Send } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(16_84%_62%_/_0.15),_transparent_50%)]" />
    <BackgroundShapes variant="blobs" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-white">
          Let's <span className="text-accent">Connect</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-8 mx-auto" />
        <p className="text-white/70 mb-10 text-lg font-sans">
          I'm actively looking for full-time opportunities in Business Analytics, Data Analytics, and Applied GenAI. Let's talk!
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {[
            { icon: Mail, label: "aneshraj14@gmail.com", href: "mailto:aneshraj14@gmail.com" },
            { icon: Phone, label: "(571) 237-8970", href: "tel:+15712378970" },
            { icon: MapPin, label: "Arlington, VA (Open to Relocate)", href: "#" },
            { icon: Linkedin, label: "linkedin.com/in/anesh-t", href: "https://linkedin.com/in/anesh-t" },
            { icon: Code2, label: "HackerRank Profile", href: "https://www.hackerrank.com/profile/aneshraj14" },
            { icon: Terminal, label: "LeetCode Profile", href: "https://leetcode.com/u/Anesh_T/" },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all"
            >
              <Icon className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-white/90 text-left">{label}</span>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume_anesh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-warm text-white font-semibold shadow-glow hover:shadow-lg transition-all"
          >
            <Send className="w-4 h-4" /> Download Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/anesh-t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
          >
            <Github className="w-4 h-4" /> GitHub
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
