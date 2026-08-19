import { Link } from "react-router";
import { Reveal } from "@/components/ui/reveal";

export function AboutCTA() {
  return (
    <Reveal className="mt-16">
      <section className="cta-section">
        <div className="cta-glow" />

        <div className="relative z-10">
          <p className="font-mono text-xs tracking-[0.3em] text-[#38BDF8]">
            LET'S BUILD
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#E7EBF5]">
            Want to see what I've built?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#8892AA]">
            Explore some of my school projects, experiments, and
            applications.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="cta-primary"
            >
              View Projects →
            </Link>

            <Link
              to="/contact"
              className="cta-secondary"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}