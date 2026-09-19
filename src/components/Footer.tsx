import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative z-1 border-t border-[var(--line)] py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-[var(--faint)]">
            © {new Date().getFullYear()} · AI/ML · Computer Vision · Unreal
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
          <a href="#projects" className="transition hover:text-white">
            Work
          </a>
          <a href="#certificates" className="transition hover:text-white">
            Certificates
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--accent)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
