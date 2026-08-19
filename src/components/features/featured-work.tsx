import { Link } from "react-router";

export function FeaturedWork() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div
        className="featured-glow pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="featured-fade-up mb-12">
          <p className="font-mono text-sm tracking-wider text-[#38BDF8]">
            01 / FEATURED WORK
          </p>

          <h2 className="mt-3 font-sans text-4xl font-bold tracking-tight text-[#E7EBF5] sm:text-5xl">
            Something I've built.
          </h2>

          <p className="mt-5 max-w-3xl leading-relaxed text-[#8892AA]">
            A look at one of my favorite projects where I explored
            application development, web design, responsive layouts,
            and creating engaging user experiences.
          </p>
        </div>

        {/* Featured project card */}
        <div className="featured-card featured-fade-up-delay relative overflow-hidden rounded-2xl border border-[#232C42] bg-[#0B0F19]/80">

          {/* Shine effect */}
          <div
            className="featured-shine pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-2">

            {/* =========================
                PROJECT PREVIEW
            ========================== */}
            <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden border-b border-[#232C42] bg-[#080C15] p-6 lg:border-b-0 lg:border-r">

              {/* Pink glow */}
              <div
                className="featured-glow absolute h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"
                aria-hidden="true"
              />

              {/* Browser window */}
              <div className="featured-float relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-[#232C42] bg-[#0B0F19] shadow-2xl">

                {/* Browser bar */}
                <div className="flex h-10 items-center gap-2 border-b border-[#232C42] px-4">

                  <span className="h-2.5 w-2.5 rounded-full bg-pink-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />

                </div>

                {/* Flower shop website */}
                <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-[#fff1f7] via-[#ffe4ef] to-[#fbcfe8]">

                  {/* Decorative flowers */}
                  <div className="absolute -right-8 -top-8 text-8xl opacity-20">
                    🌸
                  </div>

                  <div className="absolute -bottom-10 -left-8 text-8xl opacity-20">
                    🌷
                  </div>

                  <div className="relative z-10 p-7">

                    {/* Mini navbar */}
                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2">
                        <span className="text-xl">🌷</span>

                        <span className="font-sans text-sm font-bold text-[#3d2631]">
                          Bloom & Petal
                        </span>
                      </div>

                      <div className="hidden gap-4 text-[9px] font-medium text-[#795466] sm:flex">
                        <span>Home</span>
                        <span>Shop</span>
                        <span>About</span>
                        <span>Contact</span>
                      </div>

                    </div>

                    {/* Hero */}
                    <div className="mt-10 grid items-center gap-4 sm:grid-cols-2">

                      <div>

                        <p className="font-mono text-[9px] uppercase tracking-wider text-[#d94f8a]">
                          Fresh flowers • timeless moments
                        </p>

                        <h3 className="mt-3 font-sans text-2xl font-bold leading-tight text-[#35202a]">
                          Beautiful Flowers
                          <br />
                          For{" "}
                          <span className="text-[#e45b91]">
                            Every Occasion
                          </span>
                        </h3>

                        <p className="mt-3 max-w-[220px] text-[10px] leading-relaxed text-[#795466]">
                          Handcrafted bouquets made with love and
                          fresh flowers just for you.
                        </p>

                        <div className="mt-5 flex gap-2">

                          <button
                            className="rounded-md bg-[#e85b96] px-3 py-2 text-[9px] font-medium text-white shadow-lg shadow-pink-500/20"
                          >
                            Shop Now
                          </button>

                          <button
                            className="rounded-md border border-[#e8a7c1] bg-white/50 px-3 py-2 text-[9px] font-medium text-[#7c4960]"
                          >
                            View Collections
                          </button>

                        </div>

                      </div>

                      {/* Flower image-style visual */}
                      <div className="flex items-center justify-center">

                        <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-white/30 shadow-inner">

                          <div className="text-8xl drop-shadow-lg">
                            💐
                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Bottom features */}
                    <div className="mt-8 grid grid-cols-3 gap-2 rounded-lg border border-white/60 bg-white/40 p-3">

                      <div className="text-center">
                        <div className="text-sm">🌸</div>
                        <p className="mt-1 text-[8px] font-semibold text-[#4d303d]">
                          Fresh & Quality
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="text-sm">♡</div>
                        <p className="mt-1 text-[8px] font-semibold text-[#4d303d]">
                          Handcrafted
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="text-sm">🚚</div>
                        <p className="mt-1 text-[8px] font-semibold text-[#4d303d]">
                          Fast Delivery
                        </p>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* =========================
                PROJECT INFORMATION
            ========================== */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

              <p className="font-mono text-xs tracking-wider text-[#38BDF8]">
                FEATURED PROJECT
              </p>

              <h3 className="mt-3 font-sans text-3xl font-bold text-[#E7EBF5]">
                Flower Shop Website
              </h3>

              <p className="mt-5 max-w-xl leading-relaxed text-[#8892AA]">
                A pink-themed flower shop website developed as an
                Application Development project. The design focuses
                on elegant layouts, responsive web design, smooth
                navigation, and a warm user-friendly experience.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">

                <span className="featured-tech rounded-full border border-[#232C42] px-3 py-1.5 font-mono text-xs text-[#8892AA]">
                  HTML
                </span>

                <span className="featured-tech rounded-full border border-[#232C42] px-3 py-1.5 font-mono text-xs text-[#8892AA]">
                  CSS
                </span>

                <span className="featured-tech rounded-full border border-[#232C42] px-3 py-1.5 font-mono text-xs text-[#8892AA]">
                  Web Design
                </span>

                <span className="featured-tech rounded-full border border-[#232C42] px-3 py-1.5 font-mono text-xs text-[#8892AA]">
                  Front-End
                </span>

              </div>

              {/* Button */}
              <div className="mt-8">

                <Link
                  to="/projects"
                  className="featured-button inline-flex items-center gap-2 rounded-lg bg-[#4C6FFF] px-5 py-3 font-medium text-white"
                >
                  View project
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}