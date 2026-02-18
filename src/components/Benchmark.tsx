const otherSolutions = [
  "Manual or semi-automatic calls",
  "Large teams to manage volume",
  "Low response rate due to poorly optimized schedules",
  "Rigid and non-customizable surveys",
  "Slow and error-prone qualification",
  "Limited or non-existent integrations",
  "High costs per call and per agent",
];

const vocalsSolutions = [
  "Large-scale automatic dialing",
  "Integration ready in days",
  "Dynamic and adaptive surveys",
  "Intelligent scheduling optimization",
  "Ultra-fast operating cycles",
  "Seamless integration with internal systems",
  "Real-time structured data",
];

export default function Benchmark() {
  return (
    <section className="flex justify-center" style={{ padding: "100px 40px" }}>
      <div
        className="flex flex-col items-center"
        style={{ maxWidth: 1000, width: "100%", gap: 80 }}
      >
        {/* Header */}
        <div className="flex flex-col items-center" style={{ gap: 14 }}>
          <p style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>
            Benchmark
          </p>
          <h2
            className="font-heading"
            style={{
              fontSize: 52,
              fontWeight: 600,
              lineHeight: "62.4px",
              color: "#111",
              textAlign: "center",
            }}
          >
            What makes Vocals different?
          </h2>
          <p
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#3d3d3d",
              lineHeight: "27px",
              textAlign: "center",
              maxWidth: 700,
            }}
          >
            Discover how Vocals outperforms traditional solutions with true
            automation, accurate data, and a radically faster and more efficient
            experience.
          </p>
        </div>

        {/* Cards row */}
        <div className="relative flex" style={{ gap: 80 }}>
          {/* Other solutions card */}
          <div style={{ width: 460, borderRadius: 20, backgroundColor: "#e8e4e2", padding: 2 }}>
            <div style={{ padding: "30px 24px" }}>
              <p style={{ fontSize: 24, fontWeight: 700, color: "#1e1e1e" }}>
                OTHER SOLUTIONS
              </p>
            </div>
            <div className="flex flex-col" style={{ padding: "30px", gap: 20 }}>
              {otherSolutions.map((item) => (
                <div key={item} className="flex items-start" style={{ gap: 12 }}>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 4,
                      backgroundColor: "rgba(76,76,76,0.15)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4c4c4c" strokeWidth="3" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 500, color: "#4c4c4c", lineHeight: "27px" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* V/S badge - centered between cards */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#111",
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 500, color: "#fff" }}>V/S</span>
          </div>

          {/* Vocals card - gradient border */}
          <div
            style={{
              width: 460,
              borderRadius: 20,
              padding: 2,
              background: "linear-gradient(180deg, rgb(255,47,47) 0%, rgb(239,123,22) 35.88%, rgb(138,67,225) 69.92%, rgb(213,17,253) 100%)",
            }}
          >
            <div
              className="flex flex-col"
              style={{
                backgroundColor: "#fff",
                borderRadius: 18,
              }}
            >
              {/* Top section - logo */}
              <div style={{ padding: "20px 24px" }}>
                <img src="/images/logo.png" alt="Vocals" style={{ height: 24 }} />
              </div>
              {/* Bottom section - items */}
              <div
                className="flex flex-col"
                style={{ padding: "24px 30px", gap: 20 }}
              >
              {vocalsSolutions.map((item) => (
                <div key={item} className="flex items-start" style={{ gap: 12 }}>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 4,
                      backgroundColor: "#27b32c",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 500, color: "#4c4c4c", lineHeight: "27px" }}>
                    {item}
                  </span>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: "#111",
            borderRadius: 8,
            padding: "12px 14px",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Contact
        </a>
      </div>
    </section>
  );
}
