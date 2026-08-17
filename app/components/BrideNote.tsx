import { colors, fonts } from "../styles/theme";

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
      }}
    >
      <div style={{ maxWidth: "640px", textAlign: "center" }}>
        <span
          style={{
            display: "block",
            fontFamily: fonts.display,
            fontSize: "3rem",
            color: colors.coral,
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}
        >
          &ldquo;
        </span>
        <p
          style={{
            fontFamily: fonts.script,
            fontStyle: "italic",
            fontSize: "1.4rem",
            lineHeight: 1.6,
            color: colors.grey,
            whiteSpace: "pre-line",
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
            marginTop: "1.5rem",
          }}
        >
          — With Love, The Bride
        </p>
      </div>
    </section>
  );
}
