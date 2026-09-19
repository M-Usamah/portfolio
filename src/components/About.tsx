import { about, site } from "@/data/content";

export function About() {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-heading">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              — About
            </p>
            <h2
              id="about-heading"
              className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]"
            >
              {about.headline}
            </h2>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--faint)]">
              {about.roleLine}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer me"
                className="rounded-full border border-[var(--line)] bg-white/[0.03] px-4 py-2 text-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                className="rounded-full border border-[var(--line)] bg-white/[0.03] px-4 py-2 text-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-[var(--line)] bg-white/[0.03] px-4 py-2 text-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-4 text-lg leading-relaxed text-[var(--muted)] first:mt-0">
                {paragraph}
              </p>
            ))}

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {about.focuses.map((item) => (
                <div key={item.title} className="border-t border-[var(--line)] pt-4">
                  <h3 className="text-sm font-semibold tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--faint)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <dl className="mt-14 grid gap-4 rounded-[24px] border border-[var(--line)] bg-[var(--bg-card)] p-6 sm:grid-cols-2 lg:grid-cols-3 lg:p-8">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--faint)]">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium leading-snug">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14">
          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold tracking-[-0.03em]">
            Frequently asked
          </h3>
          <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {about.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-medium tracking-[-0.02em] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="mt-0.5 font-mono text-sm text-[var(--accent)] transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
