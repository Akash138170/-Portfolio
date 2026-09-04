import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Code2,
  MessageSquare,
  Utensils,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      number: "01",
      title: "AI Interview Analyzer",
      description:
        "An AI-powered interview analysis platform that evaluates interview performance and generates actionable insights to help candidates improve their preparation.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
      status: "Completed",
      github: "https://github.com/Akash138170",
      live: "https://ai-interview-analyzer-xi.vercel.app",
      icon: Sparkles,
      category: "AI / Full Stack",
    },
    {
      number: "02",
      title: "CodeSync",
      description:
        "A real-time collaborative development platform with live messaging, collaborative coding capabilities, and integrated GenAI features for developers.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
      ],
      status: "Completed",
      github: "https://github.com/Akash138170",
      live: null,
      icon: Code2,
      category: "Collaboration",
    },
    {
      number: "03",
      title: "Food Reel",
      description:
        "A modern food discovery platform featuring short-form recipe videos, food content exploration, and social interactions designed around an engaging reels experience.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      status: "Completed",
      github: "https://github.com/Akash138170",
      live: null,
      icon: Utensils,
      category: "Web Application",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-primary" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Projects I've{" "}
            <span className="text-primary">Built</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A selection of projects where I’ve explored modern web
            technologies, real-time systems, AI integration, and scalable
            application architecture.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <Card
                key={project.number}
                className="
                  group relative overflow-hidden
                  border-border/60
                  bg-card/70 backdrop-blur-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-primary/30
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br from-primary/10 via-transparent to-accent/10
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    pointer-events-none
                  "
                />

                {/* Project Preview */}
                <div className="relative h-52 overflow-hidden bg-muted/40">
                  
                  {/* Grid Pattern */}
                  <div
                    className="
                      absolute inset-0 opacity-30
                      bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),
                      linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
                      bg-[size:32px_32px]
                    "
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/10 to-accent/20" />

                  {/* Number */}
                  <div className="absolute top-5 left-5">
                    <span className="text-sm font-mono text-muted-foreground">
                      /{project.number}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute top-5 right-5">
                    <span
                      className="
                        px-3 py-1.5
                        rounded-full
                        text-xs font-medium
                        bg-background/70
                        backdrop-blur-md
                        border border-border/60
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="
                        relative
                        w-20 h-20
                        rounded-2xl
                        flex items-center justify-center
                        bg-background/80
                        backdrop-blur-xl
                        border border-border/60
                        shadow-xl
                        transition-all duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                      "
                    >
                      <Icon
                        size={34}
                        className="text-primary transition-transform duration-500"
                      />

                      <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl -z-10" />
                    </div>
                  </div>

                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
                </div>

                <CardContent className="relative p-6">

                  {/* Title + Status */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className="
                          text-xl font-bold
                          tracking-tight
                          group-hover:text-primary
                          transition-colors duration-300
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div
                      className="
                        flex items-center gap-1.5
                        shrink-0
                        px-2.5 py-1
                        rounded-full
                        bg-green-500/10
                        text-green-600
                        dark:text-green-400
                        text-xs font-medium
                      "
                    >
                      <CheckCircle2 size={13} />
                      Live
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-6 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-2.5 py-1
                          rounded-md
                          text-[11px]
                          font-medium
                          bg-muted
                          text-muted-foreground
                          border border-border/50
                          transition-colors duration-300
                          group-hover:border-primary/20
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="
                        flex-1
                        group/code
                        hover:border-primary
                        hover:text-primary
                      "
                      onClick={() =>
                        window.open(project.github, "_blank")
                      }
                    >
                      <Github
                        size={16}
                        className="mr-2 transition-transform group-hover/code:scale-110"
                      />
                      Source Code
                    </Button>

                    {project.live && (
                      <Button
                        size="sm"
                        className="flex-1 group/live"
                        onClick={() =>
                          window.open(project.live, "_blank")
                        }
                      >
                        <ExternalLink
                          size={16}
                          className="mr-2 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
                        />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    h-0.5
                    bg-gradient-to-r
                    from-primary
                    via-accent
                    to-primary
                    scale-x-0
                    group-hover:scale-x-100
                    transition-transform duration-500
                    origin-left
                  "
                />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">
          <Button
            variant="ghost"
            className="group text-muted-foreground hover:text-primary"
            onClick={() =>
              window.open("https://github.com/Akash138170", "_blank")
            }
          >
            View more projects on GitHub
            <ArrowUpRight
              size={17}
              className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;