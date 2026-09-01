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

const skillColors = [
  "border-emerald-200/70 text-emerald-100",
  "border-violet-200/70 text-violet-100",
  "border-orange-200/70 text-orange-100",
  "border-amber-100/70 text-amber-100",
  "border-sky-200/70 text-sky-100",
];

export default function Skills() {
  return (
    <section
      className="relative grid min-h-svh items-center gap-10 overflow-hidden bg-[#0f0a1f]/36 bg-[radial-gradient(ellipse_55%_50%_at_85%_15%,rgba(110,231,183,0.1),transparent_60%)] px-5 py-20 backdrop-blur-[2px] sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-16"
      id="skills"
    >
      <div>
        <p className="text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">
          <span className="mr-1">✦</span>02 / Skills
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
      <div className="border border-emerald-200/25 bg-[#04100f]/55 shadow-2xl shadow-black/30 backdrop-blur-[2px]">
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
  );
}
