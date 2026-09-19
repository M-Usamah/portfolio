"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { filters, INITIAL_VISIBLE, projects } from "@/data/content";

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const visible =
    filter === "all" && !expanded ? filtered.slice(0, INITIAL_VISIBLE) : filtered;

  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
          — Selected work
        </p>
        <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]">
          What I&apos;m building now
        </h2>
        <p className="mt-3 mb-10 max-w-2xl text-[var(--muted)]">
          Unreal Engine tools and AI projects — Digital Twin Builder drops into any UE5 project.
        </p>

        <article className="group relative mb-16 overflow-hidden rounded-[28px] border border-[var(--line)]">
          <div className="relative min-h-[280px] md:min-h-[420px]">
            <Image
              src="/assets/images/digital-twin-real-vs-digital.png"
              alt="Side-by-side real living room and Unreal Engine digital twin"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1180px) 100vw, 1180px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(7,8,12,0.92)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--accent)]">
                UE5 · Standalone
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-syne)] text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.03em]">
                Digital Twin Builder
              </h3>
              <p className="mt-3 max-w-xl text-[var(--muted)]">
                Pick photos or a video, run YOLO-World on system Python, and spawn a furniture-level
                digital twin in the level.
              </p>
            </div>
          </div>
        </article>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-[-0.03em]">
            All projects
          </h3>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFilter(f.id);
                  if (f.id !== "all") setExpanded(true);
                  else setExpanded(false);
                }}
                className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                  filter === f.id
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--line-strong)] hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--bg-card)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(46,233,212,0.28)] hover:shadow-[var(--shadow)]"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h4 className="text-[1.05rem] font-semibold tracking-[-0.03em]">{project.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--line)] px-2 py-0.5 text-[0.7rem] text-[var(--faint)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filter === "all" && filtered.length > INITIAL_VISIBLE && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="rounded-full border border-[var(--line-strong)] bg-white/[0.03] px-6 py-3 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {expanded ? "Show less" : "View all projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
