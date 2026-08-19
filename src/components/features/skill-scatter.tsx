import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { skills } from "@/lib/data";

export function SkillScatter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="skill-scatter-section relative mx-auto w-full max-w-6xl px-6 py-24"
    >
      <div className="skill-scatter-glow" aria-hidden="true" />

      <div className="relative z-10 text-center">
        <p className="font-mono text-xs tracking-[0.35em] text-[#38BDF8]">
          WHAT I WORK WITH
        </p>

        <h2 className="mt-3 font-sans text-3xl font-bold text-[#E7EBF5] sm:text-4xl">
          Technologies I use.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[#8892AA]">
          Tools and technologies I have worked with while building projects
          and developing my skills in information technology.
        </p>
      </div>

      <div className="skill-scatter-area mt-8">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={`skill-scatter-item ${
              active ? "skill-scatter-active" : ""
            }`}
            style={{ "--index": index } as React.CSSProperties}
          >
            <div className="skill-scatter-card">
              {skill}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-20 mt-8 flex justify-center">
        <Link to="/about" className="skill-about-button">
          <span>More About Me</span>
          <span className="skill-about-arrow">→</span>
        </Link>
      </div>
    </section>
  );
}