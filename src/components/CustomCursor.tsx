import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable custom cursor follower on fine pointer devices (desktops)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;
    setIsPointerDevice(true);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest("button") ||
          target.closest("a") ||
          target.closest("[data-cursor-hover]") ||
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.getAttribute("role") === "button";
        setHovered(!!isClickable);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!isPointerDevice) return null;

  return (
    <div
      className="cursor-follower"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: hovered ? "28px" : "10px",
        height: hovered ? "28px" : "10px",
        backgroundColor: hovered ? "rgba(48, 35, 255, 0.25)" : "#3023FF",
        border: hovered ? "1.5px solid #3023FF" : "none",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border 0.2s ease",
      }}
      aria-hidden="true"
    />
  );
};
