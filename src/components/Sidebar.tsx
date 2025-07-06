import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BiTestTube,
  BiListOl,
  BiBarChartAlt2,
  BiMessage,
  BiChevronLeft,
  BiChevronRight,
  BiCog,
} from "react-icons/bi";
import { motion } from "framer-motion";
import SettingsModal from "./SettingsModal"; // You'll create this next

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    name: "Evaluate",
    path: "/evaluate",
    icon: <BiTestTube size={22} />,
  },
  {
    name: "Enumeration",
    path: "/enumeration",
    icon: <BiListOl size={22} />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <BiBarChartAlt2 size={22} />,
  },
  {
    name: "AI Chat",
    path: "/ai-chat",
    icon: <BiMessage size={22} />,
  },
];

export type SidebarProps = {
  open: boolean;
  onClose: () => void;
  onOpen?: () => void;
};

export function Sidebar({ open, onClose, onOpen }: SidebarProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Sidebar width and padding classes based on open state
  const sidebarClasses = [
    "fixed top-0 left-0 h-full z-40 transition-all duration-300 bg-sidebar shadow-lg rounded-r-2xl flex flex-col",
    open ? "w-60 min-w-[15rem] px-2 py-8" : "w-14 min-w-[3.5rem] px-0 py-4",
  ].join(" ");

  // Sidebar header layout classes
  const headerClasses = [
    "flex items-center",
    open ? "justify-between px-2 mb-8" : "justify-center mb-8",
  ].join(" ");

  // Toggle button classes
  const toggleBtnClasses = [
    "flex items-center justify-center transition-colors rounded-xl",
    open ? "ml-2 text-primary hover:bg-surface p-1" : "mt-2",
  ].join(" ");

  return (
    <aside
      className={sidebarClasses}
      style={{ boxShadow: open ? "2px 0 12px #0001" : undefined }}
    >
      {/* Sidebar header with logo and toggle button */}
      <div className={headerClasses}>
        {open ? (
          <span className="text-3xl font-extrabold text-primary">OpenE</span>
        ) : (
          <span className="text-2xl font-extrabold text-primary">O</span>
        )}
        <button
          className={toggleBtnClasses}
          onClick={open ? onClose : onOpen}
          aria-label={open ? "Close sidebar" : "Open sidebar"}
          style={{
            background: open ? "" : "none",
            border: "none",
          }}
          type="button"
        >
          {open ? <BiChevronLeft size={28} /> : <BiChevronRight size={24} />}
        </button>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-xl transition-all font-medium text-lg",
                open ? "px-4 py-3" : "p-3 justify-center",
                isActive
                  ? "bg-primary bg-opacity-10 text-primary"
                  : "text-white hover:bg-card",
              ].join(" ")
            }
            title={open ? undefined : item.name}
          >
            <motion.span whileHover={{ scale: 1.2 }}>{item.icon}</motion.span>
            {open && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>
      {/* Settings button at the bottom right */}
      <div className="mt-auto flex justify-center items-center pb-2">
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          aria-label="Settings"
          className={[
            "flex items-center gap-2 rounded-xl font-medium transition-all",
            open
              ? "px-4 py-3 text-primary hover:bg-card w-full justify-start"
              : "p-3 text-primary justify-center",
          ].join(" ")}
        >
          <BiCog size={22} />
          {open && <span>Settings</span>}
        </button>
      </div>
      {/* Settings Modal/Panel */}
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </aside>
  );
}

export default Sidebar;