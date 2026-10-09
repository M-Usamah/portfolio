import { experience } from "@/data/content";
import { Scramble } from "@/components/Scramble";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <Reveal>
          <h2 className="mb-12 font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]">
            <Scramble text="Experience" />
          </h2>
        </Reveal>

        <div className="timeline relative">
          <span aria-hidden="true" className="timeline-line" />
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.role}`} delay={(i % 2) * 70}>
              <article className="relative grid gap-4 py-8 pl-8 md:grid-cols-[180px_1fr] md:gap-10 md:pl-10 lg:grid-cols-[220px_1fr]">
                <span aria-hidden="true" className="timeline-node" />
                <div>
                  <time className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent)]">
                    {item.date}
                  </time>
                </div>
                <div className="spot rounded-[18px] border border-transparent p-1 transition hover:border-[var(--line)]">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.role}</h3>
                  <h4 className="mt-1 text-[var(--muted)]">{item.company}</h4>
                  <p className="mt-3 max-w-2xl text-[var(--muted)]">{item.description}</p>
                  <ul className="mt-4 max-w-2xl space-y-2">
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm text-[var(--muted)] before:mt-[0.7em] before:h-px before:w-3 before:shrink-0 before:bg-[var(--accent)] before:content-['']"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
