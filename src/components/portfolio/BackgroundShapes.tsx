import { motion } from "framer-motion";

type Variant = "circles" | "diamonds" | "waves" | "dots" | "triangles" | "rings" | "blobs" | "crosses";

const shapeConfigs: Record<Variant, React.FC> = {
  circles: () => (
    <>
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(16 84% 62%), transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 -left-16 w-48 h-48 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, hsl(180 33% 50%), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/[0.08]" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-primary/[0.06]" />
    </>
  ),
  diamonds: () => (
    <>
      <motion.div
        className="absolute top-16 -right-8 w-32 h-32 opacity-[0.04] rotate-45"
        style={{ background: "linear-gradient(135deg, hsl(270 60% 60%), hsl(16 84% 62%))" }}
        animate={{ rotate: [45, 55, 45] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-6 left-20 w-24 h-24 opacity-[0.03] rotate-45"
        style={{ background: "linear-gradient(135deg, hsl(180 33% 40%), hsl(160 60% 45%))" }}
        animate={{ rotate: [45, 35, 45] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute top-1/2 right-[15%] w-4 h-4 rotate-45 border border-accent/[0.08]" />
    </>
  ),
  waves: () => (
    <>
      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-[0.03]" viewBox="0 0 1440 96" preserveAspectRatio="none">
        <motion.path
          d="M0,64 C360,96 720,32 1080,64 C1260,80 1440,48 1440,48 L1440,96 L0,96 Z"
          fill="hsl(16 84% 62%)"
          animate={{ d: ["M0,64 C360,96 720,32 1080,64 C1260,80 1440,48 1440,48 L1440,96 L0,96 Z", "M0,48 C360,32 720,80 1080,48 C1260,32 1440,64 1440,64 L1440,96 L0,96 Z", "M0,64 C360,96 720,32 1080,64 C1260,80 1440,48 1440,48 L1440,96 L0,96 Z"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <svg className="absolute top-0 right-0 w-full h-20 opacity-[0.02]" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 Q360,0 720,40 T1440,40 L1440,0 L0,0 Z" fill="hsl(180 33% 40%)" />
      </svg>
    </>
  ),
  dots: () => (
    <>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(16 84% 62%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <motion.div
        className="absolute top-12 right-12 w-40 h-40 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(270 60% 60%), transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  ),
  triangles: () => (
    <>
      <motion.div
        className="absolute top-20 right-[10%] opacity-[0.04]"
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <polygon points="40,8 72,72 8,72" fill="none" stroke="hsl(16 84% 62%)" strokeWidth="1.5" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-[8%] opacity-[0.03]"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50">
          <polygon points="25,5 45,45 5,45" fill="none" stroke="hsl(180 33% 50%)" strokeWidth="1.5" />
        </svg>
      </motion.div>
      <div className="absolute top-1/2 left-[60%] w-2 h-2 rotate-45 bg-accent/[0.06]" />
    </>
  ),
  rings: () => (
    <>
      <motion.div
        className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-accent/[0.06] opacity-80"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-6 -right-6 w-48 h-48 rounded-full border border-primary/[0.04] opacity-80"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full border border-accent/[0.04]" />
      <div className="absolute bottom-28 left-14 w-12 h-12 rounded-full border border-primary/[0.03]" />
    </>
  ),
  blobs: () => (
    <>
      <motion.div
        className="absolute -top-24 left-[20%] w-80 h-80 opacity-[0.04]"
        style={{
          borderRadius: "40% 60% 70% 30% / 50% 30% 70% 50%",
          background: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 50%))",
        }}
        animate={{
          borderRadius: ["40% 60% 70% 30% / 50% 30% 70% 50%", "60% 40% 30% 70% / 30% 50% 50% 70%", "40% 60% 70% 30% / 50% 30% 70% 50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 right-[15%] w-56 h-56 opacity-[0.03]"
        style={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          background: "linear-gradient(135deg, hsl(180 33% 40%), hsl(270 60% 60%))",
        }}
        animate={{
          borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 30% 60% 40% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </>
  ),
  crosses: () => (
    <>
      <motion.div
        className="absolute top-16 right-[12%] opacity-[0.05]"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <line x1="20" y1="4" x2="20" y2="36" stroke="hsl(16 84% 62%)" strokeWidth="1.5" />
          <line x1="4" y1="20" x2="36" y2="20" stroke="hsl(16 84% 62%)" strokeWidth="1.5" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-[10%] opacity-[0.04]"
        animate={{ rotate: [0, -90, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <line x1="15" y1="3" x2="15" y2="27" stroke="hsl(180 33% 50%)" strokeWidth="1.5" />
          <line x1="3" y1="15" x2="27" y2="15" stroke="hsl(180 33% 50%)" strokeWidth="1.5" />
        </svg>
      </motion.div>
      <div className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-accent/[0.06]" />
    </>
  ),
};

interface BackgroundShapesProps {
  variant: Variant;
}

const BackgroundShapes = ({ variant }: BackgroundShapesProps) => {
  const ShapeComponent = shapeConfigs[variant];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <ShapeComponent />
    </div>
  );
};

export default BackgroundShapes;
