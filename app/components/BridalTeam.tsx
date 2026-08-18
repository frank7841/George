import { colors, fonts } from "../styles/theme";
import { bridalTeam, BridalMember } from "../data/bridalTeam";

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function BridalTeam() {
  const couple = bridalTeam.filter((m) => m.role === "Groom" || m.role === "Bride");
  const matron = bridalTeam.filter((m) => m.role === "Matron");
  const bestCouple = bridalTeam.filter((m) => m.role === "Best Couple" || m.role === "Best Lady");
  const rest = bridalTeam.filter((m) => 
    m.role !== "Groom" && 
    m.role !== "Bride" && 
    m.role !== "Matron" && 
    m.role !== "Best Couple" && 
    m.role !== "Best Lady"
  );

  return (
    <section 
      style={{ 
        background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.royalBlue} 50%, ${colors.wineRed} 100%)`,
        padding: "5rem 1.5rem",
      }}
    >
      <h2
        style={{
          fontFamily: fonts.display,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          textAlign: "center",
          color: colors.white,
          marginBottom: "0.5rem",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        The Bridal Team
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          textAlign: "center",
          color: colors.skyBlue,
          marginBottom: "3rem",
          fontSize: "0.9rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {couple.map((m) => (
          <MemberCard key={m.id} member={m} isCouple />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {matron.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "3.5rem", flexWrap: "wrap" }}>
        {bestCouple.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {rest.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>
    </section>
  );
}

function MemberCard({ member, isCouple = false }: { member: BridalMember; isCouple?: boolean }) {
  return (
    <div 
      style={{ 
        textAlign: "center",
        padding: "1.5rem 1rem",
        background: isCouple 
          ? `linear-gradient(135deg, ${colors.rose} 0%, ${colors.coral} 100%)` 
          : "rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
        borderRadius: "8px",
        border: isCouple 
          ? `2px solid ${colors.white}` 
          : `1px solid rgba(255,255,255,0.2)`,
        transition: "transform 0.2s ease",
        boxShadow: isCouple 
          ? "0 8px 24px rgba(0,0,0,0.3)" 
          : "0 4px 12px rgba(0,0,0,0.2)",
        minWidth: "180px",
        flex: 1,
      }}
    >
      <h3
        style={{
          fontFamily: fonts.script,
          fontStyle: "italic",
          fontSize: "1.4rem",
          color: colors.white,
          margin: "0 0 0.5rem 0",
          fontWeight: 400,
          textShadow: "0 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        {member.name}
      </h3>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: isCouple ? colors.white : colors.skyBlue,
          margin: 0,
          fontWeight: 500,
        }}
      >
        {member.role}
      </p>
    </div>
  );
}
