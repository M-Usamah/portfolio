"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/content";

type Status = "idle" | "loading" | "success" | "error";

/** Web3Forms free tier requires browser-side submit (access key is safe to expose). */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setMessage(`Mail is not configured. Email me at ${site.email} instead.`);
      return;
    }

    const data = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `Portfolio contact from ${String(data.get("name") || "someone")}`,
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
      from_name: String(data.get("name") || "").trim(),
      botcheck: "",
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("All fields are required.");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let json: { success?: boolean; message?: string } = {};
      try {
        json = text ? (JSON.parse(text) as { success?: boolean; message?: string }) : {};
      } catch {
        throw new Error("Could not reach the mail service. Try emailing me directly.");
      }

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to send message");
      }

      setStatus("success");
      setMessage("Message sent. I’ll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Could not send right now. Email me directly instead.",
      );
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              — Contact
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em]">
              Let’s build something
            </h2>
            <p className="mt-4 max-w-md text-[var(--muted)]">
              Open to freelance, Unreal tooling, and computer-vision work. Send a note or reach out
              directly.
            </p>

            <div className="mt-10 space-y-6">
              <a href={`mailto:${site.email}`} className="group block">
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--faint)]">
                  Email
                </div>
                <div className="mt-1 text-lg font-medium text-[var(--accent)] transition group-hover:brightness-110">
                  {site.email}
                </div>
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--faint)]">
                  GitHub
                </div>
                <div className="mt-1 text-lg font-medium transition group-hover:text-[var(--accent)]">
                  github.com/M-Usamah
                </div>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--faint)]">
                  LinkedIn
                </div>
                <div className="mt-1 text-lg font-medium transition group-hover:text-[var(--accent)]">
                  Mohammed Usamah
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--bg-card)] p-6 md:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(circle,rgba(46,233,212,0.12),transparent_70%)]" />
            {/* Honeypot for spam bots — must stay empty */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block text-[var(--muted)]">Name</span>
                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border border-[var(--line)] bg-black/35 px-4 py-3.5 outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--accent)]"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-[var(--muted)]">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-[var(--line)] bg-black/35 px-4 py-3.5 outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--accent)]"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block text-[var(--muted)]">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full resize-y rounded-2xl border border-[var(--line)] bg-black/35 px-4 py-3.5 outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--accent)]"
                placeholder="What are you building?"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[#041614] transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            {message && (
              <p
                className={`mt-4 text-sm ${
                  status === "success" ? "text-[var(--accent)]" : "text-rose-400"
                }`}
                role="status"
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
