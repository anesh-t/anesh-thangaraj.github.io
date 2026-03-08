import { useState } from "react";
import SplashScreen from "@/components/portfolio/SplashScreen";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import VolunteeringSection from "@/components/portfolio/VolunteeringSection";
import OrganizationsSection from "@/components/portfolio/OrganizationsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <VolunteeringSection />
      <OrganizationsSection />
      <ContactSection />
    </>
  );
};

export default Index;
