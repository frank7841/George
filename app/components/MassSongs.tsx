"use client";

import { useState } from "react";
import { colors, fonts, shadows } from "../styles/theme";
import { moments } from "../data/songs";

export default function MassSongs() {
  const [expandedSong, setExpandedSong] = useState<string | null>(null);

  return (
    <section style={{ background: colors.wineRed, padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Floral Decorations - Varied patterns */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          left: "-20px",
          width: "240px",
          height: "240px",
          opacity: 0.15,
          pointerEvents: "none",
          transform: "rotate(-8deg)",
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
          top: "20%",
          right: "7%",
          width: "160px",
          height: "160px",
          opacity: 0.11,
          pointerEvents: "none",
          transform: "rotate(15deg)",
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
          bottom: "12%",
          left: "9%",
          width: "130px",
          height: "130px",
          opacity: 0.13,
          pointerEvents: "none",
          transform: "rotate(-20deg)",
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
          right: "-15px",
          width: "200px",
          height: "200px",
          opacity: 0.14,
          pointerEvents: "none",
          transform: "rotate(12deg)",
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
          top: "48%",
          left: "-10px",
          width: "118px",
          height: "118px",
          opacity: 0.09,
          pointerEvents: "none",
          transform: "rotate(24deg)",
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
          top: "62%",
          right: "4%",
          width: "108px",
          height: "108px",
          opacity: 0.08,
          pointerEvents: "none",
          transform: "rotate(-26deg)",
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
          top: "35%",
          right: "5%",
          width: "90px",
          height: "90px",
          opacity: 0.11,
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
        S U N G &nbsp; T O G E T H E R &nbsp; I N &nbsp; P R A I S E
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
        Mass Songs
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          textAlign: "center",
          color: colors.skyBlue,
          marginBottom: "2rem",
          fontSize: "0.9rem",
        }}
      >
        Complete hymn list with lyrics
      </p>

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
