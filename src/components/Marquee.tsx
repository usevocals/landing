const marqueeItems = [
  "slow processes",
  "saturated call centers",
  "repetitive tasks",
  "low engagement",
  "incomplete data",
  "worthless calls",
  "eternal surveys",
];

const stats = [
  { value: "+100", label: "Satisfied customers" },
  { value: "500K+", label: "Completed calls" },
  { value: ">50%", label: "Conversion" },
  { value: "<14 days", label: "Full Integration" },
];

export default function Marquee() {
  // Duplicate items for seamless loop
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="flex justify-center" style={{ padding: "100px 40px" }}>
      <div
        className="flex flex-col items-center"
        style={{ maxWidth: 1240, width: "100%", gap: 100 }}
      >
        {/* Marquee area */}
        <div className="flex items-center" style={{ width: 1030, gap: 20 }}>
          {/* Photos column (small avatars) */}
          <div className="flex flex-col" style={{ gap: 20, flexShrink: 0 }}>
            <div className="flex" style={{ gap: 6 }}>
              <img src="/images/stats-woman.png" alt="" style={{ width: 28, height: 28, borderRadius: 6, objectFit: "cover" }} />
              <img src="/images/stats-avatar.png" alt="" style={{ width: 28, height: 28, borderRadius: 6, objectFit: "cover" }} />
              <img src="/images/stats-man.png" alt="" style={{ width: 28, height: 28, borderRadius: 6, objectFit: "cover" }} />
            </div>
          </div>

          {/* "Say goodbye to" */}
          <h2
            className="font-heading"
            style={{
              fontSize: 52,
              fontWeight: 600,
              lineHeight: "62.4px",
              color: "#111",
              flexShrink: 0,
            }}
          >
            Say goodbye to
          </h2>

          {/* Scrolling items */}
          <div
            className="relative flex-1"
            style={{ height: 353, overflow: "hidden" }}
          >
            <div
              className="animate-marquee-v flex flex-col"
              style={{ gap: 10 }}
            >
              {items.map((text, i) => (
                <h2
                  key={i}
                  className="font-heading"
                  style={{
                    fontSize: 52,
                    fontWeight: 600,
                    lineHeight: "62.4px",
                    color: "#000",
                    whiteSpace: "nowrap",
                  }}
                >
                  {text}
                </h2>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center justify-between"
          style={{ width: "100%", padding: "0 100px" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center" style={{ gap: 30 }}>
              <p style={{ fontSize: 32, fontWeight: 600, color: "#111", fontFamily: "var(--font-body)" }}>
                {s.value}
              </p>
              <p style={{ fontSize: 16, fontWeight: 500, color: "#4c4c4c" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
