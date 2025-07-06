import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BiMicrophone,
  BiVolumeFull,
  BiCheck,
  BiX,
  BiBot,
  BiBookOpen,
  BiQuestionMark,
  BiPen,
  BiBadgeCheck,
  BiInfoCircle,
  BiErrorCircle,
} from "react-icons/bi";
import { useLoading } from "../components/LoadingContext";
import { useSettings } from "../Contexts/SettingsContext";

interface EvalResult {
  rating: string;
  justification: string;
}

const defaultEvalResult: EvalResult = {
  rating: "Not evaluated",
  justification: "No justification provided",
};

const levelOptions = [
  {
    value: "easy",
    label: "Easy",
    icon: <BiBookOpen />,
    desc: "Suitable for beginners",
    style: {
      cardGlow: "shadow-green-400/10",
      ratingBox: "bg-green-700/40",
      resultBar: "bg-green-500/60",
    },
    tooltip: "For simple/basic questions and answers.",
  },
  {
    value: "medium",
    label: "Medium",
    icon: <BiBookOpen />,
    desc: "Intermediate difficulty",
    style: {
      cardGlow: "shadow-yellow-400/10",
      ratingBox: "bg-yellow-700/40",
      resultBar: "bg-yellow-500/60",
    },
    tooltip: "For moderately complex questions and answers.",
  },
  {
    value: "hard",
    label: "Hard",
    icon: <BiBookOpen />,
    desc: "Challenging level",
    style: {
      cardGlow: "shadow-red-500/10",
      ratingBox: "bg-red-700/40",
      resultBar: "bg-red-500/60",
    },
    tooltip: "For challenging/advanced questions and answers.",
  },
];

const baseGlow = "shadow-[0_2px_12px_0_rgba(0,0,0,0.16)]";

