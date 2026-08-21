import { colors, fonts, shadows } from "../styles/theme";

export default function WeddingGifts() {
  console.log("WeddingGifts component rendering");
  return (
    <section
      style={{
        background: colors.navy,
        padding: "5rem 1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floral Decorations - Wedding theme colors */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          left: "-20px",
          width: "220px",
          height: "220px",
          opacity: 0.15,
          pointerEvents: "none",
          transform: "rotate(10deg)",
        }}
      >
        <img
          src="/royal blue.png"
          alt="Royal blue flowers"
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
          top: "22%",
          right: "8%",
          width: "150px",
          height: "150px",
          opacity: 0.11,
          pointerEvents: "none",
          transform: "rotate(-16deg)",
        }}
      >
        <img
          src="/navy blue.png"
          alt="Navy blue flowers"
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
          left: "10%",
          width: "130px",
          height: "130px",
          opacity: 0.13,
          pointerEvents: "none",
          transform: "rotate(20deg)",
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
          width: "180px",
          height: "180px",
          opacity: 0.14,
          pointerEvents: "none",
          transform: "rotate(-12deg)",
        }}
      >
        <img
          src="/wine red.png"
          alt="Wine red flowers"
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
          top: "52%",
          right: "3%",
          width: "122px",
          height: "122px",
          opacity: 0.09,
          pointerEvents: "none",
          transform: "rotate(-23deg)",
        }}
      >
        <img
          src="/royalb.png"
          alt="Royal blue flowers"
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
          top: "68%",
          left: "7%",
          width: "112px",
          height: "112px",
          opacity: 0.08,
          pointerEvents: "none",
          transform: "rotate(27deg)",
        }}
      >
        <img
          src="/winered.png"
          alt="Wine red flowers"
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
          top: "38%",
          left: "5%",
          width: "95px",
          height: "95px",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      >
        <img
          src="/rings.svg"
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
        W I T H &nbsp; G R A T I T U D E
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
        Wedding Gifts
      </h2>
      {/* Rings divider */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem" }}>
        <div style={{ width: "60px", height: "1px", background: "rgba(199,205,214,0.3)" }} />
        <img src="/rings.svg" alt="rings" style={{ width: "48px", height: "36px", opacity: 0.55 }} />
        <div style={{ width: "60px", height: "1px", background: "rgba(199,205,214,0.3)" }} />
      </div>
      <p
        style={{
          fontFamily: fonts.body,
          color: colors.skyBlue,
          marginBottom: "2rem",
          fontSize: "0.9rem",
          letterSpacing: "0.05em",
          maxWidth: "600px",
          margin: "0 auto 2rem auto",
        }}
      >
        Your presence here is the greatest gift of all. For those who wish to bless our new home with a gift or contribution, our M-Pesa details are below.
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
            background: "rgba(255,255,255,0.07)",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            border: `1px solid ${colors.skyBlue}44`,
            flex: 1,
            minWidth: "200px",
          }}
        >
          <h3
            style={{
              fontFamily: fonts.display,
              fontSize: "1.5rem",
              color: colors.skyBlue,
              marginBottom: "0.5rem",
            }}
          >
            Bride
          </h3>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: "1.1rem",
              color: colors.white,
              margin: 0,
              fontWeight: 500,
            }}
          >
            +254 792 245 539
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            border: `1px solid ${colors.wineRed}55`,
            flex: 1,
            minWidth: "200px",
          }}
        >
          <h3
            style={{
              fontFamily: fonts.display,
              fontSize: "1.5rem",
              color: colors.rose,
              marginBottom: "0.5rem",
            }}
          >
            Groom
          </h3>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: "1.1rem",
              color: colors.white,
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
      <p
        style={{
          fontFamily: fonts.body,
          color: colors.silver,
          marginTop: "2rem",
          fontSize: "0.9rem",
          fontStyle: "italic",
        }}
      >
        With Love & Gratitude
      </p>
      <p
        style={{
          fontFamily: fonts.body,
          color: colors.skyBlue,
          marginTop: "0.5rem",
          fontSize: "0.8rem",
        }}
      >
        22 August 2026 · With Love & Gratitude
      </p>
    </section>
  );
}
