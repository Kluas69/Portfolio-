"use client";
import React from "react";
import { SERVICES } from "@/lib/data";

/* ── SVG brand icons ── */
const ICONS: Record<string, React.ReactElement> = {
  flutter: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#54C5F8">
      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#61DAFB">
      <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 5.008 4.488 2.744 6 1.988c1.483-.737 3.573.308 5.709 2.836l.31.371-.61.271a23.5 23.5 0 0 0-3.239 1.912l-.179.129-.195-.048A23.34 23.34 0 0 0 5.31 8.945zm1.4-5.421c-.97 0-1.68.281-2.098.504-.82.408-1.054 1.832-.764 3.899a25.048 25.048 0 0 1 3.2-.811 24.6 24.6 0 0 1 2.799-1.648c-1.32-1.292-2.448-1.944-3.137-1.944zM14.692 21.043l-.31-.371c-2.137-2.527-4.226-3.573-5.709-2.836-1.512.756-1.812 3.02-.823 6.49l.133.468-.472.119C4.018 23.749 2 22.241 2 20.5s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467z"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#3178C6">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFA611">
      <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#8CC84B">
      <path d="M11.998 24a1.362 1.362 0 0 1-.681-.183l-2.162-1.278c-.323-.181-.165-.245-.059-.283.431-.15.518-.184.977-.446a.17.17 0 0 1 .162.013l1.661 .985a.215.215 0 0 0 .201 0l6.479-3.741a.205.205 0 0 0 .101-.177V8.503a.207.207 0 0 0-.103-.18l-6.477-3.738a.204.204 0 0 0-.199 0L5.4 8.323a.208.208 0 0 0-.104.18v7.48c0 .072.04.14.104.175l1.774 1.024c.963.481 1.554-.086 1.554-.656V9.048a.188.188 0 0 1 .188-.188h.82a.187.187 0 0 1 .188.188v7.478c0 1.285-.7 2.023-1.917 2.023-.374 0-.669 0-1.489-.405l-1.699-.977a1.362 1.362 0 0 1-.681-1.18V8.503c0-.486.259-.937.681-1.18l6.481-3.742a1.415 1.415 0 0 1 1.361 0l6.479 3.742c.422.243.682.694.682 1.18v7.48c0 .486-.26.936-.682 1.18l-6.479 3.741a1.367 1.367 0 0 1-.68.183z"/>
    </svg>
  ),
  playstore: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#34A853">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z"/>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#47A248">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#F05032">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  ),
};

const ROW1 = [
  { name: "Flutter",      key: "flutter",     color: "#54C5F8" },
  { name: "React",        key: "react",       color: "#61DAFB" },
  { name: "TypeScript",   key: "typescript",  color: "#3178C6" },
  { name: "Firebase",     key: "firebase",    color: "#FFA611" },
  { name: "Node.js",      key: "nodejs",      color: "#8CC84B" },
  { name: "Next.js",      key: "nextjs",      color: "var(--text-primary)" },
  { name: "Play Store",   key: "playstore",   color: "#34A853" },
  { name: "Tailwind",     key: "tailwind",    color: "#38BDF8" },
  { name: "React Native", key: "react",       color: "#20D9D2" },
  { name: "MongoDB",      key: "mongodb",     color: "#47A248" },
  { name: "Git",          key: "git",         color: "#F05032" },
];

function SkillPill({ name, iconKey, color }: { name: string; iconKey: string; color: string }) {
  return (
    <div className="skill-pill glass-card" style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 18px",
      borderRadius: 99,
      whiteSpace: "nowrap",
      flexShrink: 0,
    }}>
      <span style={{
        width: 30, height: 30, borderRadius: "50%",
        background: `${color === "var(--text-primary)" ? "rgba(0,0,0,0.08)" : color + "20"}`,
        border: `1.5px solid ${color === "var(--text-primary)" ? "var(--border)" : color + "44"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        color: color === "var(--text-primary)" ? "var(--text-primary)" : color,
      }}>
        {ICONS[iconKey]}
      </span>
      <span style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "0.82rem",
        color: "var(--text-primary)",
        letterSpacing: "-0.01em",
      }}>
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof ROW1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{
      overflow: "hidden",
      width: "100%",
      WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
      maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
    }}>
      <div
        className={reverse ? "skill-marquee-r" : "skill-marquee-l"}
        style={{ display: "inline-flex", gap: 10 }}
      >
        {doubled.map((s, i) => (
          <SkillPill key={i} name={s.name} iconKey={s.key} color={s.color} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "90px 0", background: "var(--bg-subtle)", position: "relative", overflow: "hidden" }}>
      <div className="blob" style={{ width: 400, height: 400, background: "rgba(232,93,38,0.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" suppressHydrationWarning style={{ textAlign: "center", marginBottom: 52, padding: "0 24px" }}>
          <div className="section-tag">⚡ Expertise</div>
          <h2 className="section-title">Skills & <span>Proficiency</span></h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 12, fontSize: "0.88rem", maxWidth: 400, margin: "12px auto 0" }}>
            Full-stack across web, mobile, cloud & AI
          </p>
        </div>

        {/* Marquee row */}
        <div className="reveal" suppressHydrationWarning style={{ marginBottom: 52 }}>
          <MarqueeRow items={ROW1} />
        </div>

        {/* What I Build */}
        <div className="reveal skills-services" suppressHydrationWarning style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, padding: "0 24px" }}>
          {SERVICES.map((svc, i) => (
            <div key={i} className="glass-card" style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              textAlign: "center", gap: 10, padding: "20px 16px",
              borderRadius: 18,
              transition: "transform 0.25s cubic-bezier(.22,1,.36,1)",
              cursor: "default",
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: "var(--accent-muted)", border: "1px solid var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem",
              }}>
                {svc.icon}
              </div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.8rem", color: "var(--text-primary)", lineHeight: 1.3,
              }}>
                {svc.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes skillLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes skillRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .skill-marquee-l {
          animation: skillLeft 40s linear infinite;
        }
        .skill-marquee-r {
          animation: skillRight 48s linear infinite;
        }
        .skill-marquee-l:hover,
        .skill-marquee-r:hover {
          animation-play-state: paused;
        }
        .skill-pill {
          transition: transform 0.2s ease;
          cursor: default;
        }
        .skill-pill:hover {
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .skills-services { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #skills { padding: 60px 0 !important; }
        }
      `}</style>
    </section>
  );
}
