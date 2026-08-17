import { colors, fonts } from "../styles/theme";

interface FooterProps {
  coupleNames?: string;
}

export default function Footer({ coupleNames = "The Bride & The Groom" }: FooterProps) {
  return (
    <footer
      style={{
        background: colors.navy,
        padding: "3rem 1.5rem",
        textAlign: "center",
        borderTop: `1px solid ${colors.royalBlue}`,
      }}
    >
      <p
        style={{
          fontFamily: fonts.display,
          fontSize: "1.5rem",
          color: colors.white,
          marginBottom: "0.5rem",
        }}
      >
        {coupleNames}
      </p>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.rose,
        }}
      >
        22 August · With Love & Gratitude
      </p>
    </footer>
  );
}
