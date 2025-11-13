"use client";

import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Only bother if page is actually scrollable
      const scrollable = docHeight - winHeight;

      // Show after ~100px scroll on reasonably tall pages
      const shouldShow = scrollable > 150 && scrollY > 100;

      setVisible(shouldShow);
    };

    // Run once on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "fixed right-4 bottom-4 z-40",
        "transition-all duration-300 ease-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      ].join(" ")}
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(0,204,204,0.4)] hover:drop-shadow-[0_0_16px_rgba(255,153,51,0.6)] transition-all"
      >
        <defs>
          {/* Cool blue gradient for outer border */}
          <linearGradient id="triangleBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066ff" />
            <stop offset="50%" stopColor="#0099cc" />
            <stop offset="100%" stopColor="#00cccc" />
          </linearGradient>

          {/* Warm orange inner fill */}
          <linearGradient id="triangleFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="50%" stopColor="#ff6600" />
            <stop offset="100%" stopColor="#ff9933" />
          </linearGradient>
        </defs>


          <circle
            cx="26"
            cy="30"
            r="22"
            fill="none"
            stroke="url(#triangleBorder)"
            strokeWidth="2"
          />

          {/* Filled center triangle */}
          <polygon
            points="26,18 40,40 15,40"
            fill="url(#triangleFill)"
          />
              </svg>
            </button>
          );
        }

