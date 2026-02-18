const points = [
  "AI-powered mass dialing – 500 calls every 10 minutes.",
  "Question flows – Surveys, verifications, forms.",
  "Real-time analysis – Each response arrives structured",
  "100% self-sufficient - You don't have to worry about anything",
];

function GradientCheckIcon() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: 27,
        height: 27,
        borderRadius: 8,
        flexShrink: 0,
        boxShadow: "0 6px 12px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          width: 27,
          height: 27,
          borderRadius: 9,
          padding: 1,
          background: "linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: 25,
            height: 25,
            borderRadius: 8,
            background: "linear-gradient(180deg, #4c4c4c 0%, #111 100%)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Technology() {
  return (
    <section className="flex justify-center" style={{ padding: "100px 40px" }}>
      <div className="flex" style={{ maxWidth: 1240, width: "100%", gap: 60 }}>
        {/* Left - Image with floating elements */}
        <div
          className="relative"
          style={{ width: 590, height: 507, flexShrink: 0, borderRadius: 20, overflow: "hidden" }}
        >
          <img
            src="/images/tech-woman.png"
            alt="Technology demo"
            style={{ width: "100%", height: "100%", borderRadius: 20, objectFit: "cover" }}
          />

          {/* Floating avatar strip */}
          <div
            className="absolute flex items-center"
            style={{ bottom: 50, left: 208, gap: 6 }}
          >
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/images/avatar${i}.png`}
                alt=""
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "2px solid white",
                }}
              />
            ))}
          </div>

          {/* Dark pill dial indicator */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              bottom: 50,
              left: 208,
              width: 174,
              height: 42,
              backgroundColor: "#111",
              borderRadius: 100,
            }}
          />

          {/* Red vertical line */}
          <div
            className="absolute"
            style={{
              bottom: 62,
              left: 294,
              width: 1,
              height: 76,
              backgroundColor: "#ff2f2f",
            }}
          />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col" style={{ gap: 40 }}>
          <div className="flex flex-col" style={{ gap: 10 }}>
            <p style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>
              Features
            </p>
            <h2
              className="font-heading"
              style={{ fontSize: 52, fontWeight: 600, lineHeight: "62.4px", color: "#111" }}
            >
              Technology that works for you
            </h2>
            <p style={{ fontSize: 17, fontWeight: 500, color: "#4c4c4c", lineHeight: "25.5px" }}>
              Automate calls, capture information at scale, and improve your
              operations without adding complexity.
            </p>
          </div>

          <div className="flex flex-col" style={{ gap: 14 }}>
            {points.map((p) => (
              <div key={p} className="flex items-center" style={{ gap: 10 }}>
                <GradientCheckIcon />
                <span style={{ fontSize: 18, fontWeight: 500, color: "#4c4c4c", lineHeight: "27px" }}>
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
