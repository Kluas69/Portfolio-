"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SITE_CONFIG, STATS } from "@/lib/data";
import { useCounter } from "@/hooks/useCounter";

function StatItem({
  value,
  suffix,
  label,
  delay,
  visible,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  visible: boolean;
}) {
  const [started, setStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!visible || isMobile) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [visible, delay, isMobile]);

  const count = useCounter(value, 2800, started && !isMobile);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "0 28px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          color: "var(--accent)",
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        {isMobile ? value : (started ? count : 0)}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          fontWeight: 500,
          marginTop: 6,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function Sunburst({
  size = 90,
  color = "#e85d26",
  opacity = 1,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      width={size}
      height={size}
      style={{ opacity }}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={i}
          x1="45"
          y1="4"
          x2="45"
          y2="22"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          transform={`rotate(${i * 22.5} 45 45)`}
        />
      ))}
      <circle cx="45" cy="45" r="13" fill={color} />
    </svg>
  );
}

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 60px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      {/* Grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
          opacity: 0.5,
        }}
      />

      {/* Sunbursts */}
      <div
        className="animate-float sunburst-tr"
        style={{ position: "absolute", top: 72, right: 100, zIndex: 1 }}
      >
        <Sunburst size={100} />
      </div>
      <div
        className="animate-float sunburst-bl"
        style={{
          position: "absolute",
          bottom: 140,
          left: 72,
          zIndex: 1,
          animationDelay: "1s",
        }}
      >
        <Sunburst size={74} opacity={0.65} />
      </div>

      {/* Ghosted arch decorations */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: -50,
            left: `calc(50% - 220px + ${i * 180}px)`,
            width: 140,
            height: 180,
            border: "2px solid var(--border)",
            borderRadius: "70px 70px 0 0",
            opacity: 0.25,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      {/* BG blobs */}
      <div
        className="blob"
        style={{
          width: 480,
          height: 480,
          background: "rgba(232,93,38,0.07)",
          top: -60,
          right: -100,
        }}
      />
      <div
        className="blob"
        style={{
          width: 320,
          height: 320,
          background: "rgba(232,93,38,0.05)",
          bottom: 0,
          left: -80,
        }}
      />

      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          width: "100%",
          padding: "0 16px",
          boxSizing: "border-box",
        }}
      >
        {/* Social icons top-left */}
        <div
          className="hero-socials animate-fadeUp"
          style={{
            position: "absolute",
            top: -50,
            left: 0,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          {[
            {
              label: "Fiverr",
              href: SITE_CONFIG.fiverr,
              bg: "#1dbf73",
              svg: (
                <Image
                  src="/fiverr.png"
                  alt="Fiverr"
                  width={32}
                  height={32}
                  style={{ objectFit: "contain", }}
                />
              ),
            },
            {
              label: "LinkedIn",
              href: SITE_CONFIG.linkedin ?? "#",
              bg: "#0A66C2",
              svg: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              label: "GitHub",
              href: SITE_CONFIG.github ?? "#",
              bg: "#333",
              svg: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "var(--bg-card)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = s.bg;
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = s.bg;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--bg-card)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              {s.svg}
            </a>
          ))}
        </div>

        {/* Avatar */}
        <div
          className="animate-fadeUp"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: "3px solid var(--accent)",
              boxShadow: "0 0 0 6px var(--bg), 0 0 0 9px var(--accent-muted)",
              overflow: "hidden",
              flexShrink: 0,
              background: "var(--bg-card)",
            }}
          >
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={100}
              height={100}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Hi badge */}
        <div
          className="animate-fadeUp delay-100"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 22,
          }}
        >
          <span
            style={{
              fontSize: "0.92rem",
              color: "var(--text-secondary)",
              fontWeight: 500,
            }}
          >
            👋 Hi, I&apos;m {SITE_CONFIG.name}
          </span>
        </div>

        {/* ═══════════════════════════════════════════
            HEADLINE
            Line 1:  Passionate  [ Full-Stack 📱 Flutter ]
            Line 2:  [ Developer ]  Building Beautiful Apps
        ═══════════════════════════════════════════ */}
        <div className="animate-fadeUp delay-200" style={{ marginBottom: 22 }}>
          <h1 className="hero-h1">
            {/* LINE 1 */}
            <span className="hero-line">
              <span className="hero-pill hero-pill-1">Full-Stack Flutter</span>
            </span>

            {/* LINE 2 */}
            <span className="hero-line">
              <span className="hero-pill hero-pill-2">Developer</span>
            </span>
          </h1>
        </div>

        {/* Bio */}
        <p
          className="animate-fadeUp delay-300 hero-bio"
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            maxWidth: 540,
            margin: "0 auto 36px",
          }}
        >
          {SITE_CONFIG.bio}
        </p>

        {/* CTAs */}
        <div
          className="animate-fadeUp delay-400"
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 60,
          }}
        >
          <a href="#work" className="btn-primary">
            Explore Portfolio
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={SITE_CONFIG.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fiverr"
          >
            🟢 Hire on Fiverr
          </a>
          <a href="#contact" className="btn-outline">
            Let&apos;s Talk
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="animate-fadeUp delay-500 stats-row">
          <div className="glass-card stats-container">
            {STATS.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <StatItem {...s} delay={i * 120} visible={statsVisible} />
                {i < STATS.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      height: 40,
                      background: "var(--border)",
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.5,
        }}
      >
        <div style={{ width: 1, height: 40, background: "var(--accent)" }} />
        <span
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            fontWeight: 600,
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`

        /* ── Stats row ── */
        .stats-row {
          width: 100%;
        }
        .stats-container {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          padding: 24px 8px;
          flex-wrap: nowrap;
          overflow: hidden;
        }

        /* ── Sunbursts: hide on small screens ── */
        @media (max-width: 479px) {
          .sunburst-tr { display: none; }
          .sunburst-bl { display: none; }
        }

        /* ── Headline ───────────────────────────────────────────── */
        .hero-h1 {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          line-height: 1.3;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin: 0;
        }

        /* Each line: pill + word, centered, wrap-safe */
        .hero-line {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.25em;
          flex-wrap: wrap;          /* KEY FIX: wrap instead of overflow */
        }
        .hero-line:first-child { margin-bottom: 0.12em; }

        /* ── Pills ───────────────────────────────────────────────── */
        .hero-pill {
          display: inline-flex;
          align-items: center;
          border: 2.5px solid var(--accent);
          padding: 0.05em 0.38em 0.09em 0.35em;
          line-height: inherit;
          position: relative;
          opacity: 0;
          animation: pillReveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          white-space: nowrap;
        }
        .hero-pill-1 {
          border-radius: 14px 14px 14px 0;
          animation-delay: 0.42s;
        }
        .hero-pill-2 {
          border-radius: 0 14px 14px 14px;
          animation-delay: 0.58s;
        }

        @keyframes pillReveal {
          from { opacity: 1; clip-path: inset(0 100% 0 0 round 14px); }
          to   { opacity: 1; clip-path: inset(0 0%   0 0 round 14px); }
        }

        .hero-pill::after {
          content: "";
          position: absolute;
          inset: -3px;
          border: 2px solid var(--accent);
          opacity: 0;
          pointer-events: none;
          animation: pillPulse 3.5s ease-in-out 1.8s infinite;
        }
        .hero-pill-1::after { border-radius: 16px 16px 16px 0; }
        .hero-pill-2::after { border-radius: 0 16px 16px 16px; }

        @keyframes pillPulse {
          0%, 100% { opacity: 0;    transform: scale(1);     }
          50%       { opacity: 0.28; transform: scale(1.014); }
        }

        /* ── Plain words ─────────────────────────────────────────── */
        .hero-plain {
          display: inline-block;
          opacity: 0;
          white-space: nowrap;
          animation: wordUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-plain-1 { animation-delay: 0.24s; }
        .hero-plain-2 { animation-delay: 0.72s; }

        @keyframes wordUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        /* ── Tablet ── */
        @media (max-width: 767px) and (min-width: 480px) {
          .hero-h1 { font-size: clamp(1.4rem, 5vw, 2rem); }
        }

        /* ── Mobile ──────────────────────────────────────────────────
           Drop the scale() hack entirely.
           Use fluid clamp() font size + flex-wrap on .hero-line
           so pills and words reflow naturally without overflow.
        ──────────────────────────────────────────────────────────── */
        @media (max-width: 479px) {
          .hero-section { padding: 90px 20px 50px !important; }
          .hero-content { padding: 0; width: 100%; }

          .hero-socials {
            position: static !important;
            top: auto !important;
            left: auto !important;
            gap: 6px;
            margin-bottom: 20px;
            width: 100%;
            justify-content: center;
          }

          /* Natural fluid scaling — no transform hacks */
          .hero-h1 {
            font-size: clamp(1.2rem, 6.5vw, 1.65rem);
            line-height: 1.4;
          }

          /* Pills can stack onto their own line on very narrow screens */
          .hero-line {
            gap: 0.2em 0.3em;
            row-gap: 0.3em;
          }

          .hero-bio {
            font-size: 0.85rem !important;
            line-height: 1.65 !important;
          }

          /* Stats: 2-column grid on mobile */
          .stats-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
            padding: 16px 0;
            overflow: visible;
          }
          /* Hide vertical dividers inside grid */
          .stats-container > div > div[style*="width: 1"] {
            display: none;
          }
        }

      `}</style>
    </section>
  );
}
