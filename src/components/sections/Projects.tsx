"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

/* ── Tag pill ─────────────────────────────────────────────────── */
function TagPill({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: "0.65rem",
        fontWeight: 700,
        background: "var(--accent-muted)",
        color: "var(--accent)",
        padding: "3px 10px",
        borderRadius: 99,
        border: "1px solid var(--accent)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-body)",
        opacity: 0.9,
      }}
    >
      {label}
    </span>
  );
}

/* ── Project Card ─────────────────────────────────────────────── */
interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  desc: string;
  color: string;
  accent: string;
  icon: string;
  image: string;
  link: string;
  platform: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [hov, setHov] = useState(false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block", breakInside: "avoid", marginBottom: 24 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        className="glass-card"
        style={{
          borderRadius: "var(--radius)",
          overflow: "hidden",
          cursor: "pointer",
          border: hov ? "1.5px solid var(--accent)" : "1.5px solid transparent",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(.22,1,.36,1)",
          boxShadow: hov ? "0 12px 40px rgba(232,93,38,0.18)" : "var(--shadow)",
          transform: hov ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden", height: 220, background: "var(--bg-subtle)" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            style={{
              objectFit: "cover",
              filter: hov ? "grayscale(0%) brightness(1.03)" : "grayscale(20%)",
              transform: hov ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.7s ease, filter 0.6s ease",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
            }}
          />
          {/* Platform badge */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: "var(--accent)",
              color: "#fff",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 99,
              fontFamily: "var(--font-body)",
            }}
          >
            {project.platform}
          </div>
          {/* Icon badge */}
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 14,
              fontSize: "1.4rem",
              lineHeight: 1,
            }}
          >
            {project.icon}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "18px 20px 20px" }}>
          <div style={{ marginBottom: 6 }}>
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              {project.subtitle}
            </span>
          </div>

          <h4
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--text-primary)",
              margin: "0 0 8px",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h4>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.8rem",
              lineHeight: 1.6,
              margin: "0 0 14px",
              fontFamily: "var(--font-body)",
            }}
          >
            {project.desc}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {project.tags.map((t: string) => (
                <TagPill key={t} label={t} />
              ))}
            </div>

            {/* Arrow */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              style={{
                opacity: hov ? 1 : 0,
                transform: hov ? "translate(2px,-2px)" : "translate(0,0)",
                transition: "opacity 0.25s ease, transform 0.25s ease",
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

/* ── Section ──────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section
      id="work"
      style={{
        padding: "90px 24px 100px",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blob decorations — matches rest of site */}
      <div
        className="blob"
        style={{
          width: 480,
          height: 480,
          background: "rgba(232,93,38,0.06)",
          top: "-80px",
          right: "-120px",
        }}
      />
      <div
        className="blob"
        style={{
          width: 340,
          height: 340,
          background: "rgba(232,93,38,0.04)",
          bottom: "0",
          left: "-80px",
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Section header ── */}
        <div
          className="reveal"
          suppressHydrationWarning
          style={{ textAlign: "center", marginBottom: 60 }}
        >
        
          <h2 className="section-title">
            Selected <span>Works</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: 12,
              fontSize: "0.88rem",
              maxWidth: 420,
              margin: "12px auto 0",
              fontFamily: "var(--font-body)",
              lineHeight: 1.65,
            }}
          >
            A curated set of projects spanning mobile apps, web platforms, and
            AI-powered tools.
          </p>
        </div>

        {/* ── Masonry Grid ── */}
        <div
          className="reveal proj-masonry"
          suppressHydrationWarning
          style={{ columnCount: 3, columnGap: 24 }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        {/* ── View all CTA ── */}
        <div
          className="reveal"
          suppressHydrationWarning
          style={{ textAlign: "center", marginTop: 16 }}
        >
          <Link
            href="/projects"
            className="btn-outline"
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            View All Projects
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        .proj-masonry {
          column-count: 3;
          column-gap: 24px;
        }
        @media (max-width: 1000px) {
          .proj-masonry { column-count: 2 !important; }
        }
        @media (max-width: 600px) {
          .proj-masonry { column-count: 1 !important; }
          #work { padding: 60px 16px 72px !important; }
        }
      `}</style>
    </section>
  );
}
