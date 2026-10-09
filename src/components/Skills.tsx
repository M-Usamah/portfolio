"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Scramble } from "@/components/Scramble";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/content";

/** One skill group at a time: a tab list on the left, its skills on the right. */
export function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = skillGroups.length - 1;
    const keys: Record<string, number> = {
      ArrowDown: Math.min(active + 1, last),
      ArrowRight: Math.min(active + 1, last),
      ArrowUp: Math.max(active - 1, 0),
      ArrowLeft: Math.max(active - 1, 0),
      Home: 0,
      End: last,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    setActive(keys[e.key]);
    tabs.current[keys[e.key]]?.focus();
  }

  return (
    <section id="skills" className="section-pad" aria-labelledby="skills-heading">
      <div className="container-page">
        <Reveal>
          <h2
            id="skills-heading"
            className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]"
          >
            <Scramble text="Technical skills" />
          </h2>
          <p className="mt-3 mb-12 max-w-xl text-[var(--muted)]">
            Pick an area to see the tools behind the work I ship.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid gap-8 md:grid-cols-[260px_1fr] md:gap-14">
            <div
              role="tablist"
              aria-label="Skill groups"
              onKeyDown={onKeyDown}
              className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:gap-1 md:overflow-visible md:pb-0"
            >
              {skillGroups.map((g, i) => (
                <button
                  key={g.name}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  tabIndex={active === i ? 0 : -1}
                  id={`skill-tab-${i}`}
                  aria-selected={active === i}
                  aria-controls="skill-panel"
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-full px-4 py-2 text-left text-sm transition md:rounded-xl md:py-2.5 ${
                    active === i
                      ? "bg-[var(--accent-soft)] font-medium text-[var(--accent)]"
                      : "text-[var(--muted)] hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {g.name}
                </button>
              ))}
            </div>

            <div
              id="skill-panel"
              role="tabpanel"
              aria-labelledby={`skill-tab-${active}`}
              className="min-h-[220px] rounded-[24px] border border-[var(--line)] bg-[var(--bg-card)] p-7 md:p-10"
            >
              <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-[-0.03em]">
                {group.name}
              </h3>
              <ul key={group.name} className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {group.items.map((item, i) => (
                  <li
                    key={item}
                    className="skill-in text-lg text-[var(--muted)]"
                    style={{ animationDelay: `${i * 35}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
