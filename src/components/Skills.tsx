import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
          — Stack
        </p>
        <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]">
          Technical skills
        </h2>
        <p className="mt-3 mb-12 max-w-xl text-[var(--muted)]">
          Models, Unreal tooling, agents, and the libraries behind the work I ship.
        </p>

        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="grid gap-4 py-6 md:grid-cols-[200px_1fr] md:items-start md:gap-10"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[var(--line)] bg-white/[0.025] px-3 py-1.5 text-sm text-[var(--muted)] transition hover:border-[rgba(46,233,212,0.3)] hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
