
import { Card, CardContent } from "@/components/ui/card";

type SkillGroup = {
  category: string;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    category: "Database",
    items: [
      "MongoDB",
      "MongoDB Atlas",
    ],
  },
  {
    category: "Cloud & Storage",
    items: [
      "Cloudinary",
      "ImageKit",
    ],
  },
{
  category: "AI Integration",
  items: ["Google Gemini"],
},
  {
    category: "Development Tools",
    items: [
      "Git",
      "GitHub",
      "Vite",
      "Postman",
    ],
  },
  {
    category: "Deployment",
    items: [
      "Vercel",
      "Render",
    ],
  },
];


const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Building for the Web.
            <span className="block text-muted-foreground">
              Learning. Creating. Improving.
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left - About */}
          <div className="space-y-7">

            <div>
              <p className="text-sm font-medium text-primary mb-2">
                Full-Stack Web Developer
              </p>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Turning ideas into{" "}
                <span className="text-primary">
                  real-world applications.
                </span>
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-8">
              I'm a full-stack web developer pursuing my B.E. in Computer
              Science & Engineering at LNCT College, with an expected
              graduation in 2027.
            </p>

            <p className="text-lg text-muted-foreground leading-8">
              I build modern, responsive web applications using the MERN
              stack, with a strong focus on clean user interfaces, scalable
              backend APIs, database integration, and maintainable code.
            </p>

            <p className="text-lg text-muted-foreground leading-8">
              I also work with cloud storage, AI integrations, and modern
              deployment platforms to take applications from development
              to production. My approach is hands-on: I learn by building
              projects, reading documentation, debugging real problems,
              and continuously improving my development workflow.
            </p>

            {/* Education */}
            <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Education
                  </p>

                  <h4 className="text-xl font-semibold">
                    LNCT College
                  </h4>

                  <p className="text-muted-foreground mt-1">
                    B.E. — Computer Science & Engineering
                  </p>
                </div>

                <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground whitespace-nowrap">
                  2027
                </span>

              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div>
            <div className="mb-8">
              <p className="text-sm font-medium text-primary mb-2">
                Tech Stack
              </p>

              <h3 className="text-3xl font-bold">
                Technologies I work with
              </h3>

              <p className="text-muted-foreground mt-3">
                Technologies and tools I use to build, integrate, and deploy
                modern web applications.
              </p>
            </div>

            <div className="grid gap-5">
              {skills.map((skillGroup: SkillGroup) => (
                <Card
                  key={skillGroup.category}
                  className="group border bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">

                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-lg">
                        {skillGroup.category}
                      </h4>

                      <span className="text-xs text-muted-foreground">
                        {skillGroup.items.length} skills
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-transparent group-hover:border-primary/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;


