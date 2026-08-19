"use client";

import { colors, fonts } from "../styles/theme";

interface HeroProps {
  coupleNames?: string;
  photoUrl?: string | null;
  onCta?: () => void;
  onGiftsClick?: () => void;
}

export default function Hero({
  coupleNames = "The Bride & The Groom",
  photoUrl = null,
  onCta,
  onGiftsClick,
}: HeroProps) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundImage: photoUrl
          ? `linear-gradient(180deg, rgba(27,42,74,0.15) 0%, rgba(27,42,74,0.85) 85%), url(${photoUrl})`
          : `linear-gradient(180deg, ${colors.skyBlue} 0%, ${colors.navy} 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center 15%",
        color: colors.white,
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          border: `1px solid ${colors.rose}`,
          borderRadius: "999px",
          padding: "0.4rem 1rem",
          fontFamily: fonts.body,
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: colors.rose,
          background: "rgba(232, 180, 184, 0.15)",
          backdropFilter: "blur(4px)",
        }}
      >
        A Special Day
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: fonts.body,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            color: colors.skyBlue,
            marginBottom: "1rem",
          }}
        >
          We&apos;re Getting Married
        </p>
        <h1
          style={{
            fontFamily: fonts.display,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 500,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {coupleNames}
        </h1>
        <p
          style={{
            fontFamily: fonts.display,
            fontSize: "1.5rem",
            marginTop: "1rem",
            color: colors.silver,
          }}
        >
          Saturday, 22 August 2026
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={onCta}
            style={{
              marginTop: "2rem",
              fontFamily: fonts.body,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: colors.royalBlue,
              color: colors.white,
              border: "none",
              borderRadius: "2px",
              padding: "0.9rem 2.2rem",
              cursor: "pointer",
            }}
          >
            View the Program
          </button>
          {onGiftsClick && (
            <button
              onClick={onGiftsClick}
              style={{
                marginTop: "2rem",
                fontFamily: fonts.body,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: colors.rose,
                color: colors.white,
                border: "none",
                borderRadius: "2px",
                padding: "0.9rem 2.2rem",
                cursor: "pointer",
              }}
            >
              Wedding Gifts
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
