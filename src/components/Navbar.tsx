"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/data/content";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#certificates", label: "Certificates" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact", cta: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => l.href.slice(1));
      let current = "#home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <nav
        className={`container-page flex items-center justify-between gap-4 rounded-full px-3 py-2 transition-all md:px-4 ${
          scrolled ? "glass shadow-[var(--shadow)]" : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 font-medium">
          <span className="relative size-9 overflow-hidden rounded-full border border-[var(--line-strong)] bg-black">
            <Image
              src="/assets/images/logo-avatar.png"
              alt={site.name}
              fill
              className="object-cover"
              sizes="36px"
            />
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <button
          type="button"
          className="rounded-lg border border-[var(--line)] px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } absolute left-4 right-4 top-[calc(100%+10px)] flex-col gap-1 rounded-2xl glass p-3 md:static md:flex md:flex-row md:items-center md:gap-0.5 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-full px-3.5 py-2 text-sm transition ${
                  link.cta
                    ? "border border-[rgba(46,233,212,0.25)] bg-[var(--accent-soft)] font-medium text-[var(--accent)]"
                    : active === link.href
                      ? "bg-white/8 text-white"
                      : "text-[var(--muted)] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
