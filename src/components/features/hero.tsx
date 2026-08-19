import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">

      {/* =========================
          BACKGROUND GLOW
      ========================== */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* =========================
          FLOATING PARTICLES
      ========================== */}
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="particle"
            style={{
              left: `${(index * 37) % 100}%`,
              animationDelay: `${(index * 0.8) % 8}s`,
              animationDuration: `${8 + (index % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-14 px-6 py-20 sm:flex-row sm:gap-20">

        {/* =========================
            LEFT SIDE
        ========================== */}
        <div className="flex-1 text-center sm:text-left">

          {/* STATUS BADGE */}
          <div className="mb-6 flex justify-center sm:justify-start">

            {/* THIS IS THE FLOATING ELEMENT */}
            <span className="float inline-flex items-center gap-2 rounded-full border border-[#232C42] bg-[#0B0F19]/60 px-4 py-2 font-mono text-xs text-[#38BDF8] backdrop-blur-sm">

              {/* Animated blue dot */}
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#38BDF8]" />

              BSIT student • aspiring developer

            </span>
          </div>

          {/* =========================
              INTRO
          ========================== */}
          <p className="font-mono text-sm text-[#38BDF8]">
            Hi, my name is
          </p>

          {/* =========================
              NAME
          ========================== */}
          <h1 className="mt-2 font-sans text-5xl font-bold tracking-tight text-[#E7EBF5] sm:text-7xl">
            KIRSTY
            <br />
            <span className="text-[#4C6FFF]">
              AREDIDON
            </span>
          </h1>

          {/* =========================
              TYPEWRITER
          ========================== */}
          <h2 className="mt-5 text-2xl font-medium text-[#8892AA] sm:text-3xl">
            I'm{" "}
            <span className="text-[#4C6FFF]">
              <Typewriter
                words={[
                  "building web apps.",
                  "learning every day.",
                  "solving problems.",
                  "turning ideas into projects.",
                ]}
              />
            </span>

            <span className="caret" />
          </h2>

          {/* =========================
              DESCRIPTION
          ========================== */}
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[#8892AA] sm:mx-0">
            I'm a BSIT student passionate about web development and programming.
            I enjoy creating websites, building applications, exploring new
            technologies, and turning ideas into meaningful projects.
          </p>

          {/* =========================
              BUTTONS
          ========================== */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">

            <Link to="/projects">
              <Button>
                View my projects →
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline">
                Let's connect
              </Button>
            </Link>

          </div>

          {/* =========================
              QUICK STATS
          ========================== */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-[#232C42] pt-6 sm:justify-start">

            {/* Projects */}
            <div>
              <p className="font-mono text-2xl font-bold text-[#E7EBF5]">
                5+
              </p>

              <p className="mt-1 text-xs text-[#8892AA]">
                Projects
              </p>
            </div>

            {/* Student */}
            <div>
              <p className="font-mono text-2xl font-bold text-[#E7EBF5]">
                BSIT
              </p>

              <p className="mt-1 text-xs text-[#8892AA]">
                Student
              </p>
            </div>

            {/* Web */}
            <div>
              <p className="font-mono text-2xl font-bold text-[#E7EBF5]">
                Web
              </p>

              <p className="mt-1 text-xs text-[#8892AA]">
                Development
              </p>
            </div>

          </div>
        </div>

        {/* =========================
            RIGHT SIDE - PROFILE
        ========================== */}
        <div className="relative flex shrink-0 items-center justify-center">

          {/* Outer decorative ring */}
          <div className="absolute h-64 w-64 rounded-full border border-[#4C6FFF]/20 sm:h-80 sm:w-80" />

          {/* Second ring */}
          <div className="absolute h-56 w-56 rounded-full border border-[#38BDF8]/10 sm:h-72 sm:w-72" />

          {/* Glow */}
          <div className="absolute h-48 w-48 rounded-full bg-[#4C6FFF]/20 blur-3xl sm:h-64 sm:w-64" />

          {/* Avatar */}
          <div className="avatar-ring relative flex h-65 w-65 items-center justify-center rounded-full p-1 sm:h-76 sm:w-76">

            <div className="h-full w-full overflow-hidden rounded-full bg-[#0B0F19]">

              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Kirsty Aredidon"
                className="h-full w-full object-cover object-top"
              />

            </div>
          </div>

          {/* =========================
              FLOATING LEARNING LABEL
          ========================== */}
          <div className="absolute -bottom-4 -left-6 rounded-xl border border-[#232C42] bg-[#0B0F19]/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-10">

            <p className="font-mono text-[10px] text-[#8892AA]">
              CURRENTLY LEARNING
            </p>

            <p className="mt-1 text-sm font-medium text-[#E7EBF5]">
              React • Laravel
            </p>

          </div>

          {/* =========================
              CODE DECORATION
          ========================== */}
          <div className="absolute -right-4 top-4 rounded-lg border border-[#232C42] bg-[#0B0F19]/80 px-3 py-2 font-mono text-xs text-[#38BDF8] backdrop-blur-sm">
            &lt;code /&gt;
          </div>

        </div>
      </div>

      {/* =========================
          SCROLL INDICATOR
      ========================== */}
      <div className="scroll-cue absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-xs text-[#8892AA]">

        <span>
          scroll
        </span>

        <span>
          ↓
        </span>

      </div>

    </section>
  );
}