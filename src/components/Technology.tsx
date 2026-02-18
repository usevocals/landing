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

          {/* Dial call pill with gradient border */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              top: "71%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: 2,
              borderRadius: 100,
              background: "linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)",
              zIndex: 2,
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                padding: "7px 12px",
                borderRadius: 100,
                backgroundColor: "#111",
                backdropFilter: "blur(6px)",
                gap: 3,
              }}
            >
              <span
                style={{
                  fontSize: 12.6,
                  fontWeight: 500,
                  lineHeight: "150%",
                  color: "#fff",
                  whiteSpace: "pre",
                }}
              >
                Dial call
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                style={{ width: 10, height: 10, fill: "#fff", flexShrink: 0 }}
              >
                <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
              </svg>
            </div>
          </div>

          {/* Red vertical line */}
          <div
            className="absolute"
            style={{
              top: "72.5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 1,
              height: 76,
              backgroundColor: "#ff2f2f",
              zIndex: 1,
            }}
          />

          {/* Avatar strip with gradient border + scrolling animation */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              top: "86%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: 2,
              borderRadius: 100,
              background: "linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)",
              zIndex: 2,
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                padding: "2px 6px",
                borderRadius: 100,
                backgroundColor: "#111",
              }}
            >
              {/* Masked carousel viewport */}
              <div
                style={{
                  width: 162,
                  height: 38,
                  overflow: "hidden",
                  maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
                }}
              >
                <div
                  className="flex items-center animate-avatar-scroll"
                  style={{ gap: 6, width: "max-content" }}
                >
                  {/* 4 avatars repeated 4x = 16 items for seamless loop */}
                  {Array.from({ length: 16 }, (_, i) => (
                    <img
                      key={i}
                      src={`/images/avatar${(i % 4) + 1}.png`}
                      alt=""
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
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
