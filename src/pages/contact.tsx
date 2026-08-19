import { ContactForm } from "@/components/features/contact-form";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { socialLinks } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      {/* INTRO */}
      <Reveal>
        <SectionLabel>Contact</SectionLabel>

        <div className="mt-2 max-w-3xl">
          <h1 className="font-sans text-4xl font-bold tracking-tight text-[#E7EBF5] sm:text-5xl">
            Let's start a conversation.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8892AA]">
            Have a question, an idea, or just want to say hello? I'd love to
            hear from you. Send me a message and I'll get back to you.
          </p>
        </div>
      </Reveal>

      {/* QUICK HIGHLIGHTS */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">

        <Reveal>
          <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#4C6FFF]/60">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#4C6FFF]/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative">
              <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                MESSAGE
              </p>

              <h2 className="mt-3 text-lg font-semibold text-[#E7EBF5]">
                Send me a message
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-[#8892AA]">
                Have something you'd like to discuss? Use the form below.
              </p>
            </div>
          </Card>
        </Reveal>

        <Reveal className="delay-100">
          <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/60">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#38BDF8]/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative">
              <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                SOCIAL
              </p>

              <h2 className="mt-3 text-lg font-semibold text-[#E7EBF5]">
                Find me online
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-[#8892AA]">
                Connect with me through my social profiles.
              </p>
            </div>
          </Card>
        </Reveal>

        <Reveal className="delay-200">
          <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#4C6FFF]/60">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#4C6FFF]/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative">
              <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                OPEN TO
              </p>

              <h2 className="mt-3 text-lg font-semibold text-[#E7EBF5]">
                New opportunities
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-[#8892AA]">
                Collaboration, school projects, and opportunities to learn.
              </p>
            </div>
          </Card>
        </Reveal>

      </div>

      {/* FORM + SOCIALS */}
      <div className="mt-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">

        {/* CONTACT FORM */}
        <Reveal>
          <Card className="group relative overflow-hidden transition-all duration-300 hover:border-[#4C6FFF]/40">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#4C6FFF]/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

            <div className="relative">
              <SectionLabel>Send a message</SectionLabel>

              <h2 className="mt-2 text-2xl font-semibold text-[#E7EBF5]">
                Tell me what's on your mind.
              </h2>

              <p className="mb-8 mt-3 text-sm leading-relaxed text-[#8892AA]">
                Whether it's a question, project idea, or simply a hello,
                feel free to reach out.
              </p>

              <ContactForm />
            </div>
          </Card>
        </Reveal>

        {/* SOCIALS */}
        <Reveal className="delay-200">
          <div className="space-y-6">

            <Card className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40">
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[#38BDF8]/10 blur-3xl" />

              <div className="relative">
                <SectionLabel>Connect</SectionLabel>

                <h2 className="mt-2 text-2xl font-semibold text-[#E7EBF5]">
                  Find me online
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[#8892AA]">
                  You can also reach me through the platforms below.
                </p>

                <div className="mt-6 space-y-3">

                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link flex items-center justify-between rounded-lg border border-[#232C42] bg-[#0B0F19]/50 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#4C6FFF] hover:bg-[#4C6FFF]/5"
                    >
                      <div>
                        <p className="font-mono text-xs text-[#38BDF8]">
                          {social.name}
                        </p>

                        <p className="mt-1 text-sm text-[#8892AA] transition-colors group-hover/link:text-[#E7EBF5]">
                          {"display" in social
                            ? social.display
                            : social.name}
                        </p>
                      </div>

                      <span className="font-mono text-[#4C6FFF] transition-transform duration-300 group-hover/link:translate-x-1">
                        ↗
                      </span>
                    </a>
                  ))}

                </div>
              </div>
            </Card>

            {/* AVAILABILITY */}
            <Card className="relative overflow-hidden transition-all duration-300 hover:border-[#38BDF8]/40">
              <div className="relative">

                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#38BDF8]" />
                  </span>

                  <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                    CURRENTLY AVAILABLE
                  </p>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-[#E7EBF5]">
                  Let's build something.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#8892AA]">
                  I'm always interested in learning, collaborating, and
                  working on projects that help me grow my skills.
                </p>

              </div>
            </Card>

          </div>
        </Reveal>

      </div>

      {/* BOTTOM CTA */}
      <Reveal className="mt-12">
        <div className="group relative overflow-hidden rounded-2xl border border-[#232C42] bg-[#0B0F19] px-6 py-12 text-center transition-all duration-500 hover:border-[#4C6FFF]/50 sm:px-10">

          <div className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-[#4C6FFF]/10 blur-3xl transition-all duration-700 group-hover:w-96" />

          <div className="relative">
            <p className="font-mono text-xs tracking-[0.3em] text-[#38BDF8]">
              THANK YOU FOR VISITING
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#E7EBF5] sm:text-3xl">
              Have a great day! 
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#8892AA]">
              Thanks for taking the time to explore my portfolio. I'm always
              learning, building, and looking forward to what's next.
            </p>
          </div>

        </div>
      </Reveal>

    </main>
  );
}