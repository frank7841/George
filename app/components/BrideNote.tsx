import { colors, fonts, shadows } from "../styles/theme";

interface BrideNoteProps {
  note?: string;
}

const defaultNote = `To everyone gathered with us today — thank you. This day holds more meaning than words can say — 
a celebration of love, new beginnings, and the gift of sharing this moment with all of you. 
Every person in this program, every hand that helped prepare this day, is part of our story now. 
Thank you for walking this aisle with us, in every sense of the word.`;

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
      {/* Floral Decorations - Varied patterns */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          left: "-20px",
          width: "220px",
          height: "220px",
          opacity: 0.25,
          pointerEvents: "none",
          transform: "rotate(5deg)",
        }}
      >
        <img
          src="/cherry-blossom-white-transparent-removebg-preview.png"
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
          right: "8%",
          width: "150px",
          height: "150px",
          opacity: 0.18,
          pointerEvents: "none",
          transform: "rotate(-15deg)",
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
          bottom: "8%",
          left: "10%",
          width: "130px",
          height: "130px",
          opacity: 0.21,
          pointerEvents: "none",
          transform: "rotate(18deg)",
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
          bottom: "4%",
          right: "-15px",
          width: "180px",
          height: "180px",
          opacity: 0.23,
          pointerEvents: "none",
          transform: "rotate(-8deg)",
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
          top: "45%",
          left: "-12px",
          width: "115px",
          height: "115px",
          opacity: 0.15,
          pointerEvents: "none",
          transform: "rotate(-22deg)",
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
          top: "60%",
          right: "5%",
          width: "105px",
          height: "105px",
          opacity: 0.13,
          pointerEvents: "none",
          transform: "rotate(20deg)",
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
          F R O M &nbsp; T H E &nbsp; H E A R T
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
          A Word from the Bride
        </h2>
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
          — With Love, The Bride
        </p>
      </div>
    </section>
  );
}
