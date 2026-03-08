import { Code2, Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => (
  <footer className="bg-brand-deep text-white py-8">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-white/60">© {new Date().getFullYear()} Anesh Thangaraj. All rights reserved.</p>
      <div className="flex gap-4">
        {[
          { icon: Linkedin, href: "https://linkedin.com/in/anesh-t", label: "LinkedIn" },
          { icon: Github, href: "https://github.com/anesh-t", label: "GitHub" },
          { icon: Mail, href: "mailto:aneshraj14@gmail.com", label: "Email" },
          { icon: Code2, href: "https://www.hackerrank.com/profile/aneshraj14", label: "HackerRank" },
          { icon: Terminal, href: "https://leetcode.com/u/Anesh_T/", label: "LeetCode" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
            aria-label={label}
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
