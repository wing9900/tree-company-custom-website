import { useState } from "react";
import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg width="10.3" height="8.24" viewBox="0 0 10 8" fill="none">
    <path
      d="M1 4L3.5 6.5L9 1"
      stroke="#e8620a"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Adjust this to change space between "11pm." and "Sarah answers." on mobile (e.g. "4px", "8px", "0.5em")
const MOBILE_PHRASE_GAP = "1.5px";
// Adjust this to shift the Live badge up/down on mobile: negative = up, positive = down (e.g. "-6px", "4px")
const MOBILE_BADGE_OFFSET_Y = "-5px";

const ChatWidgetSection = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => setVisible(false);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes sarah-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
        @media (max-width: 640px) {
          .sarah-card-desktop { display: none !important; }
          .sarah-card-mobile svg { transform: scale(1.05); }
        }
        @media (min-width: 641px) {
          .sarah-card-mobile { display: none !important; }
        }
      `}</style>
      {/* Desktop: full card */}
      <div
        id="sarah-card"
        className="sarah-card sarah-card-desktop"
        style={{
          position: "fixed",
          bottom: "12px",
          right: "11px",
          width: "370px",
          background: "#0f2d1f",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "15px 16px",
          fontFamily: "'Montserrat', sans-serif",
          zIndex: 999,
          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        }}
      >
        <button
          type="button"
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "12px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.7)",
            fontSize: "24.72px",
            cursor: "pointer",
            lineHeight: 1,
            padding: 0,
          }}
          aria-label="Close"
        >
          ×
        </button>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(232, 98, 10, 0.33)",
            border: "1px solid rgba(232, 98, 10, 0.54)",
            borderRadius: "100px",
            padding: "4px 10px",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              background: "#ff9542",
              borderRadius: "50%",
              display: "inline-block",
              animation: "sarah-pulse 2s infinite",
            }}
          />
          <span
            style={{
              color: "#fff5e8",
              fontSize: "9.27px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Live · Available 24/7
          </span>
        </div>

        <div
          style={{
            color: "#fff",
            fontSize: "15.45px",
            fontWeight: 900,
            lineHeight: 1.3,
            marginBottom: "12px",
            letterSpacing: "-0.01em",
          }}
        >
          Your phone rings at 11pm.
          <br />
          <span style={{ color: "#e8620a" }}>Sarah answers.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckIcon />
            <span style={{ color: "#fff", fontSize: "12.36px", fontWeight: 600 }}>
              No salary, no sick days, no stress
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckIcon />
            <span style={{ color: "#fff", fontSize: "12.36px", fontWeight: 600 }}>
              Captures every call and website lead
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckIcon />
            <span style={{ color: "#fff", fontSize: "12.36px", fontWeight: 600 }}>
              Books your calendar and notifies you instantly
            </span>
          </div>
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(255, 255, 255, 0.18)",
            marginBottom: "14px",
            marginRight: "55px",
          }}
        />

        <Link
          to="/contact"
          style={{
            color: "#e8620a",
            fontSize: "12px",
            fontWeight: 700,
            textDecoration: "underline",
            display: "inline-block",
          }}
        >
          TRY AN AGENT FREE FOR YOUR BUSINESS
        </Link>
      </div>

      {/* Mobile: compact card with bullets + CTA only (all sizes +5%) */}
      <div
        className="sarah-card sarah-card-mobile"
        style={{
          position: "fixed",
          bottom: "12.6px",
          left: "50%",
          transform: "translateX(-46%)",
          width: "min(382px, calc(100vw - 24px))",
          background: "#0f2d1f",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12.6px",
          padding: "12.6px 14.7px",
          fontFamily: "'Montserrat', sans-serif",
          zIndex: 999,
          boxShadow: "0 6.3px 25.2px rgba(0,0,0,0.35)",
        }}
      >
        <button
          type="button"
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "8.4px",
            right: "10.5px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.7)",
            fontSize: "25.96px",
            cursor: "pointer",
            lineHeight: 1,
            padding: 0,
          }}
          aria-label="Close"
        >
          ×
        </button>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "4.62px", background: "rgba(232,98,10,0.33)", border: "1px solid rgba(232,98,10,0.54)", borderRadius: "100px", padding: "2.32px 9.27px", marginBottom: "8.65px", transform: `translateY(${MOBILE_BADGE_OFFSET_Y})` }}>
          <span style={{ width: "4.62px", height: "4.62px", background: "#ff9542", borderRadius: "50%", display: "inline-block", animation: "sarah-pulse 2s infinite" }} />
          <span style={{ color: "#fff5e8", fontSize: "9.55px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Live · Available 24/7</span>
        </div>
        <div style={{ color: "#fff", fontSize: "12.98px", fontWeight: 830, lineHeight: 1.25, marginBottom: "8.4px", letterSpacing: "-0.01em" }}>
          Your phone rings at 11pm.{" "}<span style={{ color: "#e8620a", marginLeft: MOBILE_PHRASE_GAP }}>Sarah answers.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5.25px", marginBottom: "8.4px", paddingRight: "25.2px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6.3px" }}>
            <CheckIcon />
            <span style={{ color: "rgba(255,255,255,1)", fontSize: "11.9px", fontWeight: 600 }}>
              No salary, no sick days, no stress
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6.3px" }}>
            <CheckIcon />
            <span style={{ color: "rgba(255,255,255,1)", fontSize: "11.9px", fontWeight: 600 }}>
              Captures every call and website lead
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6.3px" }}>
            <CheckIcon />
            <span style={{ color: "rgba(255,255,255,1)", fontSize: "11.9px", fontWeight: 600 }}>
              Books your calendar and notifies you instantly
            </span>
          </div>
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", marginBottom: "8.4px", width: "calc(100% - 60px)" }} />
        <Link
          to="/contact"
          style={{
            color: "#e8620a",
            fontSize: "12.6px",
            fontWeight: 700,
            textDecoration: "underline",
            display: "inline-block",
          }}
        >
          TRY AN AGENT FREE FOR YOUR BUSINESS
        </Link>
      </div>
    </>
  );
};

export default ChatWidgetSection;
