"use client";

import { useState } from "react";
import { colors, fonts } from "../styles/theme";
import { moments } from "../data/songs";

export default function MassSongs() {
  const [expandedSong, setExpandedSong] = useState<string | null>(null);

  return (
    <section style={{ background: colors.wineRed, padding: "5rem 1.5rem" }}>
      <h2
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          textAlign: "center",
          color: colors.white,
          marginBottom: "0.5rem",
        }}
      >
        Mass Songs
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          textAlign: "center",
          color: colors.skyBlue,
          marginBottom: "1rem",
          fontSize: "0.9rem",
        }}
      >
        Complete hymn list with lyrics
      </p>
      <p
        style={{
          fontFamily: fonts.body,
          textAlign: "center",
          color: colors.silver,
          marginBottom: "2rem",
          fontSize: "0.75rem",
          fontStyle: "italic",
        }}
      >
        ↓ Scroll to view all songs ↓
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
