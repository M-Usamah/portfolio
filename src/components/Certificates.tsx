import { certificates } from "@/data/content";

export function Certificates() {
  return (
    <section id="certificates" className="section-pad">
      <div className="container-page">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              — Learning
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]">
              Certificates
            </h2>
            <p className="mt-3 max-w-xl text-[var(--muted)]">
              ML, deep learning, agents, and production AI tooling.
            </p>
          </div>
          <p className="font-mono text-sm text-[var(--faint)]">
            <span className="text-[var(--accent)]">{certificates.length}</span> credentials
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((cert, index) => (
            <article
              key={`${cert.title}-${cert.date}`}
              className="group flex flex-col bg-[var(--bg-elevated)] p-6 transition hover:bg-[#121621]"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="font-mono text-[0.68rem] tracking-[0.14em] text-[var(--faint)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <time className="font-mono text-[0.7rem] text-[var(--faint)]">{cert.date}</time>
              </div>
              <h3 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.03em] transition group-hover:text-[var(--accent)]">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--accent)]">{cert.issuer}</p>
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
