import Image from "next/image";
import { capabilities } from "@/data/content";
import { Reveal } from "@/components/Reveal";

/** Bento layout: 4 cells, rows split 4+2 then 2+4 on a 6-column grid. */
const span: Record<(typeof capabilities)[number]["id"], string> = {
  vision: "md:col-span-4",
  security: "md:col-span-2",
  n8n: "md:col-span-2",
  twins: "md:col-span-4",
};

export function Capabilities() {
  return (
    <section id="capabilities" className="section-pad" aria-labelledby="capabilities-heading">
      <div className="container-page">
        <Reveal>
          <h2
            id="capabilities-heading"
            className="max-w-2xl font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]"
          >
            Models, tools, security and automation
          </h2>
          <p className="mt-3 mb-10 max-w-xl text-[var(--muted)]">
            Four ways I can help, from a single detection model to a full pipeline you can run.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-6">
          {capabilities.map((item, i) => (
            <Reveal key={item.id} delay={(i % 2) * 90} className={span[item.id]}>
              <article
                className={`spot tilt cap cap-${item.id} group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[22px] border border-[var(--line)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(46,233,212,0.28)] hover:shadow-[var(--shadow)] md:p-8`}
              >
                {item.id === "twins" && (
                  <>
                    <Image
                      src="/assets/images/digital-twin-real-vs-digital.png"
                      alt="Real living room beside its Unreal Engine digital twin"
                      fill
                      className="-z-10 object-cover opacity-60 transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,8,12,0.1)_0%,rgba(7,8,12,0.92)_80%)]" />
                  </>
                )}
                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 3).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-white/10 bg-black/30 px-2 py-0.5 text-[0.72rem] text-[var(--muted)] backdrop-blur-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
