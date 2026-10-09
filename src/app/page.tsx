import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Capabilities } from "@/components/Capabilities";
import { Marquee } from "@/components/Marquee";
import { PointerEffects } from "@/components/PointerEffects";
import { ScrollVelocity } from "@/components/ScrollVelocity";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Certificates } from "@/components/Certificates";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[#041614]"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <PointerEffects />
      <ScrollVelocity />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Capabilities />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
