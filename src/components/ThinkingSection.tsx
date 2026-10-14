import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ThinkingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".thinking-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".thinking-chain-item", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -15,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative w-full border-b border-[#D0D0D0] py-16 md:py-24 overflow-hidden bg-[#ECECEC]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Side: Bold Editorial Typography & Philosophy */}
        <div className="lg:col-span-6 space-y-8">
          {/* Top Tag & Philosophy Photo Thumbnail (Matching Screenshot 2) */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono-tag uppercase tracking-wider text-[#777777]">
              [ MY THINKING AND PHILOSOPHY ]
            </span>
            <div className="w-10 h-10 border border-[#D0D0D0] bg-white p-0.5 shadow-2xs">
              <img
                src="/src/assets/images/about_editorial_portrait_1791946402787.jpg"
                alt="Ajal KS Portrait Thumbnail"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>

          {/* Main Giant Editorial Statement */}
          <div className="space-y-1">
            <div className="overflow-hidden">
              <h2 className="thinking-line text-editorial-headline uppercase text-[#080808]">
                FOR ME,
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="thinking-line text-editorial-headline uppercase text-[#080808] flex items-center flex-wrap gap-2">
                EVERYTH
                <span className="relative inline-flex items-center justify-center text-[#3023FF]">
                  I
                  <span className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#3023FF]" />
                </span>
                NG BEGINS
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="thinking-line text-editorial-headline uppercase text-[#080808] flex items-center flex-wrap gap-3">
                <span className="text-[#A0A0A0] font-mono">[?]</span>
                <span>WITH QUESTIONS</span>
              </h2>
            </div>
          </div>

          {/* The Thought Chain: Questions -> Observations -> Ideas -> Solutions */}
          <div
            ref={textRef}
            className="flex flex-wrap items-center gap-x-2 gap-y-2 text-base md:text-xl text-[#080808] pt-2 font-medium"
          >
            <span className="thinking-chain-item font-extrabold text-[#080808]">Questions</span>
            <span className="thinking-chain-item text-xs md:text-sm font-mono-tag text-[#A0A0A0] lowercase italic">
              become
            </span>
            <span className="thinking-chain-item font-extrabold text-[#080808]">Observations</span>
            <span className="thinking-chain-item text-xs md:text-sm font-mono-tag text-[#A0A0A0] lowercase italic">
              become
            </span>
            <span className="thinking-chain-item font-extrabold text-[#080808]">Ideas</span>
            <span className="thinking-chain-item text-xs md:text-sm font-mono-tag text-[#A0A0A0] lowercase italic">
              become
            </span>
            <span className="thinking-chain-item font-extrabold text-[#3023FF]">Solutions</span>
          </div>

          {/* Supporting Statement Prose */}
          <p className="text-base md:text-lg text-[#444444] leading-relaxed max-w-2xl font-normal pt-2">
            I believe thoughtful software engineering begins with thoughtful human observation.
            I enjoy understanding how enterprise users interact with tools, isolating cognitive bottlenecks,
            and turning abstract requirements into streamlined, dependable digital experiences.
          </p>
        </div>

        {/* Right Side: Matching Editorial Visual Composition (State 2: Transformed Green Character with Brain) */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] lg:min-h-full">
          {/* Layered Architectural & Geometric Graphic Background */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            {/* Outer Geometric Coordinate Box */}
            <div className="absolute w-[90%] h-[90%] border border-[#D0D0D0]/80" />

            {/* Large Circle with Crosshair Lines */}
            <div className="absolute w-64 h-64 md:w-88 md:h-88 rounded-full border border-[#D0D0D0] animate-drift" />
            <div className="absolute w-48 h-48 rounded-full border border-dashed border-[#84CC16]/60" />

            {/* Architectural Building / Silhouettes matching screenshot 2 */}
            <div className="absolute right-0 bottom-0 w-36 md:w-48 h-64 bg-[#080808] opacity-95 rounded-tl-3xl z-1 hidden sm:block">
              <div className="absolute -top-12 right-6 w-12 h-12 bg-[#080808]" />
              <div className="absolute -top-6 right-20 w-16 h-8 bg-[#080808]" />
            </div>

            {/* Dotted Accent Lines */}
            <div className="absolute left-8 top-12 w-32 border-b-2 border-dotted border-[#777777]" />
            <div className="absolute right-12 top-24 w-28 border-b-2 border-dotted border-[#84CC16]" />

            {/* Floating Vibrant Accent Dots (Screenshot 2: neon green & coral) */}
            <div className="absolute top-16 right-20 w-3 h-3 rounded-full bg-[#84CC16] animate-float-slow shadow-[0_0_12px_rgba(132,204,22,0.8)]" />
            <div className="absolute bottom-24 left-10 w-3.5 h-3.5 rounded-full bg-[#E11D48] animate-pulse-subtle" />
            <div className="absolute top-1/2 right-6 w-2.5 h-2.5 rounded-full bg-[#3023FF]" />
            <div className="absolute bottom-12 right-28 w-2 h-2 bg-[#080808] rotate-45" />

            {/* Little Crosshairs */}
            <div className="absolute top-8 left-1/3 text-xs font-mono text-[#A0A0A0]">+</div>
            <div className="absolute bottom-8 left-1/4 text-xs font-mono text-[#84CC16]">
              [NEURAL MAP // ACTIVE]
            </div>
          </div>

          {/* Primary Editorial Image Frame with Transformed Green Character */}
          <div className="relative z-10 w-full max-w-md lg:max-w-lg aspect-4/3 border border-[#D0D0D0] bg-white p-2 shadow-sm transition-transform duration-500 hover:scale-[1.01]">
            <div className="relative w-full h-full overflow-hidden bg-[#080808]">
              <img
                src="/character_state2_green.jpg"
                alt="Transformed Green Character with Illustrated Brain"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                loading="eager"
              />
              {/* Corner Markers */}
              <div className="absolute top-2 left-2 text-[9px] font-mono-tag bg-[#84CC16] text-black font-bold px-1.5 py-0.5 z-20">
                FIG. 02 — COGNITION & IDEATION
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/80 text-white text-[9px] font-mono-tag px-2 py-0.5 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                ACTIVE STATE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
