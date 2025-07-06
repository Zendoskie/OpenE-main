import React from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function GradientButton({
  children,
  onClick,
  className = "",
  type = "button",
}: GradientButtonProps) {
  const baseClasses = `
    bg-gradient-to-r from-blue-500 to-purple-600
    hover:from-blue-600 hover:to-purple-700
    text-white font-medium py-2 px-4
    rounded-lg transition-all duration-300
    shadow-lg hover:shadow-xl
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}