"use client";

import { useRef } from "react";
import Hero from "./components/Hero";
import BrideNote from "./components/BrideNote";
import ProgramTimeline from "./components/ProgramTimeline";
import BridalTeam from "./components/BridalTeam";
import MassReadings from "./components/MassReadings";
import MassSongs from "./components/MassSongs";
import WeddingGifts from "./components/WeddingGifts";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function Home() {
  const programRef = useRef<HTMLElement>(null);
  const giftsRef = useRef<HTMLElement>(null);

  const scrollToProgram = () => {
    programRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGifts = () => {
    giftsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const coupleNames = "Maggie & George";
  const couplePhoto = "/maggie_George.jpeg";

  return (
    <main style={{ minHeight: "100vh" }}>
      <Navigation />
      <div id="hero">
        <Hero
          coupleNames={coupleNames}
          photoUrl={couplePhoto}
          onCta={scrollToProgram}
        />
      </div>
      <div id="program" ref={programRef as any}>
        <ProgramTimeline />
      </div>
      <div id="bridal-team">
        <BridalTeam />
      </div>
      <div id="readings">
        <MassReadings />
      </div>
      <div id="songs">
        <MassSongs />
      </div>
      <div id="gifts" ref={giftsRef as any}>
        <WeddingGifts />
      </div>
      <BrideNote />
      <Footer coupleNames={coupleNames} />
    </main>
  );
}
