"use client";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

/* Platform badge icons */
function PlatformBadge({ platform }: { platform: "upwork" | "fiverr" | "linkedin" }) {
  if (platform === "upwork") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 99, background: "#14a80018", border: "1px solid #14a80040" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#14a800"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.476v7.082c-.001 1.402-1.141 2.543-2.543 2.543-1.401 0-2.541-1.141-2.541-2.543V3.492H1.17v7.082c0 2.914 2.37 5.285 5.286 5.285 2.915 0 5.285-2.371 5.285-5.285v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.427l1.368-6.443c.875.743 1.887 1.22 3.05 1.22 2.931 0 5.308-2.387 5.308-5.308-.001-2.929-2.378-5.308-5.434-5.308z"/></svg>
        <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#14a800" }}>Upwork</span>
      </div>
    );
  }
  if (platform === "fiverr") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 99, background: "#1dbf7318", border: "1px solid #1dbf7340" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#1dbf73"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.85c-.second-of-type 0 1-1.269 1-1.269V7.77h1.85V6.105h-1.85V4h-1.9v8.603c0 1.38 1.124 2.459 2.49 2.459l1.26-.003V11.883zM12.34 6.105h-1.9v1.666h-1.9V6.105H6.64v1.666H4.75v1.666h1.89v4.004c0 1.38 1.124 2.459 2.491 2.459h1.26V14.23l-1.26.003c-.55 0-.99-.454-.99-.994V9.437h1.9V7.771h-1.9V6.105h1.9-1.9V6.105zM18.21 6.105h-5.73v1.667h5.73V6.105z"/></svg>
        <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#1dbf73" }}>Fiverr</span>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 99, background: "#0a66c218", border: "1px solid #0a66c240" }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#0a66c2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#0a66c2" }}>LinkedIn</span>
    </div>
  );
}

/* Stars */
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

/* Assign platforms to testimonials */
const platforms: ("upwork" | "fiverr" | "linkedin")[] = ["upwork", "fiverr", "upwork", "linkedin", "fiverr", "upwork"];

export default function Testimonials() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="testimonials" style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" suppressHydrationWarning style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">💬 Testimonials</div>
          <h2 className="section-title">What Clients <span>Say</span></h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 14, fontSize: "0.92rem" }}>
            Verified reviews from Upwork, Fiverr & LinkedIn
          </p>
        </div>

        {/* Masonry-style grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i}
              className="reveal glass-card"
              suppressHydrationWarning
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 20,
                padding: "28px",
                position: "relative",
                transition: "all 0.3s cubic-bezier(.22,1,.36,1)",
                transform: hovered === i ? "translateY(-4px)" : "none",
                boxShadow: hovered === i ? "0 16px 48px rgba(232,93,38,0.1)" : "none",
                gridRow: i === 1 || i === 4 ? "span 1" : "span 1",
              }}>

              {/* Quote mark */}
              <div style={{
                position: "absolute", top: 20, right: 24,
                fontFamily: "Georgia, serif", fontSize: "4rem",
                color: "var(--accent)", opacity: 0.12, lineHeight: 1,
                userSelect: "none",
              }}>
                "
              </div>

              {/* Platform badge */}
              <div style={{ marginBottom: 16 }}>
                <PlatformBadge platform={platforms[i]} />
              </div>

              {/* Stars */}
              <div style={{ marginBottom: 14 }}>
                <Stars count={t.rating} />
              </div>

              {/* Review text */}
              <p style={{
                fontSize: "0.88rem", color: "var(--text-secondary)",
                lineHeight: 1.72, marginBottom: 24,
                fontStyle: "italic",
              }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: "var(--border)", marginBottom: 18 }} />

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg, var(--accent), var(--accent-light))`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.72rem", fontWeight: 800, color: "#fff",
                  fontFamily: "var(--font-display)", flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(232,93,38,0.25)",
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{t.role}</div>
                </div>
                {/* Verified check */}
                <div style={{ marginLeft: "auto", color: "#22c55e" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#22c55e20"/>
                    <path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="reveal" suppressHydrationWarning style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 40, marginTop: 56, flexWrap: "wrap",
        }}>
          {[
            { label: "200+ Reviews", sub: "on Upwork & Fiverr", icon: "⭐" },
            { label: "95% Job Success", sub: "Upwork Top Rated", icon: "🏆" },
            { label: "Level 2 Seller", sub: "Fiverr Certified", icon: "🟢" },
          ].map((item, i) => (
            <div key={i} className="glass-card" style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 24px", borderRadius: 16 }}>
              <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.92rem", color: "var(--text-primary)" }}>{item.label}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #testimonials > div > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          #testimonials > div > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 14px !important; }
          #testimonials { padding: 60px 20px !important; }
        }
        @media (max-width: 480px) {
          #testimonials > div > div:nth-child(2) > div { padding: 20px !important; }
          /* On mobile show only first 3 testimonials via CSS */
          #testimonials > div > div:nth-child(2) > div:nth-child(n+4) { display: none; }
        }
      `}</style>
    </section>
  );
}
