import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SelectedWorks } from "./components/SelectedWorks";
import { ArchiveSection } from "./components/ArchiveSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSkills } from "./components/ExperienceSkills";
import { ContactFooter } from "./components/ContactFooter";
import { CustomCursor } from "./components/CustomCursor";
import { ProjectModal } from "./components/ProjectModal";
import { Project } from "./data/portfolioData";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // IntersectionObserver to sync active navigation link with current scroll position
  useEffect(() => {
    const sectionIds = ["home", "works", "archive", "about", "contact"];
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#ECECEC] text-[#080808] selection:bg-[#3023FF] selection:text-white relative">
      {/* Restrained Custom Cursor Accent */}
      <CustomCursor />

      {/* Editorial Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Split-Screen Editorial Hero & Slide 2 Thinking Section */}
        <HeroSection
          onExploreWork={() => scrollToSection("works")}
          onConnect={() => scrollToSection("contact")}
        />

        {/* 3. Selected Works — Interactive Project Gallery */}
        <SelectedWorks onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

        {/* 4. Project Archive & Explorations */}
        <ArchiveSection />

        {/* 5. About Me Editorial Accordion & Portrait */}
        <AboutSection />

        {/* 6. Professional Experience & Typography Skills */}
        <ExperienceSkills />
      </main>

      {/* 7. Dramatic Dark Editorial Footer */}
      <ContactFooter onNavigate={scrollToSection} />

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
