"use client";

import { useState } from "react";
import { colors, fonts } from "../styles/theme";
import { readings } from "../data/readings";

export default function MassReadings() {
  const [openId, setOpenId] = useState<string | null>(readings[0].id);

  return (
    <section style={{ background: colors.navy, padding: "5rem 1.5rem" }}>
      <h2
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          textAlign: "center",
          color: colors.white,
          marginBottom: "0.5rem",
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
