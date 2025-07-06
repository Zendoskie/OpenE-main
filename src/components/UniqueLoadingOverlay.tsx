import React from "react";
import { useLoading } from "./LoadingContext";

const overlayStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(30, 32, 40, 0.7)",
  backdropFilter: "blur(6px)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "auto",
};

const spinnerStyles: React.CSSProperties = {
  width: "80px",
  height: "80px",
  border: "12px solid #fff",
  borderTop: "12px solid #6366f1",
  borderRadius: "50%",
  animation: "spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
  boxShadow: "0 0 36px 6px #a5b4fc66",
};

const textStyles: React.CSSProperties = {
  marginTop: "32px",
  color: "#fff",
  fontSize: "1.4rem",
  letterSpacing: "0.1em",
  textShadow: "0 2px 8px #111",
  fontFamily: "'JetBrains Mono', monospace",
};

const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.15); }
  100% { transform: rotate(360deg) scale(1); }
}
`;

export function UniqueLoadingOverlay() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <>
      <style>{keyframes}</style>
      <div style={overlayStyles}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={spinnerStyles} />
          <div style={textStyles}>OpenE is thinking…</div>
        </div>
      </div>
    </>
  );
}