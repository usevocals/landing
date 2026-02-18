const features = [
  [
    {
      color: "#ff2f2f",
      title: "Smart Dialing",
      desc: "Dial thousands of calls per day automatically, optimizing schedules and prioritizing contacts with the highest probability of response.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 30, height: 30, fill: "currentColor", flexShrink: 0 }}>
          <g>
            <path d="M64,112v32a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H56A8,8,0,0,1,64,112ZM208,40H160a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40Zm0,112H160a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152Z" opacity="0.2" />
            <path d="M160,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V64H128a24,24,0,0,0-24,24v32H72v-8A16,16,0,0,0,56,96H24A16,16,0,0,0,8,112v32a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16v-8h32v32a24,24,0,0,0,24,24h16v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v16H128a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16V96a16,16,0,0,0,16,16ZM160,160h48v48H160Zm0-112h48V96H160ZM56,144H24V112H56Z" />
          </g>
        </svg>
      ),
    },
    {
      color: "#8a43e1",
      title: "Dynamic Surveys",
      desc: "Create personalized question flows that adapt to each interlocutor based on their answers and profile.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 30, height: 30, fill: "currentColor", flexShrink: 0 }}>
          <g>
            <path d="M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z" opacity="0.2" />
            <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.38,16.38,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.38,16.38,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0L132.38,184.82a8,8,0,0,0-8.76,0L69.09,215.94c-.15.09-.2.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.6c.08-.17.11-.25.35-.25s.27.08.35.25l24.62,59.6a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z" />
          </g>
        </svg>
      ),
    },
  ],
  [
    {
      color: "#27b32c",
      title: "Automatic Qualification",
      desc: "Classify leads or cases according to demographic criteria, key responses, and intent detected in the conversation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 30, height: 30, fill: "currentColor", flexShrink: 0 }}>
          <g>
            <path d="M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z" opacity="0.2" />
            <path d="M168,56a8,8,0,0,1,8-8h16V32a8,8,0,0,1,16,0V48h16a8,8,0,0,1,0,16H208V80a8,8,0,0,1-16,0V64H176A8,8,0,0,1,168,56Zm62.56,54.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.63,87.63,0,0,0,22.24,58.41A79.66,79.66,0,0,1,98.3,157.66a48,48,0,1,1,59.4,0,79.59,79.59,0,0,1,36.08,28.75A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Zm0,64a87.57,87.57,0,0,0,53.92-18.5,64,64,0,0,0-107.84,0A87.57,87.57,0,0,0,128,216Z" />
          </g>
        </svg>
      ),
    },
    {
      color: "#ef7b16",
      title: "Instant Integration",
      desc: "Send real-time results to your CRM, database, or internal tools, without the need for manual supervision.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 30, height: 30, fill: "currentColor", flexShrink: 0 }}>
          <g>
            <path d="M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,147.81,56,112a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,192Z" opacity="0.2" />
            <path d="M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72ZM208,112c0-35.78-8.3-56.55-14.89-68A16,16,0,0,0,179.22,36H76.78A16,16,0,0,0,62.89,44C56.3,55.45,48,76.22,48,112a95.22,95.22,0,0,1-10.09,42.41A16,16,0,0,0,48,176H96v8a32,32,0,0,0,64,0v-8h48a16,16,0,0,0,10.09-21.59A95.22,95.22,0,0,1,208,112Zm-64,72H112v-8h32Zm64-24H48c0-.14,0-.27,0-.41A111.28,111.28,0,0,0,60,112a84.26,84.26,0,0,1,13.16-47.79A.17.17,0,0,1,76.78,52H179.22a.17.17,0,0,1,.14.07A84.41,84.41,0,0,1,196,112a111.33,111.33,0,0,0,12,47.59Z" />
          </g>
        </svg>
      ),
    },
  ],
];

export default function Features() {
  return (
    <section className="flex justify-center" style={{ padding: "94px 40px" }}>
      <div className="flex" style={{ maxWidth: 1240, width: "100%", gap: 60 }}>
        {/* Left column: text + feature cards */}
        <div className="flex flex-col" style={{ width: 590, flexShrink: 0, gap: 40 }}>
          {/* Header */}
          <div className="flex flex-col" style={{ gap: 10 }}>
            <p style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>
              What can Vocals do for you?
            </p>
            <h2
              className="font-heading"
              style={{ fontSize: 52, fontWeight: 600, lineHeight: "62.4px", color: "#111" }}
            >
              Automate your calls. Get real answers.
            </h2>
          </div>

          {/* Feature rows */}
          <div className="flex flex-col" style={{ gap: 20 }}>
            {features.map((row, ri) => (
              <div key={ri} className="flex" style={{ gap: 30 }}>
                {row.map((f, fi) => (
                  <div key={f.title} className="flex" style={{ gap: 30 }}>
                    {fi > 0 && (
                      <div style={{ width: 1, backgroundColor: "#ded8d3", flexShrink: 0 }} />
                    )}
                    <div className="flex flex-col" style={{ width: 265, gap: 20, color: f.color }}>
                      {f.icon}
                      <div className="flex flex-col" style={{ gap: 6 }}>
                        <p style={{ fontSize: 20, fontWeight: 600, color: "#1e1e1e", lineHeight: "30px" }}>
                          {f.title}
                        </p>
                        <p style={{ fontSize: 17, fontWeight: 500, color: "#4c4c4c", lineHeight: "25.5px" }}>
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right column: feature image */}
        <div className="flex-1">
          <img
            src="/images/feature-woman.png"
            alt="Feature"
            style={{ width: 590, height: 570, borderRadius: 20, objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
