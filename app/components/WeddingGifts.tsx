import { colors, fonts } from "../styles/theme";

export default function WeddingGifts() {
  console.log("WeddingGifts component rendering");
  return (
    <section
      style={{
        background: colors.navy,
        padding: "5rem 1.5rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: colors.white,
          marginBottom: "0.5rem",
        }}
      >
        Wedding Gifts
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          color: colors.skyBlue,
          marginBottom: "2rem",
          fontSize: "0.9rem",
          letterSpacing: "0.05em",
        }}
      >
        Your presence is the greatest gift. For those who wish to send a gift or contribution:
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: colors.white,
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            flex: 1,
            minWidth: "200px",
          }}
        >
          <h3
            style={{
              fontFamily: fonts.display,
              fontSize: "1.5rem",
              color: colors.royalBlue,
              marginBottom: "0.5rem",
            }}
          >
            Bride
          </h3>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: "1.1rem",
              color: colors.grey,
              margin: 0,
              fontWeight: 500,
            }}
          >
            +254 792 245 539
          </p>
        </div>

        <div
          style={{
            background: colors.white,
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            flex: 1,
            minWidth: "200px",
          }}
        >
          <h3
            style={{
              fontFamily: fonts.display,
              fontSize: "1.5rem",
              color: colors.royalBlue,
              marginBottom: "0.5rem",
            }}
          >
            Groom
          </h3>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: "1.1rem",
              color: colors.grey,
              margin: 0,
              fontWeight: 500,
            }}
          >
            +254 729 455 437
          </p>
        </div>
      </div>

      <p
        style={{
          fontFamily: fonts.body,
          color: colors.rose,
          marginTop: "2rem",
          fontSize: "1rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        M-Pesa
      </p>
    </section>
  );
}
