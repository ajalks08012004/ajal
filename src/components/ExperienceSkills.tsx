import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE_ITEMS, SKILL_CATEGORIES } from "../data/portfolioData";
import { Award, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSkills: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 25,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".skill-block", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full border-b border-[#D0D0D0] py-16 md:py-24 bg-[#ECECEC]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* ================= EXPERIENCE TIMELINE ================= */}
        <div className="space-y-10">
          <div className="border-b border-[#D0D0D0] pb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono-tag font-bold tracking-widest uppercase text-[#777777]">
                [ CAREER & EDUCATION ]
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#080808] tracking-tight mt-1">
                PROFESSIONAL EXPERIENCE
              </h2>
            </div>
            <span className="hidden sm:inline text-xs font-mono-tag text-[#777777]">
              VERIFIED RESUME RECORD
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            {EXPERIENCE_ITEMS.map((item, index) => (
              <div
                key={index}
                className="exp-item lg:col-span-6 border border-[#D0D0D0] bg-[#F5F5F5] p-6 md:p-8 space-y-4 hover:border-[#080808] transition-colors duration-200"
              >
                {/* Header with Period & Badge */}
                <div className="flex items-center justify-between border-b border-[#D0D0D0] pb-3">
                  <span className="text-xs font-mono-tag font-bold text-[#3023FF]">
                    {item.period}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-mono-tag uppercase tracking-wider text-[#080808] border border-[#080808] px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold uppercase text-[#080808]">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#777777] mt-1">
                    <span>{item.company}</span>
                    <span>·</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#444444] leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 pt-2 border-t border-[#E0E0E0]">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#555555]">
                      <CheckCircle size={14} className="text-[#3023FF] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* WalkMe Certifications Highlight Banner */}
          <div className="border border-[#080808] bg-[#080808] text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                <Award size={24} className="text-[#3023FF]" />
              </div>
              <div>
                <p className="text-xs font-mono-tag text-[#A0A0A0] uppercase">
                  VERIFIED INDUSTRY CREDENTIALS
                </p>
                <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white">
                  WALKME BUILDER LEVEL I & LEVEL II CERTIFIED
                </h4>
              </div>
            </div>
            <div className="text-xs font-mono-tag text-[#A0A0A0] border-l-0 md:border-l border-white/20 pl-0 md:pl-6 max-w-sm">
              Demonstrated mastery of complex enterprise application onboarding, DOM injection architectures, and DAP analytics.
            </div>
          </div>
        </div>

        {/* ================= SKILLS MATRIX (NO SLOP PROGRESS BARS) ================= */}
        <div className="space-y-10 pt-8">
          <div className="border-b border-[#D0D0D0] pb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono-tag font-bold tracking-widest uppercase text-[#777777]">
                [ TECHNICAL PROFICIENCIES ]
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#080808] tracking-tight mt-1">
                SKILLS & EXPERTISE
              </h2>
            </div>
            <span className="hidden sm:inline text-xs font-mono-tag text-[#777777]">
              STRUCTURED TAXONOMY
            </span>
          </div>

          {/* Typography-Led Skill Grid */}
          <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="skill-block border border-[#D0D0D0] bg-[#F5F5F5] p-6 space-y-4 hover:border-[#3023FF] transition-all duration-200"
              >
                <div>
                  <span className="text-[10px] font-mono-tag text-[#3023FF] font-bold">
                    0{idx + 1} // DOMAIN
                  </span>
                  <h3 className="text-base md:text-lg font-bold uppercase text-[#080808] tracking-tight mt-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#777777] mt-1">
                    {cat.description}
                  </p>
                </div>

                {/* Unboxed Skill Tags */}
                <div className="pt-3 border-t border-[#E0E0E0] space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex items-center justify-between text-xs py-1 border-b border-[#EAEAEA] last:border-b-0 hover:text-[#3023FF] transition-colors"
                    >
                      <span className="font-semibold text-[#333333] group-hover:text-[#3023FF]">
                        {skill}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D0D0D0] group-hover:bg-[#3023FF] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
