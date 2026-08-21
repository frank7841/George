import { colors, fonts, shadows } from "../styles/theme";
import { program, ProgramCategory } from "../data/program";

const categoryColor: Record<ProgramCategory, string> = {
  prep: "#4A90D9",
  church: colors.royalBlue,
  reception: colors.wineRed,
};

const categoryLabel: Record<ProgramCategory, string> = {
  prep: "Preparation",
  church: "Church",
  reception: "Reception",
};

const categoryIcon: Record<ProgramCategory, string> = {
  prep: "☀",
  church: "✝",
  reception: "♥",
};

export default function ProgramTimeline() {
  return (
    <section style={{ 
      background: `linear-gradient(160deg, #F9F7F4 0%, #EEF3F8 55%, #F5EEF0 100%)`,
      padding: "6rem 1.5rem", 
      position: "relative", 
      overflow: "hidden" 
    }}>
      {/* Top-left floral corner */}
      <div style={{ position: "absolute", top: "-30px", left: "-30px", width: "280px", height: "280px", opacity: 0.38, pointerEvents: "none", transform: "rotate(-5deg)" }}>
        <img src="/royal blue.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      {/* Top-right floral corner */}
      <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "240px", height: "240px", opacity: 0.30, pointerEvents: "none", transform: "rotate(8deg) scaleX(-1)" }}>
        <img src="/wine red.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      {/* Bottom-left floral corner */}
      <div style={{ position: "absolute", bottom: "-25px", left: "-20px", width: "220px", height: "220px", opacity: 0.32, pointerEvents: "none", transform: "rotate(10deg) scaleY(-1)" }}>
        <img src="/navy blue.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      {/* Bottom-right floral corner */}
      <div style={{ position: "absolute", bottom: "-20px", right: "-15px", width: "200px", height: "200px", opacity: 0.30, pointerEvents: "none", transform: "rotate(-5deg) scale(-1,-1)" }}>
        <img src="/watercolor-wreath-removebg-preview.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem", position: "relative" }}>
        <p style={{
          fontFamily: fonts.body,
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          fontSize: "0.65rem",
          color: colors.wineRed,
          marginBottom: "1rem",
          fontWeight: 600,
        }}>
          T H E &nbsp; W E D D I N G &nbsp; D A Y
        </p>
        <h2 style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
          color: colors.navy,
          marginBottom: "1.25rem",
          fontWeight: 400,
          letterSpacing: "0.02em",
        }}>
          Programme
        </h2>
        {/* Elegant divider with rings */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.25rem" }}>
          <div style={{ width: "70px", height: "1px", background: `linear-gradient(to right, transparent, ${colors.silver})` }} />
          <img src="/rings.svg" alt="rings" style={{ width: "52px", height: "40px", opacity: 0.8 }} />
          <div style={{ width: "70px", height: "1px", background: `linear-gradient(to left, transparent, ${colors.silver})` }} />
        </div>
        <p style={{
          fontFamily: fonts.display,
          textAlign: "center",
          color: colors.grey,
          fontSize: "1.05rem",
          fontStyle: "italic",
          letterSpacing: "0.03em",
        }}>
          Saturday, 22 August 2026 &middot; St Joseph Catholic Church, Kahawa Sukari
        </p>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", marginBottom: "4rem", flexWrap: "wrap" }}>
        {(Object.keys(categoryColor) as ProgramCategory[]).map((key) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div style={{ width: "4px", height: "24px", borderRadius: "2px", background: categoryColor[key] }} />
            <span style={{ fontFamily: fonts.body, fontSize: "0.75rem", color: colors.grey, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {categoryLabel[key]}
            </span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", maxWidth: "860px", margin: "0 auto" }}>
        {/* Central line */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "1px",
          background: `linear-gradient(to bottom, transparent, ${colors.silver} 8%, ${colors.silver} 92%, transparent)`,
          transform: "translateX(-50%)",
        }} />

        {program.map((item, i) => {
          const isLeft = i % 2 === 0;
          const accent = categoryColor[item.category];
          return (
            <div
              key={i}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
                width: "100%",
                padding: "0.9rem 0",
              }}
            >
              {/* Timeline node */}
              <div style={{
                position: "absolute",
                left: "50%",
                top: "1.9rem",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: accent,
                border: "2px solid white",
                boxShadow: `0 0 0 3px ${accent}44`,
                transform: "translateX(-50%)",
                zIndex: 2,
              }} />

              {/* Connector line from card to center */}
              <div style={{
                position: "absolute",
                top: "2.4rem",
                [isLeft ? "right" : "left"]: "calc(50% + 6px)",
                width: "calc(5% - 6px)",
                height: "1px",
                background: accent,
                opacity: 0.35,
              }} />

              {/* Card */}
              <div style={{
                width: "44%",
                background: "rgba(255,255,255,0.93)",
                backdropFilter: "blur(8px)",
                borderRadius: "4px",
                padding: "1.2rem 1.4rem",
                textAlign: isLeft ? "right" : "left",
                boxShadow: "0 2px 20px rgba(27,42,74,0.07)",
                borderLeft: isLeft ? "none" : `3px solid ${accent}`,
                borderRight: isLeft ? `3px solid ${accent}` : "none",
              }}>
                <span style={{
                  display: "inline-block",
                  fontFamily: fonts.body,
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: accent,
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}>
                  {categoryIcon[item.category]}&ensp;{item.time}
                </span>
                <h3 style={{
                  fontFamily: fonts.display,
                  fontSize: "1.1rem",
                  color: colors.navy,
                  margin: "0 0 0.2rem 0",
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}>
                  {item.activity}
                </h3>
                {item.details && (
                  <p style={{ fontFamily: fonts.body, fontSize: "0.82rem", color: colors.grey, margin: 0, lineHeight: 1.55 }}>
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom scripture quote */}
      <div style={{ textAlign: "center", marginTop: "4.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.25rem" }}>
          <div style={{ width: "50px", height: "1px", background: colors.silver }} />
          <span style={{ color: colors.silver, fontSize: "0.8rem" }}>✦</span>
          <div style={{ width: "50px", height: "1px", background: colors.silver }} />
        </div>
        <p style={{
          fontFamily: fonts.display,
          fontStyle: "italic",
          fontSize: "1.05rem",
          color: colors.grey,
          letterSpacing: "0.03em",
          maxWidth: "500px",
          margin: "0 auto",
          lineHeight: 1.7,
        }}>
          &ldquo;What God has joined together, let no one separate.&rdquo;<br />
          <span style={{ fontSize: "0.8rem", fontStyle: "normal", letterSpacing: "0.1em", textTransform: "uppercase", color: colors.wineRed }}>
            Matthew 19:6
          </span>
        </p>
      </div>
    </section>
  );
}