const Evaluate: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<EvalResult>(defaultEvalResult);
  const [error, setError] = useState("");
  const [eduLevel, setEduLevel] = useState<"" | "easy" | "medium" | "hard">("");
  const [animateLevel, setAnimateLevel] = useState<number | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const { setLoading } = useLoading();
  const { allowAiVoiceOver } = useSettings();

  // Responsive stacking on mobile
  const flexStack = "flex flex-col md:flex-row gap-6 w-full flex-1";

  // For subtle global effect
  const getGlow = () => {
    if (!eduLevel) return baseGlow;
    const selected = levelOptions.find(l => l.value === eduLevel);
    return `${baseGlow} ${selected?.style.cardGlow || ""}`;
  };
  const getBgOverlay = () => {
    if (eduLevel === "easy") return "bg-green-900/10";
    if (eduLevel === "medium") return "bg-yellow-900/10";
    if (eduLevel === "hard") return "bg-red-900/10";
    return "";
  };

  const selectedLevel = levelOptions.find(l => l.value === eduLevel);

  const handleClear = () => {
    setQuestion("");
    setAnswer("");
    setResult(defaultEvalResult);
    setError("");
    setEduLevel("");
    setAnimateLevel(null);
  };

  const handleLevelSelect = (level: "easy" | "medium" | "hard", idx: number) => {
    setEduLevel(level);
    setAnimateLevel(idx);
    setTimeout(() => setAnimateLevel(null), 600);
  };

  const handleEvaluate = async () => {
    setError("");
    if (!eduLevel) {
      setError("Please select an educational level before evaluating.");
      return;
    }
    if (!question.trim() || !answer.trim()) {
      setError("Please fill out both the Question and Answer fields before evaluating.");
      return;
    }
    setIsEvaluating(true);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setResult({
      rating: eduLevel === "easy" ? "10/10" : eduLevel === "medium" ? "8/10" : "6/10",
      justification:
        eduLevel === "easy"
          ? "Excellent answer for the easy level."
          : eduLevel === "medium"
          ? "Good answer, but could use more detail for the medium level."
          : "Decent effort, but needs more depth for the hard level.",
    });
    setIsEvaluating(false);
    setLoading(false);
  };

  const handleAIDetect = () => {
    alert("AI Detector: This answer seems human-written.");
  };

  // Character count helpers
  const charLimit = 300;
  const countColor = (val: string) => {
    if (val.length > charLimit) return "text-red-400";
    if (val.length > charLimit - 40) return "text-yellow-400";
    return "text-gray-400";
  };

  // Divider with icon
  const SectionDivider = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <div className="flex items-center gap-2 mb-2">
      <span className="text-primary text-lg">{icon}</span>
      <span className="text-lg font-semibold">{label}</span>
      <div className="flex-1 h-[2px] mx-2 bg-gradient-to-r from-primary/70 to-transparent rounded-full"></div>
    </div>
  );

  // Tooltip component
  const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => (
    <span className="group relative cursor-pointer">
      {children}
      <span className="absolute z-20 left-1/2 -translate-x-1/2 mt-2 w-max min-w-[120px] max-w-xs px-2 py-1 rounded bg-surface text-sm text-gray-300 opacity-0 group-hover:opacity-100 pointer-events-none shadow transition-opacity duration-200 border border-primary/40">
        {text}
      </span>
    </span>
  );

  // Animated error banner
  const ErrorBanner = ({ message, onClose }: { message: string; onClose: () => void }) => (
    <motion.div
      className="fixed top-5 right-5 z-50 bg-red-800/90 border border-red-400 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <BiErrorCircle className="text-xl" />
      <span>{message}</span>
      <button className="ml-2 text-white hover:text-red-200" onClick={onClose}>
        <BiX />
      </button>
    </motion.div>
  );

  // Animated evaluation result
  const AnimatedResult = ({ result }: { result: EvalResult }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, type: "spring" }}
      key={result.rating + result.justification}
    >
      <div
        className={`rounded-xl p-3 font-bold mb-2 flex items-center gap-2 ${selectedLevel?.style.ratingBox ?? "bg-surface"}`}
      >
        <BiBadgeCheck className="text-xl" />
        <span className="text-white">{result.rating}</span>
      </div>
      <div className="text-gray-400 mb-1 flex items-center gap-2">
        <BiInfoCircle /> Justification
      </div>
      <div className="bg-surface rounded-xl p-3 text-white min-h-[80px]">
        {result.justification}
      </div>
      <motion.div
        className={`h-1 mt-3 w-full rounded-full ${selectedLevel?.style.resultBar ?? "bg-primary/60"}`}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );

  return (
    <motion.div
      className={`relative flex flex-col w-full h-full transition-all duration-300 ${getBgOverlay()}`}
      animate={{
        backgroundColor:
          eduLevel === "easy"
            ? "rgba(16,100,32,0.08)"
            : eduLevel === "medium"
            ? "rgba(120,100,16,0.08)"
            : eduLevel === "hard"
            ? "rgba(120,16,32,0.08)"
            : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.4, type: "tween" }}
    >
      {/* Error Banner */}
      {error && (
        <ErrorBanner message={error} onClose={() => setError("")} />
      )}

      {/* Educational Level Selector */}
      <motion.div
        className="mb-6 flex flex-col gap-2 items-start sm:flex-row sm:items-center sm:gap-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-md font-semibold text-gray-200 flex items-center gap-2">
          <BiBookOpen /> Educational Level
        </span>
        <div className="flex gap-3">
          {levelOptions.map((option, idx) => (
            <Tooltip key={option.value} text={option.tooltip}>
              <motion.button
                type="button"
                className={`
                  flex flex-col items-center gap-1 px-4 py-2 rounded-xl 
                  border transition-all duration-200 font-semibold text-sm
                  bg-card/80 
                  ${
                    eduLevel === option.value
                      ? `border-primary ring-2 ring-primary/60 shadow-lg ${option.style.cardGlow}`
                      : "border-card"
                  }
                  ${animateLevel === idx ? "scale-110 z-10" : ""}
                  hover:bg-surface hover:border-primary/80
                  focus:outline-none
                `}
                style={{
                  color: eduLevel === option.value ? "#fff" : "#d1d5db",
                  background: eduLevel === option.value
                    ? "linear-gradient(90deg, var(--color-primary) 10%, var(--color-card) 90%)"
                    : undefined,
                  transition: "background 0.3s, color 0.3s, box-shadow 0.3s"
                }}
                whileTap={{ scale: 0.96 }}
                animate={animateLevel === idx ? { scale: 1.15 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onClick={() => handleLevelSelect(option.value as "easy" | "medium" | "hard", idx)}
              >
                <span className="text-lg">{option.icon}</span>
                <span>{option.label}</span>
                <span className="text-xs text-gray-400">{option.desc}</span>
              </motion.button>
            </Tooltip>
          ))}
        </div>
        <div className="text-xs text-gray-400 mt-2 sm:mt-0 sm:ml-4">
          Select the level to adjust evaluation scale.
        </div>
      </motion.div>

      {/* Main Content: Responsive stacking */}
      <div className={flexStack}>
        {/* Question Card */}
        <motion.div
          className={`bg-card rounded-2xl p-4 shadow-lg flex-1 flex flex-col gap-4 transition-all duration-300 ${getGlow()}`}
          animate={eduLevel ? { boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" } : {}}
        >
          <SectionDivider icon={<BiQuestionMark />} label="Question" />
          <div className="flex flex-col gap-2 flex-1">
            <textarea
              value={question}
              onChange={e => setQuestion(e.target.value)}
              className="w-full h-32 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
              placeholder="e.g., What is a Computer?"
              maxLength={charLimit + 20}
            />
            <div className="flex justify-between items-center">
              <span className={`text-xs ${countColor(question)}`}>
                {question.length}/{charLimit}
              </span>
              {allowAiVoiceOver && (
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-primary" aria-label="Mic">
                    <BiMicrophone />
                  </button>
                  <button className="text-gray-400 hover:text-primary" aria-label="TTS">
                    <BiVolumeFull />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        {/* Answer Card */}
        <motion.div
          className={`bg-card rounded-2xl p-4 shadow-lg flex-1 flex flex-col gap-4 transition-all duration-300 ${getGlow()}`}
          animate={eduLevel ? { boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" } : {}}
        >
          <SectionDivider icon={<BiPen />} label="Answer" />
          <div className="flex flex-col gap-2 flex-1">
            <textarea
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              className="w-full h-32 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
              placeholder="e.g., computer is an electronic device that manipulates information, or data, according to a set of instructions."
              maxLength={charLimit + 20}
            />
            <div className="flex justify-between items-center">
              <span className={`text-xs ${countColor(answer)}`}>
                {answer.length}/{charLimit}
              </span>
              {allowAiVoiceOver && (
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-primary" aria-label="Mic">
                    <BiMicrophone />
                  </button>
                  <button className="text-gray-400 hover:text-primary" aria-label="TTS">
                    <BiVolumeFull />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              className="flex-1 bg-surface text-gray-300 rounded-xl p-2 font-semibold flex items-center gap-2 hover:bg-card"
              onClick={handleClear}
              type="button"
            >
              <BiX /> Clear
            </button>
            <button
              className="flex-1 bg-surface text-primary rounded-xl p-2 font-semibold flex items-center gap-2 hover:bg-card"
              onClick={handleAIDetect}
              type="button"
            >
              <BiBot /> AI Detector
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            disabled={isEvaluating}
            className={`w-full mt-2 bg-primary text-black rounded-xl py-3 font-bold shadow-md flex items-center justify-center gap-2 transition-all duration-200 ${
              isEvaluating ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={handleEvaluate}
            type="button"
          >
            {isEvaluating ? (
              <>
                <span className="animate-spin mr-2 rounded-full border-2 border-white border-t-transparent w-4 h-4 inline-block" />
                Evaluating...
              </>
            ) : (
              <>
                <BiCheck className="inline-block mr-2" /> Evaluate
              </>
            )}
          </motion.button>
        </motion.div>
        {/* Evaluation Result */}
        <motion.div
          className={`bg-card rounded-2xl p-4 shadow-lg flex-[0.8] flex flex-col gap-4 transition-all duration-300 ${getGlow()}`}
          animate={eduLevel ? { boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" } : {}}
        >
          <SectionDivider icon={<BiBadgeCheck />} label="Evaluation Results" />
          <div>
            <div className="text-gray-400 mb-1 flex items-center gap-2">
              <BiBadgeCheck /> Rating
            </div>
            <AnimatedResult result={result} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Evaluate;