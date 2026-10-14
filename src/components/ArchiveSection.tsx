import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { ARCHIVE_PROJECTS } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export const ArchiveSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".archive-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="archive"
      className="relative w-full border-b border-[#D0D0D0] py-16 md:py-24 bg-[#ECECEC]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D0D0D0] pb-6">
          <div>
            <span className="text-xs font-mono-tag font-bold tracking-widest uppercase text-[#777777]">
              [ PROJECT ARCHIVE ]
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#080808] tracking-tight mt-1">
              EXPERIMENTS & EXPLORATIONS
            </h2>
          </div>
          <p className="text-xs font-mono-tag text-[#777777] max-w-xs">
            A comprehensive index of engineering repositories, WalkMe implementations, and technical prototypes.
          </p>
        </div>

        {/* Minimal Editorial Table List */}
        <div className="divide-y divide-[#D0D0D0] border-t border-[#D0D0D0]">
          {ARCHIVE_PROJECTS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="archive-row group block py-4 md:py-5 hover:bg-[#F5F5F5] px-2 md:px-4 transition-colors duration-200 cursor-pointer"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                {/* Year */}
                <div className="sm:col-span-1 text-xs font-mono-tag text-[#777777] group-hover:text-[#080808] transition-colors">
                  {item.year}
                </div>

                {/* Project Title */}
                <div className="sm:col-span-5">
                  <span className="text-base md:text-lg font-bold text-[#080808] group-hover:text-[#3023FF] transition-colors uppercase tracking-tight">
                    {item.title}
                  </span>
                </div>

                {/* Category */}
                <div className="sm:col-span-3 text-xs md:text-sm text-[#555555]">
                  {item.category}
                </div>

                {/* Technologies */}
                <div className="sm:col-span-2 text-xs font-mono-tag text-[#777777] hidden md:block truncate">
                  {item.tech.join(" · ")}
                </div>

                {/* Link Arrow */}
                <div className="sm:col-span-1 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-transparent group-hover:border-[#080808] flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight
                      size={16}
                      className="text-[#777777] group-hover:text-[#080808] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
