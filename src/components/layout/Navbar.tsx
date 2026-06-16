"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/data";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme, toggle } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    
    // If we're on a different page, navigate to home first
    if (pathname !== "/") {
      router.push("/" + href);
    }
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
        padding: scrolled ? "10px 0" : "16px 0",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "var(--text-primary)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            Zahid<span style={{ color: "var(--accent)" }}>.</span>
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={pathname === "/" ? link.href : "/" + link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  color: active === link.href ? "var(--accent)" : "var(--text-secondary)",
                  textDecoration: "none",
                  padding: "6px 13px",
                  borderRadius: 99,
                  transition: "all 0.2s",
                  background: active === link.href ? "var(--accent-muted)" : "transparent",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button onClick={toggle} className="theme-toggle" title="Toggle theme" style={{ marginLeft: 6 }}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Fiverr CTA */}
            <a href={SITE_CONFIG.fiverr} target="_blank" rel="noopener noreferrer" className="btn-fiverr" style={{ marginLeft: 8, padding: "9px 20px", fontSize: "0.82rem" }}>
              🟢 Hire on Fiverr
            </a>
          </div>

          {/* Mobile controls */}
          <div className="mobile-controls" style={{ display: "none", alignItems: "center", gap: 10 }}>
            <button onClick={toggle} className="theme-toggle">{theme === "light" ? "🌙" : "☀️"}</button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
              {[0,1,2].map((i) => (
                <span key={i} style={{
                  display: "block", width: 22, height: 2, background: "var(--text-primary)", borderRadius: 2,
                  transition: "all 0.3s ease", transformOrigin: "center",
                  transform: menuOpen && i===0 ? "translateY(7px) rotate(45deg)" : menuOpen && i===1 ? "scaleX(0)" : menuOpen && i===2 ? "translateY(-7px) rotate(-45deg)" : "none",
                  opacity: menuOpen && i===1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div style={{ maxHeight: menuOpen ? 480 : 0, overflow: "hidden", transition: "max-height 0.4s cubic-bezier(.22,1,.36,1)", background: "var(--nav-bg)", backdropFilter: "blur(18px)" }}>
          <div style={{ padding: "12px 24px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={pathname === "/" ? link.href : "/" + link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: active === link.href ? "var(--accent)" : "var(--text-primary)",
                  textDecoration: "none",
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: active === link.href ? "var(--accent-muted)" : "transparent",
                }}
              >
                {link.label}
              </a>
            ))}
            <a href={SITE_CONFIG.fiverr} target="_blank" rel="noopener noreferrer" className="btn-fiverr" style={{ marginTop: 8, justifyContent: "center" }}>
              🟢 Hire on Fiverr
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </>
  );
}
