import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
          — Career
        </p>
        <h2 className="mb-12 font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]">
          Experience
        </h2>

        <div className="space-y-0">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className="grid gap-4 border-t border-[var(--line)] py-8 md:grid-cols-[180px_1fr] md:gap-10 lg:grid-cols-[220px_1fr]"
            >
              <div>
                <time className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent)]">
                  {item.date}
                </time>
                <p className="mt-2 text-sm text-[var(--faint)]">
                  {String(index + 1).padStart(2, "0")} / {String(experience.length).padStart(2, "0")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.role}</h3>
                <h4 className="mt-1 text-[var(--muted)]">{item.company}</h4>
                <p className="mt-3 max-w-2xl text-[var(--muted)]">{item.description}</p>
                <ul className="mt-4 max-w-2xl space-y-2">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm text-[var(--muted)] before:mt-[0.55em] before:size-1 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
