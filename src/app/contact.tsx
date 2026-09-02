import { Arrow } from "@/components/arrow";
import { profile } from "@/lib/profile";

export default function Contact() {
  return (
    <section
      className="relative flex min-h-svh flex-col overflow-hidden bg-[#0b0616]/45 bg-[radial-gradient(ellipse_70%_55%_at_50%_20%,rgba(196,165,255,0.32),transparent_65%)] px-5 py-20 text-violet-50 backdrop-blur-[2px] sm:px-8 lg:px-16"
      id="contact"
    >
      <p className="text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">
        <span className="mr-1">✦</span>04 / Contact
      </p>
      <h2 className="mt-5 text-6xl leading-[.85] font-bold tracking-[-0.07em] sm:text-8xl">
        Let's build
        <br />
        something{" "}
        <em className="font-serif font-normal text-violet-300">useful.</em>
      </h2>
      <p className="mt-8 max-w-md leading-7 text-violet-100/75 break-keep">
        새로운 제품, 팀, 혹은 흥미로운 문제에 대해 이야기해요.
      </p>
      <a
        className="mt-9 w-fit border-b-2 border-violet-300 pb-1 text-xl font-bold text-white sm:text-3xl"
        href={`mailto:${profile.email}`}
      >
        {profile.email} <Arrow />
      </a>
      <footer className="mt-auto flex flex-col gap-4 pt-20 text-xs font-medium tracking-wide text-violet-100/55 uppercase sm:flex-row sm:items-center sm:justify-between">
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
  );
}
