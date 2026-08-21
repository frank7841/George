import { colors, fonts } from "../styles/theme";

interface FooterProps {
  coupleNames?: string;
}

export default function Footer({ coupleNames = "The Bride & The Groom" }: FooterProps) {
  return (
    <footer
      style={{
        background: `linear-gradient(to bottom, ${colors.navy}, #050D1A)`,
        padding: "3rem 1.5rem 4rem 1.5rem",
        textAlign: "center",
        borderTop: `1px solid rgba(46,77,158,0.4)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle corner accents */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "120px", height: "120px", opacity: 0.12, pointerEvents: "none" }}>
        <img src="/wine red.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", transform: "rotate(15deg) scaleY(-1)" }} />
      </div>
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "120px", height: "120px", opacity: 0.12, pointerEvents: "none" }}>
        <img src="/royal blue.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", transform: "rotate(-10deg) scale(-1,-1)" }} />
      </div>

      {/* Divider */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <div style={{ width: "50px", height: "1px", background: "rgba(199,205,214,0.25)" }} />
        <img src="/rings.svg" alt="rings" style={{ width: "44px", height: "34px", opacity: 0.5 }} />
        <div style={{ width: "50px", height: "1px", background: "rgba(199,205,214,0.25)" }} />
      </div>

      <p style={{ fontFamily: fonts.display, fontSize: "1.8rem", color: colors.white, marginBottom: "0.5rem", fontWeight: 400 }}>
        {coupleNames}
      </p>
      <p style={{ fontFamily: fonts.body, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: colors.silver, marginBottom: "0.25rem" }}>
        22 August 2026
      </p>
      <p style={{ fontFamily: fonts.display, fontStyle: "italic", fontSize: "0.9rem", color: colors.rose, marginTop: "0.5rem" }}>
        With Love &amp; Gratitude
      </p>
    </footer>
  );
}
