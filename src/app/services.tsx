import { Arrow } from "./shared";

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

export default function Services() {
  return (
    <section
      className="relative grid min-h-svh items-center gap-10 overflow-hidden border-y border-violet-200/10 bg-[#0a0616]/38 bg-[radial-gradient(ellipse_60%_55%_at_15%_10%,rgba(139,92,246,0.14),transparent_60%)] px-5 py-20 backdrop-blur-[2px] sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-16"
      id="services"
    >
      <div>
        <p className="text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">
          <span className="mr-1">✦</span>01 / Services
        </p>
        <h2 className="mt-5 text-5xl leading-[.9] font-bold tracking-[-0.06em] sm:text-6xl">
          From first commit
          <br />
          to <em className="font-serif font-normal text-violet-300">launch.</em>
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
  );
}
