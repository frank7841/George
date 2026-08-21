"use client";

import { useState } from "react";
import { colors, fonts, shadows } from "../styles/theme";
import { moments } from "../data/songs";

export default function MassSongs() {
  const [expandedSong, setExpandedSong] = useState<string | null>(null);

  return (
    <section style={{ background: `linear-gradient(135deg, ${colors.wineRed} 0%, #4A1020 60%, #2E0C1A 100%)`, padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Corner florals */}
      <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "230px", height: "230px", opacity: 0.18, pointerEvents: "none", transform: "rotate(-6deg)" }}>
        <img src="/royal blue.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", top: "-15px", right: "-15px", width: "200px", height: "200px", opacity: 0.14, pointerEvents: "none", transform: "rotate(10deg) scaleX(-1)" }}>
        <img src="/navy blue.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", bottom: "-15px", left: "-15px", width: "190px", height: "190px", opacity: 0.16, pointerEvents: "none", transform: "scaleY(-1) rotate(-8deg)" }}>
        <img src="/watercolor-wreath-removebg-preview.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", bottom: "-15px", right: "-15px", width: "210px", height: "210px", opacity: 0.13, pointerEvents: "none", transform: "scale(-1,-1) rotate(-5deg)" }}>
        <img src="/wine red.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
          S U N G &nbsp; T O G E T H E R , &nbsp; I N &nbsp; P R A I S E
        </p>
        <h2 style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
          color: colors.white,
          marginBottom: "1.25rem",
          textShadow: "0 2px 12px rgba(0,0,0,0.35)",
          fontWeight: 400,
        }}>
          Wedding Hymns
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ width: "60px", height: "1px", background: "rgba(199,205,214,0.35)" }} />
          <img src="/rings.svg" alt="rings" style={{ width: "48px", height: "36px", opacity: 0.55 }} />
          <div style={{ width: "60px", height: "1px", background: "rgba(199,205,214,0.35)" }} />
        </div>
        <p style={{
          fontFamily: fonts.body,
          color: "rgba(169,204,227,0.8)",
          fontSize: "0.88rem",
          letterSpacing: "0.06em",
        }}>
          Margaret &amp; George &middot; 22 August 2026
        </p>
      </div>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          padding: "0 1rem",
        }}
      >
        {moments.map((moment, momentIndex) => (
          <div
            key={moment.id}
            style={{
              borderBottom: momentIndex < moments.length - 1 ? `1px solid rgba(255,255,255,0.25)` : "none",
            }}
          >
            <div
              style={{
                fontFamily: fonts.body,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: colors.skyBlue,
                padding: "1rem 0 0.5rem 0",
              }}
            >
              {moment.name}
            </div>
            {moment.songs.map((song) => (
              <div
                key={song.id}
                onClick={() => setExpandedSong(expandedSong === `${moment.id}-${song.id}` ? null : `${moment.id}-${song.id}`)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem 0",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.display,
                      fontSize: "1.15rem",
                      color: colors.white,
                      textAlign: "left",
                      flex: 1,
                    }}
                  >
                    {song.title}
                    {song.number && (
                      <span style={{ display: "block", fontFamily: fonts.body, fontSize: "0.75rem", color: colors.silver }}>
                        {song.number}
                      </span>
                    )}
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.body,
                      fontSize: "0.75rem",
                      color: colors.skyBlue,
                      marginLeft: "0.5rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {expandedSong === `${moment.id}-${song.id}` ? "−" : "+"}
                  </span>
                </div>
                {expandedSong === `${moment.id}-${song.id}` && (
                  <div
                    style={{
                      padding: "0 0 1.5rem 0",
                      color: colors.white,
                      fontFamily: fonts.body,
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {song.lyrics.map((line, lineIndex) => (
                      <div key={lineIndex} style={{ marginBottom: "0.5rem" }}>
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
