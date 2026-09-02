import { Arrow } from "@/components/arrow";
import { profile } from "@/lib/profile";

const projects = [
  {
    name: "Flowboard",
    category: "Team productivity platform",
    stack: "Next.js · TypeScript · PostgreSQL",
    tone: "bg-violet-400 text-violet-950",
    glow: "shadow-[0_0_60px_-12px_rgba(167,139,250,0.7)]",
    mark: "F",
  },
  {
    name: "Local Table",
    category: "Restaurant discovery service",
    stack: "React · Node.js · MongoDB",
    tone: "bg-emerald-300 text-emerald-950",
    glow: "shadow-[0_0_60px_-12px_rgba(110,231,183,0.65)]",
    mark: "LT",
  },
  {
    name: "Signal",
    category: "Analytics dashboard",
    stack: "React · Recharts · REST API",
    tone: "bg-orange-300 text-orange-950",
    glow: "shadow-[0_0_60px_-12px_rgba(253,186,116,0.65)]",
    mark: "S",
  },
];

export default function Projects() {
  return (
    <section
      className="relative min-h-svh overflow-hidden bg-[#07040d]/38 bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(255,255,255,0.06),transparent_65%)] px-5 py-20 backdrop-blur-[2px] sm:px-8 lg:px-16"
      id="projects"
    >
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">
            <span className="mr-1">✦</span>03 / Selected projects
          </p>
          <h2 className="mt-5 text-5xl leading-[.9] font-bold tracking-[-0.06em] sm:text-6xl">
            Things I've
            <br />
            <em className="font-serif font-normal text-violet-300">shipped.</em>
          </h2>
        </div>
        <a
          className="text-sm text-violet-100/65 hover:text-white"
          href={`mailto:${profile.email}`}
        >
          View all projects <Arrow />
        </a>
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.name}>
            <div
              className={`relative flex aspect-[1.1] items-center justify-center overflow-hidden ${project.tone} ${project.glow}`}
            >
              <span className="absolute top-4 left-4 font-mono text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="relative z-10 text-6xl font-bold tracking-[-0.1em] sm:text-7xl">
                {project.mark}
              </strong>
              <i className="absolute aspect-square w-3/5 rounded-full border-2 border-current transition duration-500 group-hover:scale-125" />
            </div>
            <div className="relative pt-4">
              <h3 className="text-lg font-semibold text-white">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-violet-100/65">
                {project.category}
              </p>
              <p className="mt-3 font-mono text-[0.68rem] text-violet-200/65">
                {project.stack}
              </p>
              <a
                className="absolute top-4 right-0 text-xl"
                href={`mailto:${profile.email}`}
                aria-label={`Ask about ${project.name}`}
              >
                <Arrow />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
