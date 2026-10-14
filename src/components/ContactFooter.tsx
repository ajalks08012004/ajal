import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, ArrowUpRight, Copy, Check, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ContactFooterProps {
  onNavigate: (sectionId: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const footerRef = useRef<HTMLElement>(null);

  const email = "ajalks08012004@gmail.com";
  const linkedin = "https://www.linkedin.com/in/ajal-ks-646312357";
  const github = "https://github.com/ajalks08012004";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-giant-text", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSent(true);
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full bg-[#080808] text-white pt-16 md:pt-24 pb-8 border-t border-[#222222] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Top Section: Navigation, Connect & Direct Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#222222]">
          {/* Col 1: Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-xs font-mono-tag text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
            >
              <span>[ BACK TO TOP ]</span>
              <ArrowUp
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-1"
              />
            </button>
            <p className="text-xs text-[#777777] max-w-xs leading-relaxed pt-2">
              Software Engineer & Digital Adoption Specialist based in Kerala, India.
              Available for enterprise engineering and creative web collaborations.
            </p>
          </div>

          {/* Col 2: Menu Links (Matching Screenshot 4 "MENU") */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-[11px] font-mono-tag uppercase tracking-widest text-[#555555]">
              MENU
            </span>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-[#A0A0A0]">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("works")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("archive")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-white hover:text-[#3023FF] transition-colors cursor-pointer"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Say Hello & Socials (Matching Screenshot 4 "SAY HELLO") */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-mono-tag uppercase tracking-widest text-[#555555]">
              SAY HELLO
            </span>
            <ul className="space-y-2 text-xs font-semibold tracking-wider text-[#A0A0A0]">
              <li>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-white transition-colors uppercase"
                  >
                    Email
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[#555555] hover:text-white transition-colors"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                  </button>
                  {copied && <span className="text-[10px] text-green-400 font-mono-tag">Copied!</span>}
                </div>
              </li>
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 hover:text-white transition-colors uppercase"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 hover:text-white transition-colors uppercase"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li className="pt-2 text-xs font-mono-tag text-[#777777] lowercase">
                {email}
              </li>
            </ul>
          </div>

          {/* Col 4: Minimal Interactive Message Box */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-mono-tag uppercase tracking-widest text-[#555555]">
              GET IN TOUCH DIRECTLY
            </span>
            {formSent ? (
              <div className="border border-[#333333] bg-[#111111] p-4 text-xs space-y-2 text-[#CCCCCC]">
                <p className="font-bold text-white flex items-center gap-2">
                  <Check size={16} className="text-green-400" />
                  MESSAGE RECEIVED
                </p>
                <p>
                  Thank you, {formData.name}. I'll get back to you directly at {formData.email}.
                </p>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="text-[#3023FF] underline pt-1 cursor-pointer font-mono-tag"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#141414] border border-[#2A2A2A] px-3 py-2 text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#3023FF]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141414] border border-[#2A2A2A] px-3 py-2 text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#3023FF]"
                />
                <textarea
                  required
                  rows={2}
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#141414] border border-[#2A2A2A] px-3 py-2 text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#3023FF] resize-none"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#3023FF] hover:text-white transition-colors cursor-pointer"
                >
                  <Send size={12} />
                  <span>SEND TRANSMISSION</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Giant Closing Headline (Exact Match to Reference Screenshot 4: "LET'S BE FRIENDS?" / "LET'S BUILD SOMETHING MEANINGFUL.") */}
        <div className="space-y-6 pt-4">
          <p className="text-xs font-mono-tag text-[#777777] uppercase tracking-wider">
            CLICK TO GET IN TOUCH // DIRECT LINE
          </p>

          <a
            href={`mailto:${email}`}
            className="footer-giant-text block group select-none cursor-pointer focus:outline-none"
            aria-label="Send email to Ajal KS"
          >
            <h2 className="text-editorial-giant uppercase text-white font-extrabold tracking-tighter leading-none group-hover:text-[#3023FF] transition-colors duration-300">
              LET'S BUILD
            </h2>
            <h2 className="text-editorial-giant uppercase text-white font-extrabold tracking-tighter leading-none group-hover:text-[#3023FF] transition-colors duration-300">
              SOMETHING MEANINGFUL.
            </h2>
          </a>

          {/* Copyright & Sign-off Bar (Matching Reference Screenshot 4) */}
          <div className="pt-8 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-tag text-[#666666]">
            <span>
              2026 \\ AJAL KS ALL RIGHTS RESERVED
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3023FF]" />
              <span>CRAFTED WITH EDITORIAL MOTION & PRECISION</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
