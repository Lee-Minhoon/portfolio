import { Arrow } from "@/components/arrow";
import { profile } from "@/lib/profile";

export default function Nav() {
  return (
    <nav
      className="fixed w-full top-0 z-30 flex h-[72px] items-center justify-between border-b border-violet-200/10 bg-[#07040d]/55 px-5 backdrop-blur-md sm:px-8 lg:px-16"
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
        <a className="transition hover:text-white" href="#home">
          Home
        </a>
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
  );
}
