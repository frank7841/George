import { colors, fonts, shadows } from "../styles/theme";

interface BrideNoteProps {
  note?: string;
}

const defaultNote = `To our family and friends gathered with us today — thank you. Your love, prayers, and support have carried us to this moment, and we are so grateful to share it with each of you. To our parents, who raised us in love and taught us what it means to build a home; to our bridal team, who stood by us through every preparation; and to everyone who gave their time, talent, and heart to make this day beautiful — we thank you from the bottom of our hearts. Today is as much a celebration of you as it is of us.`;

export default function BrideNote({ note = defaultNote }: BrideNoteProps) {
  return (
    <section
      style={{
        background: colors.white,
        padding: "5rem 2rem",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner florals */}
      <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "220px", height: "220px", opacity: 0.30, pointerEvents: "none", transform: "rotate(-5deg)" }}>
        <img src="/royal blue.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", top: "-15px", right: "-15px", width: "200px", height: "200px", opacity: 0.25, pointerEvents: "none", transform: "rotate(8deg) scaleX(-1)" }}>
        <img src="/watercolor-wreath-removebg-preview.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", bottom: "-20px", left: "-15px", width: "190px", height: "190px", opacity: 0.28, pointerEvents: "none", transform: "rotate(10deg) scaleY(-1)" }}>
        <img src="/wine red.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", bottom: "-15px", right: "-15px", width: "210px", height: "210px", opacity: 0.25, pointerEvents: "none", transform: "scale(-1,-1) rotate(-6deg)" }}>
        <img src="/navy blue.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>

      <div style={{ maxWidth: "700px", textAlign: "center", padding: "2rem" }}>
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
          W I T H &nbsp; H E A R T F E L T &nbsp; T H A N K S
        </p>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "0.85rem",
            color: colors.grey,
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
            color: colors.navy,
            marginBottom: "2.5rem",
            fontWeight: 400,
          }}
        >
          A Word of Appreciation
        </h2>
        {/* Rings divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ width: "50px", height: "1px", background: colors.silver }} />
          <img src="/rings.svg" alt="rings" style={{ width: "44px", height: "34px", opacity: 0.6 }} />
          <div style={{ width: "50px", height: "1px", background: colors.silver }} />
        </div>
        <span
          style={{
            display: "block",
            fontFamily: fonts.display,
            fontSize: "3.5rem",
            color: colors.coral,
            lineHeight: 1,
            marginBottom: "0.75rem",
            opacity: 0.8,
          }}
        >
          &ldquo;
        </span>
        <p
          style={{
            fontFamily: fonts.script,
            fontStyle: "italic",
            fontSize: "1.5rem",
            lineHeight: 1.7,
            color: colors.grey,
            whiteSpace: "pre-line",
            marginBottom: "1.5rem",
          }}
        >
          {note}
        </p>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: colors.royalBlue,
            marginTop: "2rem",
            fontWeight: 500,
          }}
        >
          — With Love & Gratitude, Margaret & George
        </p>
      </div>
    </section>
  );
}
