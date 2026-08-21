"use client";

import { useState } from "react";
import { colors, fonts, shadows } from "../styles/theme";
import { readings } from "../data/readings";

export default function MassReadings() {
  const [openId, setOpenId] = useState<string | null>(readings[0].id);

  return (
    <section style={{ background: colors.navy, padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Floral Decorations - Varied patterns */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          right: "-20px",
          width: "230px",
          height: "230px",
          opacity: 0.16,
          pointerEvents: "none",
          transform: "rotate(12deg)",
        }}
      >
        <img
          src="/cherry-blossom-pink-removebg-preview.png"
          alt="Cherry blossom"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "6%",
          width: "170px",
          height: "170px",
          opacity: 0.12,
          pointerEvents: "none",
          transform: "rotate(-18deg)",
        }}
      >
        <img
          src="/Flor_de_cerezo.png"
          alt="Cherry blossom"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "12%",
          width: "140px",
          height: "140px",
          opacity: 0.14,
          pointerEvents: "none",
          transform: "rotate(22deg)",
        }}
      >
        <img
          src="/watercolor-wreath-removebg-preview.png"
          alt="Floral wreath"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "4%",
          left: "-15px",
          width: "190px",
          height: "190px",
          opacity: 0.15,
          pointerEvents: "none",
          transform: "rotate(-10deg)",
        }}
      >
        <img
          src="/cherry-blossom-border.png"
          alt="Cherry blossom border"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "2%",
          width: "125px",
          height: "125px",
          opacity: 0.1,
          pointerEvents: "none",
          transform: "rotate(-25deg)",
        }}
      >
        <img
          src="/c-removebg-preview.png"
          alt="Flower decoration"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "8%",
          width: "110px",
          height: "110px",
          opacity: 0.09,
          pointerEvents: "none",
          transform: "rotate(28deg)",
        }}
      >
        <img
          src="/Peach_Blossom_Branch.png"
          alt="Peach blossom"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Ring decoration */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "4%",
          width: "100px",
          height: "100px",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      >
        <img
          src="/wedding-ring-png-45268.png"
          alt="Wedding rings"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <p
        style={{
          fontFamily: fonts.body,
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          fontSize: "0.65rem",
          color: colors.gold,
          textAlign: "center",
          marginBottom: "0.75rem",
          fontWeight: 500,
        }}
      >
        W O R D S &nbsp; T H A T &nbsp; B L E S S &nbsp; O U R &nbsp; U N I O N
      </p>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: "0.85rem",
          color: colors.skyBlue,
          textAlign: "center",
          marginBottom: "0.75rem",
          letterSpacing: "0.08em",
        }}
      >
        Margaret & George · 22 August 2026
      </p>
      <h2
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          textAlign: "center",
          color: colors.white,
          marginBottom: "3rem",
          textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          fontWeight: 400,
        }}
      >
        Mass Readings
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          textAlign: "center",
          color: colors.skyBlue,
          marginBottom: "3rem",
          fontSize: "0.9rem",
        }}
      >
        Saturday, 22 August
      </p>

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
