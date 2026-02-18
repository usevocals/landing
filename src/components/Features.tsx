const features = [
  {
    color: "#8a43e1",
    title: "Smart Dialing",
    desc: "Dial thousands of calls per day automatically, optimizing schedules and prioritizing contacts with the highest probability of response.",
  },
  {
    color: "#d511fd",
    title: "Dynamic Surveys",
    desc: "Create personalized question flows that adapt to each interlocutor based on their answers and profile.",
  },
  {
    color: "#ef7b16",
    title: "Automatic Qualification",
    desc: "Classify leads or cases according to demographic criteria, key responses, and intent detected in the conversation.",
  },
  {
    color: "#ff2f2f",
    title: "Instant Integration",
    desc: "Send real-time results to your CRM, database, or internal tools, without the need for manual supervision.",
  },
];

export default function Features() {
  return (
    <section className="flex justify-center" style={{ padding: "94px 0" }}>
      <div className="flex" style={{ maxWidth: 1240, width: "100%", gap: 60, padding: "0 40px" }}>
        {/* Left column: text + feature cards */}
        <div className="flex flex-col" style={{ width: 590, flexShrink: 0, gap: 40 }}>
          {/* Header */}
          <div className="flex flex-col" style={{ gap: 10 }}>
            <p style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>
              What can Vocals do for you?
            </p>
            <h2
              className="font-heading"
              style={{ fontSize: 52, fontWeight: 600, lineHeight: "62.4px", color: "#111", maxWidth: 590 }}
            >
              Automate your calls. Get real answers.
            </h2>
          </div>

          {/* 2-column feature cards */}
          <div className="flex" style={{ gap: 30 }}>
            {/* Column 1 */}
            <div className="flex flex-col" style={{ width: 264, gap: 20 }}>
              {features.filter((_, i) => i % 2 === 0).map((f) => (
                <div key={f.title} className="flex flex-col" style={{ padding: "16px 0", gap: 20 }}>
                  {/* Colored dot */}
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: f.color,
                    }}
                  />
                  <div className="flex flex-col" style={{ gap: 6 }}>
                    <p style={{ fontSize: 20, fontWeight: 600, color: "#1e1e1e" }}>
                      {f.title}
                    </p>
                    <p style={{ fontSize: 17, fontWeight: 500, color: "#4c4c4c", lineHeight: "25.5px" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Separator line */}
            <div style={{ width: 1, backgroundColor: "#ded8d3", flexShrink: 0 }} />

            {/* Column 2 */}
            <div className="flex flex-col" style={{ width: 264, gap: 20 }}>
              {features.filter((_, i) => i % 2 === 1).map((f) => (
                <div key={f.title} className="flex flex-col" style={{ padding: "16px 0", gap: 20 }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: f.color,
                    }}
                  />
                  <div className="flex flex-col" style={{ gap: 6 }}>
                    <p style={{ fontSize: 20, fontWeight: 600, color: "#1e1e1e" }}>
                      {f.title}
                    </p>
                    <p style={{ fontSize: 17, fontWeight: 500, color: "#4c4c4c", lineHeight: "25.5px" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: feature image + avatars + dial card */}
        <div className="relative flex-1">
          <img
            src="/images/feature-woman.png"
            alt="Feature Image"
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
      </div>
    </section>
  );
}
