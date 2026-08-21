import { colors, fonts, shadows } from "../styles/theme";
import { program, ProgramCategory } from "../data/program";

const categoryColor: Record<ProgramCategory, string> = {
  prep: colors.skyBlue,
  church: colors.royalBlue,
  reception: colors.coral,
};

const categoryLabel: Record<ProgramCategory, string> = {
  prep: "Preparation",
  church: "Church",
  reception: "Reception",
};

export default function ProgramTimeline() {
  return (
    <section style={{ 
      background: `linear-gradient(to bottom, ${colors.white} 0%, ${colors.blush} 100%)`,
      padding: "5rem 1.5rem", 
      position: "relative", 
      overflow: "hidden" 
    }}>
      {/* Love Hearts Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.06,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 35c-8 0-15 7-15 15 0 9 7 16 15 16 9 0 16-7 16-16 0-8-7-15-16-15zm0 4c6 0 11 5 11 11 0 7-5 12-11 12-7 0-12-5-12-12 0-6 5-11 12-11z' fill='%236B1F2A'/%3E%3Cpath d='M50 15c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z' fill='%236B1F2A'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />
      {/* Floral Decorations - Varied patterns */}
      <div
        style={{
          position: "absolute",
          top: "3%",
          left: "-25px",
          width: "240px",
          height: "240px",
          opacity: 0.28,
          pointerEvents: "none",
          transform: "rotate(-10deg)",
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
          top: "15%",
          right: "5%",
          width: "160px",
          height: "160px",
          opacity: 0.22,
          pointerEvents: "none",
          transform: "rotate(20deg)",
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
          bottom: "5%",
          left: "8%",
          width: "140px",
          height: "140px",
          opacity: 0.24,
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
          bottom: "3%",
          right: "-20px",
          width: "200px",
          height: "200px",
          opacity: 0.26,
          pointerEvents: "none",
          transform: "rotate(10deg)",
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
          top: "40%",
          left: "-15px",
          width: "120px",
          height: "120px",
          opacity: 0.18,
          pointerEvents: "none",
          transform: "rotate(25deg)",
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
          top: "55%",
          right: "3%",
          width: "110px",
          height: "110px",
          opacity: 0.16,
          pointerEvents: "none",
          transform: "rotate(-18deg)",
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
        O R D E R &nbsp; O F &nbsp; T H E &nbsp; D A Y
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
          marginBottom: "1rem",
          fontWeight: 400,
        }}
      >
        Wedding Day Program
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          textAlign: "center",
          color: colors.grey,
          marginBottom: "3.5rem",
          fontSize: "0.95rem",
          letterSpacing: "0.05em",
          fontStyle: "italic",
        }}
      >
        From Sunrise, to the Altar, to Forever
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
        {(Object.keys(categoryColor) as ProgramCategory[]).map((key) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: categoryColor[key] }} />
            <span style={{ fontFamily: fonts.body, fontSize: "0.8rem", color: colors.grey }}>
              {categoryLabel[key]}
            </span>
          </div>
        ))}
      </div>

      <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: colors.silver,
            transform: "translateX(-50%)",
          }}
        />
        {program.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
                width: "100%",
                padding: "1.25rem 0",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "1.5rem",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: categoryColor[item.category],
                  border: `2px solid ${colors.white}`,
                  boxShadow: `0 0 0 2px ${categoryColor[item.category]}`,
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  width: "45%",
                  background: colors.white,
                  border: `1px solid ${colors.silver}`,
                  borderRadius: "8px",
                  padding: "1.25rem 1.5rem",
                  textAlign: isLeft ? "right" : "left",
                  boxShadow: shadows.subtle,
                  transition: "all 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: categoryColor[item.category],
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.time}
                </p>
                <h3
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "1.15rem",
                    color: colors.navy,
                    margin: "0 0 0.25rem 0",
                  }}
                >
                  {item.activity}
                </h3>
                <p style={{ fontFamily: fonts.body, fontSize: "0.85rem", color: colors.grey, margin: 0 }}>
                  {item.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
