import React, { useState } from "react";
import {
  BiCheck,
  BiX,
  BiPlus,
  BiTrash,
  BiQuestionMark,
  BiBadgeCheck,
  BiListOl,
  BiErrorCircle,
  BiInfoCircle,
} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "../components/LoadingContext";

// Helper: Section divider with icon
const SectionDivider = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 mb-2">
    <span className="text-primary text-lg">{icon}</span>
    <span className="text-lg font-semibold">{label}</span>
    <div className="flex-1 h-[2px] mx-2 bg-gradient-to-r from-primary/70 to-transparent rounded-full"></div>
  </div>
);

// Helper: Animated error banner (toast)
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

// Helper: Animated result panel
const AnimatedResult = ({ score, details }: { score: string; details: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.4, type: "spring" }}
    key={score + details}
  >
    <div className="rounded-xl p-3 font-bold mb-2 flex items-center gap-2 bg-primary/30">
      <BiBadgeCheck className="text-xl" />
      <span className="text-white">{score}</span>
    </div>
    <div className="text-gray-400 mb-1 flex items-center gap-2">
      <BiInfoCircle /> Details
    </div>
    <div className="bg-surface rounded-xl p-3 text-white min-h-[80px] whitespace-pre-line">{details}</div>
    <motion.div
      className="h-1 mt-3 w-full rounded-full bg-primary/40"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8 }}
    />
  </motion.div>
);

const charLimit = 120;

