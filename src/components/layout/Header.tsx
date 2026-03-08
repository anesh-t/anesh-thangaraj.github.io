import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Organizations", href: "#organizations" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className={cn(
            "text-xl md:text-2xl font-display font-bold transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          Anesh<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-muted-foreground" : "text-white/80"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href="/resume_anesh.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "hidden lg:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium transition-all",
            "bg-accent text-accent-foreground hover:bg-coral-hover"
          )}
        >
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            scrolled ? "hover:bg-muted" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border shadow-lg overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="py-3 px-4 rounded-lg text-sm font-medium hover:bg-muted transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume_anesh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center py-3 rounded-full bg-accent text-accent-foreground font-medium text-sm"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
