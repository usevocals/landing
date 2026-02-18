const points = [
  "AI-powered mass dialing \u2013 500 calls every 10 minutes.",
  "Question flows \u2013 Surveys, verifications, forms.",
  "Real-time analysis \u2013 Each response arrives structured",
  "100% self-sufficient - You don't have to worry about anything",
];

export default function Technology() {
  return (
    <section className="flex justify-center" style={{ padding: "100px 40px" }}>
      <div className="flex items-center" style={{ maxWidth: 1240, width: "100%", gap: 60 }}>
        {/* Left - Image with floating elements */}
        <div className="relative" style={{ width: 590, flexShrink: 0 }}>
          <img
            src="/images/feature-woman.png"
            alt="Technology demo"
            style={{ width: 590, height: 570, borderRadius: 20, objectFit: "cover" }}
          />

          {/* Floating avatars row */}
          <div
            className="absolute flex"
            style={{ bottom: 80, left: -10, gap: 6 }}
          >
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/images/avatar${i}.png`}
                alt="Avatar"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "2px solid white",
                }}
              />
            ))}
          </div>

          {/* Dial call card */}
          <div
            className="absolute flex items-center"
            style={{
              bottom: 30,
              left: -10,
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: "10px 16px",
              gap: 10,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: "rgba(255,47,47,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff2f2f" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>Dial call</span>
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col" style={{ gap: 20 }}>
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
          </div>

          <p style={{ fontSize: 17, fontWeight: 500, color: "#4c4c4c", lineHeight: "25.5px" }}>
            Automate calls, capture information at scale, and improve your
            operations without adding complexity.
          </p>

          <div className="flex flex-col" style={{ gap: 14, marginTop: 10 }}>
            {points.map((p) => (
              <div key={p} className="flex items-center" style={{ gap: 10 }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "#111",
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
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
