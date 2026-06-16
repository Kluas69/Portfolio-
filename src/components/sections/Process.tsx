import { PROCESS_STEPS, SITE_CONFIG } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div className="reveal" suppressHydrationWarning style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag">⚙️ Process</div>
          <h2 className="section-title">From Concept to Deployment — My <span>Seamless Development Process</span></h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 14, fontSize: "0.92rem", maxWidth: 540, margin: "14px auto 0" }}>
            I systematically bring your ideas to life through planning, design, development, testing, and deployment.
          </p>
        </div>

        {/* Steps */}
        <div className="process-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginBottom: 64 }}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="reveal glass-card" suppressHydrationWarning style={{ textAlign: "center", padding: "32px 24px", borderRadius: "var(--radius)", position: "relative" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "var(--accent-muted)", border: "2px solid var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem", margin: "0 auto 16px",
              }}>
                {step.icon}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>
                Step {step.num}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: 10, lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="cta-banner glass-card reveal" suppressHydrationWarning style={{
          background: "linear-gradient(135deg, var(--accent-muted) 0%, rgba(255,140,90,0.12) 100%)",
          border: "1.5px dashed var(--accent)",
          borderRadius: 20, padding: "48px 40px",
          display: "grid", gridTemplateColumns: "1fr auto",
          alignItems: "center", gap: 32,
        }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "var(--text-primary)", marginBottom: 10, lineHeight: 1.2 }}>
              Transforming Ideas Into <span style={{ color: "var(--accent)" }}>Reality</span>
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Contact me today to discuss your project and bring it to life.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={SITE_CONFIG.fiverr} target="_blank" rel="noopener noreferrer" className="btn-fiverr">🟢 Hire on Fiverr</a>
            <a href="#contact" className="btn-outline">About me</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-row { grid-template-columns: 1fr 1fr !important; gap: 14px !important; }
          .cta-banner { grid-template-columns: 1fr !important; padding: 28px 20px !important; }
          #process { padding: 60px 20px !important; }
        }
        @media (max-width: 480px) {
          .process-row { grid-template-columns: 1fr !important; }
          .process-row > div { padding: 24px 18px !important; }
          .process-row p { font-size: 0.78rem !important; }
        }
      `}</style>
    </section>
  );
}
