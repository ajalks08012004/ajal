import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { PORTFOLIO_PROJECTS, Project } from "../data/portfolioData";

interface SelectedWorksProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onOpenCaseStudy }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PORTFOLIO_PROJECTS[activeIndex];
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Smooth image reveal when active project changes
  useEffect(() => {
    if (imageContainerRef.current) {
      gsap.fromTo(
        imageContainerRef.current.querySelector(".project-preview-img"),
        { opacity: 0.4, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  return (
    <section id="works" className="relative w-full border-b border-[#D0D0D0] py-16 md:py-24 bg-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#D0D0D0] flex items-center justify-between">
          <h2 className="text-xs md:text-sm font-mono-tag font-bold tracking-widest uppercase text-[#777777]">
            [ SELECTED WORKS ]
          </h2>
          <span className="text-xs font-mono-tag text-[#777777]">
            01 — 0{PORTFOLIO_PROJECTS.length}
          </span>
        </div>

        {/* 2-Column Split: Interactive Project List (Left) & Large Visual Stage (Right) */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT SIDE: Interactive Project Names List */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10" ref={listRef}>
            <div className="space-y-4">
              {PORTFOLIO_PROJECTS.map((project, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className="group cursor-pointer py-1.5 transition-all duration-200 select-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(index);
                      }
                    }}
                    aria-label={`Select ${project.title}`}
                    data-cursor-hover
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      {/* Number Index */}
                      <span
                        className={`text-sm md:text-base font-mono-tag transition-colors duration-200 ${
                          isActive ? "text-[#080808] font-bold" : "text-[#A0A0A0] group-hover:text-[#777777]"
                        }`}
                      >
                        {project.number}
                      </span>

                      {/* Directional Active Arrow Indicator (matching Screenshot 3!) */}
                      <div className="w-6 md:w-8 shrink-0 flex items-center justify-center">
                        <ArrowRight
                          size={24}
                          strokeWidth={2.5}
                          className={`text-[#080808] transition-all duration-300 transform ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-3 pointer-events-none"
                          }`}
                        />
                      </div>

                      {/* Project Title */}
                      <h3
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? "text-[#080808] translate-x-1"
                            : "text-[#A0A0A0] group-hover:text-[#444444]"
                        }`}
                      >
                        <span>{project.title}</span>
                        {isActive && (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#3023FF] inline-block animate-pulse-subtle shrink-0" />
                        )}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Project Description Box (Matching Screenshot 3 Bottom Left) */}
            <div className="border-t border-[#D0D0D0] pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-tag uppercase tracking-widest text-[#777777] font-semibold">
                  PROJECT DESCRIPTION
                </span>
                <span className="text-xs font-mono-tag text-[#3023FF] font-bold">
                  {activeProject.category} // {activeProject.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-[#333333] leading-relaxed transition-opacity duration-300">
                {activeProject.description}
              </p>

              {/* Impact summary */}
              <div className="bg-[#F5F5F5] border border-[#D0D0D0] p-3 text-xs text-[#080808] font-medium">
                <span className="font-mono-tag font-bold text-[#3023FF] mr-2">OUTCOME:</span>
                {activeProject.impact}
              </div>

              {/* Clean Unboxed Tags */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#666666] pt-1">
                <span className="font-mono-tag text-[#080808] font-bold">STACK:</span>
                {activeProject.tags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {i < activeProject.tags.length - 1 && (
                      <span className="text-[#A0A0A0]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenCaseStudy(activeProject)}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3023FF] transition-colors duration-200 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#3023FF]"
                >
                  <BookOpen size={14} />
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#080808] text-[#080808] text-xs font-bold uppercase tracking-wider hover:bg-[#080808] hover:text-white transition-colors duration-200"
                  >
                    <span>SOURCE CODE</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Large Visual Stage (Soft Lilac / Studio Framing from Screenshot 3) */}
          <div
            ref={imageContainerRef}
            className="lg:col-span-6 relative w-full aspect-4/3 sm:aspect-5/4 lg:aspect-square bg-[#DDD7E8] border border-[#C5BFD6] p-4 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm transition-all duration-300"
          >
            {/* Top Coordinate Info */}
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-[10px] font-mono-tag text-[#554C68] pointer-events-none z-10">
              <span>PRJ_{activeProject.number} // PREVIEW</span>
              <span>[ INTERACTIVE SHOWCASE ]</span>
            </div>

            {/* Project Image Frame with Mask Reveal */}
            <div className="relative w-full h-[85%] border border-[#BDB5CE] bg-white p-2 shadow-xl">
              <img
                key={activeProject.id}
                src={activeProject.image}
                alt={activeProject.title}
                className="project-preview-img w-full h-full object-cover select-none"
              />
              {/* Bottom Project Tag Bar */}
              <div className="absolute bottom-2 left-2 right-2 bg-black/85 text-white backdrop-blur-xs px-3 py-1.5 flex items-center justify-between text-[11px] font-mono-tag">
                <span className="font-bold truncate max-w-[200px]">
                  {activeProject.title}
                </span>
                <span className="text-[#3023FF] font-bold">
                  {activeProject.year}
                </span>
              </div>
            </div>

            {/* Corner Crosshairs */}
            <div className="absolute bottom-3 left-4 text-[9px] font-mono-tag text-[#6B6183] pointer-events-none">
              + 45.42 // DAP ENGINE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
