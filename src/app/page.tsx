import { useEffect, useState } from "react";
import WorldCanvas from "@/components/world-canvas";

const profile = {
  name: "MINHOON KIM",
  email: "hello@minhoon.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    text: "아이디어를 실제 제품으로 만듭니다. 빠른 프론트엔드, API, 데이터베이스, 배포까지 제품의 전체 흐름을 설계합니다.",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    number: "02",
    title: "Database & API Architecture",
    text: "확장 가능한 데이터 구조와 이해하기 쉬운 API를 설계합니다. 서비스가 커져도 유지보수하기 좋은 기반을 만듭니다.",
    tags: ["PostgreSQL", "REST API", "Prisma"],
  },
  {
    number: "03",
    title: "DevOps & Deployment",
    text: "로컬의 코드가 사용자 화면까지 안정적으로 도달하도록 돕습니다. 반복적인 배포는 자동화하고 운영은 단순하게 유지합니다.",
    tags: ["Docker", "Vercel", "GitHub Actions"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Docker",
  "Figma",
];
const projects = [
  {
    name: "Flowboard",
    category: "Team productivity platform",
    stack: "Next.js · TypeScript · PostgreSQL",
    tone: "bg-violet-400 text-violet-950",
    mark: "F",
  },
  {
    name: "Local Table",
    category: "Restaurant discovery service",
    stack: "React · Node.js · MongoDB",
    tone: "bg-emerald-300 text-emerald-950",
    mark: "LT",
  },
  {
    name: "Signal",
    category: "Analytics dashboard",
    stack: "React · Recharts · REST API",
    tone: "bg-orange-300 text-orange-950",
    mark: "S",
  },
];
const skillColors = [
  "border-emerald-200/70 text-emerald-100",
  "border-violet-200/70 text-violet-100",
  "border-orange-200/70 text-orange-100",
  "border-amber-100/70 text-amber-100",
  "border-sky-200/70 text-sky-100",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

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
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(27,12,59,0.18),rgba(3,2,8,0.58)_72%)]" />

      <main className="relative z-10">
        <nav
          className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-white/15 bg-[#07040d]/75 px-5 backdrop-blur-md sm:px-8 lg:px-16"
          aria-label="Main navigation"
        >
          <a
            className="text-sm font-extrabold tracking-[0.14em] text-white no-underline"
            href="#home"
          >
            {profile.name}
            <span className="text-violet-300">.</span>
          </a>
          <div className="hidden gap-8 text-xs text-violet-100/65 sm:flex">
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="flex items-center gap-2 text-xs text-violet-100/75 transition hover:text-white"
            href={`mailto:${profile.email}`}
          >
            Let's talk <Arrow />
          </a>
        </nav>

        <section
          className="flex min-h-[calc(100svh-72px)] items-center px-5 py-16 sm:px-8 lg:px-16"
          id="home"
        >
          <div className="max-w-2xl border border-white/15 bg-[#080511]/65 p-6 shadow-2xl shadow-black/35 backdrop-blur-sm sm:p-10 lg:p-12">
            <p className="flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.16em] text-emerald-200 uppercase">
              <i className="size-2 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(110,231,183,0.14)]" />
              Available for work
            </p>
            <p className="mt-10 text-xs tracking-[0.2em] text-violet-200/65">
              FULL STACK DEVELOPER
            </p>
            <h1 className="mt-3 text-5xl leading-[.88] font-bold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Build ideas
              <br />
              into{" "}
              <em className="font-serif font-normal text-violet-300">
                products.
              </em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-violet-100/80 break-keep">
              안녕하세요, 김민훈입니다. 사용자에게 좋은 경험을 주는 웹 서비스를
              만들고, 제품의 문제를 코드로 풀어내는 개발자입니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                className="inline-flex items-center gap-3 bg-violet-300 px-5 py-3 text-sm font-bold text-violet-950 transition hover:bg-violet-200"
                href="#projects"
              >
                Explore work <Arrow />
              </a>
              <a
                className="border-b border-violet-100/60 pb-1 text-sm text-white no-underline hover:border-white"
                href={`mailto:${profile.email}`}
              >
                Contact me
              </a>
            </div>
            <div className="mt-12 flex gap-6 text-xs text-violet-100/60">
              <a
                className="hover:text-white"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="hover:text-white"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section
          className="grid min-h-svh items-center gap-10 border-y border-white/10 bg-[#090512]/72 px-5 py-20 backdrop-blur-sm sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-16"
          id="services"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">
              01 / Services
            </p>
            <h2 className="mt-5 text-5xl leading-[.9] font-bold tracking-[-0.06em] sm:text-6xl">
              From first commit
              <br />
              to{" "}
              <em className="font-serif font-normal text-violet-300">
                launch.
              </em>
            </h2>
          </div>
          <div className="border-t border-white/15">
            {services.map((service) => (
              <article
                className="grid grid-cols-[2rem_1fr] gap-3 border-b border-white/15 py-7 sm:grid-cols-[3rem_1fr_auto]"
                key={service.number}
              >
                <span className="font-mono text-xs text-violet-300">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-7 text-violet-100/65 break-keep">
                    {service.text}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        className="border border-violet-300/40 px-2 py-1 font-mono text-[0.65rem] text-violet-200"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Arrow />
              </article>
            ))}
          </div>
        </section>

        <section
          className="grid min-h-svh items-center gap-10 bg-[#100725]/70 px-5 py-20 backdrop-blur-sm sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-16"
          id="skills"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">
              02 / Skills
            </p>
            <h2 className="mt-5 text-5xl leading-[.9] font-bold tracking-[-0.06em] sm:text-6xl">
              Control over the
              <br />
              <em className="font-serif font-normal text-violet-300">
                full stack.
              </em>
            </h2>
            <p className="mt-8 max-w-sm leading-7 text-violet-100/65 break-keep">
              문제를 이해하는 것부터 서비스를 배포하는 일까지, 제품을 앞으로
              움직이는 기술을 다룹니다.
            </p>
          </div>
          <div className="border border-emerald-200/30 bg-[#04100f]/75 shadow-2xl shadow-black/30">
            <div className="flex justify-between border-b border-emerald-100/20 px-4 py-3 font-mono text-[0.68rem] text-emerald-200">
              <span>127.0.0.1:3000</span>
              <span>skills.json</span>
            </div>
            <div className="flex min-h-72 flex-wrap content-center gap-3 p-6 sm:p-8">
              {skills.map((skill, index) => (
                <span
                  className={`border px-3 py-2 font-mono text-xs transition duration-200 hover:-translate-y-1 hover:bg-white/10 ${skillColors[index % skillColors.length]}`}
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="border-t border-emerald-100/20 px-4 py-3 font-mono text-xs text-emerald-200">
              $ keep building<span className="animate-pulse">_</span>
            </p>
          </div>
        </section>

        <section
          className="min-h-svh bg-[#07040d]/76 px-5 py-20 backdrop-blur-sm sm:px-8 lg:px-16"
          id="projects"
        >
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">
                03 / Selected projects
              </p>
              <h2 className="mt-5 text-5xl leading-[.9] font-bold tracking-[-0.06em] sm:text-6xl">
                Things I've
                <br />
                <em className="font-serif font-normal text-violet-300">
                  shipped.
                </em>
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
                  className={`relative flex aspect-[1.1] items-center justify-center overflow-hidden ${project.tone}`}
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

        <section
          className="flex min-h-svh flex-col bg-violet-300 px-5 py-20 text-violet-950 sm:px-8 lg:px-16"
          id="contact"
        >
          <p className="text-xs font-bold tracking-[0.16em] text-violet-950/65 uppercase">
            04 / Contact
          </p>
          <h2 className="mt-5 text-6xl leading-[.85] font-bold tracking-[-0.07em] sm:text-8xl">
            Let's build
            <br />
            something{" "}
            <em className="font-serif font-normal text-white">useful.</em>
          </h2>
          <p className="mt-8 max-w-md leading-7 break-keep">
            새로운 제품, 팀, 혹은 흥미로운 문제에 대해 이야기해요.
          </p>
          <a
            className="mt-9 w-fit border-b-2 border-violet-950 pb-1 text-xl font-bold sm:text-3xl"
            href={`mailto:${profile.email}`}
          >
            {profile.email} <Arrow />
          </a>
          <footer className="mt-auto flex flex-col gap-4 pt-20 text-xs font-medium tracking-wide text-violet-950/65 uppercase sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 {profile.name}</span>
            <div className="flex flex-wrap gap-5">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="#home">Back to top ↑</a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
