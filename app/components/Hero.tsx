"use client";

import { colors, fonts, shadows } from "../styles/theme";

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
          ? `linear-gradient(180deg, rgba(27,42,74,0.2) 0%, rgba(27,42,74,0.9) 85%), url(${photoUrl})`
          : `linear-gradient(180deg, ${colors.skyBlue} 0%, ${colors.royalBlue} 50%, ${colors.navy} 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center 15%",
        color: colors.white,
        padding: "2rem",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Rings Watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M85 15 L15 85" />
        </svg>
      </div>

      {/* Floral Decorations - Reshuffled positioning */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-40px",
          width: "280px",
          height: "280px",
          opacity: 0.25,
          pointerEvents: "none",
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
          top: "5%",
          right: "-30px",
          width: "250px",
          height: "250px",
          opacity: 0.22,
          pointerEvents: "none",
          transform: "rotate(15deg)",
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
          bottom: "15%",
          left: "5%",
          width: "200px",
          height: "200px",
          opacity: 0.18,
          pointerEvents: "none",
          transform: "rotate(-20deg)",
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

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "180px",
          height: "180px",
          opacity: 0.2,
          pointerEvents: "none",
          transform: "rotate(25deg)",
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

      {/* Ring decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "3%",
          transform: "translateY(-50%)",
          width: "120px",
          height: "120px",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      >
        <img
          src="/—Pngtree—wedding rings on transparent background_20352628.png"
          alt="Wedding rings"
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
          top: "2rem",
          right: "2rem",
          border: `1px solid ${colors.gold}`,
          borderRadius: "999px",
          padding: "0.5rem 1.25rem",
          fontFamily: fonts.body,
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.white,
          background: "rgba(27, 42, 74, 0.6)",
          backdropFilter: "blur(12px)",
          boxShadow: shadows.subtle,
        }}
      >
        Margaret & George · 22 August 2026
      </div>

      <div style={{ marginBottom: "4rem", maxWidth: "900px", padding: "0 1rem" }}>
        <p
          style={{
            fontFamily: fonts.body,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            fontSize: "0.65rem",
            color: colors.gold,
            marginBottom: "1.5rem",
            fontWeight: 500,
          }}
        >
          W E &apos; R E &nbsp; G E T T I N G &nbsp; M A R R I E D
        </p>
        <h1
          style={{
            fontFamily: fonts.display,
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.05,
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {coupleNames}
        </h1>
        <p
          style={{
            fontFamily: fonts.display,
            fontSize: "1.6rem",
            marginTop: "1.25rem",
            color: colors.silver,
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          Saturday, 22 August 2026
        </p>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "0.95rem",
            marginTop: "0.75rem",
            color: colors.skyBlue,
            letterSpacing: "0.08em",
            fontWeight: 400,
          }}
        >
          St Joseph Catholic Church, Kahawa Sukari
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2.5rem" }}>
          <button
            onClick={onCta}
            style={{
              fontFamily: fonts.body,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: colors.royalBlue,
              color: colors.white,
              border: "none",
              borderRadius: "3px",
              padding: "1rem 2.5rem",
              cursor: "pointer",
              boxShadow: shadows.elegant,
              transition: "all 0.3s ease",
              fontWeight: 500,
            }}
          >
            View the Program
          </button>
          {onGiftsClick && (
            <button
              onClick={onGiftsClick}
              style={{
                fontFamily: fonts.body,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: colors.wineRed,
                color: colors.white,
                border: "none",
                borderRadius: "3px",
                padding: "1rem 2.5rem",
                cursor: "pointer",
                boxShadow: shadows.elegant,
                transition: "all 0.3s ease",
                fontWeight: 500,
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
