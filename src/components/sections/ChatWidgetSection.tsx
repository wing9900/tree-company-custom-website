import { useState } from "react";
import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path
      d="M1 4L3.5 6.5L9 1"
      stroke="#e8620a"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatWidgetSection = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes sarah-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
        @media (max-width: 640px) {
          .sarah-card { display: none !important; }
        }
      `}</style>
      <div
        id="sarah-card"
        className="sarah-card"
        style={{
          position: "fixed",
          bottom: "13px",
          right: "11px",
          width: "340px",
          background: "#0f2d1f",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "14px 16px",
          fontFamily: "'Montserrat', sans-serif",
          zIndex: 999,
          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        }}
      >
        <button
          type="button"
          onClick={() => setVisible(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "12px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.7)",
            fontSize: "20px",
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
            background: "rgba(232, 98, 10, 0.15)",
            border: "1px solid rgba(232, 98, 10, 0.25)",
            borderRadius: "100px",
            padding: "4px 10px",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              background: "#e8620a",
              borderRadius: "50%",
              display: "inline-block",
              animation: "sarah-pulse 2s infinite",
            }}
          />
          <span
            style={{
              color: "#e8a06a",
              fontSize: "9px",
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
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: 800,
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
            <span style={{ color: "rgba(255,255,255,1)", fontSize: "12px", fontWeight: 500 }}>
              No salary, no sick days, no stress
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckIcon />
            <span style={{ color: "rgba(255,255,255,1)", fontSize: "12px", fontWeight: 500 }}>
              Captures every call and website lead
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckIcon />
            <span style={{ color: "rgba(255,255,255,1)", fontSize: "12px", fontWeight: 500 }}>
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
            fontSize: "11.25px",
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
