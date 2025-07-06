import React from "react";
import { BiX } from "react-icons/bi";

type HelpPanelProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function HelpPanel({ open, onClose, children }: HelpPanelProps) {
  if (!open) return null;

  const overlayStyle = { background: "rgba(0,0,0,0.25)" };
  const panelStyle = { boxShadow: "-2px 0 24px 0 #0004" };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      style={overlayStyle}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="w-full max-w-md h-full bg-[#1d2532] text-white p-8 relative flex flex-col"
        style={panelStyle}
      >
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
          onClick={onClose}
          aria-label="Close help"
          type="button"
        >
          <BiX size={28} />
        </button>
        {children}
      </div>
    </div>
  );
}