import React from "react";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#ECECEC] border border-[#080808] p-6 md:p-10 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Number & Close */}
        <div className="flex items-center justify-between border-b border-[#D0D0D0] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono-tag text-xs font-bold text-[#3023FF]">
              CASE STUDY // {project.number}
            </span>
            <span className="text-[#A0A0A0]">·</span>
            <span className="text-xs font-mono-tag text-[#777777] uppercase">
              {project.category} ({project.year})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-[#080808] hover:bg-[#080808] hover:text-white transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#3023FF]"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Project Header */}
        <div>
          <h2 id="modal-project-title" className="text-2xl md:text-4xl font-extrabold uppercase text-[#080808] tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm md:text-base font-semibold text-[#777777] mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Project Image Showcase */}
        <div className="w-full aspect-16/9 md:aspect-21/9 border border-[#D0D0D0] overflow-hidden bg-white">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Deep Dive Case Study Content */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono-tag uppercase tracking-wider text-[#080808]">
            [ EXECUTIVE OVERVIEW & ARCHITECTURE ]
          </h3>
          <p className="text-sm md:text-base text-[#333333] leading-relaxed">
            {project.fullCaseStudy || project.description}
          </p>
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono-tag uppercase tracking-wider text-[#080808]">
              [ IMPLEMENTED CAPABILITIES ]
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#444444]">
                  <CheckCircle2 size={16} className="text-[#3023FF] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact Callout */}
        <div className="border border-[#080808] bg-[#F5F5F5] p-4">
          <span className="text-[10px] font-mono-tag uppercase text-[#777777] block">
            VERIFIED MEASURED IMPACT
          </span>
          <p className="text-sm font-bold text-[#080808] mt-0.5">
            {project.impact}
          </p>
        </div>

        {/* Tech Stack Unboxed */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#D0D0D0] text-xs text-[#555555]">
          <span className="font-mono-tag text-[#080808] font-bold">TECH:</span>
          {project.tags.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>
              {idx < project.tags.length - 1 && <span className="text-[#A0A0A0]">·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#D0D0D0]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#080808] text-xs font-bold uppercase tracking-wider hover:bg-[#080808] hover:text-white transition-colors"
            >
              <Github size={15} />
              <span>GITHUB</span>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3023FF] transition-colors"
            >
              <span>VISIT PROJECT</span>
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
