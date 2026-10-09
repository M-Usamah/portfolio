import { certificates } from "@/data/content";
import { Scramble } from "@/components/Scramble";
import { Reveal } from "@/components/Reveal";

export function Certificates() {
  return (
    <section id="certificates" className="section-pad" aria-labelledby="certs-heading">
      <div className="container-page">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="certs-heading"
                className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]"
              >
                <Scramble text="Certificates" />
              </h2>
              <p className="mt-3 max-w-xl text-[var(--muted)]">
                ML, deep learning, agents, and production AI tooling.
              </p>
            </div>
            <p className="font-mono text-sm text-[var(--faint)]">
              <span className="text-[var(--accent)]">{certificates.length}</span> credentials, swipe
              or scroll
            </p>
          </div>
        </Reveal>
      </div>

      <div
        className="rail"
        role="region"
        aria-label="Certificates"
        tabIndex={0}
      >
        <div className="rail-track">
          {certificates.map((cert) => (
            <article
              key={`${cert.title}-${cert.date}`}
              className="spot tilt group flex w-[min(82vw,340px)] shrink-0 snap-start flex-col rounded-[22px] border border-[var(--line)] bg-[var(--bg-card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(46,233,212,0.28)]"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="font-mono text-[0.68rem] tracking-[0.1em] text-[var(--accent)]">
                  {cert.issuer}
                </span>
                <time className="font-mono text-[0.7rem] text-[var(--faint)]">{cert.date}</time>
              </div>
              <h3 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.03em]">
                {cert.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {cert.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
