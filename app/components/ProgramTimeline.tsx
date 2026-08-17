import { colors, fonts } from "../styles/theme";
import { program, ProgramCategory } from "../data/program";

const categoryColor: Record<ProgramCategory, string> = {
  prep: colors.skyBlue,
  church: colors.royalBlue,
  reception: colors.wineRed,
};

const categoryLabel: Record<ProgramCategory, string> = {
  prep: "Preparation",
  church: "Church",
  reception: "Reception",
};

export default function ProgramTimeline() {
  return (
    <section style={{ background: colors.white, padding: "5rem 1.5rem" }}>
      <h2
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          textAlign: "center",
          color: colors.navy,
          marginBottom: "0.5rem",
        }}
      >
        The Day, Step by Step
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          textAlign: "center",
          color: colors.grey,
          marginBottom: "3.5rem",
          fontSize: "0.9rem",
          letterSpacing: "0.05em",
        }}
      >
        Saturday, 22 August — a walk from home, to the altar, to the celebration
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
                  borderRadius: "4px",
                  padding: "1rem 1.25rem",
                  textAlign: isLeft ? "right" : "left",
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
