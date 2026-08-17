"use client";

import { useRef } from "react";
import Hero from "../components/Hero";
import BrideNote from "../components/BrideNote";
import ProgramTimeline from "../components/ProgramTimeline";
import BridalTeam from "../components/BridalTeam";
import MassReadings from "../components/MassReadings";
import MassSongs from "../components/MassSongs";
import Footer from "../components/Footer";

// Replace coupleNames and photoUrl with the real values.
// photoUrl can be a local import from /public (e.g. "/couple.jpg") or a hosted URL.
export default function Home() {
  const programRef = useRef<HTMLDivElement>(null);

  const scrollToProgram = () => {
    programRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Hero coupleNames="Bride & Groom" photoUrl={null} onCta={scrollToProgram} />
      <BrideNote />
      <div ref={programRef}>
        <ProgramTimeline />
      </div>
      <BridalTeam />
      <MassReadings />
      <MassSongs />
      <Footer coupleNames="Bride & Groom" />
    </main>
  );
}
