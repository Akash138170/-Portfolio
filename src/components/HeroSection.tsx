import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Palette,
  Sparkles,
  Terminal,
} from "lucide-react";

const HeroSection = () => {
  const roles = [
    "Building Scalable Web Experiences",
    "Crafting Intuitive User Interfaces",
    "Turning Ideas Into Real Products",
    "Engineering Modern Web Solutions",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:px-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[130px]" />

        <div className="absolute bottom-[-20%] left-[35%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_75%)]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 max-w-3xl">

            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              Available for opportunities
            </div>

            {/* Intro */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="mb-6 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-foreground">Akash</span>

              <span className="block bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Kumar.
              </span>
            </h1>

            {/* Dynamic Professional Tagline */}
            <div className="mb-7 min-h-[72px] sm:min-h-[84px]">
              <div
                key={roleIndex}
                className="animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <p className="text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                  {roles[roleIndex]}
                </p>
              </div>
            </div>

            {/* Supporting tagline */}
            <p className="mb-9 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              I design and develop modern web applications that combine
              thoughtful user experiences with clean, scalable and reliable
              engineering.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row">

              {/* Primary CTA */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
              >
                Explore My Work

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-6 py-3.5 font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5"
              >
                Let's Connect

                <Mail
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />
              </a>
            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-5">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Connect
              </span>

              <div className="h-px w-10 bg-border" />

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-foreground"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-foreground"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="#contact"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-foreground"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative mx-auto flex w-full max-w-[520px] justify-center lg:justify-end">

            {/* Main glow */}
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />

            {/* Decorative ring */}
            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />

            <div className="relative">

              {/* Profile Image Container */}
              <div className="relative h-[380px] w-[300px] sm:h-[460px] sm:w-[360px]">

                {/* Glow behind image */}
                <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-primary/30 via-purple-500/20 to-blue-500/20 blur-2xl" />

                {/* Image */}
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/10 via-background to-purple-500/10 p-2 shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                 <div className="relative mx-auto h-[460px] w-[360px] overflow-hidden rounded-[2rem]">
  <img
    src="/image.png"
    alt="Akash Kumar"
    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
  />
</div>

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Available Badge */}
                <div className="absolute -right-4 top-8 flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2.5 text-sm font-medium shadow-xl backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
                  Open to Work
                </div>

                {/* Code Card */}
                <div className="absolute -left-10 bottom-24 hidden w-44 rounded-xl border border-border bg-background/80 p-3 shadow-xl backdrop-blur-xl sm:block">
                  <div className="mb-2 flex items-center gap-2">
                    <Terminal size={14} className="text-primary" />

                    <span className="text-xs font-semibold">
                      clean-code.js
                    </span>
                  </div>

                  <div className="space-y-1 font-mono text-[10px] text-muted-foreground">
                    <p>
                      <span className="text-primary">const</span> idea ={" "}
                      <span className="text-purple-400">build</span>();
                    </p>

                    <p>
                      <span className="text-primary">return</span> success;
                    </p>
                  </div>
                </div>

                {/* Design Card */}
                <div className="absolute -right-10 bottom-12 hidden rounded-xl border border-border bg-background/80 p-3 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <Palette size={17} className="text-primary" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold">
                        Thoughtful UI
                      </p>

                      <p className="text-[10px] text-muted-foreground">
                        Built with purpose
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sparkle */}
                <div className="absolute -left-4 top-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 shadow-xl backdrop-blur-xl">
                  <Sparkles size={17} className="text-primary" />
                </div>

                {/* Code Icon */}
                <div className="absolute -right-5 top-32 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 shadow-xl backdrop-blur-xl">
                  <Code2 size={18} className="text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1">
          <div className="h-2 w-1 rounded-full bg-primary animate-bounce" />
        </div>

        <ArrowDown
          size={14}
          className="transition-transform group-hover:translate-y-1"
        />
      </a>
    </section>
  );
};

export default HeroSection;