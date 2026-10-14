import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { ABOUT_ACCORDIONS } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(["q1"]);
  const [expandedBio, setExpandedBio] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-heading-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full border-b border-[#D0D0D0] py-16 md:py-24 bg-[#ECECEC]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Large Editorial Heading & Halo Portrait (Screenshots 4 & 5) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-1">
            <div className="overflow-hidden">
              <h2 className="about-heading-line text-editorial-headline uppercase text-[#080808]">
                BEFORE YOU
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="about-heading-line text-editorial-headline uppercase text-[#080808]">
                ASK...
              </h2>
            </div>
          </div>

          {/* Black & White Studio Portrait with sleek framing */}
          <div className="relative w-full max-w-sm aspect-4/5 sm:aspect-square border border-[#D0D0D0] bg-white p-2 shadow-xs group">
            <div className="relative w-full h-full overflow-hidden bg-[#080808]">
              <img
                src="/ajal_portrait.jpg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf("image.png") === -1) {
                    target.src = "/image.png";
                  }
                }}
                alt="Ajal KS — Photograph"
                className="w-full h-full object-cover filter contrast-105 transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute top-2 left-2 text-[9px] font-mono-tag bg-black/85 text-white px-2 py-0.5 z-10">
                AJAL KS // ENGINEER
              </div>
            </div>
          </div>

          {/* Key Facts Pill-Free Strip */}
          <div className="space-y-2 text-xs font-mono-tag text-[#777777]">
            <p>DEGREE: B.TECH CSE (SAINTGITS 2026)</p>
            <p>CERTIFICATION: WALKME BUILDER LEVEL I & II</p>
            <p>LOCATION: KERALA, INDIA</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Bio Summary & Expanding Editorial Accordion */}
        <div className="lg:col-span-7 space-y-8">
          {/* Bio Summary Section (Matching "To Recap" from Screenshot 5) */}
          <div className="space-y-4 border-b border-[#D0D0D0] pb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#555555]">
              To Recap
            </h3>
            <p className="text-sm md:text-base text-[#333333] leading-relaxed">
              Hi, I'm Ajal KS, a Software Engineer & Digital Adoption Specialist at DigitizeNow.
              I hold a B.Tech in Computer Science and Engineering from Saintgits College of Engineering (CGPA: 8.0/10).
              I specialize in enterprise digital adoption architectures, interactive WalkMe implementations,
              frontend web platforms, and practical AI applications that streamline user workflows.
            </p>

            {expandedBio && (
              <div className="pt-2 text-sm text-[#555555] leading-relaxed space-y-3 animate-in fade-in duration-300">
                <p>
                  My engineering ethos centers around creating dependable software where complex technical layers
                  disappear behind effortless, guided experiences. With WalkMe Builder Level I & II certifications,
                  I transform convoluted corporate software into clear, mission-driven interfaces.
                </p>
                <p>
                  Outside of daily engineering, I actively explore natural language processing, vector similarity
                  matching, and modern frontend motion design.
                </p>
              </div>
            )}

            <button
              onClick={() => setExpandedBio(!expandedBio)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#080808] hover:text-[#3023FF] pt-2 focus:outline-none cursor-pointer"
            >
              <span>{expandedBio ? "SHOW LESS" : "KNOW MORE"}</span>
              <ArrowRight
                size={14}
                className={`transition-transform duration-200 ${
                  expandedBio ? "rotate-90" : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Editorial Questions Accordion */}
          <div className="divide-y divide-[#D0D0D0] border-b border-[#D0D0D0]">
            {ABOUT_ACCORDIONS.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div key={item.id} className="py-4 md:py-5">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3023FF]"
                  >
                    <span className="text-base md:text-lg lg:text-xl font-bold uppercase text-[#080808] group-hover:text-[#3023FF] transition-colors pr-4">
                      {item.question}
                    </span>
                    <span className="p-1 border border-transparent group-hover:border-[#D0D0D0] transition-colors shrink-0">
                      {isOpen ? (
                        <Minus size={20} className="text-[#080808] transform rotate-0 transition-transform duration-300" />
                      ) : (
                        <Plus size={20} className="text-[#080808] transform rotate-0 transition-transform duration-300" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Answer Content */}
                  {isOpen && (
                    <div className="pt-4 pr-6 text-sm md:text-base text-[#444444] leading-relaxed animate-in fade-in duration-200">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
