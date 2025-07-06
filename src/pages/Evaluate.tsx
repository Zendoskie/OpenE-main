import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiMicrophone, BiVolumeFull, BiCheck, BiX, BiBot, BiBookOpen } from "react-icons/bi";
import { useLoading } from "../components/LoadingContext";
import { useSettings } from "../Contexts/SettingsContext"; // Import settings context

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
  },
  {
    value: "medium",
    label: "Medium",
    icon: <BiBookOpen />,
    desc: "Intermediate difficulty",
  },
  {
    value: "hard",
    label: "Hard",
    icon: <BiBookOpen />,
    desc: "Challenging level",
  },
];

const Evaluate: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<EvalResult>(defaultEvalResult);
  const [error, setError] = useState(""); // Error state
  const [eduLevel, setEduLevel] = useState<"" | "easy" | "medium" | "hard">(""); // Educational level selection state
  const [animateLevel, setAnimateLevel] = useState<number | null>(null); // For animation when level is selected
  const { setLoading } = useLoading();
  const { allowAiVoiceOver } = useSettings(); // Use the voice over setting

  const handleClear = () => {
    setQuestion("");
    setAnswer("");
    setResult(defaultEvalResult);
    setError(""); // Clear error on reset
    setEduLevel(""); // Reset educational level
    setAnimateLevel(null);
  };

  const handleLevelSelect = (level: "easy" | "medium" | "hard", idx: number) => {
    setEduLevel(level);
    setAnimateLevel(idx);
    setTimeout(() => setAnimateLevel(null), 600); // Animation duration
  };

  const handleEvaluate = async () => {
    setError(""); // Clear previous error
    // Validation: All fields must be filled
    if (!eduLevel) {
      setError("Please select an educational level before evaluating.");
      return;
    }
    if (!question.trim() || !answer.trim()) {
      setError("Please fill out both the Question and Answer fields before evaluating.");
      return;
    }
    setLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Example: you could adjust the evaluation logic based on eduLevel if needed
    setResult({
      rating: eduLevel === "easy" ? "10/10" : eduLevel === "medium" ? "8/10" : "6/10",
      justification:
        eduLevel === "easy"
          ? "Excellent answer for the easy level."
          : eduLevel === "medium"
          ? "Good answer, but could use more detail for the medium level."
          : "Decent effort, but needs more depth for the hard level.",
    });
    setLoading(false);
  };

  const handleAIDetect = () => {
    alert("AI Detector: This answer seems human-written.");
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      {/* Educational Level Selector */}
      <motion.div
        className="mb-6 flex flex-row items-center gap-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-md font-semibold text-gray-200 flex items-center gap-2">
          <BiBookOpen /> Educational Level
        </span>
        <div className="flex gap-3">
          {levelOptions.map((option, idx) => (
            <motion.button
              key={option.value}
              type="button"
              className={`
                flex flex-col items-center gap-1 px-4 py-2 rounded-xl shadow 
                transition-all duration-150 font-semibold text-sm
                bg-surface bg-opacity-80 border
                ${eduLevel === option.value
                  ? "border-primary ring-2 ring-primary"
                  : "border-card"}
                ${animateLevel === idx ? "scale-110 shadow-lg z-10" : ""}
                hover:bg-card hover:bg-opacity-100 hover:border-primary
                focus:outline-none
              `}
              style={{
                color: eduLevel === option.value ? "#fff" : "#d1d5db", // text-white or text-gray-300
                boxShadow: eduLevel === option.value
                  ? "0 0 0 2px var(--color-primary), 0 2px 8px 0 rgba(0,0,0,0.2)"
                  : undefined,
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
          ))}
        </div>
      </motion.div>
      {/* No Topbar or HelpPanel here! Only the form/cards */}
      <div className="flex flex-row gap-6 w-full flex-1">
        {/* Question Card */}
        <motion.div className="bg-card rounded-2xl p-4 shadow-lg flex-1 flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Question</h3>
          <div className="flex flex-col gap-2 flex-1">
            <textarea
              value={question}
              onChange={e => setQuestion(e.target.value)}
              className="w-full h-32 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
              placeholder="Enter your question..."
            />
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
        </motion.div>
        {/* Answer Card */}
        <motion.div className="bg-card rounded-2xl p-4 shadow-lg flex-1 flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Answer</h3>
          <div className="flex flex-col gap-2 flex-1">
            <textarea
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              className="w-full h-32 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
              placeholder="Enter your answer..."
            />
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
            className="w-full mt-2 bg-primary text-black rounded-xl py-3 font-bold shadow-md"
            onClick={handleEvaluate}
            type="button"
          >
            <BiCheck className="inline-block mr-2" /> Evaluate
          </motion.button>
          {error && (
            <div className="mt-2 text-red-400 font-medium">{error}</div>
          )}
        </motion.div>
        {/* Evaluation Result */}
        <motion.div className="bg-card rounded-2xl p-4 shadow-lg flex-[0.8] flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Evaluation Results</h3>
          <div>
            <div className="text-gray-400 mb-1">Rating</div>
            <div className="bg-surface rounded-xl p-3 text-white font-bold mb-4">
              {result.rating}
            </div>
            <div className="text-gray-400 mb-1">Justification</div>
            <div className="bg-surface rounded-xl p-3 text-white min-h-[80px]">
              {result.justification}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Evaluate;