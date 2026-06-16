"use client";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", budget: "", message: "" });
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: focused === field ? "var(--bg)" : "var(--bg-subtle)",
    border: `1.5px solid ${focused === field ? "var(--accent)" : "var(--border)"}`,
    borderRadius: 12,
    padding: "13px 16px",
    fontSize: "0.88rem",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "all 0.2s",
  });

  const quickLinks = [
    {
      label: "WhatsApp",
      sub: "Chat directly",
      href: SITE_CONFIG.whatsapp,
      color: "#25D366",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      sub: "Connect professionally",
      href: SITE_CONFIG.linkedin,
      color: "#0A66C2",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Fiverr",
      sub: "Hire me instantly",
      href: SITE_CONFIG.fiverr,
      color: "#1DBF73",
      icon: (
        <img
          src="/fiverr.png"
          alt="Fiverr"
          width={28}
          height={28}
          style={{ objectFit: "contain", display: "block" }}
        />
      ),
    },
    {
      label: "Play Store",
      sub: "View my apps",
      href: SITE_CONFIG.playstore,
      color: "#34A853",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#34A853">
          <path d="M3.18 23.76c.37.2.8.22 1.21.04l12.32-6.96-2.67-2.67-10.86 9.59zm-1.76-20.1C1.16 3.99 1 4.37 1 4.8v14.4c0 .43.16.81.42 1.14l.07.07L8.9 13l-7.41-9.27-.07-.07zM20.1 9.4l-2.43-1.38-3.01 3.01 3.01 3.01 2.46-1.39c.7-.4.7-1.86-.03-2.25zM4.39.28L16.71 7.24l-2.67 2.67L3.18.32C3.59.13 4.02.16 4.39.28z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        background: "var(--bg-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG blob */}
      <div
        className="blob"
        style={{
          width: 600,
          height: 600,
          background: "rgba(232,93,38,0.06)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Big bold header — pro feel */}
        <div className="reveal" suppressHydrationWarning style={{ marginBottom: 72 }}>
          <div className="section-tag">📬 Let&apos;s Connect</div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              marginTop: 16,
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  color: "var(--text-primary)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.035em",
                }}
              >
                Let&apos;s Build
                <br />
                <span style={{ color: "var(--accent)" }}>Something</span>
                <br />
                Great Together.
              </h2>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: 360,
              }}
            >
              Whether you need a mobile app on the Play Store, a full-stack web
              platform, or an AI-powered solution — I&apos;m ready to help you
              build it right.
            </p>
          </div>
        </div>

        {/* Main two-column layout */}
        <div
          className="contact-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* LEFT — quick reach */}
          <div className="reveal-left" suppressHydrationWarning>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Quick Reach
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 36,
              }}
            >
              {quickLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = s.color;
                    el.style.background = `${s.color}0a`;
                    el.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--bg-card)";
                    el.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="glass-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      borderRadius: 14,
                      padding: "14px 18px",
                      transition: "all 0.25s",
                      color: "var(--text-primary)",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${s.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: "var(--text-primary)",
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {s.sub}
                      </div>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--text-muted)"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div
              className="glass-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 20px",
                borderRadius: 14,
              }}
            >
              <div className="avail-dot" />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#22c55e",
                  }}
                >
                  Available for Work
                </div>
                <div
                  style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}
                >
                  Mon–Fri, 9am–6pm PKT · Response within 24h
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="reveal" suppressHydrationWarning>
            <div
              className="contact-form-card glass-card"
              style={{
                borderRadius: 24,
                padding: "36px",
              }}
            >
              {sent ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "var(--accent-muted)",
                      border: "2px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      margin: "0 auto 20px",
                    }}
                  >
                    🎉
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      color: "var(--text-primary)",
                      marginBottom: 8,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                    }}
                  >
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 18 }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        color: "var(--text-primary)",
                        marginBottom: 4,
                      }}
                    >
                      Send a Message
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      I&apos;ll respond within 24 hours.
                    </p>
                  </div>

                  <div
                    className="contact-form-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                    }}
                  >
                    {[
                      {
                        label: "Your Name",
                        type: "text",
                        key: "name",
                        placeholder: "John Smith",
                      },
                      {
                        label: "Email Address",
                        type: "email",
                        key: "email",
                        placeholder: "you@email.com",
                      },
                    ].map((f) => (
                      <div key={f.key}>
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.72rem",
                            color: "var(--text-muted)",
                            marginBottom: 6,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={(form as Record<string, string>)[f.key]}
                          onChange={(e) =>
                            setForm({ ...form, [f.key]: e.target.value })
                          }
                          onFocus={() => setFocused(f.key)}
                          onBlur={() => setFocused(null)}
                          style={inputStyle(f.key)}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Budget select */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        marginBottom: 6,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Project Budget
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) =>
                        setForm({ ...form, budget: e.target.value })
                      }
                      onFocus={() => setFocused("budget")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle("budget"),
                        appearance: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="">Select a range...</option>
                      <option>Under $500</option>
                      <option>$500 – $1,500</option>
                      <option>$1,500 – $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        marginBottom: 6,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Project Details
                    </label>
                    <textarea
                      placeholder="Tell me about your project, timeline, and goals..."
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle("message"),
                        resize: "vertical",
                        minHeight: 110,
                      }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="btn-primary"
                    style={{ justifyContent: "center", padding: "14px" }}
                  >
                    Send Message
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #contact { padding: 60px 20px !important; }
          #contact .contact-form-grid { grid-template-columns: 1fr !important; }
          #contact .contact-form-card { padding: 22px 18px !important; }
          #contact h2 { font-size: clamp(1.8rem, 8vw, 2.6rem) !important; }
          #contact > div > div:first-child { margin-bottom: 40px !important; }
          #contact > div > div:first-child > div > p { display: none; }
        }
      `}</style>
    </section>
  );
}
