"use client";

import { useRef } from "react";
import Hero from "./components/Hero";
import BrideNote from "./components/BrideNote";
import ProgramTimeline from "./components/ProgramTimeline";
import BridalTeam from "./components/BridalTeam";
import MassReadings from "./components/MassReadings";
import MassSongs from "./components/MassSongs";
import Footer from "./components/Footer";

export default function Home() {
  const programRef = useRef<HTMLElement>(null);

  const scrollToProgram = () => {
    programRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const coupleNames = "Maggie & George";
  const couplePhoto = "/maggie_George.jpeg";

  return (
    <main style={{ minHeight: "100vh" }}>
      <Hero
        coupleNames={coupleNames}
        photoUrl={couplePhoto}
        onCta={scrollToProgram}
      />
      <BrideNote />
      <section ref={programRef as any}>
        <ProgramTimeline />
      </section>
      <BridalTeam />
      <MassReadings />
      <MassSongs />
      <Footer coupleNames={coupleNames} />
    </main>
  );
}
