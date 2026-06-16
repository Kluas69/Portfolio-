import { SITE_CONFIG, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Top row */}
        <div className="footer-top" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Logo */}
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem", color: "#fff", letterSpacing: "-0.02em" }}>
            ✦ {SITE_CONFIG.name}
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}
                style={{ fontSize: "0.82rem", color: "#555", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}>
                {link.label}
              </a>
            ))}
            <a href={SITE_CONFIG.fiverr} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "0.82rem", color: "#1DBF73", textDecoration: "none", fontWeight: 700 }}>
              Fiverr ↗
            </a>
          </div>

          {/* Social row */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { icon: "𝕏",  href: "#",                    label: "Twitter" },
              { icon: "in", href: SITE_CONFIG.linkedin,    label: "LinkedIn" },
              { icon: "⌨",  href: SITE_CONFIG.github,      label: "GitHub" },
              { icon: "💬", href: SITE_CONFIG.whatsapp,    label: "WhatsApp" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.78rem", color: "#666", textDecoration: "none",
                  transition: "all 0.2s", fontWeight: 700,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "#666"; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.78rem", color: "#444" }}>
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "#333" }}>
            Terms · Privacy · Cookies
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-top { flex-direction: column; align-items: flex-start !important; }
          footer { padding: 32px 20px !important; }
        }
      `}</style>
    </footer>
  );
}
