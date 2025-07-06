import React from "react";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientText({ children, className = "" }: GradientTextProps) {
  const baseClasses = `
    bg-clip-text text-transparent
    bg-gradient-to-r from-blue-400 to-purple-500
    font-bold
  `;

  return (
    <span className={`${baseClasses} ${className}`}>
      {children}
    </span>
  );
}