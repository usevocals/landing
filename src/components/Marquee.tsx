import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const marqueeItems = [
    t("marquee.item1"),
    t("marquee.item2"),
    t("marquee.item3"),
    t("marquee.item4"),
    t("marquee.item5"),
    t("marquee.item6"),
    t("marquee.item7"),
  ];

  const ITEM_HEIGHT = 72; /* px: 64px text row + 8px gap */
  const ITEM_COUNT = marqueeItems.length; /* 7 */
  /* Five copies so we always have items above and below; we scroll through copies 2-4
     and reset silently when needed — the copy boundaries are invisible to the user */
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];
  const ulRef = useRef<HTMLUListElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  /* Start in the middle of the third copy so there's plenty of room in both directions */
  const offsetRef = useRef(ITEM_COUNT * 2);

  /* translateY that positions item[offset] at the vertical center of the 353px viewport.
     Item center = offset * ITEM_HEIGHT + 32 (half of 64px item height).
     Viewport center = 176.5px  →  translateY = 176.5 - (offset * ITEM_HEIGHT + 32) */
  const CENTER_OFFSET = 144;
  const getTranslateY = (offset: number) => CENTER_OFFSET - offset * ITEM_HEIGHT;

  useEffect(() => {
    const ul = ulRef.current;
    if (!ul) return;

    /* Set initial position instantly */
    ul.style.transition = "none";
    ul.style.transform = `translateY(${getTranslateY(offsetRef.current)}px)`;

    const advance = () => {
      const ul = ulRef.current;
      if (!ul) return;

      offsetRef.current += 1;

      /* Animate to the next item */
      ul.style.transition = "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)";
      ul.style.transform = `translateY(${getTranslateY(offsetRef.current)}px)`;
      setActiveIdx(offsetRef.current % ITEM_COUNT);

      /* After the animation finishes, silently teleport back to the equivalent
         position in the middle copy — this is invisible because positions are identical */
      if (offsetRef.current >= ITEM_COUNT * 3) {
        setTimeout(() => {
          const ul = ulRef.current;
          if (!ul) return;
          offsetRef.current -= ITEM_COUNT;
          ul.style.transition = "none";
          ul.style.transform = `translateY(${getTranslateY(offsetRef.current)}px)`;
        }, 320); /* slightly longer than the 300ms animation */
      }
    };

    const interval = setInterval(advance, 1200);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section-px flex justify-center" style={{ paddingTop: 70, paddingBottom: 70 }}>
      <div
        className="flex flex-col items-center gap-10 md:gap-[100px]"
        style={{ maxWidth: 1240, width: "100%" }}
      >
        {/* ── MOBILE: stacked header + animated word ── */}
        <div className="flex md:hidden flex-col items-center" style={{ gap: 8, width: "100%" }}>
          <h2
            className="font-heading text-center"
            style={{ fontSize: "clamp(32px, 8vw, 48px)", fontWeight: 600, lineHeight: 1.2, color: "#111" }}
          >
            {t("marquee.header")}
          </h2>
          {/* Single animated word for mobile — purely opacity-driven via activeIdx state */}
          <h2
            className="font-heading text-center"
            style={{
              fontSize: "clamp(28px, 7vw, 44px)",
              fontWeight: 600,
              lineHeight: 1.2,
              backgroundImage: "linear-gradient(90deg, #FF2E2E 0%, #EE7B16 36.28%, #8A43E1 69.75%, #D510FC 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "opacity 0.3s ease",
            }}
          >
            {marqueeItems[activeIdx]}
          </h2>
        </div>

        {/* ── DESKTOP: side-by-side header + scrolling list ── */}
        <div className="hidden md:flex relative items-center justify-center" style={{ width: "100%", gap: 20, height: 353 }}>
          {/* Left side: header text + arrow + sparkle */}
          <div className="relative flex-shrink-0" style={{ display: "flex", alignItems: "center" }}>
            <svg
              width="24" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", right: "95%", top: "50%", transform: "translateY(-130%)", marginRight: 10, zIndex: 1 }}
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M8.44 24.263c-2.266-.636-4.638-.957-6.94-1.25-.495-.062-.956.282-.991.766a.88.88 0 0 0 .744.99c2.23.283 4.532.585 6.691 1.197a.9.9 0 0 0 1.098-.61.881.881 0 0 0-.602-1.093Zm6.869-9.015c-3.647-3.722-7.754-6.964-11.33-10.786a.871.871 0 0 0-1.24-.043.87.87 0 0 0-.035 1.252c3.576 3.832 7.683 7.085 11.33 10.817a.913.913 0 0 0 1.275.011c.318-.342.354-.903 0-1.251ZM22.143.933l.318 6.39c0 .489.425.865.92.842.497-.024.85-.44.85-.928l-.318-6.4A.908.908 0 0 0 22.957 0a.881.881 0 0 0-.814.932Z" fill="#111" />
            </svg>
            <h2 className="font-heading" style={{ fontSize: 52, fontWeight: 600, lineHeight: "62.4px", color: "#111" }}>
              {t("marquee.header")}
            </h2>
            {/* Curved arrow SVG */}
            <svg
              width="126" height="123" viewBox="0 0 155 123" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", top: "50%", left: "100%", transform: "translate(-80px, -80%)", zIndex: 1 }}
            >
              <g filter="url(#arrow-blur)">
                <path fillOpacity=".5" fillRule="evenodd" clipRule="evenodd" fill="url(#arrow-glow)" d="m135.46 81.154-.153-.102c-1.643-1.088-3.282-2.174-5.02-3.124-5.973-3.268-12.873-5.4-19.709-5.492a1.083 1.083 0 0 0-1.096 1.065 1.082 1.082 0 0 0 1.066 1.094c6.487.084 13.033 2.126 18.7 5.227 1.717.94 3.337 2.015 4.961 3.091a135.455 135.455 0 0 0 2.593 1.695c.34.224 1.058.696 1.269.767.611.212 1-.09 1.162-.254.136-.134.268-.328.331-.61.05-.231.042-.693-.101-1.308-.296-1.301-1.142-3.68-1.741-5.366-.309-.87-.553-1.556-.622-1.815-2.056-7.677-2.848-15.187-3.67-22.971-.11-1.048-.221-2.1-.336-3.16a1.085 1.085 0 0 0-1.192-.958 1.079 1.079 0 0 0-.956 1.19c.11 1.021.218 2.037.325 3.05.726 6.872 1.43 13.531 2.967 20.27-9.745-16.968-28.025-22.066-46.614-20.55-18.25 1.487-36.757 9.387-47.59 18.504.532-.99.986-1.846 1.223-2.3.365-.703.923-1.643 1.576-2.745 1.916-3.23 4.655-7.85 5.8-11.956 1.173-4.2.685-7.877-3.066-9.601-3.41-1.567-7.442-.087-11.398 3.216-8.515 7.109-16.902 22.514-18.232 27.822a1.079 1.079 0 1 0 2.095.524c1.278-5.093 9.348-19.866 17.522-26.69 3.195-2.668 6.356-4.177 9.11-2.91 2.719 1.248 2.738 4.014 1.888 7.06-1.108 3.977-3.774 8.439-5.647 11.574-.65 1.09-1.205 2.018-1.566 2.711-.29.558-.87 1.625-1.523 2.825-1.32 2.429-2.94 5.404-3.054 5.817-.215.77.294 1.14.47 1.249.136.085.844.462 1.475-.29 9-10.724 30.238-20.958 51.09-22.658 19.966-1.628 39.628 4.613 47.663 26.109Z" />
              </g>
              <path fillRule="evenodd" clipRule="evenodd" fill="url(#arrow-main)" d="m135.46 78.315-.153-.102c-1.643-1.088-3.282-2.174-5.02-3.124-5.973-3.268-12.873-5.4-19.709-5.492a1.083 1.083 0 0 0-1.096 1.065 1.082 1.082 0 0 0 1.066 1.095c6.487.084 13.033 2.125 18.7 5.226 1.717.94 3.337 2.015 4.961 3.092.803.533 1.607 1.066 2.424 1.584l.169.11c.34.224 1.058.696 1.269.768.611.211 1-.091 1.162-.254.136-.135.268-.329.331-.61.05-.232.042-.694-.101-1.309-.296-1.3-1.142-3.68-1.741-5.366-.309-.87-.553-1.556-.622-1.814-2.056-7.677-2.848-15.187-3.67-22.972-.11-1.048-.221-2.1-.336-3.16a1.085 1.085 0 0 0-1.192-.958 1.078 1.078 0 0 0-.956 1.19c.11 1.021.218 2.038.325 3.05.726 6.873 1.43 13.532 2.967 20.271-9.745-16.969-28.025-22.067-46.614-20.55-18.25 1.487-36.757 9.386-47.59 18.503.532-.99.986-1.846 1.223-2.3.365-.702.923-1.642 1.576-2.744 1.916-3.23 4.655-7.85 5.8-11.956 1.173-4.2.685-7.877-3.066-9.602-3.41-1.567-7.442-.086-11.398 3.216-8.515 7.11-16.902 22.515-18.232 27.822a1.079 1.079 0 1 0 2.095.524c1.278-5.093 9.348-19.865 17.522-26.69 3.195-2.667 6.356-4.176 9.11-2.91 2.719 1.249 2.738 4.015 1.888 7.06-1.108 3.978-3.774 8.44-5.647 11.575-.65 1.089-1.205 2.017-1.566 2.71-.29.558-.87 1.625-1.523 2.825-1.32 2.429-2.94 5.405-3.054 5.817-.215.771.294 1.14.47 1.25.136.084.844.46 1.475-.291 9-10.724 30.238-20.957 51.09-22.658 19.966-1.628 39.628 4.614 47.663 26.109Z" />
              <path fill="url(#arrow-fade1)" d="m15.5 25.528 32.624-5.473-3.622 29.914-22.034 24.733-6.968.564V25.528Z" />
              <path fill="url(#arrow-fade2)" d="m15.5 25.528 32.624-5.473-3.622 29.914-22.034 24.733-6.968.564V25.528Z" />
              <defs>
                <filter id="arrow-blur" width="153.688" height="71.28" x=".904" y="29.168" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="bg" />
                  <feBlend in="SourceGraphic" in2="bg" result="shape" />
                  <feGaussianBlur result="blur" stdDeviation="7.5" />
                </filter>
                <linearGradient id="arrow-glow" x1="20.397" x2="141.22" y1="52.652" y2="75.908" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF2F2F" stopOpacity="0" />
                  <stop offset=".363" stopColor="#EF7B16" />
                  <stop offset=".698" stopColor="#8A43E1" />
                  <stop offset="1" stopColor="#D511FD" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="arrow-main" x1="20.397" x2="141.22" y1="49.814" y2="73.069" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF2F2F" />
                  <stop offset=".363" stopColor="#EF7B16" />
                  <stop offset=".698" stopColor="#8A43E1" />
                  <stop offset="1" stopColor="#D511FD" />
                </linearGradient>
                <linearGradient id="arrow-fade1" x1="39.977" x2="16.783" y1="41.601" y2="73.723" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F1F0EE" stopOpacity="0" />
                  <stop offset="1" stopColor="#F1F0EE" />
                </linearGradient>
                <linearGradient id="arrow-fade2" x1="39.977" x2="16.783" y1="41.601" y2="73.723" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F1F0EE" stopOpacity="0" />
                  <stop offset="1" stopColor="#F1F0EE" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Scrolling items */}
          <div style={{ height: 353, width: 620, flexShrink: 0, overflow: "hidden", maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)" }}>
            <ul ref={ulRef} className="flex flex-col items-start" style={{ gap: 8, listStyle: "none", margin: 0, padding: 0 }}>
              {items.map((text, i) => {
                const isActive = i % ITEM_COUNT === activeIdx;
                const dist = Math.min(Math.abs((i % ITEM_COUNT) - activeIdx), ITEM_COUNT - Math.abs((i % ITEM_COUNT) - activeIdx));
                const opacity = isActive ? 1 : dist === 1 ? 0.35 : 0.15;
                return (
                  <li key={i} style={{ display: "contents" }}>
                    <div style={{ height: 64, width: "100%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", opacity, transition: "opacity 0.3s ease" }}>
                      <h2 className="font-heading" style={{ fontSize: 52, fontWeight: 600, lineHeight: "62.4px", whiteSpace: "nowrap", ...(isActive ? { backgroundImage: "linear-gradient(90deg, #FF2E2E 0%, #EE7B16 36.28%, #8A43E1 69.75%, #D510FC 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" } : { color: "#000" }) }}>
                        {text}
                      </h2>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Stats row */}
        <div className="relative w-full md:px-[100px]">
          {/* Horizontal line — desktop only */}
          <svg className="hidden md:block" width="100%" height="10" viewBox="0 0 1240 10" fill="none" preserveAspectRatio="none" style={{ position: "absolute", top: 28, left: 0 }}>
            <path stroke="#D3CBC5" d="M0 4.073h1240" />
            <path stroke="#fff" d="M0 5.073h1240" />
            <circle cx="309.361" cy="5.073" r="3.861" fill="#fff" stroke="#D3CBC5" />
            <circle cx="620.137" cy="5.073" r="3.861" fill="#fff" stroke="#D3CBC5" />
            <circle cx="937.639" cy="5.073" r="3.861" fill="#fff" stroke="#D3CBC5" />
          </svg>

          <div className="grid grid-cols-2 md:flex md:items-start md:justify-between relative gap-10 md:gap-0" style={{ width: "100%" }}>
            {/* Stat 1 */}
            <div className="flex flex-col items-center" style={{ gap: 30 }}>
              <div className="flex items-center" style={{ gap: 6, height: 52 }}>
                <img src="/images/avatar1.png" alt="" style={{ width: 28, height: 28, borderRadius: 6, objectFit: "cover", transform: "rotate(-9deg)" }} />
                <img src="/images/avatar2.png" alt="" style={{ width: 28, height: 28, borderRadius: 6, objectFit: "cover" }} />
                <img src="/images/avatar3.png" alt="" style={{ width: 28, height: 28, borderRadius: 6, objectFit: "cover", transform: "rotate(9deg)" }} />
              </div>
              <div className="flex flex-col items-center" style={{ gap: 6 }}>
                <p style={{ fontSize: 32, fontWeight: 600, color: "#111", lineHeight: "44.8px", textAlign: "center" }}>+100</p>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#4c4c4c", lineHeight: "24px", textAlign: "center" }}>{t("marquee.stat1_label")}</p>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center" style={{ gap: 30 }}>
              <StatIcon><SealCheckIcon /></StatIcon>
              <div className="flex flex-col items-center" style={{ gap: 6 }}>
                <p style={{ fontSize: 32, fontWeight: 600, color: "#111", lineHeight: "44.8px", textAlign: "center" }}>500K+</p>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#4c4c4c", lineHeight: "24px", textAlign: "center" }}>{t("marquee.stat2_label")}</p>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center" style={{ gap: 30 }}>
              <StatIcon><BriefcaseIcon /></StatIcon>
              <div className="flex flex-col items-center" style={{ gap: 6 }}>
                <p style={{ fontSize: 32, fontWeight: 600, color: "#111", lineHeight: "44.8px", textAlign: "center" }}>&gt;50%</p>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#4c4c4c", lineHeight: "24px", textAlign: "center" }}>{t("marquee.stat3_label")}</p>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="flex flex-col items-center" style={{ gap: 30 }}>
              <StatIcon><LightningIcon /></StatIcon>
              <div className="flex flex-col items-center" style={{ gap: 6 }}>
                <p style={{ fontSize: 32, fontWeight: 600, color: "#111", lineHeight: "44.8px", textAlign: "center" }}>&lt;14 days</p>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#4c4c4c", lineHeight: "24px", textAlign: "center" }}>{t("marquee.stat4_label")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
