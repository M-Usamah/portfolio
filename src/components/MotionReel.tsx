import { motionWork } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function MotionReel() {
  return (
    <section id="motion" className="section-pad" aria-labelledby="motion-heading">
      <div className="container-page">
        <Reveal>
          <h2
            id="motion-heading"
            className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]"
          >
            Things that move
          </h2>
          <p className="mt-3 mb-10 max-w-2xl text-[var(--muted)]">
            Motion pieces, loops and interface animation, the visual side of the tools I build.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {motionWork.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="spot tilt group h-full overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--bg-card)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(46,233,212,0.28)] hover:shadow-[var(--shadow)]">
                <div className="relative aspect-video overflow-hidden bg-black">
                  {item.video ? (
                    <video
                      className="size-full object-cover"
                      src={item.video}
                      poster={item.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={item.title}
                    />
                  ) : (
                    <MotionPlaceholder variant={item.variant} />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-[1.05rem] font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Pure-CSS looping visuals shown until a real video is supplied. */
function MotionPlaceholder({ variant }: { variant: "orbit" | "wave" | "grid" }) {
  return (
    <div aria-hidden="true" className="motion-stage relative size-full overflow-hidden">
      {variant === "orbit" && (
        <>
          <span className="motion-core" />
          <span className="motion-ring motion-ring-1" />
          <span className="motion-ring motion-ring-2" />
          <span className="motion-ring motion-ring-3" />
        </>
      )}
      {variant === "wave" && (
        <div className="flex size-full items-center justify-center gap-1.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="motion-bar" style={{ animationDelay: `${i * 70}ms` }} />
          ))}
        </div>
      )}
      {variant === "grid" && (
        <div className="motion-grid">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${(i % 8) * 90 + Math.floor(i / 8) * 140}ms` }} />
          ))}
        </div>
      )}
    </div>
  );
}
