const items = [
  "Computer Vision",
  "Cybersecurity",
  "Digital Twins",
  "Unreal Engine 5",
  "YOLO-World",
  "PyTorch",
  "NLP & RAG",
  "n8n Automation",
  "Agentic AI",
  "Editor Tooling",
];

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 whitespace-nowrap">
          <span className="font-[family-name:var(--font-syne)] text-lg font-semibold tracking-[-0.02em] text-white/45 md:text-xl">
            {item}
          </span>
          <span className="h-px w-8 bg-[var(--line-strong)]" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee relative z-[1] border-y border-[var(--line)] bg-black/20 py-5">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
