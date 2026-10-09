import { site } from "@/data/content";
import { Hero3DLoader } from "@/components/Hero3DLoader";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="hero-parallax absolute inset-0">
        <div className="hero-glow absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(46,233,212,0.1),transparent_55%)]" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-full opacity-40 lg:left-1/2 lg:w-1/2 lg:opacity-100">
        <Hero3DLoader />
      </div>

      <div className="container-page relative z-10 flex min-h-[100svh] items-end pb-16 pt-32 md:items-center md:pb-20 md:pt-28">
        <div className="min-w-0 max-w-xl animate-fade-up">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            {site.title}
          </p>
          <h1 aria-label="Mohammed Usamah" className="font-[family-name:var(--font-syne)] text-[clamp(1.9rem,8.7vw,3.6rem)] lg:text-[clamp(3rem,5.4vw,5.2rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
            <SplitWord word="Mohammed" />
            {" "}
            <span className="mt-1 block">
              <SplitWord word="Usamah" offset={8} gradient />
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <WordsIn text="Computer vision, digital twins and Unreal tools, built secure and automated with n8n. Models and software that ship." />
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn magnetic glow-border rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[#041614] hover:brightness-110"
            >
              See current work
            </a>
            <a
              href="#contact"
              className="btn magnetic rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SplitWord({
  word,
  offset = 0,
  gradient = false,
}: {
  word: string;
  offset?: number;
  gradient?: boolean;
}) {
  return (
    <span className="whitespace-nowrap">
      {word.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`char-in inline-block ${gradient ? "gradient-text" : ""}`}
          style={{
            animationDelay: `${(i + offset) * 45}ms`,
            // Each letter is its own box, so give it its slice of one word-wide gradient
            ...(gradient && {
              backgroundSize: `${word.length * 100}% 100%`,
              backgroundPosition: `${(i / (word.length - 1)) * 100}% 0`,
            }),
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

/** Fades each word in with a blur, staggered after the headline has landed. */
function WordsIn({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="char-in inline-block"
          style={{ animationDelay: `${650 + i * 40}ms` }}
        >
          {word}
          {" "}
        </span>
      ))}
    </>
  );
}
