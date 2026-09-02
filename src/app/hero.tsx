import { Arrow } from "@/components/arrow";
import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section
      className="flex min-h-[calc(100svh)] items-center px-5 py-16 sm:px-8 lg:px-16"
      id="home"
    >
      <div className="max-w-2xl border border-white/15 bg-[#080511]/10 p-6 shadow-2xl shadow-black/35 backdrop-blur-xs sm:p-10 lg:p-12">
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
          <em className="font-serif font-normal text-violet-300">products.</em>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-violet-100/80 break-keep">
          안녕하세요, 이민훈입니다. 사용자에게 좋은 경험을 주는 웹 서비스를
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
  );
}