const Enumeration: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([""]);
  const [correctHidden, setCorrectHidden] = useState(false);
  const [answers, setAnswers] = useState<string[]>([""]);
  const [score, setScore] = useState("Not checked yet");
  const [details, setDetails] = useState("Submit your answer to see detailed results.");
  const [error, setError] = useState(""); // Add error state
  const [isChecking, setIsChecking] = useState(false);
  const { setLoading } = useLoading();

  // When correctAnswers changes (add/remove), make answers match its length
  React.useEffect(() => {
    setAnswers((prev) => {
      if (correctAnswers.length > prev.length) {
        // Add blank answer(s)
        return [...prev, ...Array(correctAnswers.length - prev.length).fill("")];
      } else if (correctAnswers.length < prev.length) {
        // Remove answer(s) from the end
        return prev.slice(0, correctAnswers.length);
      }
      return prev;
    });
  }, [correctAnswers.length]);

  const handleCheck = async () => {
    setError(""); // Clear previous errors
    if (
      !question.trim() ||
      correctAnswers.length === 0 ||
      correctAnswers.every(a => !a.trim()) ||
      answers.length === 0 ||
      answers.every(a => !a.trim())
    ) {
      setError("Please provide a question, at least one correct answer, and fill in all your answers.");
      return;
    }
    setIsChecking(true);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cleanCorrect = correctAnswers.map(a => a.trim().toLowerCase()).filter(Boolean);
    const cleanAnswers = answers.map(a => a.trim().toLowerCase()).filter(Boolean);
    const correct = cleanAnswers.filter(ans => cleanCorrect.includes(ans)).length;
    const total = cleanCorrect.length;
    setScore(`${((correct / (total || 1)) * 100).toFixed(0)}%`);
    setDetails(
      `Matched ${correct} out of ${total} correct answers. (${correct} correct, ${cleanAnswers.length - correct} incorrect)\nThis is a mock check!`
    );
    setIsChecking(false);
    setLoading(false);
  };

  const handleClear = () => {
    setQuestion("");
    setCorrectAnswers([""]);
    setAnswers([""]);
    setScore("Not checked yet");
    setDetails("Submit your answer to see detailed results.");
    setError(""); // Clear error on reset
  };

  // For correct answers
  const handleCorrectChange = (idx: number, value: string) => {
    setCorrectAnswers(prev => prev.map((a, i) => (i === idx ? value : a)));
  };
  const addCorrect = () => setCorrectAnswers(prev => [...prev, ""]);
  const removeCorrect = (idx: number) => {
    setCorrectAnswers(prev =>
      prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev
    );
  };

  // For user answers (mapping 1-1 to correct answers)
  const handleAnswerChange = (idx: number, value: string) => {
    setAnswers(prev => prev.map((a, i) => (i === idx ? value : a)));
  };

  // Character count feedback
  const countColor = (val: string) => {
    if (val.length > charLimit) return "text-red-400";
    if (val.length > charLimit - 20) return "text-yellow-400";
    return "text-gray-400";
  };

  // Glow and subtle effect for polish
  const glow = "shadow-[0_2px_12px_0_rgba(0,0,0,0.16)] shadow-primary/10";
  const flexStack = "flex flex-col md:flex-row gap-6 w-full flex-1";

  return (
    <motion.div
      className={`relative flex flex-col w-full h-full transition-all duration-300 bg-gradient-to-br from-card/90 to-surface/80`}
      animate={{ backgroundColor: "#121212" }}
      transition={{ duration: 0.4, type: "tween" }}
    >
      {/* Error Banner */}
      <AnimatePresence>
        {error && (
          <ErrorBanner message={error} onClose={() => setError("")} />
        )}
      </AnimatePresence>
      <div className={flexStack}>
        <div className="flex flex-col gap-4 flex-1">
          {/* Question */}
          <motion.div className={`bg-card rounded-2xl p-4 shadow-lg ${glow}`}>
            <SectionDivider icon={<BiQuestionMark />} label="Question" />
            <div className="flex gap-2">
              <textarea
                value={question}
                onChange={e => setQuestion(e.target.value)}
                className="w-full h-16 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
                placeholder="e.g., What are the 12 main parts of a computer?"
                maxLength={charLimit + 20}
              />
            </div>
            <div className="flex justify-end mt-1">
              <span className={`text-xs ${countColor(question)}`}>
                {question.length}/{charLimit}
              </span>
            </div>
          </motion.div>
          {/* Correct Answers (Dynamic List) */}
          <motion.div className={`bg-card rounded-2xl p-4 shadow-lg ${glow}`}>
            <SectionDivider icon={<BiBadgeCheck />} label="Correct Answers" />
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">
                {correctHidden ? "Hidden for now" : "These will be checked against user answers."}
              </span>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-sm text-gray-400">{correctHidden ? "Show" : "Hide"}</span>
                <input
                  type="checkbox"
                  checked={correctHidden}
                  onChange={() => setCorrectHidden(!correctHidden)}
                  className="accent-primary"
                  aria-label="Show/hide correct answers"
                />
              </label>
            </div>
            {!correctHidden && (
              <div className="flex flex-col gap-2">
                {correctAnswers.map((answer, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <textarea
                      value={answer}
                      onChange={e => handleCorrectChange(idx, e.target.value)}
                      className="w-full h-12 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
                      placeholder={`Correct Answer #${idx + 1}`}
                      maxLength={charLimit + 20}
                    />
                    <button
                      type="button"
                      onClick={() => removeCorrect(idx)}
                      className={`text-red-400 hover:text-red-600 p-2 rounded-lg transition-colors ${
                        correctAnswers.length === 1 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={correctAnswers.length === 1}
                      aria-label={`Remove correct answer #${idx + 1}`}
                    >
                      <BiTrash size={20} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addCorrect}
                  className="flex items-center gap-2 text-primary font-semibold mt-2 hover:text-cyan-400 transition-colors"
                  aria-label="Add Correct Answer"
                >
                  <BiPlus /> Add Correct Answer
                </button>
              </div>
            )}
          </motion.div>
          {/* Answers (1-1 to Correct) */}
          <motion.div className={`bg-card rounded-2xl p-4 shadow-lg ${glow}`}>
            <SectionDivider icon={<BiListOl />} label="Answers" />
            <div className="flex flex-col gap-2">
              {answers.map((answer, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <textarea
                    value={answer}
                    onChange={e => handleAnswerChange(idx, e.target.value)}
                    className="w-full h-12 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
                    placeholder={`Answer #${idx + 1}`}
                    maxLength={charLimit + 20}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="flex-1 bg-surface text-gray-300 rounded-xl p-2 font-semibold flex items-center gap-2 hover:bg-card"
                onClick={handleClear}
                type="button"
              >
                <BiX /> Clear
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                disabled={isChecking}
                className={`flex-1 bg-primary text-black rounded-xl p-2 font-semibold flex items-center gap-2 shadow-md hover:bg-opacity-90 transition-all duration-200 ${
                  isChecking ? "opacity-70 cursor-not-allowed" : ""
                }`}
                onClick={handleCheck}
                type="button"
              >
                {isChecking ? (
                  <>
                    <span className="animate-spin mr-2 rounded-full border-2 border-white border-t-transparent w-4 h-4 inline-block" />
                    Checking...
                  </>
                ) : (
                  <>
                    <BiCheck /> Check
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
        {/* Check Results */}
        <motion.div className={`bg-card rounded-2xl p-4 shadow-lg flex-[0.8] flex flex-col gap-4 ${glow}`}>
          <SectionDivider icon={<BiBadgeCheck />} label="Check Results" />
          <AnimatedResult score={score} details={details} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Enumeration;