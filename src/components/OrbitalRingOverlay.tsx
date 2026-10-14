import React from "react";

export const OrbitalRingOverlay: React.FC = () => {
  return (
    <div
      className="absolute top-[12%] left-[18%] w-[64%] h-[28%] pointer-events-none z-20 flex items-center justify-center select-none"
      aria-hidden="true"
      style={{ perspective: "600px" }}
    >
      {/* 3D Container for Elliptical Orbital Ring Strands */}
      <div className="relative w-full h-full flex items-center justify-center transform-gpu">
        {/* Primary Strand 1: Main Golden Ellipse with Orbital Tilt */}
        <div
          className="absolute w-[94%] h-[58%] rounded-[50%] border-[1.5px] border-amber-300/80 shadow-[0_0_12px_rgba(251,191,36,0.45)]"
          style={{
            transform: "rotateX(68deg) rotateY(-10deg) rotateZ(-16deg)",
            animation: "orbitStrandRotate 18s linear infinite",
          }}
        >
          {/* Orbiting Satellite Node 1 */}
          <div
            className="absolute -top-1 left-[25%] w-2 h-2 rounded-full bg-amber-100 shadow-[0_0_8px_#F59E0B]"
            style={{ animation: "pulseNode 3s ease-in-out infinite" }}
          />
        </div>

        {/* Secondary Strand 2: Outer Counter-Tilted Golden Ellipse */}
        <div
          className="absolute w-[86%] h-[52%] rounded-[50%] border border-amber-200/60 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
          style={{
            transform: "rotateX(72deg) rotateY(12deg) rotateZ(-22deg)",
            animation: "orbitStrandRotateReverse 24s linear infinite",
          }}
        >
          {/* Orbiting Satellite Node 2 (matching the small disc seen in screenshot) */}
          <div className="absolute -bottom-1 right-[30%] w-2.5 h-1.5 rounded-full bg-amber-200/90 shadow-[0_0_6px_#D97706]" />
        </div>

        {/* Tertiary Strand 3: Inner Subtle Accent Strand with Orbiting Bead */}
        <div
          className="absolute w-[76%] h-[44%] rounded-[50%] border border-amber-400/50"
          style={{
            transform: "rotateX(64deg) rotateY(-6deg) rotateZ(-12deg)",
            animation: "orbitStrandRotate 14s linear infinite",
          }}
        >
          <div className="absolute top-[40%] -left-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#FEF08A]" />
        </div>

        {/* Subtle Ambient Golden Crown Glow centered on the orbit */}
        <div className="absolute w-32 h-16 rounded-full bg-amber-400/10 blur-xl pointer-events-none" />
      </div>
    </div>
  );
};
