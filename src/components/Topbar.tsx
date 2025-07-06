import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiHelpCircle, BiBot } from "react-icons/bi";

const TITLES: Record<string, string> = {
  "/evaluate": "Evaluate",
  "/enumeration": "Enumeration Checker",
  "/analytics": "Analytics Dashboard",
  "/ai-chat": "OpenE Chat",
};

type TopbarProps = {
  onHelp?: () => void;
};

export function Topbar({ onHelp }: TopbarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAiChat = React.useCallback(() => {
    navigate("/ai-chat");
  }, [navigate]);

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-surface shadow-md rounded-2xl mb-4">
      <span className="text-xl font-semibold text-white">
        {TITLES[location.pathname] || ""}
      </span>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="text-primary hover:text-white"
          aria-label="How to use"
          onClick={onHelp}
          style={{ fontSize: 28 }}
        >
          <BiHelpCircle />
        </button>
        <button
          type="button"
          className="text-primary hover:text-white"
          aria-label="AI Chat"
          onClick={handleAiChat}
          style={{ fontSize: 28 }}
        >
          <BiBot />
        </button>
      </div>
    </header>
  );
}