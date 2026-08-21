import { colors, fonts, shadows } from "../styles/theme";
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
  const bestCouple = bridalTeam.filter((m) => m.role === "Best Man" || m.role === "Best Lady");
  const rest = bridalTeam.filter((m) => 
    m.role !== "Groom" && 
    m.role !== "Bride" && 
    m.role !== "Matron" && 
    m.role !== "Best Man" &&
    m.role !== "Best Lady"
  );

  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.royalBlue} 50%, ${colors.wineRed} 100%)`,
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floral Decorations - Varied patterns */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          right: "-20px",
          width: "230px",
          height: "230px",
          opacity: 0.14,
          pointerEvents: "none",
          transform: "rotate(-12deg)",
        }}
      >
        <img
          src="/cherry-blossom-pink-removebg-preview.png"
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
          top: "23%",
          left: "7%",
          width: "165px",
          height: "165px",
          opacity: 0.11,
          pointerEvents: "none",
          transform: "rotate(18deg)",
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

      <div
        style={{
          position: "absolute",
          bottom: "11%",
          right: "13%",
          width: "135px",
          height: "135px",
          opacity: 0.12,
          pointerEvents: "none",
          transform: "rotate(-22deg)",
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
          left: "-15px",
          width: "195px",
          height: "195px",
          opacity: 0.13,
          pointerEvents: "none",
          transform: "rotate(14deg)",
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
          top: "55%",
          right: "2%",
          width: "128px",
          height: "128px",
          opacity: 0.1,
          pointerEvents: "none",
          transform: "rotate(26deg)",
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
          top: "70%",
          left: "6%",
          width: "115px",
          height: "115px",
          opacity: 0.09,
          pointerEvents: "none",
          transform: "rotate(-24deg)",
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

      {/* Ring decoration */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "4%",
          width: "105px",
          height: "105px",
          opacity: 0.13,
          pointerEvents: "none",
        }}
      >
        <img
          src="/wedding-ring-png-45268.png"
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
        W A L K I N G &nbsp; T H I S &nbsp; A I S L E &nbsp; W I T H &nbsp; U S
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
        The Bridal Team
      </h2>

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
        padding: "1.75rem 1.25rem",
        background: isCouple 
          ? `linear-gradient(135deg, ${colors.rose} 0%, ${colors.coral} 100%)` 
          : "rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
        borderRadius: "12px",
        border: isCouple 
          ? `2px solid ${colors.gold}` 
          : `1px solid rgba(255,255,255,0.25)`,
        transition: "all 0.3s ease",
        boxShadow: isCouple 
          ? shadows.elegant 
          : shadows.medium,
        minWidth: "180px",
        flex: 1,
      }}
    >
      <h3
        style={{
          fontFamily: fonts.script,
          fontStyle: "italic",
          fontSize: "1.5rem",
          color: isCouple ? colors.wineRed : colors.white,
          margin: "0 0 0.75rem 0",
          fontWeight: isCouple ? 700 : 400,
          textShadow: isCouple ? "0 1px 2px rgba(255,255,255,0.3)" : "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        {member.name}
      </h3>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: isCouple ? colors.white : colors.skyBlue,
          margin: 0,
          fontWeight: 600,
          textShadow: isCouple ? "0 1px 3px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {member.role}
      </p>
    </div>
  );
}
