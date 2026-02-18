import type { ReactNode } from "react";

const marqueeItems = [
  "slow processes",
  "saturated call centers",
  "repetitive tasks",
  "low engagement",
  "incomplete data",
  "worthless calls",
  "eternal surveys",
];

/* Gradient-bordered dark circle with icon inside */
function StatIcon({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: 54, height: 54, padding: 2, position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 100,
          background:
            "linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)",
        }}
      />
      <div
        className="flex items-center justify-center"
        style={{
          width: 50,
          height: 50,
          borderRadius: 100,
          background: "linear-gradient(180deg, #4c4c4c 0%, #111 100%)",
          position: "relative",
          padding: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* Phosphor duotone icons for stats */
const SealCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 30, height: 30, fill: "#fff" }}>
    <g>
      <path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2" />
      <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z" />
    </g>
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 30, height: 30, fill: "#fff" }}>
    <g>
      <path d="M224,152v48a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V152Z" opacity="0.2" />
      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Zm0,128H40V160H216v40Z" />
    </g>
  </svg>
);

const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ width: 30, height: 30, fill: "#fff" }}>
    <g>
      <path d="M96,240l16-80L48,136,160,16,144,96l64,24Z" opacity="0.2" />
      <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z" />
    </g>
  </svg>
);

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

        {/* Stats row with decorative line and nodes */}
        <div className="relative" style={{ width: "100%", padding: "0 100px" }}>
          {/* Horizontal line + dots SVG */}
          <svg
            width="100%"
            height="10"
            viewBox="0 0 1240 10"
            fill="none"
            preserveAspectRatio="none"
            style={{ position: "absolute", top: 28, left: 0 }}
          >
            <path stroke="#D3CBC5" d="M0 4.073h1240" />
            <path stroke="#fff" d="M0 5.073h1240" />
            <circle cx="309.361" cy="5.073" r="3.861" fill="#fff" stroke="#D3CBC5" />
            <circle cx="620.137" cy="5.073" r="3.861" fill="#fff" stroke="#D3CBC5" />
            <circle cx="937.639" cy="5.073" r="3.861" fill="#fff" stroke="#D3CBC5" />
          </svg>

          <div className="flex items-start justify-between relative" style={{ width: "100%" }}>
            {/* Stat 1: Avatar stack */}
            <div className="flex flex-col items-center" style={{ gap: 30 }}>
              <div className="flex items-center" style={{ gap: 6, height: 52 }}>
                <img
                  src="/images/avatar1.png"
                  alt=""
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    objectFit: "cover",
                    transform: "rotate(-9deg)",
                  }}
                />
                <img
                  src="/images/avatar2.png"
                  alt=""
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    objectFit: "cover",
                  }}
                />
                <img
                  src="/images/avatar3.png"
                  alt=""
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    objectFit: "cover",
                    transform: "rotate(9deg)",
                  }}
                />
              </div>
              <div className="flex flex-col items-center" style={{ gap: 6 }}>
                <p style={{ fontSize: 32, fontWeight: 600, color: "#111", lineHeight: "44.8px", textAlign: "center" }}>
                  +100
                </p>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#4c4c4c", lineHeight: "24px", textAlign: "center" }}>
                  Satisfied customers
                </p>
              </div>
            </div>

            {/* Stat 2: Seal Check */}
            <div className="flex flex-col items-center" style={{ gap: 30 }}>
              <StatIcon><SealCheckIcon /></StatIcon>
              <div className="flex flex-col items-center" style={{ gap: 6 }}>
                <p style={{ fontSize: 32, fontWeight: 600, color: "#111", lineHeight: "44.8px", textAlign: "center" }}>
                  500K+
                </p>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#4c4c4c", lineHeight: "24px", textAlign: "center" }}>
                  Completed calls
                </p>
              </div>
            </div>

            {/* Stat 3: Briefcase */}
            <div className="flex flex-col items-center" style={{ gap: 30 }}>
              <StatIcon><BriefcaseIcon /></StatIcon>
              <div className="flex flex-col items-center" style={{ gap: 6 }}>
                <p style={{ fontSize: 32, fontWeight: 600, color: "#111", lineHeight: "44.8px", textAlign: "center" }}>
                  &gt;50%
                </p>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#4c4c4c", lineHeight: "24px", textAlign: "center" }}>
                  Conversion
                </p>
              </div>
            </div>

            {/* Stat 4: Lightning */}
            <div className="flex flex-col items-center" style={{ gap: 30 }}>
              <StatIcon><LightningIcon /></StatIcon>
              <div className="flex flex-col items-center" style={{ gap: 6 }}>
                <p style={{ fontSize: 32, fontWeight: 600, color: "#111", lineHeight: "44.8px", textAlign: "center" }}>
                  &lt;14 days
                </p>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#4c4c4c", lineHeight: "24px", textAlign: "center" }}>
                  Full Integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
