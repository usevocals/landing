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
  /* Duplicate items 4x for seamless vertical loop (animate -50% = 2 sets) */
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="flex justify-center" style={{ padding: "100px 40px" }}>
      <div
        className="flex flex-col items-center"
        style={{ maxWidth: 1240, width: "100%", gap: 100 }}
      >
        {/* Marquee area */}
        <div className="flex items-center" style={{ gap: 20, width: "100%" }}>
          {/* Sparkle SVG */}
          <svg
            width="24"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.44 24.263c-2.266-.636-4.638-.957-6.94-1.25-.495-.062-.956.282-.991.766a.88.88 0 0 0 .744.99c2.23.283 4.532.585 6.691 1.197a.9.9 0 0 0 1.098-.61.881.881 0 0 0-.602-1.093Zm6.869-9.015c-3.647-3.722-7.754-6.964-11.33-10.786a.871.871 0 0 0-1.24-.043.87.87 0 0 0-.035 1.252c3.576 3.832 7.683 7.085 11.33 10.817a.913.913 0 0 0 1.275.011c.318-.342.354-.903 0-1.251ZM22.143.933l.318 6.39c0 .489.425.865.92.842.497-.024.85-.44.85-.928l-.318-6.4A.908.908 0 0 0 22.957 0a.881.881 0 0 0-.814.932Z"
              fill="#111"
            />
          </svg>

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

          {/* Scrolling items container */}
          <div
            style={{ height: 353, overflow: "hidden", flex: 1 }}
          >
            <div
              className="animate-marquee-v flex flex-col items-center"
              style={{ gap: 8 }}
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
            <div key={s.label} className="flex flex-col items-center" style={{ gap: 6 }}>
              <p style={{ fontSize: 32, fontWeight: 600, color: "#111", lineHeight: "44.8px", fontFamily: "var(--font-body)" }}>
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
