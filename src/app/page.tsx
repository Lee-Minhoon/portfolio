import { useEffect, useState } from "react";

import WorldCanvas from "@/components/world-canvas";

import Contact from "./contact";
import Hero from "./hero";
import Nav from "./nav";
import Projects from "./projects";
import Services from "./services";
import Skills from "./skills";

function Homepage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0,
      );
      animationFrame = 0;
    };
    const onScroll = () => {
      if (!animationFrame)
        animationFrame = requestAnimationFrame(updateScrollProgress);
    };
    updateScrollProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-svh bg-[#05030b] text-violet-50">
      <div className="pointer-events-none fixed inset-0 z-0">
        <WorldCanvas scrollProgress={scrollProgress} />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.14),rgba(3,2,8,0.38)_45%,rgba(2,1,6,0.7)_100%)]" />

      <main className="relative z-10">
        <Nav />
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default Homepage;
