"use client";

import { useState } from "react";
import { colors, fonts, shadows } from "../styles/theme";
import { readings } from "../data/readings";

export default function MassReadings() {
  const [openId, setOpenId] = useState<string | null>(readings[0].id);

  return (
    <section style={{ background: `linear-gradient(160deg, ${colors.navy} 0%, #0D1F40 60%, #1A2A50 100%)`, padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Corner florals — intentional frame */}
      <div style={{ position: "absolute", top: "-25px", left: "-25px", width: "250px", height: "250px", opacity: 0.20, pointerEvents: "none", transform: "rotate(-5deg)" }}>
        <img src="/royal blue.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "210px", height: "210px", opacity: 0.16, pointerEvents: "none", transform: "rotate(8deg) scaleX(-1)" }}>
        <img src="/wine red.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "200px", height: "200px", opacity: 0.18, pointerEvents: "none", transform: "rotate(8deg) scaleY(-1)" }}>
        <img src="/watercolor-wreath-removebg-preview.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", bottom: "-15px", right: "-15px", width: "220px", height: "220px", opacity: 0.15, pointerEvents: "none", transform: "scale(-1,-1) rotate(-6deg)" }}>
        <img src="/navy blue.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem", position: "relative" }}>
        <p style={{
          fontFamily: fonts.body,
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          fontSize: "0.65rem",
          color: "rgba(200,170,100,0.9)",
          marginBottom: "1rem",
          fontWeight: 600,
        }}>
          W O R D S &nbsp; T H A T &nbsp; B L E S S &nbsp; O U R &nbsp; U N I O N
        </p>
        <h2 style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
          color: colors.white,
          marginBottom: "1.25rem",
          textShadow: "0 2px 12px rgba(0,0,0,0.35)",
          fontWeight: 400,
        }}>
          Mass Readings
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ width: "60px", height: "1px", background: "rgba(199,205,214,0.3)" }} />
          <img src="/rings.svg" alt="rings" style={{ width: "48px", height: "36px", opacity: 0.5 }} />
          <div style={{ width: "60px", height: "1px", background: "rgba(199,205,214,0.3)" }} />
        </div>
        <p style={{
          fontFamily: fonts.body,
          color: "rgba(169,204,227,0.75)",
          fontSize: "0.88rem",
          letterSpacing: "0.06em",
        }}>
          Saturday, 22 August 2026
        </p>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {readings.map((r) => {
          const isOpen = openId === r.id;
          return (
            <div
              key={r.id}
              style={{
                borderBottom: `1px solid ${colors.royalBlue}`,
                padding: "1.5rem 0",
              }}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : r.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: 0,
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: fonts.body,
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: colors.skyBlue,
                      margin: 0,
                    }}
                  >
                    {r.label} {r.page ? `· ${r.page}` : ""}
                  </p>
                  <h3
                    style={{
                      fontFamily: fonts.display,
                      fontSize: "1.4rem",
                      color: colors.white,
                      margin: "0.25rem 0 0 0",
                    }}
                  >
                    {r.reference}
                  </h3>
                </div>
                <span style={{ color: colors.silver, fontSize: "1.5rem" }}>{isOpen ? "–" : "+"}</span>
              </button>

              {isOpen && (
                <div style={{ marginTop: "1.25rem" }}>
                  {r.intro && (
                    <p
                      style={{
                        fontFamily: fonts.script,
                        fontStyle: "italic",
                        color: colors.silver,
                        marginBottom: "1rem",
                      }}
                    >
                      {r.intro}
                    </p>
                  )}
                  {r.body && (
                    <p
                      style={{
                        fontFamily: fonts.body,
                        color: colors.white,
                        lineHeight: 1.8,
                        whiteSpace: "pre-line",
                        fontSize: "0.95rem",
                      }}
                    >
                      {r.body}
                    </p>
                  )}
                  {r.verses && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {r.verses.map((v, i) => (
                        <p
                          key={i}
                          style={{
                            fontFamily: fonts.body,
                            color: colors.white,
                            lineHeight: 1.8,
                            whiteSpace: "pre-line",
                            fontSize: "0.95rem",
                          }}
                        >
                          {v}
                        </p>
                      ))}
                    </div>
                  )}
                  {r.reader && (
                    <p
                      style={{
                        fontFamily: fonts.body,
                        fontSize: "0.8rem",
                        color: colors.royalBlue,
                        marginTop: "1rem",
                      }}
                    >
                      Read by {r.reader} {r.contact ? `· ${r.contact}` : ""}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
