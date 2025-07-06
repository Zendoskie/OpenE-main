import React, { useEffect, useState, createContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import Landing from "./pages/Landing";
import Evaluate from "./pages/Evaluate";
import Enumeration from "./pages/Enumeration";
import Analytics from "./pages/Analytics";
import AIChat from "./pages/AIChat";
import { LoadingProvider } from "./components/LoadingContext";
import { UniqueLoadingOverlay } from "./components/UniqueLoadingOverlay";
import { HelpPanel } from "./components/HelpPanel";
import { SettingsProvider } from "./Contexts/SettingsContext"; // <-- ADD THIS LINE

// --- 2025 Gradient Background ---
// Vibrant, soft, futuristic multi-color gradient with glassmorphism overlay.
// Example: blue, purple, mint, violet, and soft white.
const gradientBg =
  "relative min-h-screen min-w-full overflow-hidden";
const gradientOverlay =
  "pointer-events-none fixed inset-0 z-0 " +
  "bg-[radial-gradient(ellipse_120%_80%_at_70%_0%,rgba(68,220,255,0.20)_0%,rgba(255,255,255,0.04)_50%,rgba(191,127,255,0.15)_100%)] " +
  "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_600px_at_10%_90%,rgba(255,212,255,0.10)_0%,rgba(255,255,255,0)_100%)] " +
  "dark:bg-[radial-gradient(ellipse_80%_90%_at_0%_80%,rgba(120,255,252,0.13)_0%,rgba(255,255,255,0.01)_100%)]";

export interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") setTheme(stored);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
    else setTheme("light");
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const location = useLocation();
  const path = location.pathname;

  // Only show on /evaluate or /enumeration (you can add more checks if you want)
  const showHelp = path === "/evaluate" || path === "/enumeration";
  const showSidebar = path !== "/" && path !== "/opene";

  // Help content for each tab
  let helpContent = null;
  if (path === "/evaluate") {
    helpContent = (
      <div>
        <div className="text-2xl font-bold text-cyan-400 mb-4">
          How to Use OpenE Evaluation
        </div>
        <div className="space-y-3">
          <div>
            <span className="font-bold text-cyan-400">
              Step 1: Input Your Question
            </span>
            <div>
              Type your question in the Question field or use the microphone button for speech-to-text.
            </div>
          </div>
          <div>
            <span className="font-bold text-cyan-400">
              Step 2: Provide Your Answer
            </span>
            <div>
              Type your answer in the Answer field or use the microphone button for speech-to-text.
            </div>
          </div>
          <div>
            <span className="font-bold text-cyan-400">
              Step 3: Evaluate
            </span>
            <div>
              Click the Evaluate button to submit your answer for evaluation.
            </div>
          </div>
          <div>
            <span className="font-bold text-cyan-400">Additional Features</span>
            <ul className="list-disc ml-6 mt-1">
              <li>Use the AI Detector button to analyze if text is AI-generated</li>
              <li>Use the speaker buttons for text-to-speech functionality</li>
              <li>Navigate to AI Chat for more detailed assistance</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  if (path === "/enumeration") {
    helpContent = (
      <div>
        <div className="text-2xl font-bold text-cyan-400 mb-4">
          How to Use Enumeration Checker
        </div>
        <div className="space-y-3">
          <div>
            <span className="font-bold text-cyan-400">Step 1: Input Expected Answer</span>
            <div>Type the expected answer that will be used to check the submitted answer.</div>
          </div>
          <div>
            <span className="font-bold text-cyan-400">Step 2: Input Your Question</span>
            <div>Type your enumeration question in the Question field.</div>
          </div>
          <div>
            <span className="font-bold text-cyan-400">Step 3: Provide Answer</span>
            <div>Type your answer or solution in the Answer field.</div>
          </div>
          <div>
            <span className="font-bold text-cyan-400">Step 4: Check</span>
            <div>Click the Check button to verify if the answer matches the expected answer.</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SettingsProvider> {/* <-- WRAP APP IN SETTINGS PROVIDER */}
        <LoadingProvider>
          <UniqueLoadingOverlay />
          <div className={gradientBg}>
            {/* Vibrant, soft, multicolor gradient overlays */}
            <div className={gradientOverlay} aria-hidden />
            <div className="flex h-screen w-screen bg-transparent backdrop-blur-xl z-10 relative">
              {showSidebar && (
                <Sidebar
                  open={sidebarOpen}
                  onClose={() => setSidebarOpen(false)}
                  onOpen={() => setSidebarOpen(true)}
                />
              )}
              <div
                className="flex-1 flex flex-col transition-all duration-300"
                style={{
                  marginLeft: showSidebar ? (sidebarOpen ? "15rem" : "3.5rem") : 0,
                }}
              >
                {/* Only show Topbar with help button on allowed tabs */}
                {showSidebar && showHelp && <Topbar onHelp={() => setHelpOpen(true)} />}
                {/* Only show help panel on allowed tabs */}
                {showHelp && (
                  <HelpPanel open={helpOpen} onClose={() => setHelpOpen(false)}>
                    {helpContent}
                  </HelpPanel>
                )}
                <main className={`${showSidebar ? "p-4" : ""} flex-1 overflow-auto`}>
                  <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/evaluate" element={<Evaluate />} />
                    <Route path="/enumeration" element={<Enumeration />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/ai-chat" element={<AIChat />} />
                    <Route path="*" element={<Landing />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
        </LoadingProvider>
      </SettingsProvider>
    </ThemeContext.Provider>
  );
};

export default App;