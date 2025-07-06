import React from "react";

type GradientCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientCard({ children, className = "" }: GradientCardProps) {
  const baseClasses = `
    bg-gradient-to-r from-purple-500/10 to-blue-500/10
    backdrop-blur-lg
    border border-white/10
    rounded-xl
    p-6
    shadow-xl
    hover:shadow-2xl
    transition-all
    duration-300
  `;

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}