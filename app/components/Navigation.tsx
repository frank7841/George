"use client";

import { useState, useEffect } from "react";
import { colors, fonts } from "../styles/theme";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "hero", label: "Home", icon: "🏠" },
    { id: "program", label: "Program", icon: "📋" },
    { id: "bridal-team", label: "Bridal Team", icon: "👰" },
    { id: "readings", label: "Readings", icon: "📖" },
    { id: "songs", label: "Songs", icon: "🎵" },
    { id: "gifts", label: "Gifts", icon: "🎁" },
  ];

  useEffect(() => {
    const handleIntersection = () => {
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleIntersection);
    return () => {
      window.removeEventListener("scroll", handleIntersection);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        right: "0.5rem",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2147483647,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        padding: "0.4rem",
      }}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          title={section.label}
          style={{
            width: "0.6rem",
            height: "0.6rem",
            borderRadius: "50%",
            background: activeSection === section.id 
              ? "#E8B4B8" 
              : "rgba(255,255,255,0.4)",
            border: activeSection === section.id 
              ? "1px solid #FFFFFF" 
              : "1px solid rgba(255,255,255,0.6)",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.5)";
            e.currentTarget.style.background = activeSection === section.id 
              ? "#D4756A" 
              : "rgba(232, 180, 184, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = activeSection === section.id 
              ? "#E8B4B8" 
              : "rgba(255,255,255,0.4)";
          }}
        />
      ))}
    </nav>
  );
}
