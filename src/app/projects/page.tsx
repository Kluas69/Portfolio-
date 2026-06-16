"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PROJECTS, SITE_CONFIG } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── types ─────────────────────────────────────────────────────── */
type Project = (typeof PROJECTS)[number];

const ALL_TAGS = ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))];

/* ─── Tag Pill ───────────────────────────────────────────────────── */
function TagPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "6px 14px",
        borderRadius: 99,
        border: active ? "1.5px solid var(--accent)" : "1.5px solid var(--border)",
        background: active ? "var(--accent-muted)" : "transparent",
        color: active ? "var(--accent)" : "var(--text-secondary)",
        cursor: onClick ? "pointer" : "default",
        whiteSpace: "nowrap",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        if (!active && onClick) {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
          (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active && onClick) {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
        }
      }}
    >
      {label}
    </button>
  );
}

/* ─── Project Card ───────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hov, setHov] = useState(false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        display: "block",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        className="glass-card"
        style={{
          borderRadius: "var(--radius)",
          overflow: "hidden",
          border: hov ? "1.5px solid var(--accent)" : "1.5px solid transparent",
          transition:
            "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.35s cubic-bezier(.22,1,.36,1)",
          transform: hov ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hov
            ? "0 16px 48px rgba(232,93,38,0.2)"
            : "var(--shadow)",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", height: 240, overflow: "hidden", background: "var(--bg-subtle)" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading={index < 3 ? "eager" : "lazy"}
            priority={index < 3}
            style={{
              objectFit: "cover",
              filter: hov ? "grayscale(0%) brightness(1.04)" : "grayscale(15%)",
              transform: hov ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.7s ease, filter 0.6s ease",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)",
            }}
          />
          {/* Platform badge */}
          <div
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
              background: "var(--accent)",
              borderRadius: 99,
              padding: "4px 11px",
            }}
          >
            {project.platform}
          </div>
          {/* Icon */}
          <div
            style={{
              position: "absolute",
              bottom: 14,
              left: 16,
              fontSize: "1.6rem",
              lineHeight: 1,
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))",
            }}
          >
            {project.icon}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "22px 24px 24px" }}>
          {/* Subtitle */}
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 8,
            }}
          >
            {project.subtitle}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.1rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              margin: "0 0 10px",
            }}
          >
            {project.title}
          </h3>

          {/* Desc */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
              margin: "0 0 18px",
            }}
          >
            {project.desc}
          </p>

          {/* Footer row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    background: "var(--accent-muted)",
                    border: "1px solid var(--accent)",
                    padding: "3px 9px",
                    borderRadius: 99,
                    whiteSpace: "nowrap",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              style={{
                opacity: hov ? 1 : 0,
                transform: hov ? "translate(2px,-2px)" : "translate(0,0)",
                transition: "opacity 0.25s, transform 0.25s",
                flexShrink: 0,
              }}
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  useScrollReveal();

  const filtered =
    activeTag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      <Navbar />

      <main
        style={{
          background: "var(--bg)",
          minHeight: "100vh",
          paddingTop: 100,
          paddingBottom: 80,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Ambient blobs — match site style ── */}
        <div
          className="blob"
          style={{
            width: 500,
            height: 500,
            background: "rgba(232,93,38,0.06)",
            top: "-10%",
            right: "-8%",
          }}
        />
        <div
          className="blob"
          style={{
            width: 380,
            height: 380,
            background: "rgba(232,93,38,0.04)",
            bottom: "10%",
            left: "-6%",
          }}
        />

        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Header ── */}
          <div
            style={{
              borderBottom: "1px solid var(--border)",
              paddingBottom: 40,
              marginBottom: 52,
            }}
          >
            {/* Breadcrumb */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 28,
              }}
            >
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                Home
              </Link>
              <span style={{ color: "var(--border)", fontSize: "0.75rem" }}>/</span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: "var(--accent)",
                }}
              >
                All Projects
              </span>
            </div>

            <div className="projects-header">
              <div>
                <div className="section-tag" style={{ marginBottom: 18 }}>
                  🖥️ Portfolio — {PROJECTS.length} Projects
                </div>
                <h1 className="section-title" style={{ marginBottom: 14 }}>
                  All <span>Works</span>
                </h1>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                    maxWidth: 540,
                    margin: 0,
                  }}
                >
                  A complete showcase of web platforms, mobile apps, and AI-powered
                  solutions — built with precision, creativity, and clean code.
                </p>
              </div>

              <div className="projects-header-cta">
                <a
                  href={SITE_CONFIG.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  🟢 Hire on Fiverr
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Filter bar ── */}
          <div
            style={{
              marginBottom: 48,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)",
                }}
              >
                Filter by:
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                }}
              >
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="filter-tags">
              {ALL_TAGS.map((tag) => (
                <TagPill
                  key={tag}
                  label={tag}
                  active={activeTag === tag}
                  onClick={() => setActiveTag(tag)}
                />
              ))}
            </div>
          </div>

          {/* ── Grid ── */}
          {filtered.length > 0 ? (
            <div className="projects-grid">
              {filtered.map((project, i) => (
                <ProjectCard key={`${project.title}-${i}`} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "80px 24px",
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
              }}
            >
              No projects match this filter.
            </div>
          )}

          {/* ── Bottom CTA ── */}
          <div
            style={{
              marginTop: 80,
              borderTop: "1px solid var(--border)",
              paddingTop: 60,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 22,
              textAlign: "center",
            }}
          >
            <div className="section-tag">✦ Let&apos;s Collaborate</div>
            <h2
              className="section-title"
              style={{
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Have a project <span>in mind?</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                maxWidth: 460,
                margin: 0,
              }}
            >
              Let&apos;s build something remarkable together. Reach out via Fiverr
              or drop me a message.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: 8,
              }}
            >
              <a
                href={SITE_CONFIG.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                🟢 Hire on Fiverr
              </a>
              <Link href="/#contact" className="btn-outline">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        .projects-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }

        .filter-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .projects-header {
            flex-direction: column;
            gap: 24px;
          }
          .projects-header-cta {
            width: 100%;
          }
          .projects-header-cta a {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          main {
            padding-top: 80px !important;
            padding-bottom: 60px !important;
          }
        }
      `}</style>
    </>
  );
}
