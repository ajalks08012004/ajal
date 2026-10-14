import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { OrbitalRingOverlay } from "./OrbitalRingOverlay";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onConnect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const characterStageRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const geometricLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Page Load Entrance Timeline for Slide 1
      const entranceTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      entranceTl
        .from(".hero-badge", {
          opacity: 0,
          y: 15,
          duration: 0.6,
          stagger: 0.1,
        })
        .from(
          ".hero-text-line",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.3"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.2"
        )
        .from(
          ".hero-cta-btn",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          imageFrameRef.current,
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-geo-element",
          {
            opacity: 0,
            scale: 0.6,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.4"
        );

      // 2. Cinematic Scroll-Driven Transition from Slide 1 to Slide 2
      // Controlled smoothly by scroll position across the presentation wrapper
      const crossfadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      // Synchronized Crossfade: First image dissolves out, Second image reveals smoothly
      crossfadeTl
        .to(".character-slide-1", {
          opacity: 0,
          ease: "none",
        })
        .to(
          ".character-slide-2",
          {
            opacity: 1,
            ease: "none",
          },
          0
        )
        // Transition surrounding geometric accent dots from blue to neon green
        .to(
          ".character-geo-dot",
          {
            backgroundColor: "#84CC16",
            boxShadow: "0 0 16px rgba(132, 204, 22, 0.85)",
            scale: 1.25,
            ease: "none",
          },
          0
        )
        .to(
          ".character-tag-badge",
          {
            backgroundColor: "#84CC16",
            color: "#000000",
            ease: "none",
          },
          0.3
        )
        .to(
          ".character-tag-label",
          {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
              const el = document.querySelector(".character-tag-label");
              if (el) el.textContent = "02 // COGNITION & IDEATION";
            },
            onReverseComplete: () => {
              const el = document.querySelector(".character-tag-label");
              if (el) el.textContent = "01 // CURIOSITY & THOUGHT";
            },
          },
          0.25
        )
        .to(
          ".character-tag-label",
          {
            opacity: 1,
            duration: 0.1,
          },
          0.35
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full border-b border-[#D0D0D0] bg-[#ECECEC]"
    >
      {/* Background Architectural Blueprint Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute left-[33%] top-0 bottom-0 w-[1px] bg-[#D0D0D0]" />
        <div className="absolute left-[66%] top-0 bottom-0 w-[1px] bg-[#D0D0D0]" />
        <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-[#D0D0D0]" />
        <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-[#D0D0D0]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        {/* ================= LEFT COLUMN: SLIDE 1 & SLIDE 2 CONTENT ================= */}
        <div className="lg:col-span-6 flex flex-col justify-between pr-0 lg:pr-6">
          {/* SLIDE 1 (HOME) */}
          <section
            ref={slide1Ref}
            id="home"
            className="min-h-[calc(100vh-70px)] flex flex-col justify-between pt-8 md:pt-14 pb-12"
          >
            <div className="space-y-6">
              {/* Top Identity Block with Thumbnail & Greeting */}
              <div className="flex items-start gap-4 md:gap-5 hero-badge">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 border border-[#D0D0D0] bg-[#F5F5F5] p-1 shadow-xs">
                  <img
                    src="/src/assets/images/discovery_coins_project_1791946402965.jpg"
                    alt="Ajal KS Technical Showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs md:text-sm font-extrabold uppercase tracking-tight text-[#080808]">
                    HI THERE, I'M AJAL KS.
                  </p>
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-tight text-[#777777] max-w-sm">
                    SOFTWARE ENGINEER & DIGITAL ADOPTION SPECIALIST AT DIGITIZENOW.
                  </p>
                </div>
              </div>

              {/* Editorial Headline */}
              <div className="pt-2">
                <div className="overflow-hidden">
                  <h1 className="hero-text-line text-editorial-headline uppercase text-[#080808]">
                    I BUILD
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="hero-text-line text-editorial-headline uppercase text-[#080808]">
                    DIGITAL
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="hero-text-line text-editorial-headline uppercase text-[#080808] flex items-center gap-3">
                    EXPERIENCES
                    <span className="inline-block w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#3023FF] shrink-0 animate-pulse-subtle" />
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="hero-text-line text-editorial-headline uppercase text-[#777777]">
                    THAT WORK.
                  </h1>
                </div>
              </div>

              {/* Editorial Metadata Tags */}
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono-tag text-[#777777] pt-2">
                <span className="hero-badge">[ BASED IN KERALA, INDIA ]</span>
                <span className="text-[#A0A0A0]">/</span>
                <span className="hero-badge">[ WALKMETESTED // DIGITIZENOW ]</span>
                <span className="text-[#A0A0A0]">/</span>
                <span className="hero-badge">[ CGPA: 8.0/10 ]</span>
              </div>

              {/* Narrative Prose */}
              <p className="hero-desc text-sm md:text-base text-[#444444] leading-relaxed max-w-lg font-normal">
                Software Engineer dedicated to the intersection of reliable code,
                digital adoption platforms, and user psychology. Specializing in WalkMe
                architecture, responsive web systems, and applied AI applications that
                transform complex enterprise workflows into intuitive human journeys.
              </p>

              {/* Interactive CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onExploreWork}
                  className="hero-cta-btn group inline-flex items-center gap-3 px-6 py-3.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3023FF] transition-colors duration-200 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3023FF]"
                >
                  <span>EXPLORE MY WORK</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                <button
                  onClick={onConnect}
                  className="hero-cta-btn group inline-flex items-center gap-3 px-6 py-3.5 border border-[#080808] bg-transparent text-[#080808] text-xs font-bold uppercase tracking-wider hover:bg-[#080808] hover:text-white transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#080808]"
                >
                  <span>LET'S CONNECT</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3023FF] group-hover:bg-white" />
                </button>
              </div>
            </div>

            {/* Bottom Editorial Wordmark for Slide 1 */}
            <div className="overflow-hidden border-t border-[#D0D0D0] pt-4 select-none">
              <span className="text-editorial-giant uppercase text-[#080808] tracking-tighter opacity-90 leading-none block">
                AJAL KS.
              </span>
            </div>
          </section>

          {/* SLIDE 2 (PHILOSOPHY & THINKING) */}
          <section
            ref={slide2Ref}
            id="philosophy"
            className="min-h-[calc(100vh-70px)] flex flex-col justify-center py-16 md:py-24 border-t border-[#D0D0D0] space-y-8"
          >
            {/* Top Tag & Philosophy Photo Thumbnail (Matching Screenshot 2) */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono-tag uppercase tracking-wider text-[#777777]">
                [ MY THINKING AND PHILOSOPHY ]
              </span>
              <div className="w-10 h-10 border border-[#D0D0D0] bg-white p-0.5 shadow-2xs">
                <img
                  src="/image.png"
                  alt="Ajal KS Portrait Thumbnail"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>

            {/* Main Giant Editorial Statement */}
            <div className="space-y-1">
              <div className="overflow-hidden">
                <h2 className="text-editorial-headline uppercase text-[#080808]">
                  FOR ME,
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 className="text-editorial-headline uppercase text-[#080808] flex items-center flex-wrap gap-2">
                  EVERYTH
                  <span className="relative inline-flex items-center justify-center text-[#3023FF]">
                    I
                    <span className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#3023FF]" />
                  </span>
                  NG BEGINS
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 className="text-editorial-headline uppercase text-[#080808] flex items-center flex-wrap gap-3">
                  <span className="text-[#A0A0A0] font-mono">[?]</span>
                  <span>WITH QUESTIONS</span>
                </h2>
              </div>
            </div>

            {/* The Thought Chain: Questions -> Observations -> Ideas -> Solutions */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-base md:text-xl text-[#080808] pt-2 font-medium">
              <span className="font-extrabold text-[#080808]">Questions</span>
              <span className="text-xs md:text-sm font-mono-tag text-[#A0A0A0] lowercase italic">
                become
              </span>
              <span className="font-extrabold text-[#080808]">Observations</span>
              <span className="text-xs md:text-sm font-mono-tag text-[#A0A0A0] lowercase italic">
                become
              </span>
              <span className="font-extrabold text-[#080808]">Ideas</span>
              <span className="text-xs md:text-sm font-mono-tag text-[#A0A0A0] lowercase italic">
                become
              </span>
              <span className="font-extrabold text-[#3023FF]">Solutions</span>
            </div>

            {/* Supporting Statement Prose */}
            <p className="text-base md:text-lg text-[#444444] leading-relaxed max-w-lg font-normal pt-2">
              I believe thoughtful software engineering begins with thoughtful human observation.
              I enjoy understanding how enterprise users interact with tools, isolating cognitive bottlenecks,
              and turning abstract requirements into streamlined, dependable digital experiences.
            </p>
          </section>
        </div>

        {/* ================= RIGHT COLUMN: STICKY CINEMATIC VISUAL STAGE ================= */}
        {/* Pinned / Sticky in screen view so boy stays in the exact same position throughout */}
        <div className="lg:col-span-6 relative flex items-start justify-center pt-8 md:pt-14 pb-12">
          <div
            ref={characterStageRef}
            className="sticky top-20 w-full flex items-center justify-center min-h-[420px] lg:min-h-[580px]"
          >
            {/* Layered Architectural & Geometric Graphic Background (Remains Stable) */}
            <div
              ref={geometricLayerRef}
              className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
            >
              {/* Outer Geometric Coordinate Box */}
              <div className="hero-geo-element absolute w-[92%] h-[92%] border border-[#D0D0D0]/80" />

              {/* Large Circles with Crosshair Lines */}
              <div className="hero-geo-element absolute w-64 h-64 md:w-88 md:h-88 rounded-full border border-[#D0D0D0] animate-drift" />
              <div className="hero-geo-element absolute w-48 h-48 rounded-full border border-dashed border-[#A0A0A0]/60" />

              {/* Architectural Building / Silhouettes (Exact Match to Screenshots) */}
              <div className="absolute right-0 bottom-0 w-36 md:w-48 h-64 bg-[#080808] opacity-95 rounded-tl-3xl z-1 hidden sm:block">
                <div className="absolute -top-12 right-6 w-12 h-12 bg-[#080808]" />
                <div className="absolute -top-6 right-20 w-16 h-8 bg-[#080808]" />
              </div>

              {/* Dotted Accent Lines */}
              <div className="hero-geo-element absolute left-8 top-12 w-32 border-b-2 border-dotted border-[#777777]" />
              <div className="hero-geo-element absolute right-12 top-24 w-28 border-b-2 border-dotted border-[#777777]" />

              {/* Floating Vibrant Accent Dots (Smoothly adapts on scroll) */}
              <div className="hero-geo-element character-geo-dot absolute top-16 right-20 w-3 h-3 rounded-full bg-[#3023FF] animate-float-slow transition-colors duration-500" />
              <div className="hero-geo-element absolute bottom-24 left-10 w-3.5 h-3.5 rounded-full bg-[#E11D48] animate-pulse-subtle" />
              <div className="hero-geo-element absolute top-1/2 right-6 w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <div className="hero-geo-element absolute bottom-12 right-28 w-2 h-2 bg-[#080808] rotate-45" />

              {/* Little Coordinate Crosshairs */}
              <div className="hero-geo-element absolute top-8 left-1/3 text-xs font-mono text-[#A0A0A0]">
                +
              </div>
              <div className="hero-geo-element absolute bottom-8 left-1/4 text-xs font-mono text-[#A0A0A0]">
                [47.38° N // 76.54° E]
              </div>
            </div>

            {/* Shared Image Frame with Perfect Subject Alignment and Zero Distortion */}
            <div
              ref={imageFrameRef}
              className="relative z-10 w-full max-w-md lg:max-w-lg aspect-square border border-[#D0D0D0] bg-white p-2 shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            >
              <div className="relative w-full h-full overflow-hidden bg-[#080808]">
                {/* 1. SLIDE 1: Original Thinking Boy Illustration (Full Opacity Initially) */}
                <img
                  src="/character_state1.jpg"
                  alt="Original Thinking Boy Illustration"
                  className="character-slide-1 absolute inset-0 w-full h-full object-cover select-none will-change-[opacity]"
                  loading="eager"
                />

                {/* 2. SLIDE 2: Transformed Green Character with Colorful Brain (Crossfades in via Scroll) */}
                <img
                  src="/character_state2_green.jpg"
                  alt="Transformed Green Character with Illustrated Brain"
                  className="character-slide-2 absolute inset-0 w-full h-full object-cover select-none will-change-[opacity]"
                  style={{ opacity: 0 }}
                  loading="eager"
                />

                {/* 3. CONTINUOUS 3D ANIMATED ORBITAL RING OVERLAY (Positions precisely over boy's head) */}
                <OrbitalRingOverlay />

                {/* Corner Labels & Status Badges */}
                <div className="character-tag-badge absolute top-2 left-2 text-[9px] font-mono-tag bg-white/80 backdrop-blur-xs px-1.5 py-0.5 text-[#080808] z-30 transition-colors duration-300">
                  FIG. 01 — SYSTEMS & COGNITION
                </div>
                <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/85 text-white text-[9px] font-mono-tag px-2 py-0.5 z-30">
                  <span className="character-geo-dot w-1.5 h-1.5 rounded-full bg-[#3023FF] transition-colors duration-300" />
                  <span className="character-tag-label">01 // CURIOSITY & THOUGHT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
