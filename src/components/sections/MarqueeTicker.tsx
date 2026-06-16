import { MARQUEE_ITEMS } from "@/lib/data";

export default function MarqueeTicker() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{ background: "var(--text-primary)", padding: "14px 0", overflow: "hidden" }}>
      <div className="marquee-track" style={{ display: "inline-flex" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "0 28px", whiteSpace: "nowrap" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.88rem", color: "var(--bg)", letterSpacing: "0.04em" }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
