import Image from "next/image";
import { site } from "@/data/content";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/img/profile-black.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_18%] opacity-40 scale-105"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(7,8,12,0.96)_28%,rgba(7,8,12,0.72)_55%,rgba(7,8,12,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(46,233,212,0.14),transparent_55%)]" />
      </div>

      <div className="container-page relative z-10 flex min-h-[100svh] items-end pb-16 pt-32 md:items-center md:pb-20 md:pt-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            {site.title}
          </p>
          <h1 className="font-[family-name:var(--font-syne)] text-[clamp(3.4rem,9vw,6.4rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
            Mohammed
            <span className="mt-1 block gradient-text">Usamah</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Custom models and Unreal tools that turn photos, video, and 3D assets into production
            scenes — digital twins and editor plugins that ship.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[#041614] transition hover:brightness-110"
            >
              See current work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
